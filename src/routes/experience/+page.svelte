<script lang="ts">
	const experience = [
		{
			title: "Lead Engineer Kontrak - Pro Hukum",
			location: "Jakarta",
			period: "Nov 2025 - Jan 2026",
			details: [
				"Led engineering efforts on contract basis, focusing on backend development and system optimization for legal technology solutions.",
				"Collaborated with cross-functional teams to deliver scalable and reliable software, leveraging expertise in Golang, Python, and microservices architecture.",
				"Implemented best practices in code quality, observability, and deployment to ensure high-performance systems.",
			],
		},
		{
			title: "Backend Engineer - Style Theory",
			location: "Jakarta (Remote SG)",
			period: "Feb 2022 - Sep 2025",
			details: [
				"Develop and maintain core services (inventory, shipment, logistics, user) using Golang & Python, including migrating features from a Scala monolith to microservices.",
				{
					text: "Built several new services:",
					sub: [
						"<strong>svc-user</strong> - user & address management service, event synchronization via EventStore & Kafka.",
						"<strong>svc-personalization</strong> - AI integration (Vue.ai) for product recommendations; designed caching architecture that reduced external API calls and significantly lowered service costs.",
						"<strong>svc-logistic</strong> - extracted logistics module from Scala to Go; implemented queuing with Redis to resolve 3rd-party timeout inconsistencies, raising request success from ~25% → 97% (failures only when vendor is down) and speeding up responses to users (HTTP 201).",
					],
				},
				{
					text: "Collaborated with cross-squad teams:",
					sub: [
						"<strong>Query Buster</strong> - optimized slow queries, improving DB performance.",
						"<strong>Observability Ranger</strong> - migrated logging & tracing from Datadog (≈$1.2K/month) to an open-source stack (Grafana, Prometheus, Loki, OpenTelemetry), cutting monitoring costs nearly 100%; built a Go-based tracing library adopted as an internal standard.",
					],
				},
				"As a Backend Developer, focused on developing and modifying features; also acted as an IC, mentor, and pull request reviewer, often consulted before technical decisions were made, supporting QA & BE within a ~9-person team (2 QA, 4 BE, PM, EM, Architect).",
				"Designed caching strategies to reduce third-party requests (from 1 internal request = 1 external request to 1 request/hour), cutting costs and speeding up response times.",
				{
					text: "Temporary DevOps contributions:",
					sub: [
						"upgraded Kubernetes EKS clusters to the latest version, avoiding extended support fees ($438/month/cluster x3) and eliminating the need for freelance DevOps contracts (~tens of millions per execution).",
					],
				},
				{
					text: "Temporary Data Engineer contributions:",
					sub: [
						"migrated data transforms from StitchData Advanced ($1,250/month) to a custom solution with server costs < $250; moved transform storage from BigQuery to local CSV (near $0).",
					],
				},
			],
			stack: "Go (mux, dbr2, Gomega), Python (FastAPI, Flask, SQLAlchemy), Scala (Lagom, Slick, Mockito, Scalatest - minor use), PostgreSQL, MySQL, Redis, Kafka, EventStore, Elasticsearch, msgcache, Git, Docker, Kubernetes, Helm, Terraform, CircleCI, Jira, Confluent, Grafana, Prometheus, Loki, OpenTelemetry. Methodology: Scrum / Agile.",
		},
		{
			title: "Backend Engineer (Contract) - Asian Technology Solutions",
			location: "Jakarta (Remote SG)",
			period: "Jul 2021 - Jan 2022",
			details: [
				"Contracted via ATS to work on a backend project at Style Theory, with the same team and scope as the subsequent position.",
			],
		},
		{
			title: "Backend Engineer & Tech R&D - Chatat.id",
			location: "Jakarta",
			period: "Apr 2021 - Jun 2021",
			details: [
				"Developed backend features using Golang (mux, dbr2) with PostgreSQL & Redis.",
				"Explored new libraries to improve efficiency, including gocron for cronjob scheduling; tested but not presented before contract ended.",
			],
			stack: "Golang (mux, dbr2), PostgreSQL, Redis.",
		},
		{
			title: "Supervisor Backend Engineer - PT Carsworld Digital Indonesia",
			location: "BSD Tangerang - BANTEN",
			period: "Dec 2018 - Mar 2021",
			details: [
				"Led backend redevelopment from PHP (Laravel/CodeIgniter) to Python (Flask, SQLAlchemy) and partly to Golang (Gin, Gorm) to improve performance & scalability.",
				"Restructured and refactored almost all legacy backend code for clarity, measurability, and maintainability.",
				"Built custom pipelines on self-hosted GitLab for build & push processes, with automated notifications via Telegram bot.",
				"Migrated apps to Docker to standardize development & deployment environments.",
				"Boosted system capacity from <200 req/sec to >500 req/sec (API benchmark) after migration to Python and architecture optimizations.",
				"Strengthened system security by closing vulnerabilities detected in staging (legacy PHP era).",
				"Guided four team members (2 juniors, 2 interns), providing technical direction and regular mentoring.",
			],
			stack: "PHP (Laravel, CodeIgniter), Python (Flask, SQLAlchemy), Golang (Gin, Gorm), MySQL, Docker, GitLab (self-hosted), Telegram Bot, custom build & push pipeline.",
		},
		{
			title: "Programmer - Ximpli Multi Solution",
			location: "Tangerang - BANTEN",
			period: "Apr 2018 - Dec 2018",
			details: [
				"Performed various technical roles as needed (DB admin, backend, full-stack).",
				"Developed and maintained PHP CodeIgniter apps with MySQL, tailoring features to client requests.",
				"Assisted in fixing and enhancing system performance for greater stability.",
			],
			stack: "PHP (CodeIgniter), MySQL.",
		},
		{
			title: "EDP (Electronic Data Processing) - PT Indah Kiat Pulp & Paper",
			location: "SERANG - BANTEN",
			period: "Jun 2014 - Apr 2017 (not related to IT engineers)",
			details: [
				"Handled production reporting for Finance, Administration, and Management; prepared detailed reports and performed monthly report closing & uploads into SAP.",
				"Maintained accounting report workflows, including analysis of Cost of Goods Manufactured (CoGM), Cost of Goods Sold (CoGS), and packaging costs.",
				"Operated SAP PP (Production Planning) and MM (Materials Management) modules to support production & inventory processes.",
				"Had additional basic programming skills (PHP) to support electronic data processing tasks.",
			],
		},
	];
</script>

<div class="space-y-6 animate__animated animate__fadeInUp">
	<div class="flex flex-col gap-3">
		<p class="badge-soft w-fit">
			<i class="bi bi-briefcase"></i> Experience
		</p>
		<h1 class="hero-title">Work Experience</h1>
		<p class="hero-subtitle">
			A summary of roles, contributions, and stacks I worked with.
		</p>
	</div>

	<section class="card-glass animate__animated animate__fadeInUp">
		<div
			class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800"
		>
			<h2 class="section-title">Experience</h2>
		</div>
		<div class="divide-y divide-slate-200/70 dark:divide-slate-800">
			{#each experience as exp}
				<div class="space-y-3 p-5">
					<div
						class="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
					>
						<p
							class="text-base font-semibold text-slate-900 dark:text-slate-50"
						>
							{exp.title}
						</p>
						<p class="subtext">{exp.location} • {exp.period}</p>
					</div>
					<ul
						class="space-y-2 text-sm leading-relaxed text-slate-700 dark:text-slate-200"
					>
						{#each exp.details as detail}
							{#if typeof detail === "string"}
								<li class="flex gap-2">
									<i class="bi bi-dot text-sky-500"></i><span
										>{detail}</span
									>
								</li>
							{:else}
								<li class="space-y-2">
									<div class="flex gap-2">
										<i class="bi bi-dot text-sky-500"
										></i><span>{detail.text}</span>
									</div>
									<ul class="space-y-1 pl-6">
										{#each detail.sub as sub}
											<li
												class="flex gap-2 text-slate-700 dark:text-slate-200"
											>
												<i
													class="bi bi-arrow-right text-xs text-sky-500"
												></i><span>{@html sub}</span>
											</li>
										{/each}
									</ul>
								</li>
							{/if}
						{/each}
					</ul>
					{#if exp.stack}
						<p class="subtext">
							<em>Stack &amp; Tools: {exp.stack}</em>
						</p>
					{/if}
				</div>
			{/each}
		</div>
	</section>
</div>
