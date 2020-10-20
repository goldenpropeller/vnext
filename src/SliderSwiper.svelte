<script>
    import Swiper from './Swiper.svelte';
    export let data;
</script>
<h4>
    <img class="img-fluid logo" src="logo.png" style="height:2rem;margin-right:0.5em;" alt="logo">
    {data.t}
</h4>
<Swiper data={data.d} />