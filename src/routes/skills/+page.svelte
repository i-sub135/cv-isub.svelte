<script lang="ts">
	const skills = {
		backend: "Golang, Python, PHP, Scala (minor), REST/gRPC",
		database: "MySQL, PostgreSQL, Redis, MongoDB",
		infra: "Git, Docker, Kubernetes, Helm, Terraform, CircleCI, Confluent, Grafana, Prometheus, Loki, OpenTelemetry, Jira",
		observability: "Prometheus, Grafana, Loki, OpenTelemetry",
		soft: "Problem solving, technical communication, mentoring juniors, agile teamwork"
	};
</script>

<div class="container py-4 animate__animated animate__fadeInUp">
	<div class="row">
		<div class="col-12">
			<h1 class="text-center mb-4">Skills</h1>
			<section class="card animate__animated animate__fadeInUp p-4">
				<div class="card-header">
					<h2 class="card-title">Skills</h2>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-md-6 mb-4">
							<h6><i class="bi bi-code-slash me-2"></i>Backend & API</h6>
							<p>
								{#each skills.backend.split(', ') as skill}
									<span class="badge badge-outline text-blue me-1 mb-1"><i class="bi bi-terminal me-1"></i>{skill}</span>
								{/each}
							</p>
						</div>
						<div class="col-md-6 mb-4">
							<h6><i class="bi bi-database me-2"></i>Database & Cache</h6>
							<p>
								{#each skills.database.split(', ') as skill}
									<span class="badge badge-outline text-green me-1 mb-1"><i class="bi bi-database me-1"></i>{skill}</span>
								{/each}
							</p>
						</div>
						<div class="col-md-6 mb-4">
							<h6><i class="bi bi-gear me-2"></i>Infra & Tools</h6>
							<p>
								{#each skills.infra.split(', ') as skill}
									<span class="badge badge-outline text-cyan me-1 mb-1"><i class="bi bi-gear me-1"></i>{skill}</span>
								{/each}
							</p>
						</div>
						<div class="col-md-6 mb-4">
							<h6><i class="bi bi-graph-up me-2"></i>Observability</h6>
							<p>
								{#each skills.observability.split(', ') as skill}
									<span class="badge badge-outline text-yellow me-1 mb-1"><i class="bi bi-graph-up me-1"></i>{skill}</span>
								{/each}
							</p>
						</div>
						<div class="col-md-12 mb-4">
							<h6><i class="bi bi-people me-2"></i>Soft Skills</h6>
							<p>
								{#each skills.soft.split(', ') as skill}
									<span class="badge badge-outline text-muted me-1 mb-1"><i class="bi bi-person me-1"></i>{skill}</span>
								{/each}
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</div>