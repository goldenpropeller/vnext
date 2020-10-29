<script>
    // import { Link } from 'svelte-navigator'
      // Import Swiper Svelte components
    import SwiperVertical from './SwiperVertical.svelte'
    import { SliderDatasets as datas } from './data/DataSets'
    export let params = {};
    const id = params.id
    const data = datas.filter(x=>x.t === id)[0];
</script>

<div class="container w-100"><br /><br />
    <h1 class="h4 add-prop-left mt-4 w-80 text-truncate">{id}
        <!-- <Link class="float-right" to="/">Home</Link> -->
        <a class="float-right" href="/">Home</a>
        <!-- <Link to="/">Back to Home Page</Link> -->
    </h1>
    <SwiperVertical data={data.d} />
</div>



