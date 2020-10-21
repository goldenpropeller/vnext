<style>
  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */

  /* Carousel base class */
  .carousel {
    margin-bottom: 4rem;
    background-color: #c0c0c0;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 3rem;
    z-index: 10;
  }

  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 20rem;
  }
  .carousel-item > img {
    /* position: absolute;
    top: 0;
    left: 0; */
    min-width: 100%;
    height: 20rem;
    opacity: 0.25;
    object-fit: cover;
  }
</style>

<div id="myCarousel" class="carousel slide my-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active" />
    <li data-target="#myCarousel" data-slide-to="1" />
    <li data-target="#myCarousel" data-slide-to="2" />
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" data-interval="30000">
      <img src="dollar.jpg" alt="dollar bill" />
      <div class="container">
        <div class="carousel-caption text-left text-dark text-center mx-auto">
          <h2>First Week Free!</h2>
          <p>List for $1/day</p>
          <p>
            <a class="btn btn-lg btn-dark" href="#" role="button">
              Sign up today
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-interval="10000">
      <img src="sailingaway.jpg" alt="sailing away" />
      <div class="container">
        <div class="carousel-caption text-left text-dark text-center mx-auto">
          <h2>Videos!</h2>
          <p>Premium Listings = More Features</p>
          <p>
            <a class="btn btn-lg btn-dark" href="#" role="button">
              Request more info
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-interval="10000">
      <img src="wavecrash.gif" alt="wave crashing on boat" />
      <div class="container">
        <div class="carousel-caption text-left text-dark text-center mx-auto">
          <h2>We can help!</h2>
          <p>Selling solo is rough</p>
          <p>
            <a class="btn btn-lg btn-dark" href="#" role="button">
              Tell me more!
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="carousel-item" data-interval="10000">
        <img src="takemymoney.jpg" alt="shut up and take my money!" />
        <div class="container">
          <div class="carousel-caption text-left text-dark text-center mx-auto">
            <h2>Sounds great!</h2>
            <p>I know, right?</p>
            <p>
              <a class="btn btn-lg btn-dark" href="#" role="button">
                Sign me up!
              </a>
            </p>
          </div>
        </div>
      </div>
  </div>
  <a
    class="carousel-control-prev"
    href="#myCarousel"
    role="button"
    data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" />
  </a>
  <a
    class="carousel-control-next"
    href="#myCarousel"
    role="button"
    data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" />
  </a>
</div>
