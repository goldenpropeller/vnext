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

<!-- <div class="carousel"> -->
<Swiper loop={true} slidesPerView={3} freeMode={true}>
    {#each data as boat}
    <SwiperSlide>
        <div>
        <img src="{boat.media}" alt="pic" class="slider-image" />
        <p class="text-center text-justify text-truncate mt-2 mb-0">{boat.year} {boat.make} {boat.model}</p>
        <p class="text-center text-justify text-capitalize mt-0">"{boat.boatName.toLowerCase()}"</p>
        </div>
    </SwiperSlide>
    {/each}
</Swiper>

<style>
    img {
      min-width: 100%;
      height: 15rem;
      object-fit: contain;
      object-position: center;
    }
</style>