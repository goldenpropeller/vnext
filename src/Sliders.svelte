<script>
    import SliderSwiper from './SliderSwiper.svelte'
    import { SliderDatasets as datas } from './data/DataSets'
</script>
{#each datas as data}
    <!-- <hr class="featurette-divider mb-2 mt-3" /> -->
    <SliderSwiper {data} />
{/each}