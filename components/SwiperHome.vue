<template>

    <Swiper
    
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperGrid]"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: true,
    }"
    :slides-per-view="4" :space-between="0"
    :grid="{
      rows: 2
    }"

  >
    <SwiperSlide v-for="slide in items" :key="slide.id">
        <div class="flex gap-2 justify-between items-start p-[9px] border  w-full">
            <div class="flex flex-col items-start mt-[10px] ml-[7px]">
              <p class="mb-2">{{ slide.name }}</p>
              <p class="text-[#8B96A5] text-[13px]">From</p>
              <p class="text-[#8B96A5] text-[13px]">USD {{ slide.price }}</p>
            </div>
            <img :src="slide.image" class="w-[66px] mt-[49px]" alt="">
        </div>
    </SwiperSlide >
  </Swiper>
</template>

<script setup>
 const props = defineProps(["items"])
</script>

<style scoped>


.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: calc((100%) / 2) !important;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}
</style>