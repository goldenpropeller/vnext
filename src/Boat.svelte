<script>
    // import { Link } from 'svelte-navigator'
    //   // Import Swiper Svelte components
    // import SwiperVertical from './SwiperVertical.svelte'
    // import { SliderDatasets as datas } from './data/DataSets'
    import {db as boats} from './data/db'
    export let params = {};
    const id = params.id
    const someboat = boats.some(x=>x.id.toString() === id)
    const boat = someboat ? boats.filter(x=>x.id.toString() === id)[0] : null;
    if(boat){
        //save for most recent boat view
        localStorage.setItem(`boat-${id}`,new Date)
        //save for class sort on front page
        localStorage.setItem(`boats-${boat.class}`,new Date)
    }
</script>

<div class="container w-100"><br /><br />
    {#if someboat}
        <div class="card mb-3" style="width: 100%">
            <h5 class=" add-prop-left text-left text-truncate mx-3 my-3">{boat.year} {boat.make} {boat.model}
                <!-- <Link class="float-right" to="/">Home</Link> -->
                <a class="float-right" href="/">Home</a>
            </h5>
            <img
                class="card-img-top"
            loading="lazy"
            src={boat.media}
            alt="{boat.year}
            {boat.make}
            {boat.model}" />
        </div>
    {:else}
         <div class="card mb-3" style="width: 100%">
            <h1>Boat not found.</h1>
        </div>
    {/if}
    
</div>

