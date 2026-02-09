import Database from 'better-sqlite3';
import { env } from '$env/dynamic/private';
import { json, type RequestHandler } from '@sveltejs/kit';

// SQLite database instance
let db: Database.Database | null = null;

/**
 * Initialize SQLite database
 */
function initDatabase(): void {
	if (db) return; // Already initialized

	try {
		const dbPath = env.DB_URL || './db/cv_isub.db';
		console.log('Initializing database at:', dbPath);
		db = new Database(dbPath);

		// Create tables if not exist
		db.exec(`
			CREATE TABLE IF NOT EXISTS visits (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				page TEXT NOT NULL,
				timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
				user_agent TEXT,
				ip TEXT
			)
		`);

		db.exec(`
			CREATE TABLE IF NOT EXISTS feedbacks (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				name TEXT NOT NULL,
				message TEXT NOT NULL,
				timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
				email TEXT
			)
		`);

		db.exec(`
			CREATE TABLE IF NOT EXISTS visitor_count (
				id INTEGER PRIMARY KEY CHECK (id = 1),
				count INTEGER DEFAULT 0
			)
		`);

		// Insert initial count if not exists
		db.exec(`
			INSERT OR IGNORE INTO visitor_count (id, count) VALUES (1, 0)
		`);
	} catch (error) {
		console.error('Failed to initialize SQLite database:', error);
		throw error;
	}
}

/**
 * Insert a new visit
 */
function insertVisit(page: string, userAgent?: string, ip?: string): void {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('INSERT INTO visits (page, user_agent, ip) VALUES (?, ?, ?)');
		stmt.run(page, userAgent || '', ip || '');
	} catch (error) {
		console.error('Failed to insert visit:', error);
	}
}

/**
 * Get all visits
 */
function getVisits(): { id: number; page: string; timestamp: string; user_agent: string; ip: string }[] {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('SELECT * FROM visits ORDER BY timestamp DESC');
		return stmt.all() as { id: number; page: string; timestamp: string; user_agent: string; ip: string }[];
	} catch (error) {
		console.error('Failed to get visits:', error);
		return [];
	}
}

/**
 * Get visit count (from visitor_count table)
 */
function getVisitCount(): number {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('SELECT count FROM visitor_count WHERE id = 1');
		const result = stmt.get() as { count: number };
		return result ? result.count : 0;
	} catch (error) {
		console.error('Failed to get visit count:', error);
		return 0;
	}
}

/**
 * Increment visit count
 */
function incrementVisitCount(): void {
	if (!db) throw new Error('Database not initialized');

	try {
		db.prepare('UPDATE visitor_count SET count = count + 1 WHERE id = 1').run();
	} catch (error) {
		console.error('Failed to increment visit count:', error);
	}
}

/**
 * Insert a new feedback
 */
function insertFeedback(name: string, message: string, email?: string): void {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('INSERT INTO feedbacks (name, message, email) VALUES (?, ?, ?)');
		stmt.run(name, message, email || '');
	} catch (error) {
		console.error('Failed to insert feedback:', error);
	}
}

/**
 * Get all feedbacks
 */
function getFeedbacks(): { id: number; name: string; message: string; timestamp: string; email: string }[] {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('SELECT * FROM feedbacks ORDER BY timestamp DESC');
		return stmt.all() as { id: number; name: string; message: string; timestamp: string; email: string }[];
	} catch (error) {
		console.error('Failed to get feedbacks:', error);
		return [];
	}
}

/**
 * Get feedback count
 */
function getFeedbackCount(): number {
	if (!db) throw new Error('Database not initialized');

	try {
		const stmt = db.prepare('SELECT COUNT(*) as count FROM feedbacks');
		const result = stmt.get() as { count: number };
		return result.count;
	} catch (error) {
		console.error('Failed to get feedback count:', error);
		return 0;
	}
}

// API Endpoints

export const GET: RequestHandler = async ({ url }) => {
	initDatabase();

	const action = url.searchParams.get('action');

	try {
		switch (action) {
			case 'visits':
				return json(getVisits());
			case 'visitCount':
				return json({ count: getVisitCount() });
			case 'feedbacks':
				return json(getFeedbacks());
			case 'feedbackCount':
				return json({ count: getFeedbackCount() });
			default:
				return json({ error: 'Invalid action' }, { status: 400 });
		}
	} catch (error) {
		console.error('Server error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	initDatabase();

	try {
		const data = await request.json();
		const userAgent = request.headers.get('user-agent') || '';
		const ip = getClientAddress();

		switch (data.action) {
			case 'visit':
				console.log('Tracking visit for page:', data.page);
				insertVisit(data.page || '/', userAgent, ip);
				if (data.page === '/visitors') {
					incrementVisitCount();
					console.log('Visitor count incremented');
				}
				console.log('Visit inserted successfully');
				return json({ success: true });
			case 'pageView':
				console.log('Tracking page view for page:', data.page);
				insertVisit(data.page || '/', userAgent, ip);
				console.log('Page view inserted successfully');
				return json({ success: true });
			case 'feedback':
				console.log('Inserting feedback from:', data.name);
				insertFeedback(data.name, data.message, data.email);
				console.log('Feedback inserted successfully');
				return json({ success: true });
			case 'incrementVisitor':
				console.log('Incrementing visitor count');
				incrementVisitCount();
				console.log('Visitor count incremented');
				return json({ success: true });
			default:
				return json({ error: 'Invalid action' }, { status: 400 });
		}
	} catch (error) {
		console.error('Server error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};