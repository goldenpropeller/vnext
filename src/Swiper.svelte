<script>
    // Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/swiper.scss';

    function titleCase(str) {
        return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    export let data;
</script>
<Swiper loop={true} slidesPerView={3} spaceBetween={2}>
    {#each data as boat}
    <SwiperSlide>
        <div>
            <img src="{boat.media}" alt="pic" class="slider-image" /><br />
            <p class="text-center text-justify text-truncate mt-2 mb-0">{boat.year} {boat.make} {boat.model}</p>
            <p class="text-center text-justify text-capitalize mt-0">"{titleCase(boat.boatName)}"</p>
        </div>
    </SwiperSlide>
    {/each}
</Swiper>

<style>
    .slider-image  {
        width: 27vw;
        height: 13vw;
    }
</style>