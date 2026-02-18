<script lang="ts">
	const skills = [
		// Backend & API
		{ name: "Golang", level: 90, category: "Backend & API" },
		{ name: "Python", level: 85, category: "Backend & API" },
		{ name: "PHP", level: 75, category: "Backend & API" },
		{ name: "Scala", level: 60, category: "Backend & API" },
		{ name: "REST/gRPC", level: 80, category: "Backend & API" },
		// Database & Cache
		{ name: "MySQL", level: 85, category: "Database & Cache" },
		{ name: "PostgreSQL", level: 80, category: "Database & Cache" },
		{ name: "Redis", level: 75, category: "Database & Cache" },
		{ name: "MongoDB", level: 70, category: "Database & Cache" },
		// Infra & Tools
		{ name: "Git", level: 90, category: "Infra & Tools" },
		{ name: "Docker", level: 85, category: "Infra & Tools" },
		{ name: "Kubernetes", level: 70, category: "Infra & Tools" },
		{ name: "Helm", level: 75, category: "Infra & Tools" },
		{ name: "Terraform", level: 70, category: "Infra & Tools" },
		{ name: "CircleCI", level: 70, category: "Infra & Tools" },
		{ name: "Confluent", level: 65, category: "Infra & Tools" },
		{ name: "Jira", level: 75, category: "Infra & Tools" },
		// Observability
		{ name: "Prometheus", level: 75, category: "Observability" },
		{ name: "Grafana", level: 70, category: "Observability" },
		{ name: "Loki", level: 70, category: "Observability" },
		{ name: "OpenTelemetry", level: 75, category: "Observability" },
		// Soft Skills
		{ name: "Problem Solving", level: 95, category: "Soft Skills" },
		{ name: "Technical Communication", level: 85, category: "Soft Skills" },
		{ name: "Mentoring Juniors", level: 80, category: "Soft Skills" },
		{ name: "Agile Teamwork", level: 85, category: "Soft Skills" },
		{
			name: "Programming Language Adaptability",
			level: 90,
			category: "Soft Skills",
		},
		{
			name: "R&D in Emerging Technologies",
			level: 85,
			category: "Soft Skills",
		},
	];

	// Group skills by category
	const groupedSkills = skills.reduce(
		(acc, skill) => {
			if (!acc[skill.category]) acc[skill.category] = [];
			acc[skill.category].push(skill);
			return acc;
		},
		{} as Record<string, typeof skills>,
	);

	const categoryTone: Record<string, string> = {
		"Backend & API": "from-sky-500/70 to-blue-500/70",
		"Database & Cache": "from-amber-500/70 to-orange-500/70",
		"Infra & Tools": "from-emerald-500/70 to-teal-500/70",
		Observability: "from-purple-500/70 to-indigo-500/70",
		"Soft Skills": "from-pink-500/70 to-rose-500/70",
	};

	const categoryAccent: Record<string, string> = {
		"Backend & API": "#0ea5e9",
		"Database & Cache": "#f59e0b",
		"Infra & Tools": "#10b981",
		Observability: "#8b5cf6",
		"Soft Skills": "#ec4899",
	};

	const levelTone = (level: number) => {
		if (level >= 85)
			return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200";
		if (level >= 70)
			return "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200";
		return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200";
	};
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
	<div class="flex flex-col gap-3">
		<h1 class="hero-title">Skills Dashboard</h1>
		<p class="hero-subtitle">A concise view of the skills I use daily.</p>
		<div class="grid gap-3 sm:grid-cols-3">
			<div class="card-glass px-4 py-3">
				<p class="subtext">Total Skills</p>
				<p
					class="text-xl font-semibold text-slate-900 dark:text-slate-50"
				>
					{skills.length}
				</p>
			</div>
			<div class="card-glass px-4 py-3">
				<p class="subtext">Categories</p>
				<p
					class="text-xl font-semibold text-slate-900 dark:text-slate-50"
				>
					{Object.keys(groupedSkills).length}
				</p>
			</div>
			<div class="card-glass px-4 py-3">
				<p class="subtext">Highest Level</p>
				<p
					class="text-xl font-semibold text-slate-900 dark:text-slate-50"
				>
					95%
				</p>
			</div>
		</div>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		{#each Object.entries(groupedSkills) as [category, catSkills]}
			<section
				class="card-glass animate__animated animate__fadeInUp overflow-hidden"
			>
				<div
					class="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 dark:border-slate-800"
				>
					<div class="flex items-center gap-2">
						<div
							class={`h-8 w-8 rounded-full bg-linear-to-br ${categoryTone[category] ?? "from-sky-500/70 to-blue-500/70"} blur-[1px] opacity-80`}
						></div>
						<h2 class="section-title">{category}</h2>
					</div>
					<span class="chip-muted">{catSkills.length} skill</span>
				</div>
				<div class="space-y-4 p-4">
					{#each catSkills as skill, i}
						<div
							class="space-y-2 rounded-xl border border-slate-100/80 bg-slate-50/70 p-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] dark:border-slate-800 dark:bg-slate-900/40"
							style={`border-left: 4px solid ${categoryAccent[category] ?? "#38bdf8"}`}
						>
							<div
								class="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-100"
							>
								<span class="flex items-center gap-2">
									<i class="bi bi-star-fill text-amber-400"
									></i>
									{skill.name}
								</span>
								<span
									class={`chip-muted ${levelTone(skill.level)}`}
								>
									{skill.level}%
								</span>
							</div>
							<div class="progress-rail">
								<div
									class="progress-bar"
									style={`width: ${skill.level}%`}
								></div>
							</div>
						</div>
						{#if i < catSkills.length - 1}
							<hr
								class="border-slate-200/60 dark:border-slate-800/70"
							/>
						{/if}
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
