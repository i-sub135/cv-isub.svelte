<script lang="ts">
  // Visitor counter and feedback system using server API
  let visitorCount = 0;
  let feedbacks: { id: number; name: string; message: string; timestamp: string; email: string }[] =
    [];

  let newFeedback = { name: '', message: '' };
  let showForm = false;
  let loading = true;

  // Load data from server
  const loadData = async () => {
    try {
      const [visitRes, feedbackRes] = await Promise.all([
        fetch('/api/sqldb?action=visitCount'),
        fetch('/api/sqldb?action=feedbacks'),
      ]);

      const visitData = await visitRes.json();
      const feedbackData = await feedbackRes.json();

      visitorCount = visitData.count || 0;
      feedbacks = feedbackData || [];
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      loading = false;
    }
  };

  // Track visit (only once per session)
  const trackVisit = async () => {
    if (document.cookie.includes('visited_visitors=true')) {
      return;
    }
    try {
      const response = await fetch('/api/sqldb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'visit', page: '/visitors' }),
      });

      if (response.ok) {
        // Set cookie to mark as visited (expires in 24 hours)
        const expiry = new Date();
        expiry.setTime(expiry.getTime() + 24 * 60 * 60 * 1000); // 24 hours
        document.cookie = `visited_visitors=true; expires=${expiry.toUTCString()}; path=/`;
      } else {
        console.log('Response not ok, not setting cookie');
      }
    } catch (error) {
      console.error('Failed to track visit:', error);
    }
  };

  // Submit feedback
  const submitFeedback = async () => {
    if (!newFeedback.name.trim() || !newFeedback.message.trim()) return;

    try {
      const response = await fetch('/api/sqldb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'feedback',
          name: newFeedback.name.trim(),
          message: newFeedback.message.trim(),
        }),
      });

      if (response.ok) {
        newFeedback = { name: '', message: '' };
        showForm = false;
        await loadData(); // Reload feedbacks
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error);
    }
  };

  // Initialize
  import { onMount } from 'svelte';
  onMount(async () => {
    // Track visit first
    await trackVisit();
    // Then load data (which includes updated count)
    await loadData();
  });
</script>

<div class="space-y-8 animate__animated animate__fadeInUp">
	<div class="flex flex-col gap-3">
		<p class="badge-soft w-fit"><i class="bi bi-people"></i> Visitors</p>
		<h1 class="hero-title">Who Visits</h1>
		<p class="hero-subtitle">Live visit counter and a small guestbook for quick feedback.</p>
	</div>

	<section class="grid gap-4 md:grid-cols-2">
		<div class="card-glass p-5">
			<div class="flex items-center justify-between border-b border-slate-200/70 pb-4 dark:border-slate-800">
				<h2 class="section-title">Visitor Stats</h2>
			</div>
			<div class="mt-4 grid gap-3 sm:grid-cols-2">
				<div class="rounded-xl border border-slate-200/70 bg-linear-to-br from-sky-500/15 via-cyan-400/10 to-emerald-400/10 p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] dark:border-slate-800 dark:bg-slate-900/40">
					<div class="flex items-center gap-3">
						<div class="flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/20 text-sky-700 dark:text-sky-100">
							<i class="bi bi-eye-fill text-xl"></i>
						</div>
						<div>
							<p class="subtext">Total Visits</p>
							<p class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{visitorCount}</p>
						</div>
					</div>
				</div>
				<div class="rounded-xl border border-slate-200/70 bg-linear-to-br from-violet-500/15 via-purple-400/10 to-indigo-400/10 p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] dark:border-slate-800 dark:bg-slate-900/40">
					<div class="flex items-center gap-3">
						<div class="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/20 text-violet-700 dark:text-violet-100">
							<i class="bi bi-chat-dots-fill text-xl"></i>
						</div>
						<div>
							<p class="subtext">Feedback Received</p>
							<p class="text-2xl font-semibold text-slate-900 dark:text-slate-50">{feedbacks.length}</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="card-glass p-5">
			<div class="flex items-center justify-between border-b border-slate-200/70 pb-4 dark:border-slate-800">
				<h2 class="section-title">Leave Feedback</h2>
				<button class="btn-ghost btn-sm flex items-center gap-2" on:click={() => (showForm = !showForm)}>
					<i class="bi bi-plus-circle"></i>
					{showForm ? 'Cancel' : 'Add Feedback'}
				</button>
			</div>
			<div class="mt-4 space-y-3">
				{#if showForm}
					<form class="space-y-3" on:submit|preventDefault={submitFeedback}>
						<label class="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
							<span>Your Name or Email</span>
							<input
								type="text"
								class="input"
								bind:value={newFeedback.name}
								required
							/>
						</label>
						<label class="space-y-1 text-sm font-medium text-slate-700 dark:text-slate-200">
							<span>Your Message</span>
							<textarea
								class="input h-28"
								bind:value={newFeedback.message}
								placeholder="Share thoughts, suggestions, or feedback..."
								required
							></textarea>
						</label>
						<div class="flex flex-wrap gap-2">
							<button type="submit" class="btn-primary btn-sm flex items-center gap-2">
								<i class="bi bi-send"></i>
								Send
							</button>
							<button type="button" class="btn-ghost btn-sm" on:click={() => (showForm = false)}>
								Cancel
							</button>
						</div>
					</form>
				{:else}
					<p class="subtext">Your feedback helps me improve—tap “Add Feedback” to drop a note.</p>
				{/if}
			</div>
		</div>
	</section>

	<section class="card-glass p-5 animate__animated animate__fadeInUp">
		<div class="border-b border-slate-200/70 pb-4 dark:border-slate-800">
			<h2 class="section-title">Recent Feedback</h2>
		</div>
		<div class="mt-4">
			{#if loading}
				<div class="flex justify-center py-8">
					<div class="spinner-border"></div>
				</div>
			{:else if feedbacks.length > 0}
				<div class="grid gap-4 md:grid-cols-2">
					{#each feedbacks as feedback}
						<div class="rounded-xl border border-slate-200/70 bg-slate-50/70 p-4 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.2)] dark:border-slate-800 dark:bg-slate-900/40">
							<div class="flex items-start gap-3">
								<div class="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-lg font-semibold text-sky-700 dark:text-sky-100">
									{feedback.name.charAt(0).toUpperCase()}
								</div>
								<div class="flex-1 space-y-1">
									<div class="flex items-start justify-between gap-2">
										<div>
											<p class="text-sm font-semibold text-slate-900 dark:text-slate-50">{feedback.name}</p>
											<p class="text-xs text-slate-500 dark:text-slate-400">
												{new Date(feedback.timestamp).toLocaleDateString('en-US', {
													year: 'numeric',
													month: 'short',
													day: 'numeric',
													hour: '2-digit',
													minute: '2-digit',
												})}
											</p>
										</div>
										<i class="bi bi-chat-quote text-sky-500"></i>
									</div>
									<p class="text-sm text-slate-700 dark:text-slate-200">{feedback.message}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			{:else}
				<div class="text-center py-8">
					<i class="bi bi-chat-dots text-3xl text-slate-400"></i>
					<p class="subtext mt-2">No feedback yet. Be the first!</p>
				</div>
			{/if}
		</div>
	</section>
</div>
