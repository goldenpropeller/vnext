<script>
    import Swiper from './Swiper.svelte';
    import Toast from './Toast.svelte'
    export let data;
    let msg = "In the future, these links will lead to a page with listings for only this category of boats."
</script>

<div class="container w-100">
<h1 class="h4 add-prop-left mt-4 w-80 text-truncate">{data.t}<a class="float-right" href="#" on:click={(e)=>{e.preventDefault();window.pushToast(msg)}}>see all</a></h1>
<Swiper data={data.d} />
</div>
<Toast />
