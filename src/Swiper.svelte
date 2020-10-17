<script>
    // Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';

    // Import Swiper styles
    import 'swiper/swiper.scss';
    let items = [1,2,3,4,5,6,7,8,9,10];
    export let data;
</script>

<Swiper
	spaceBetween={2}
    slidesPerView={5}
    loop={true}
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])} >
    {#each data as item,key}
        <SwiperSlide>
            <img src="{item.media}" alt="pic" class="slider-image" />
        </SwiperSlide>
    {/each}
</Swiper>

<style>
    .slider-image  {
        width: 17vw;
        height: 10vw;
    }
</style>