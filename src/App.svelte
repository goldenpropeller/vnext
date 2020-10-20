<script>
  import NavBar from './NavBar.svelte';
  import Hero from './hero.svelte';
  import SliderSwiper from './SliderSwiper.svelte';
  import Footer from './footer.svelte';
  import {SliderDatasets as datas} from './data/DataSets.js'
</script>

<main class="container">
  <NavBar />  
  <Hero />
  {#each datas as data}
    <SliderSwiper {data} />
  {/each}
  <Footer />
</main>