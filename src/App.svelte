<script>
    import NavItem from './NavItem.svelte';
    import SearchIcon from './SearchIcon.svelte'
    import PersonIcon from './PersonIcon.svelte'
    import SliderSwiper from './SliderSwiper.svelte';
    import {SliderDatasets as datas} from './data/DataSets.js'
  </script>

<style>
    .navbar-brand {
        font-family: Lobster,Arial, Helvetica, sans-serif;
        color: #D4AF37;
    }
</style>
<header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand add-prop-left" href="#">GoldenPropeller.com</a>
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
  
  <main class="">
    <div class="container">
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" data-interval="30000">
            <img src="dollar.jpg" alt="dollar bill" />
            <div class="container">
                <div class="carousel-caption text-left text-dark text-center mx-auto">
                  <h1>List your boat for a dollar a day!</h1>
                  <p>(FIRST WEEK IS "FREE" FOR NEW LISTINGS)</p>
                  <p><a class="btn btn-lg btn-dark" href="#" role="button">Sign up today</a></p>
                </div>
            </div>
        </div>
        <div class="carousel-item" data-interval="10000">
            <img src="sailingaway.jpg" alt="sailing away" />
            <div class="container">
                <div class="carousel-caption text-left text-dark text-center mx-auto">
                  <h1>Premium listings available!</h1>
                  <p>(WHEN YOU'RE READY FOR YOUR BOAT TO SAIL AWAY)</p>
                  <p><a class="btn btn-lg btn-dark" href="#" role="button">Request more info</a></p>
                </div>
            </div>
        </div>
        <div class="carousel-item" data-interval="10000">
            <img src="wavecrash.gif" alt="wave crashing on boat" />
            <div class="container">
                <div class="carousel-caption text-left text-dark text-center mx-auto">
                  <h1>Selling your boat can be tough!</h1>
                  <p>(LET US HELP NAVIGATE THE ROUGH WATERS)</p>
                  <p><a class="btn btn-lg btn-dark" href="#" role="button">Tell me more!</a></p>
                </div>
            </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>
    </div>


    <div class="container">
        {#each datas as data}
        <hr class="featurette-divider mb-2 mt-3">
        <SliderSwiper {data} />
    {/each}
    </div>
    
  
  
    <!-- FOOTER -->
    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>&copy; 2020 GoldenPropeller.com &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </main>