<script lang="ts">
	const education = [
		{ degree: "Associate Degree – Information Technology", school: "Academy of Computer & Management (AMIK) Serang – Banten", year: "2013" },
		{ degree: "High School Diploma – Mechanical Automotive Engineering", school: "SMKN 2 Pandeglang", year: "2009" }
	];
</script>

<div class="container py-4 animate__animated animate__fadeInUp">
	<div class="row">
		<div class="col-12">
			<h1 class="text-center mb-4">Education</h1>
			<section class="card animate__animated animate__fadeInUp p-4">
				<div class="card-header">
					<h2 class="card-title">Education</h2>
				</div>
				<div class="card-body">
					<div class="timeline">
						{#each education as edu, i}
							<div class="timeline-item">
								<div class="timeline-marker bg-primary"></div>
								<div class="timeline-content">
									<h5 class="timeline-title"><i class="bi bi-mortarboard me-2"></i>{edu.degree}</h5>
									<p class="text-muted timeline-meta"><i class="bi bi-building me-1"></i>{edu.school}</p>
									<p class="text-muted timeline-meta"><i class="bi bi-calendar me-1"></i>{edu.year}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</section>
		</div>
	</div>
</div>