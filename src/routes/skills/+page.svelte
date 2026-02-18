<script lang="ts">
	type Category = {
		label: string;
		icon: string;
		color: string;
		accent: string;
		items: string[];
	};

	const toneByIndex = (index: number) => {
		const tones = [
			"bg-sky-50 text-sky-800 dark:bg-sky-900/50 dark:text-sky-100",
			"bg-amber-50 text-amber-800 dark:bg-amber-900/50 dark:text-amber-100",
			"bg-emerald-50 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-100",
			"bg-violet-50 text-violet-800 dark:bg-violet-900/50 dark:text-violet-100",
			"bg-rose-50 text-rose-800 dark:bg-rose-900/50 dark:text-rose-100",
		];

		return tones[index % tones.length];
	};

	const categories: Category[] = [
		{
			label: "Backend & API",
			icon: "bi-diagram-3",
			accent: "#22c55e",
			color: "from-emerald-400/25 via-lime-400/20 to-teal-400/25",
			items: [
				"Golang",
				"Python",
				"JavaScript",
				"Scala (minor)",
				"REST/gRPC",
			],
		},
		{
			label: "Database & Cache",
			icon: "bi-hdd-network",
			accent: "#f59e0b",
			color: "from-amber-400/25 via-orange-400/20 to-yellow-400/25",
			items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"],
		},
		{
			label: "Infra & Tools",
			icon: "bi-cloud",
			accent: "#0ea5e9",
			color: "from-sky-400/25 via-cyan-400/20 to-blue-400/25",
			items: [
				"Git",
				"Docker",
				"Kubernetes",
				"Helm",
				"Terraform",
				"CircleCI",
				"Confluent",
				"Jira",
			],
		},
		{
			label: "Observability",
			icon: "bi-activity",
			accent: "#8b5cf6",
			color: "from-violet-400/25 via-purple-400/20 to-indigo-400/25",
			items: ["Prometheus", "Grafana", "Loki", "OpenTelemetry"],
		},
		{
			label: "Soft Skills",
			icon: "bi-people",
			accent: "#ec4899",
			color: "from-pink-500/30 via-rose-400/20 to-amber-400/20",
			items: [
				"Problem solving",
				"Technical communication",
				"Mentoring juniors",
				"Agile teamwork",
			],
		},
	];
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
	<div class="flex flex-col gap-3">
		<p class="badge-soft w-fit"><i class="bi bi-tools"></i> Skills</p>
		<h1 class="hero-title">Skills Snapshot</h1>
		<p class="hero-subtitle">Quick categories I use frequently.</p>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		{#each categories as category}
			<section
				class="card-glass animate__animated animate__fadeInUp overflow-hidden"
			>
				<div
					class="flex items-center justify-between border-b border-slate-200/70 px-4 py-3 dark:border-slate-800"
				>
					<div class="flex items-center gap-3">
						<div
							class={`h-9 w-9 rounded-full bg-linear-to-br ${category.color} blur-[1px] opacity-80`}
						></div>
						<div>
							<p class="section-title text-base">
								{category.label}
							</p>
							<p class="subtext flex items-center gap-2">
								<i class={`bi ${category.icon}`}></i><span
									>Highlight tools</span
								>
							</p>
						</div>
					</div>
					<span class="chip-muted">{category.items.length} item</span>
				</div>
				<div class="flex flex-wrap gap-2 p-4">
					{#each category.items as item, i}
						<span
							class={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium shadow-sm border border-slate-200/70 dark:border-slate-800 ${toneByIndex(i)}`}
							style={`border-left: 4px solid ${category.accent}`}
						>
							<i class={`bi ${category.icon}`}></i>
							{item}
						</span>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
