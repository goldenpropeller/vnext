<script>
    import NavItem from './NavItem.svelte';
    import SearchIcon from './SearchIcon.svelte'
    import PersonIcon from './PersonIcon.svelte'
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster">
</svelte:head>

<style>
    .navbar-brand {
        font-family: Lobster,Arial, Helvetica, sans-serif;
        color: #D4AF37;
    }
</style>

<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand add-prop-left" href="index.html">GoldenPropeller.com</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto mb-2 mb-md-0">
            <NavItem href="index.html"><SearchIcon /></NavItem>
            <NavItem href="index.html">Buy</NavItem>
            <NavItem href="index.html">Sell</NavItem>
            <NavItem href="index.html">Services</NavItem>
            <NavItem href="index.html"><PersonIcon /></NavItem>
            </ul>
        </div>
        </div>
    </nav>
</header>