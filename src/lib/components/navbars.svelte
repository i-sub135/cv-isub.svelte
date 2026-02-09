<script lang="ts">
	import { page } from '$app/stores';
	$: pathname = $page.url.pathname;
</script>

<header class="navbar navbar-expand-md d-print-none">
  <div class="container-xl">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbar-menu"
      aria-controls="navbar-menu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
	 <!-- BEGIN NAVBAR LOGO -->
    <a href="/" aria-label="Home" class="navbar-brand navbar-brand-autodark me-3">
      <i class="bi bi-person-circle"></i> Virtual CV
    </a>
    <!-- END NAVBAR LOGO -->
    <ul class="navbar-nav">
      <li class="nav-item" class:active={pathname === '/profile'}>
        <a class="nav-link" href="/profile">
          <span class="nav-link-icon">
            <i class="bi bi-person"></i>
          </span>
          <span class="nav-link-title"> Profile </span>
        </a>
      </li>

      <li class="nav-item" class:active={pathname === '/experience'}>
        <a class="nav-link" href="/experience">
          <span class="nav-link-icon">
            <i class="bi bi-briefcase"></i>
          </span>
          <span class="nav-link-title"> Experience </span>
        </a>
      </li>

      <li class="nav-item" class:active={pathname === '/skills'}>
        <a class="nav-link" href="/skills">
          <span class="nav-link-icon">
            <i class="bi bi-tools"></i>
          </span>
          <span class="nav-link-title">  Skills</span>
        </a>
      </li>

      <li class="nav-item" class:active={pathname === '/education'}>
        <a class="nav-link" href="/education">
          <span class="nav-link-icon">
            <i class="bi bi-mortarboard"></i>
          </span>
          <span class="nav-link-title"> Education </span>
        </a>
      </li>

      <li class="nav-item" class:active={pathname === '/about-me'}>
        <a class="nav-link" href="/about-me">
          <span class="nav-link-icon">
            <i class="bi bi-person-circle"></i>
          </span>
          <span class="nav-link-title"> About Me </span>
        </a>
      </li>

    </ul>
    <div class="navbar-nav flex-row order-md-last ms-auto">
      <div class="nav-item dropdown">
        <a
          href="/"
          class="nav-link d-flex lh-1 text-reset"
          data-bs-toggle="dropdown"
          aria-label="Open user menu"
        >
          <span
            class="avatar avatar-sm"
            style="background-image: url(/img/anime.png)"
          ></span>
          <div class="d-none d-xl-block ps-2">
            <div>Iyan Subdiana</div>
            <div class="mt-1 small text-secondary">Tech Enthusiast</div>
          </div>
        </a>
        <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <a href="/visitors" class="dropdown-item"> <i class="bi bi-info-circle"></i> Who Visits</a>
          <div class="dropdown-divider"></div>
          <a href="/" class="dropdown-item"><i class="bi bi-gear"></i>Settings</a>
        </div>
      </div>
    </div>
  </div>
</header>