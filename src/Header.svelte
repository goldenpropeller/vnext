<script>
  // import { Link } from 'svelte-navigator'
  import SearchIcon from './SearchIcon.svelte'
  import PersonIcon from './PersonIcon.svelte'
  import DollarIcon from './DollarIcon.svelte'
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
        <!-- <Link to="/" class="navbar-brand add-prop-left">GoldenPropeller.com</Link> -->
        <a href="/" class="navbar-brand add-prop-left">GoldenPropeller.com</a>
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
          <!-- <li class="nav-item"><a class="nav-link" href="/" on:click={hc}><SearchIcon /></a></li> -->
          <li class="nav-item"><a class="nav-link" href="#/AboutUs">About Us</a></li>
          <li class="nav-item"><a class="nav-link" href="/" on:click={hc}>Buy</a></li>
          <li class="nav-item"><a class="nav-link" href="/" on:click={hc}>Sell</a></li>
          <li class="nav-item"><a class="nav-link" href="/" on:click={hc}>Services</a></li>
          <li class="nav-item"><a class="nav-link" href="/" on:click={hc}><PersonIcon /></a></li>
          <li class="nav-item"><a class="nav-link" style="color:#00bc8c" target="_blank" href="checkout.html"><DollarIcon /></a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>
<Toast />