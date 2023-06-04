<template>

    <Swiper
    
    :modules="[SwiperAutoplay, SwiperNavigation, SwiperEffectCreative, SwiperGrid]"

    :slides-per-view="2" :space-between="0"
    
  >
    <SwiperSlide v-for="slide in itemsM" :key="slide.id">
        <div class="flex flex-col gap-2 justify-center items-center  border p-[10px]">
            <img :src="slide.image" class="w-[98px]  h-[98px]" alt="">
            <div class="flex flex-col items-center  ml-[7px]">
              <p class="mb-2">{{ slide.name }}</p>
              <p class="text-[#8B96A5] text-[13px]"> From USD {{ slide.price }}</p>
            </div>
        </div>
    </SwiperSlide >
  </Swiper>
</template>

<script setup>
 const props = defineProps(["itemsM"])
</script>

<style scoped>


</style>