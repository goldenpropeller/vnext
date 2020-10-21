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

    const breakpoints = {
        640: {
            slidesPerView: 2,
            // spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 40,
        },
        1200: {
            slidesPerView: 5,
            // spaceBetween: 50,
        },
        1900: {
            slidesPerView: 10,
            // spaceBetween: 50,
        }
    }
    export let data;
</script>

<!-- <div class="carousel"> -->
<Swiper loop={true} slidesPerView={1} freeMode={true} {breakpoints}>
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
      object-fit: cover;
      object-position: center;
    }

</style>