<script>
    import Swiper from './Swiper.svelte';
    import Toast from './Toast.svelte'
    export let data;
    let msg = "In the future, these links will lead to a page with listings for only this category of boats."
</script>

<div class="container w-100">
<h1 class="h4 add-prop-left ml-4 mt-4">{data.t}<a class="ml-4" href="#" on:click={()=>{window.pushToast(msg)}}>see all</a></h1>
<Swiper data={data.d} />
</div>
<Toast />
