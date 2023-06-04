<template>
    <div class="w-full bg-white md:px-[14px] py-[20px] rounded-md">
        <Swiper
            class="slider"
            :modules="[SwiperAutoplay, SwiperNavigation]"
            :autoplay="{
            delay: 4000,
            disableOnInteraction: true,
            }"
            :slides-per-view="2"
            :space-between="2" :loop="true"
        >

                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Automobiles</nuxt-link> </SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"> <nuxt-link to="/tech">Clother and wear</nuxt-link> </SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Home interiors</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Computer and tech</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Tools, equipments</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Sports and outdoor</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Animal and pet</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">Machinery tools</nuxt-link></SwiperSlide>
                    <SwiperSlide class="hover:bg-[#E5F1FF] rounded-md slide text-[#0D6EFD] hover:text-black bg-gray-200  hover:font-semibold px-3 ml-1 py-1"><nuxt-link to="/tech">More category</nuxt-link></SwiperSlide>
            
        </Swiper>
        
             <div class="bg-[url('/banner-2.png')] bg-cover w-[100%] mt-[20px] px-[10px] py-[70px]">
                <p class="text-[28px] leading-[12px]">Latest trending</p>
                <p class="text-[32px] font-[700] mb-7">Electronic items</p>
                <button class="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-[#0D6EFD] hover:text-white">Learn more</button>
             </div>
             
        </div>
    
</template>

<script setup>

</script>

<style scoped>
.slider{
    display: flex;
}


</style>