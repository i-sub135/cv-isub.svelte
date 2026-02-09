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
		{ name: "Programming Language Adaptability", level: 90, category: "Soft Skills" },
		{ name: "R&D in Emerging Technologies", level: 85, category: "Soft Skills" }
	];

	// Group skills by category
	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) acc[skill.category] = [];
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<string, typeof skills>);
</script>

<div class="container py-4 animate__animated animate__fadeInUp">
	<div class="row">
		<div class="col-12">
			<h1 class="text-center mb-4 animate__animated animate__fadeInUp">Skills Dashboard</h1>
			<div class="row">
				{#each Object.entries(groupedSkills) as [category, catSkills]}
					<div class="col-md-6 mb-4">
						<section class="card animate__animated animate__fadeInUp h-100">
							<div class="card-header">
								<h5 class="card-title">{category}</h5>
							</div>
							<div class="card-body">
								{#each catSkills as skill}
									<div class="mb-3">
										<div class="d-flex justify-content-between">
											<span><i class="bi bi-star me-2"></i>{skill.name}</span>
											<span>{skill.level}%</span>
										</div>
										<div class="progress">
											<div class="progress-bar bg-primary" style="width: {skill.level}%"></div>
										</div>
									</div>
								{/each}
							</div>
						</section>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
