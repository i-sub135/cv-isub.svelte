<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import 'bootstrap-icons/font/bootstrap-icons.css';
  import '@tabler/core/dist/css/tabler.min.css';
  import Navbars from '$lib/components/navbars.svelte';
  import { onMount } from 'svelte';
  import { beforeNavigate } from '$app/navigation';
  import { page } from '$app/state';
  import 'animate.css';

  let { children } = $props();

  // Track page view for all pages
  const trackPageView = async (pagePath: string) => {
    try {
      await fetch('/api/sqldb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'pageView', page: pagePath }),
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  };

  // Increment visitor count
  const incrementVisitor = async () => {
    try {
      await fetch('/api/sqldb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'incrementVisitor' }),
      });
    } catch (error) {
      console.error('Failed to increment visitor count:', error);
    }
  };

  let showModal = $state(false);
  let visitStartTime: number;
  let hasVisitedVisitors = $state(false);

  // Helper functions for cookies
  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/`;
  };

  onMount(() => {
    import('@tabler/core/dist/js/tabler.min.js');

    // Track initial page view
    trackPageView(page.url.pathname);

    // Initialize visitor tracking
    visitStartTime = Date.now();
    hasVisitedVisitors = document.cookie.includes('visited_visitors=true');

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
      if (to.url.pathname === '/visitors') {
        hasVisitedVisitors = true;
      }
    }
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>
<header>
  <Navbars />
</header>

<main class="container-fluid py-10">
  {@render children()}
</main>

{#if showModal}
  <div class="modal fade show" style="display: block;" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Help Us with Feedback</h5>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onclick={async () => {
              showModal = false;
              setCookie('visited_visitors', 'true');
              await incrementVisitor();
            }}
          ></button>
        </div>
        <div class="modal-body">
          <p>
            You've been visiting this site for quite some time. Please provide feedback or
            suggestions to help us improve!
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            onclick={async () => {
              showModal = false;
              hasVisitedVisitors = true;
              setCookie('visited_visitors', 'true');
              await incrementVisitor();
            }}>Maybe Later</button
          >
          <a
            href="/visitors"
            class="btn btn-primary"
            onclick={() => {
              showModal = false;
              hasVisitedVisitors = true;
            }}>Give Feedback</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="modal-backdrop fade show"></div>
{/if}
