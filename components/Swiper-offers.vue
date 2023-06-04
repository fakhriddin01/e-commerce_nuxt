<template>

    <div class="block md:hidden">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :slides-per-view="3" :space-between="0" :loop="true"

      >
        <SwiperSlide v-for="slide in offers" :key="slide.id">
            <div class="flex flex-col gap-2 md:px-[38px] py-[17px] justify-center items-center border">
                <img :src="slide.image" class="w-[76px] md:w-[120px] h-[83px] md:h-[135px]" alt="">
                <p class="">{{ slide.name }}</p>
                <p class="bg-[#FFE3E3] px-3 py-[2px] text-[#EB001B] rounded-full">{{ slide.offer }}</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>

    
    <div class="hidden md:block">
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        navigation 
        :autoplay="{
          delay: 4000,
          disableOnInteraction: true,
        }"
        :slides-per-view="5" :space-between="0" :loop="true"

      >
        <SwiperSlide v-for="slide in offers" :key="slide.id">
            <div class="flex flex-col gap-2 md:px-[38px] py-[17px] justify-center items-center border">
                <img :src="slide.image" class="w-[76px] md:w-[120px] h-[83px] md:h-[135px]" alt="">
                <p class="">{{ slide.name }}</p>
                <p class="bg-[#FFE3E3] px-3 py-[2px] text-[#EB001B] rounded-full">{{ slide.offer }}</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>