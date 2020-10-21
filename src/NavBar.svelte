<!-- <style>
  .navbar-brand {
    font-family: "Lobster", cursive;
    font-size: 2rem;
    line-height: 4rem;
    font-weight: 400;
    color: #d4af37;
  }
  .logo {
    height: 2.5rem;
    margin-right: 0.5em;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-dark">
  <a class="navbar-brand" href="index.html">
    <img
      class="img-fluid logo"
      src="logo.png"
      alt="logo" />GoldenPropeller.com</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarColor01"
    aria-controls="navbarColor01"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav ml-auto h5">
      <NavItem href="index.html"><SearchIcon /></NavItem>
      <NavItem href="index.html">Buy</NavItem>
      <NavItem href="index.html">Sell</NavItem>
      <NavItem href="index.html">Services</NavItem>
      <NavItem href="index.html"><PersonIcon /></NavItem>
    </ul>
  </div>
</nav> -->

<script>
  import NavItem from './NavItem.svelte';
  import SearchIcon from './SearchIcon.svelte'
  import PersonIcon from './PersonIcon.svelte'
</script>

<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Carousel</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto mb-2 mb-md-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>