<script>
  import Swiper from './Swiper.svelte';
  //import {data as pricedrops} from './data/pricedrop.js'
  import * as pricedrops from './data/pricedrop.json';
  import * as fishing from './data/fishing.json';
  import * as pwc from './data/pwc.json';
  import * as sail from './data/sail.json';
  import * as yachts from './data/yachts.json';
  console.log(fishing.default);
  let a = [
    {"t":"Price Drops!","d":pricedrops.default.map(x => ({id: x.id,media: x.media.filter(x=>x.mediaType === "image")[0].url}))},
    {"t":"Fishing","d":fishing.default.map(x => ({id: x.id,media: x.media.filter(x=>x.mediaType === "image")[0].url}))},
    {"t":"Personal Watercraft","d":pwc.default.map(x => ({id: x.id,media: x.media.filter(x=>x.mediaType === "image")[0].url}))},
    {"t":"Sailing","d":sail.default.map(x => ({id: x.id,media: x.media.filter(x=>x.mediaType === "image")[0].url}))},
    {"t":"Yachts","d":yachts.default.map(x => ({id: x.id,media: x.media.filter(x=>x.mediaType === "image")[0].url}))}
  ]
  
</script>

<main>
	<h1>GoldenPropeller.com</h1>
  <!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
  <!-- {#each a as item}
  <h2>{item.t}</h2>
  <Swiper data={item.d} />
  {/each} -->
    {#each a as item}
    <h2>{item.t}</h2>
    <div class="owl-carousel">
      {#each item.d as d}
        <div><img src="{d.media}" alt="pic" class="slider-image" /></div>
      {/each}
    </div>
    {/each}
  
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
  }
    .slider-image  {
        width: 17vw;
        height: 10vw;
    }
</style>