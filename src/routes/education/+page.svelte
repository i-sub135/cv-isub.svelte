<script lang="ts">
	const education = [
		{
			degree: "Associate Degree – Information Technology",
			school: "Academy of Computer & Management (AMIK) Serang – Banten",
			year: "2013",
		},
		{
			degree: "High School Diploma – Mechanical Automotive Engineering",
			school: "SMKN 2 Pandeglang",
			year: "2009",
		},
	];
</script>

<div class="space-y-6 animate__animated animate__fadeInUp">
	<div class="flex flex-col gap-3">
		<p class="badge-soft w-fit">
			<i class="bi bi-mortarboard"></i> Education
		</p>
		<h1 class="hero-title">Education</h1>
		<p class="hero-subtitle">Formal education history.</p>
	</div>

	<section class="card-glass animate__animated animate__fadeInUp p-5">
		<div class="border-b border-slate-200/70 pb-4 dark:border-slate-800">
			<h2 class="section-title">Education</h2>
		</div>
		<div class="mt-4 space-y-6">
			<div class="timeline">
				{#each education as edu}
					<div class="timeline-item">
						<span class="timeline-marker"></span>
						<div class="space-y-1">
							<p
								class="text-base font-semibold text-slate-900 dark:text-slate-50 flex items-center gap-2"
							>
								<i class="bi bi-mortarboard text-sky-500"
								></i>{edu.degree}
							</p>
							<p class="subtext flex items-center gap-2">
								<i class="bi bi-building"></i>{edu.school}
							</p>
							<p class="subtext flex items-center gap-2">
								<i class="bi bi-calendar"></i>{edu.year}
							</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
