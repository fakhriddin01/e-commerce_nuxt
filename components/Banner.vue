<template>
    <div class=" hidden w-full h-[400px] bg-white px-[14px] py-[20px] md:flex gap-[20px] rounded-md">
             <div class="flex flex-col justify-between items-start w-[20%]">
                <ul class="flex flex-col gap-[7px] w-full">
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Automobiles</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Clother and wear</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Home interiors</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Computer and tech</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Tools, equipments</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Sports and outdoor</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Animal and pet</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">Machinery tools</nuxt-link >
                    <nuxt-link to="/tech" class="hover:bg-[#E5F1FF] rounded-md text-[#505050] hover:text-black hover:font-semibold px-3 py-1">More category</nuxt-link >
                </ul>
             </div>   
             <div class="bg-[url('/banner-2.png')] w-[53%] px-[50px] py-[70px]">
                <p class="text-[28px] leading-[12px]">Latest trending</p>
                <p class="text-[32px] font-[700] mb-7">Electronic items</p>
                <button class="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-[#0D6EFD] hover:text-white">Learn more</button>
             </div>
             <div class="w-[22.5%] flex flex-col gap-3">
                <div class="flex flex-col bg-[#E3F0FF] px-[10px] py-[17px] gap-2 rounded-md">
                    <div class="flex items-center gap-2 ">
                        <img src="/Avatar.png" alt="">
                        <div class="flex flex-col">
                            <p>Hi! User</p>
                            <p>Let's get started</p>
                        </div>
                    </div>
                    <button class="w-full bg-[#0D6EFD] text-white py-2 rounded-md">Join now</button>
                    <button class="w-full text-[#0D6EFD] border border-gray-300 rounded-md">Log in</button>
                </div>
                <div class="bg-[#F38332] text-white text-[18px] px-[20px] py-[16px]  rounded-md">
                    <p class="w-[65%]">Get US $10 off with a new supplier</p>
                </div>
                <div class="bg-[#55BDC3] text-[18px] text-white px-[20px] py-[16px] rounded-md">
                    <p class="w-[70%]">Send quotes with supplier preferences</p>
                </div>
             </div>
        </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>