<script lang="ts">
  import { page } from "$app/state";
  import { navItems } from "$lib/config/nav-items";

  let { mode, onToggleMode } = $props<{
    mode: "light" | "dark";
    onToggleMode?: (next: "light" | "dark") => void;
  }>();
  const pathname = $derived(page.url.pathname);
  const version = __APP_VERSION__;

  const toggle = () => {
    const next = mode === "light" ? "dark" : "light";
    onToggleMode?.(next);
  };
</script>

<div
  class="flex items-center justify-between gap-3 lg:items-center lg:justify-between"
>
  <a href="/" class="flex items-center gap-3">
    <div
      class="avatar flex items-center justify-center text-lg font-bold text-slate-900 dark:text-slate-50"
    >
      <i class="bi bi-person-circle"></i>
    </div>
    <div>
      <p class="text-sm font-semibold text-slate-900 dark:text-slate-50">
        Virtual CV
      </p>
      <p class="text-xs text-slate-500 dark:text-slate-400">Iyan Subdiana</p>
      <p class="mt-1 inline-block text-[10px] leading-none">
        v{version}
      </p>
    </div>
  </a>

  <div class="hidden flex-wrap items-center gap-2 lg:flex">
    {#each navItems as item}
      <a
        href={item.href}
        class={`nav-pill ${pathname === item.href ? "active" : ""}`}
      >
        <i class={`bi ${item.icon}`}></i>
        {item.label}
      </a>
    {/each}
  </div>

  <div class="flex items-center gap-3 lg:gap-4">
    <a href="/visitors" class="chip-muted"
      ><i class="bi bi-people"></i><span>Visitors</span></a
    >
    <button class="btn-ghost" onclick={toggle} aria-label="Toggle theme">
      {#if mode === "light"}
        <i class="bi bi-moon"></i>
      {:else}
        <i class="bi bi-sun"></i>
      {/if}
    </button>
  </div>
</div>
