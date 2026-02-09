<script lang="ts">
	const about = "Backend Developer with professional experience since April 2018 in building, optimizing, and modifying features on API-based and microservices applications. Skilled in Golang & Python, with a track record of improving system performance, integrating third-party services, and strengthening observability. Accustomed to working in agile environments, performing code reviews, and giving light technical guidance to ensure system quality and reliability remain excellent.";

	const contact = {
		email: "subdiana7@gmail.com",
		phone: "0851-5529-9321",
		linkedin: "https://www.linkedin.com/in/iyan-subdiana",
		github: "https://github.com/i-sub135",
		gitlab: "https://gitlab.com/subdiana.project",
		portfolio: "https://i-sub135.github.io/cv/"
	};

	const projects = [
		{ title: "WarungHub - POS ERP Grade", link: "https://warunghub.iyanonimous.my.id/", icon: "bi-shop" },
		{ title: "Hukum - Lawfirm System Record", link: "https://hukum.iyanonimous.my.id/login/", icon: "bi-briefcase" }
	];
</script>

<div class="container py-4 animate__animated animate__fadeInUp">
	<div class="row">
		<div class="col-12">
			<div class="text-center mb-4">
				<img src="/img/poto.jpg" alt="Avatar" class="rounded-5 mb-3 h-100" style="width: 150px; height: 150px; object-fit: cover;">
				<h1>About Me</h1>
			</div>
			<section class="card animate__animated animate__fadeInUp">
				<div class="card-body">
					<p>{about}</p>
				</div>
			</section>

			<section class="card mt-4 animate__animated animate__fadeInUp">
				<div class="card-header">
					<h2 class="card-title">Contact & Links</h2>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-6">
							<table class="table table-borderless">
								<tbody>
									<tr>
										<td><i class="bi bi-envelope me-2"></i><strong>Email:</strong></td>
										<td><a href="mailto:{contact.email}">{contact.email}</a></td>
									</tr>
									<tr>
										<td><i class="bi bi-telephone me-2"></i><strong>Phone & WhatsApp:</strong></td>
										<td>{contact.phone}</td>
									</tr>
									<tr>
										<td><i class="bi bi-file-earmark-pdf me-2"></i><strong>Download CV:</strong></td>
										<td><a href="https://drive.google.com/file/d/1kpLLnQRvIQJLx3-HXS2dW5JAgBcFyv2L/view?usp=sharing" target="_blank" class="text-decoration-none">PDF Version</a></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-6">
							<table class="table table-borderless">
								<tbody>
									<tr>
										<td><i class="bi bi-linkedin me-2"></i><strong>LinkedIn:</strong></td>
										<td><a href="{contact.linkedin}" target="_blank" class="text-decoration-none">View Profile</a></td>
									</tr>
									<tr>
										<td><i class="bi bi-github me-2"></i><strong>GitHub:</strong></td>
										<td><a href="{contact.github}" target="_blank" class="text-decoration-none">View Repos</a></td>
									</tr>
									<tr>
										<td><i class="bi bi-gitlab me-2"></i><strong>GitLab:</strong></td>
										<td><a href="{contact.gitlab}" target="_blank" class="text-decoration-none">View Projects</a></td>
									</tr>
									<tr>
										<td><i class="bi bi-globe me-2"></i><strong>Portfolio:</strong></td>
										<td><a href="{contact.portfolio}" target="_blank" class="text-decoration-none">View CV</a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>

			<section class="card mt-4 animate__animated animate__fadeInUp">
				<div class="card-header">
					<h2 class="card-title">Public Projects</h2>
				</div>
				<div class="card-body">
					<table class="table table-borderless">
						<tbody>
							{#each projects as project}
								<tr>
									<td><i class="bi {project.icon} me-2"></i>{project.title}</td>
									<td><a href="{project.link}" target="_blank" class="btn btn-sm btn-outline-primary">Visit to App</a></td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</section>
		</div>
	</div>
</div>