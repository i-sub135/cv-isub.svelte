<script lang="ts">
  const contact = {
    linkedin: 'https://www.linkedin.com/in/iyan-subdiana',
    github: 'https://github.com/i-sub135',
    resume: 'https://drive.google.com/file/d/1kpLLnQRvIQJLx3-HXS2dW5JAgBcFyv2L/view?usp=sharing',
    resume_with_kalibrd:
      'https://drive.google.com/file/d/1kpLLnQRvIQJLx3-HXS2dW5JAgBcFyv2L/view?usp=sharing',
  };

  const daily = [
    'Start with error budget and latency graphs, not chat floods.',
    'Small PRs, shipped often, with a quick smoke before asking review.',
    'Prefer clean traces/logs over long ticket comments.',
    'After incidents, jot a brief post-release note so recall is easy.',
  ];

  const delivery = [
    'A release flies only if rollback is clear.',
    'Feature-flag first; scaling comes later.',
    'Observability stays lean: log what matters, metrics with SLOs.',
  ];

  const comms = [
    'Async-first, tidy threads; calls only when stuck or need a quick whiteboard.',
    'Set expectations before execution: scope, who reviews, and when to recheck.',
    'During pairing, swap the keyboard so context is shared.',
  ];

  const philosophy = [
    'Simple outlasts clever; make it readable, then talk performance.',
    'Log just enough, trace what matters; kill the noise.',
    'Easy rollback beats one-time fast releases.',
    'Data before opinion: measure before you optimize.',
    'Small composable pieces are easier to rotate across teams.',
  ];

  const quote =
    '"When we don\'t understand what we code, that\'s where real logical fallacy lives."';
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
  <div class="flex flex-col gap-3">
    <p class="badge-soft w-fit"><i class="bi bi-person"></i> Profile</p>
    <h1 class="hero-title">Iyan Subdiana</h1>
    <p class="hero-subtitle max-w-3xl">
      Backend engineer. Daily groove: keep APIs fast, observability clean, ship small and often.
    </p>
    <p class="text-sm italic text-slate-600 dark:text-slate-300">
      {quote}
    </p>
    <div class="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-slate-300">
      <span class="chip-muted"><i class="bi bi-geo-alt"></i> Jakarta • Remote OK</span>
      <span class="chip-muted"><i class="bi bi-clock-history"></i> Ships frequently</span>
      <span class="chip-muted"><i class="bi bi-lightning-charge"></i> API & Observability</span>
    </div>
    <div class="flex flex-wrap gap-2">
      <a class="btn-primary btn-sm" href={contact.linkedin} target="_blank"
        ><i class="bi bi-linkedin"></i> LinkedIn</a
      >
      <a class="btn-ghost btn-sm" href={contact.github} target="_blank"
        ><i class="bi bi-github"></i> GitHub</a
      >
      <a class="btn-ghost btn-sm" href={contact.resume} target="_blank"
        ><i class="bi bi-file-earmark-text"></i> Resume</a
      >
    </div>
  </div>

  <div class="grid gap-6 lg:grid-cols-2">
    <section class="card-glass animate__animated animate__fadeInUp">
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">Day-to-Day</h2>
      </div>
      <ul class="space-y-3 p-5 text-sm text-slate-700 dark:text-slate-200">
        {#each daily as item}
          <li class="flex gap-2">
            <span class="text-sky-500">•</span><span>{item}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section class="card-glass animate__animated animate__fadeInUp">
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">Delivery</h2>
      </div>
      <ul class="space-y-3 p-5 text-sm text-slate-700 dark:text-slate-200">
        {#each delivery as item}
          <li class="flex gap-2">
            <span class="text-emerald-500">•</span><span>{item}</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>

  <div class="grid gap-6 lg:grid-cols-2">
    <section class="card-glass animate__animated animate__fadeInUp">
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">Communication & Collaboration</h2>
      </div>
      <ul class="space-y-3 p-5 text-sm text-slate-700 dark:text-slate-200">
        {#each comms as item}
          <li class="flex gap-2">
            <span class="text-amber-500">•</span><span>{item}</span>
          </li>
        {/each}
      </ul>
    </section>

    <section class="card-glass animate__animated animate__fadeInUp">
      <div class="border-b border-slate-200/70 px-5 py-4 dark:border-slate-800">
        <h2 class="section-title">Coding Philosophy</h2>
      </div>
      <ul class="space-y-2 p-5 text-sm text-slate-700 dark:text-slate-200">
        {#each philosophy as item}
          <li class="flex gap-2">
            <span class="text-indigo-500">•</span><span>{item}</span>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</div>
