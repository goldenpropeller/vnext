<script>
  import NavBar from './NavBar.svelte';
  import Hero from './hero.svelte';
  import Footer from './footer.svelte';
  import Swiper from './Swiper.svelte';
  import {boats as db} from './data/data.js';
  const boats = db.filter(x=>x.media).filter(x=>x.boatName).filter(x=>x.media);
  //recently viewed, recommended for you, repeat sections for each type, they should order themselves based on past viewing habits
  //random values from an array
  const rv = (arr,n) => arr.sort(() => .5 - Math.random()).slice(0,n)
  let Recent = rv(boats,5)
  let Recommended = rv(boats,5)
  let t0 = rv(boats,5)
  let t1 = rv(boats,5)
  let t2 = rv(boats,5)
  let t3 = rv(boats,5)
  
</script>

<main class="container">
  <NavBar />  
  <Hero />
  <h4><img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">Recently viewed</h4>
  <Swiper data={Recent} />
  <h4><img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">Recommended for you</h4>
  <Swiper data={Recommended} />
  <h4><img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">Type1</h4>
  <Swiper data={t1} />
  <h4><img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">Type2</h4>
  <Swiper data={t2} />
  <h4><img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">Type3</h4>
  <Swiper data={t3} />
  <Footer />
</main><!-- /.container -->


  <!-- <div class="row mb-2">
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">World</strong>
          <h3 class="mb-0">Featured post</h3>
          <div class="mb-1 text-muted">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <h3 class="mb-0">Post title</h3>
          <div class="mb-1 text-muted">Nov 11</div>
          <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="stretched-link">Continue reading</a>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="row">
    <div class="col-md-8">
      <h3 class="pb-4 mb-4 font-italic border-bottom">
        From the Firehose
      </h3>


    <div class="col-md-4">
      <div class="p-4 mb-3 bg-light rounded">
        <h4 class="font-italic">About</h4>
        <p class="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
      </div>

      <div class="p-4">
        <h4 class="font-italic">Archives</h4>
        <ol class="list-unstyled mb-0">
          <li><a href="#">March 2014</a></li>
          <li><a href="#">February 2014</a></li>
          <li><a href="#">January 2014</a></li>
          <li><a href="#">December 2013</a></li>
          <li><a href="#">November 2013</a></li>
          <li><a href="#">October 2013</a></li>
          <li><a href="#">September 2013</a></li>
          <li><a href="#">August 2013</a></li>
          <li><a href="#">July 2013</a></li>
          <li><a href="#">June 2013</a></li>
          <li><a href="#">May 2013</a></li>
          <li><a href="#">April 2013</a></li>
        </ol>
      </div>

      <div class="p-4">
        <h4 class="font-italic">Elsewhere</h4>
        <ol class="list-unstyled">
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
        </ol>
      </div>
    </div>

  </div>--><!-- /.row -->
  
