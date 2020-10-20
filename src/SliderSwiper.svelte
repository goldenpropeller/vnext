<script>
    import Swiper from './Swiper.svelte';
    export let data;
</script>


<p class="align-center">
    <img class="img-fluid" src="logo.png" alt="logo">
    <span class="h4">{data.t}</span>
</p>
<Swiper data={data.d} />

<style>
    img {height:2rem;margin-right:0.5em;}
</style>