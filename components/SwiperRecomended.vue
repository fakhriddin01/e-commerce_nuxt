<template>
    <Swiper
    
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperGrid]"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: true,
    }"
    :slides-per-view="5" :space-between="20"
    :grid="{
      rows: 2
    }"

  >
    <SwiperSlide v-for="slide in items" :key="slide.id">
        <div class="flex flex-col gap-2 items-center p-[9px] h-full border w-full rounded-md ">
            <img :src="slide.image" class="w-[200px] h-[200px] mt-[9px]" alt="">
            <div class="text-left mt-[5px] ml-[7px] w-full">
              <p class="font-[500] flex items-center"><Icon name="mdi:currency-usd" /> {{ slide.price }}</p>
              <p class="text-[#8B96A5] text-[13px]">{{ slide.name }}</p>
         
            </div>
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
  height: calc((95.3%) / 2) !important;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  border-radius: 10px;
}
</style>