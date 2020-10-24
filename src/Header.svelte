<script>
  import { Link } from 'svelte-navigator'
  import SearchIcon from './SearchIcon.svelte'
  import PersonIcon from './PersonIcon.svelte'
  import Toast from './Toast.svelte'
  const msg = "In the future, these links will lead to other pages on the site with various features."
  const hc = (e)=>{e.preventDefault();window.pushToast(msg)};
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Lobster" />
</svelte:head>
<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
        <Link to="/" class="navbar-brand add-prop-left">GoldenPropeller.com</Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto mb-2 mb-md-0">
          <li class="nav-item"><Link class="nav-link" to="/" on:click={hc}><SearchIcon /></Link></li>
          <li class="nav-item"><Link class="nav-link" to="/" on:click={hc}>Buy</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/" on:click={hc}>Sell</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/" on:click={hc}>Services</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/" on:click={hc}><PersonIcon /></Link></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<Toast />