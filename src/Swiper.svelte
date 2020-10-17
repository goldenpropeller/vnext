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
    console.log(data);
</script>
    <!-- spaceBetween={2}
    slidesPerView={5}
    	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])} >
 -->
<Swiper loop={true} slidesPerView={3} spaceBetween={2}>
    {#each data as boat}
    <SwiperSlide>
        <div>
            <img src="{boat.media}" alt="pic" class="slider-image" /><br />
            <p class="text-center">{boat.year} {boat.make} {boat.model} <br /> "{titleCase(boat.boatName)}"</p>
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