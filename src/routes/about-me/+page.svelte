<script lang="ts">
	const about =
		"Backend Developer with professional experience since April 2018 in building, optimizing, and modifying features on API-based and microservices applications. Skilled in Golang & Python, with a track record of improving system performance, integrating third-party services, and strengthening observability. Accustomed to working in agile environments, performing code reviews, and giving light technical guidance to ensure system quality and reliability remain excellent.";

	const contact = {
		email: "subdiana7@gmail.com",
		phone: "0851-5529-9321",
		linkedin: "https://www.linkedin.com/in/iyan-subdiana",
		github: "https://github.com/i-sub135",
		gitlab: "https://gitlab.com/subdiana.project",
		portfolio: "https://i-sub135.github.io/cv/",
	};

	const projects = [
		{
			title: "WarungHub - POS ERP Grade",
			link: "https://warunghub.iyanonimous.my.id/",
			icon: "bi-shop",
		},
		{
			title: "Hukum - Lawfirm System Record",
			link: "https://hukum.iyanonimous.my.id/login/",
			icon: "bi-briefcase",
		},
		{
			title: "Hukum Mobile (Client POV)",
			link: "https://mobile-hukum.iyanonimous.my.id/",
			icon: "bi-phone",
		},
	];

	const focusAreas = [
		"API & microservices delivery",
		"Observability & reliability",
		"Performance tuning",
		"Agile & collaboration",
		"Lightweight code reviews",
	];

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
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
	<section class="card-glass relative overflow-hidden">
		<div
			class="absolute inset-0 bg-linear-to-br from-sky-500/10 via-emerald-400/5 to-indigo-500/10 blur-2xl"
		></div>
		<div
			class="relative grid gap-6 p-6 lg:grid-cols-[auto,1fr] lg:items-center"
		>
			<div
				class="flex flex-col items-center gap-3 text-center lg:items-start lg:text-left"
			>
				<p class="badge-soft">
					<i class="bi bi-person-circle"></i> About
				</p>
				<h1 class="hero-title">About Me</h1>
				<p class="hero-subtitle max-w-2xl">{about}</p>
				<div
					class="flex flex-wrap justify-center gap-2 lg:justify-start"
				>
					{#each focusAreas as focus, i}
						<span class={`chip-muted ${toneByIndex(i)}`}>
							<i class="bi bi-lightning-charge"></i>
							{focus}
						</span>
					{/each}
				</div>
				<div class="flex flex-wrap items-center gap-2">
					<a
						class="btn-primary btn-sm flex items-center gap-2"
						href={contact.linkedin}
						target="_blank"
					>
						<i class="bi bi-linkedin"></i>
						<span class="hidden sm:inline">LinkedIn</span>
					</a>
					<a
						class="btn-ghost btn-sm flex items-center gap-2"
						href={contact.github}
						target="_blank"
					>
						<i class="bi bi-github"></i>
						<span class="hidden sm:inline">GitHub</span>
					</a>
					<a
						class="btn-ghost btn-sm flex items-center gap-2"
						href={contact.gitlab}
						target="_blank"
					>
						<i class="bi bi-gitlab"></i>
						<span class="hidden sm:inline">GitLab</span>
					</a>
					<a
						class="btn-ghost btn-sm flex items-center gap-2"
						href={contact.portfolio}
						target="_blank"
					>
						<i class="bi bi-globe"></i>
						<span class="hidden sm:inline">Portfolio</span>
					</a>
				</div>
			</div>
			<div class="grid gap-4 sm:grid-cols-2">
				<div
					class="card-glass border border-slate-200/70 p-4 dark:border-slate-800"
				>
					<p class="subtext flex items-center gap-2">
						<i class="bi bi-envelope"></i>Email
					</p>
					<a class="link-ghost" href={`mailto:${contact.email}`}
						>{contact.email}</a
					>
				</div>
				<div
					class="card-glass border border-slate-200/70 p-4 dark:border-slate-800"
				>
					<p class="subtext flex items-center gap-2">
						<i class="bi bi-telephone"></i>Phone
					</p>
					<p>{contact.phone}</p>
				</div>
				<div
					class="card-glass border border-slate-200/70 p-4 dark:border-slate-800"
				>
					<p class="subtext flex items-center gap-2">
						<i class="bi bi-file-earmark-pdf"></i>Resume
					</p>
					<a
						class="link-ghost"
						href="https://drive.google.com/file/d/1kpLLnQRvIQJLx3-HXS2dW5JAgBcFyv2L/view?usp=sharing"
						target="_blank">PDF Version</a
					>
				</div>
			</div>
		</div>
	</section>

	<section class="card-glass animate__animated animate__fadeInUp">
		<div
			class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800"
		>
			<h2 class="section-title">Public Projects</h2>
		</div>
		<div class="grid gap-4 p-5 sm:grid-cols-2">
			{#each projects as project}
				<div
					class="rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.25)] dark:border-slate-800 dark:bg-slate-900/40"
				>
					<div class="flex items-center justify-between gap-3">
						<div
							class="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-slate-50"
						>
							<i
								class={`bi ${project.icon} text-base text-sky-500`}
							></i>
							<span>{project.title}</span>
						</div>
						<a
							href={project.link}
							target="_blank"
							class="btn-primary btn-sm">Open</a
						>
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>
