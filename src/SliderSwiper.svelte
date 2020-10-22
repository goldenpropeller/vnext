<script>
    import Swiper from './Swiper.svelte';
    export let data;
    console.log(data)
</script>


<h1 class="h4 add-prop-left">{data.t}<a class="ml-4" href="#">see all</a></h1>
<Swiper data={data.d} />

<style>
    h1{
        margin-left: 2rem;
    }
</style>