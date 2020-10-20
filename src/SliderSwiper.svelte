<script>
    import Swiper from './Swiper.svelte';
    export let data;
</script>


<p><a class="navbar-brand add-prop-left" href="#"><h4>{data.t}</h4></a></p>
<Swiper data={data.d} />

<style>
    .add-prop-left{
    background-image: url(/logo.png);
    background-position: left;
    background-repeat: no-repeat;
    background-size: contain;
    padding-left:3.5rem;
}
</style>