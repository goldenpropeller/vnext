<script>
    import { Router, Route, Link } from "svelte-navigator";
    import Swiper from './Swiper.svelte';
    export let data;
</script>

<div class="container w-100">
<h1 class="h4 add-prop-left mt-4 w-80 text-truncate">{data.t}
    <Link class="float-right" to="boats/{data.t}">see all</Link>
</h1>
<Swiper data={data.d} />
</div>
