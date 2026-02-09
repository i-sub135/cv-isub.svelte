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

<div class="container py-4 animate__animated animate__fadeInUp">
  <div class="row">
    <div class="col-12">
      <h1 class="text-center mb-4 animate__animated animate__fadeInUp">Who Visits</h1>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card animate__animated animate__fadeInUp h-100">
            <div class="card-header">
              <h5 class="card-title">Visitor Stats</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <div class="card bg-primary text-white h-100">
                    <div class="p-3">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-eye-fill fs-2 me-3"></i>
                        <div>
                          <h3 class="card-title mb-0">{visitorCount}</h3>
                          <p class="card-text mb-0">Total Visits</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <div class="card bg-success text-white h-100">
                    <div class="p-3">
                      <div class="d-flex align-items-center">
                        <i class="bi bi-chat-dots-fill fs-2 me-3"></i>
                        <div>
                          <h3 class="card-title mb-0">{feedbacks.length}</h3>
                          <p class="card-text mb-0">Feedbacks Received</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card animate__animated animate__fadeInUp h-100">
            <div class="card-header d-flex justify-content-between">
              <h5 class="card-title">Leave Your Feedback</h5>
              <button
                class="btn btn-sm btn-outline-primary"
                on:click={() => (showForm = !showForm)}
              >
                <i class="bi bi-plus-circle me-1"></i>{showForm ? 'Cancel' : 'Add Feedback'}
              </button>
            </div>
            <div class="card-body">
              {#if showForm}
                <form on:submit|preventDefault={submitFeedback}>
                  <div class="mb-3">
                    <label for="name" class="form-label">Your Name or Email</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      bind:value={newFeedback.name}
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Your Message</label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="3"
                      bind:value={newFeedback.message}
                      placeholder="Share your thoughts, suggestions, or feedback..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit Feedback</button>
                </form>
              {:else}
                <p class="text-muted">
                  Your feedback helps me improve! Click "Add Feedback" to share your thoughts.
                </p>
              {/if}
            </div>
          </div>
        </div>
      </div>
      <div class="card animate__animated animate__fadeInUp">
        <div class="card-header">
          <h5 class="card-title">Recent Feedbacks</h5>
        </div>
        <div class="card-body">
          {#if loading}
            <div class="text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          {:else if feedbacks.length > 0}
            <div class="row">
              {#each feedbacks as feedback}
                <div class="col-md-6 mb-3">
                  <div class="card h-100 animate__animated animate__fadeInUp">
                    <div class="card-body">
                      <div class="d-flex align-items-start">
                        <div
                          class="avatar avatar-lg bg-primary text-white me-3"
                          style="border-radius: 50%; width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; font-weight: bold;"
                        >
                          {feedback.name.charAt(0).toUpperCase()}
                        </div>
                        <div class="flex-fill">
                          <div class="d-flex justify-content-between align-items-start">
                            <div>
                              <h6 class="card-title mb-1">{feedback.name}</h6>
                              <small class="text-muted"
                                >{new Date(feedback.timestamp).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}</small
                              >
                            </div>
                            <i class="bi bi-chat-quote text-primary fs-4"></i>
                          </div>
                          <p class="card-text mt-2 mb-0">{feedback.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          {:else}
            <div class="text-center py-5">
              <i class="bi bi-chat-dots text-muted fs-1 mb-3"></i>
              <p class="text-muted">No feedbacks yet. Be the first to leave one!</p>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
