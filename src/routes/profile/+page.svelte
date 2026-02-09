<script lang="ts">
  // Data CV dari fetch
  const cvData = {
    name: 'IYAN SUBDIANA',
    about:
      'Backend Developer with professional experience since April 2018 in building, optimizing, and modifying features on API-based and microservices applications. Skilled in Golang & Python, with a track record of improving system performance, integrating third-party services, and strengthening observability. Accustomed to working in agile environments, performing code reviews, and giving light technical guidance to ensure system quality and reliability remain excellent.',
    skills: {
      backend: 'Golang, Python, PHP, Scala (minor), REST/gRPC',
      database: 'MySQL, PostgreSQL, Redis, MongoDB',
      infra:
        'Git, Docker, Kubernetes, Helm, Terraform, CircleCI, Confluent, Grafana, Prometheus, Loki, OpenTelemetry, Jira',
      observability: 'Prometheus, Grafana, Loki, OpenTelemetry',
      soft: 'Problem solving, technical communication, mentoring juniors, agile teamwork',
    },
    experience: [
      {
        title: 'Lead Engineer Kontrak – Pro Hukum',
        location: 'Jakarta',
        period: 'Nov 2025 – Present',
        details:
          'Led engineering efforts on contract basis, focusing on backend development and system optimization for legal technology solutions. Collaborated with cross-functional teams to deliver scalable and reliable software, leveraging expertise in Golang, Python, and microservices architecture. Implemented best practices in code quality, observability, and deployment to ensure high-performance systems.',
      },
      {
        title: 'Backend Engineer – Style Theory',
        location: 'Jakarta',
        period: 'Feb 2022 – Sep 2025',
        details:
          'Develop and maintain core services (inventory, shipment, logistics, user) using Golang & Python, including migrating features from a Scala monolith to microservices. Built several new services: svc-user, svc-personalization, svc-logistic. Optimized queries, reduced costs, migrated monitoring to open-source stack.',
      },
      // Tambah yang lain jika perlu
    ],
    education: [
      {
        degree: 'Associate Degree – Information Technology',
        school: 'Academy of Computer & Management (AMIK) Serang – Banten',
        year: '2013',
      },
      {
        degree: 'High School Diploma – Mechanical Automotive Engineering',
        school: 'SMKN 2 Pandeglang',
        year: '2009',
      },
    ],
  };
</script>

<div class="container py-4 animate__animated animate__fadeInUp">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center mb-4 animate__animated animate__fadeInUp">{cvData.name}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-md-8">
      <!-- About Me -->
      <section class="card mb-4 animate__animated animate__fadeInUp">
        <div class="card-header">
          <h2 class="card-title">About Me</h2>
        </div>
        <div class="card-body">
          <p>{cvData.about}</p>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="card mb-4 animate__animated animate__fadeInUp">
        <div class="card-header">
          <h2 class="card-title">Work Experience</h2>
        </div>
        <div class="card-body">
          {#each cvData.experience as exp}
            <div class="mb-3 animate__animated animate__fadeInUp">
              <h5>{exp.title}</h5>
              <p class="text-muted">{exp.location} | {exp.period}</p>
              <p>{exp.details}</p>
            </div>
          {/each}
        </div>
      </section>
    </div>

    <div class="col-md-4">
      <!-- Skills -->
      <section class="card mb-4 animate__animated animate__fadeInUp">
        <div class="card-header">
          <h2 class="card-title">Skills</h2>
        </div>
        <div class="card-body">
          <h6>Backend & API</h6>
          <p>{cvData.skills.backend}</p>
          <h6>Database & Cache</h6>
          <p>{cvData.skills.database}</p>
          <h6>Infra & Tools</h6>
          <p>{cvData.skills.infra}</p>
          <h6>Observability</h6>
          <p>{cvData.skills.observability}</p>
          <h6>Soft Skills</h6>
          <p>{cvData.skills.soft}</p>
        </div>
      </section>

      <!-- Education -->
      <section class="card mb-4 animate__animated animate__fadeInUp">
        <div class="card-header">
          <h2 class="card-title">Education</h2>
        </div>
        <div class="card-body">
          {#each cvData.education as edu}
            <div class="mb-2 animate__animated animate__fadeInUp">
              <h6>{edu.degree}</h6>
              <p class="text-muted">{edu.school} | {edu.year}</p>
            </div>
          {/each}
        </div>
      </section>
    </div>
  </div>
</div>
