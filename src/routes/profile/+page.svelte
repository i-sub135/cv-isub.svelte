<script lang="ts">
  // Data CV dari fetch
  const cvData = {
    name: "IYAN SUBDIANA",
    about:
      "Backend Developer with professional experience since April 2018 in building, optimizing, and modifying features on API-based and microservices applications. Skilled in Golang & Python, with a track record of improving system performance, integrating third-party services, and strengthening observability. Accustomed to working in agile environments, performing code reviews, and giving light technical guidance to ensure system quality and reliability remain excellent.",
    skills: {
      backend: "Golang, Python, PHP, Scala (minor), REST/gRPC",
      database: "MySQL, PostgreSQL, Redis, MongoDB",
      infra:
        "Git, Docker, Kubernetes, Helm, Terraform, CircleCI, Confluent, Grafana, Prometheus, Loki, OpenTelemetry, Jira",
      observability: "Prometheus, Grafana, Loki, OpenTelemetry",
      soft: "Problem solving, technical communication, mentoring juniors, agile teamwork",
    },
    experience: [
      {
        title: "Lead Engineer Kontrak – Pro Hukum",
        location: "Jakarta",
        period: "Nov 2025 – Present",
        details:
          "Led engineering efforts on contract basis, focusing on backend development and system optimization for legal technology solutions. Collaborated with cross-functional teams to deliver scalable and reliable software, leveraging expertise in Golang, Python, and microservices architecture. Implemented best practices in code quality, observability, and deployment to ensure high-performance systems.",
      },
      {
        title: "Backend Engineer – Style Theory",
        location: "Jakarta",
        period: "Feb 2022 – Sep 2025",
        details:
          "Develop and maintain core services (inventory, shipment, logistics, user) using Golang & Python, including migrating features from a Scala monolith to microservices. Built several new services: svc-user, svc-personalization, svc-logistic. Optimized queries, reduced costs, migrated monitoring to open-source stack.",
      },
      // Tambah yang lain jika perlu
    ],
    education: [
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
    ],
  };
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
  <div class="flex flex-col gap-3">
    <p class="badge-soft w-fit"><i class="bi bi-person"></i> Profile</p>
    <h1 class="hero-title">{cvData.name}</h1>
    <p class="hero-subtitle">
	      Backend engineer focused on APIs, observability, and performance optimization.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-3">
    <section
      class="card-glass lg:col-span-2 animate__animated animate__fadeInUp"
    >
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">About Me</h2>
      </div>
      <div class="space-y-4 p-5 text-slate-700 dark:text-slate-200">
        <p>{cvData.about}</p>
      </div>
    </section>

    <section class="card-glass animate__animated animate__fadeInUp">
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">Skills</h2>
      </div>
      <div class="space-y-4 p-5">
        <div>
          <p class="subtext mb-1">Backend & API</p>
          <p>{cvData.skills.backend}</p>
        </div>
        <div>
          <p class="subtext mb-1">Database & Cache</p>
          <p>{cvData.skills.database}</p>
        </div>
        <div>
          <p class="subtext mb-1">Infra & Tools</p>
          <p>{cvData.skills.infra}</p>
        </div>
        <div>
          <p class="subtext mb-1">Observability</p>
          <p>{cvData.skills.observability}</p>
        </div>
        <div>
          <p class="subtext mb-1">Soft Skills</p>
          <p>{cvData.skills.soft}</p>
        </div>
      </div>
    </section>
  </div>

  <section class="card-glass animate__animated animate__fadeInUp">
    <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
      <h2 class="section-title">Work Experience</h2>
    </div>
    <div class="space-y-6 p-5">
      {#each cvData.experience as exp}
        <div class="space-y-2">
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
          <p class="text-sm text-slate-700 dark:text-slate-200">
            {exp.details}
          </p>
        </div>
      {/each}
    </div>
  </section>

  <section class="card-glass animate__animated animate__fadeInUp">
    <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
      <h2 class="section-title">Education</h2>
    </div>
    <div class="grid gap-4 p-5 sm:grid-cols-2">
      {#each cvData.education as edu}
        <div
          class="rounded-xl border border-slate-200/60 bg-slate-50/60 p-4 dark:border-slate-800 dark:bg-slate-900/60"
        >
          <p class="font-semibold text-slate-900 dark:text-slate-50">
            {edu.degree}
          </p>
          <p class="subtext">{edu.school}</p>
          <p class="subtext">{edu.year}</p>
        </div>
      {/each}
    </div>
  </section>
</div>
