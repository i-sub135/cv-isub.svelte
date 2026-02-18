<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";
  import "bootstrap-icons/font/bootstrap-icons.css";
  import "../app.css";
  import Navbars from "$lib/components/navbars.svelte";
  import { navItems } from "$lib/config/nav-items";
  import { onMount } from "svelte";
  import { beforeNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import "animate.css";

  let { children } = $props();

  // Track page view for all pages
  const trackPageView = async (pagePath: string) => {
    try {
      await fetch("/api/sqldb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "pageView", page: pagePath }),
      });
    } catch (error) {
      console.error("Failed to track page view:", error);
    }
  };

  // Increment visitor count
  const incrementVisitor = async () => {
    try {
      await fetch("/api/sqldb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "incrementVisitor" }),
      });
    } catch (error) {
      console.error("Failed to increment visitor count:", error);
    }
  };

  let showModal = $state(false);
  let visitStartTime: number;
  let hasVisitedVisitors = $state(false);
  let mode = $state<"light" | "dark">("light");
  const pathname = $derived(page.url.pathname);

  // Helper functions for cookies
  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  };

  const applyMode = (next: "light" | "dark") => {
    mode = next;
    document.documentElement.dataset.mode = next;
    localStorage.setItem("theme", next);
  };

  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      applyMode(saved);
    } else {
      applyMode("light");
    }

    // Track initial page view
    trackPageView(page.url.pathname);

    // Initialize visitor tracking
    visitStartTime = Date.now();
    hasVisitedVisitors = document.cookie.includes("visited_visitors=true");

    // Check after 15 seconds for testing
    setTimeout(() => {
      if (!hasVisitedVisitors && Date.now() - visitStartTime > 15000) {
        showModal = true;
      }
    }, 15000);
  });

  // Track page navigation
  beforeNavigate(({ to }) => {
    if (to) {
      trackPageView(to.url.pathname);
      if (to.url.pathname === "/visitors") {
        hasVisitedVisitors = true;
      }
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<div class="app-shell">
  <header class="appbar-floating">
    <div class="appbar-floating-inner">
      <Navbars {mode} onToggleMode={applyMode} />
    </div>
  </header>

  <main class="app-main-floating">
    {@render children()}
  </main>

  <nav
    class="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-sky-200/60 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-900/90 lg:hidden"
    style="padding-bottom: env(safe-area-inset-bottom);"
  >
    {#each navItems as item}
      <a
        href={item.href}
        class={`flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/60 ${
          pathname === item.href
            ? "text-sky-700 dark:text-sky-200 bg-sky-50 dark:bg-slate-800"
            : "text-slate-600 dark:text-slate-300"
        }`}
      >
        <i class={`bi ${item.icon} text-base`}></i>
        <span>{item.label}</span>
      </a>
    {/each}
  </nav>
</div>

{#if showModal}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
  >
    <div
      class="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/95"
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Help Us with Feedback
          </p>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">
            You've been visiting this site for quite some time. Please provide
            feedback or suggestions to help us improve!
          </p>
        </div>
        <button
          class="btn-ghost px-2 py-1"
          aria-label="Close"
          onclick={async () => {
            showModal = false;
            setCookie("visited_visitors", "true");
            await incrementVisitor();
          }}
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <div class="mt-6 flex justify-end gap-3">
        <button
          class="btn-ghost"
          onclick={async () => {
            showModal = false;
            hasVisitedVisitors = true;
            setCookie("visited_visitors", "true");
            await incrementVisitor();
          }}
        >
          Maybe Later
        </button>
        <a
          href="/visitors"
          class="btn-primary"
          onclick={() => {
            showModal = false;
            hasVisitedVisitors = true;
          }}
        >
          Give Feedback
        </a>
      </div>
    </div>
  </div>
{/if}
