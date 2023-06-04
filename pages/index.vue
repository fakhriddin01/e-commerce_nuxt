<template>
    <div class="container mx-auto px-[5px] md:px-[130px] md:pt-[20px]">
        <div class="hidden md:block">
            <Banner/>
        </div>
        <div class="flex md:hidden">
        <BannerMobile/>
        </div>
        <div class="w-full md:h-[240px] bg-white md:flex md:mt-[30px] rounded-md border ">
            <div class=" md:w-[25%] p-[15px] pl-[1px] flex justify-center md:justify-start md:justify-start items-center md:flex-col">
                <div class="">
                    <h2 class="text-[#1C1C1C] font-[600] text-[20px]">Deals and offers</h2>
                    <p class="text-[#8B96A5]">Hygine equipment</p>
                </div>
                <div class="ml-3 md:mt-3">
                   <Days/>
                </div>
            </div>
            <div class="md:w-[77%]">
                <Swiper-offers/>
            </div>
        </div>

        <div class="w-full md:h-[258px] bg-white md:flex md:mt-[20px] rounded-md border ">
            <div class="hidden md:block w-[25%]">
                <img src="/home/left-aside.png" class="w-full h-full" alt="">
            </div>
            <div class="hidden md:block md:w-[77%]">
                <SwiperHome :items="home"/>
            </div>
            <h1 class="block md:hidden text-[24px] font-[600] m-[10px]">Home and outdor</h1>
            
            <div class="block md:hidden">
                <SwiperHomeMobile :itemsM="home"/>
            </div>
        </div>

        <div class="w-full md:h-[258px] bg-white md:flex md:mt-[20px] rounded-md border">
            <div class="hidden md:block w-[25%]">
                <img src="/left-side.png" class="w-full h-full" alt="">
            </div>

            <div class="hidden md:block md:w-[77%]">
                <SwiperHome :items="offers"/>
            </div>
            <h1 class="block md:hidden text-[24px] font-[600] m-[10px]">Consumer electronics</h1>
            <div class="block md:hidden">
                <SwiperHomeMobile :itemsM="offers"/>
            </div>
        </div>

        <div class="w-full md:h-[420px] bg-white md:flex md:mt-[20px] bg-[url('/bg-shop.png')] bg-cover rounded-md border ">
            <div class="text-white md:w-[50%] m-[40px]">
                <p class="text-[32px] font-[600] leading-[39px] md:w-[60%] mb-[13px]">An easy way to send requests to all suppliers</p>
                <p class="hidden md:block w-[60%] mb-[13px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <button class="block md:hidden bg-[#127FFF] text-white px-3 py-[6px] rounded-md m-[30px] w-[30%]">Send inquiry</button>

            <div class="hidden bg-white m-[30px] w-[40%] m-[30px] rounded-md px-[20px] py-[22px] md:flex flex-col justify-between">
                <p class="text-[20px] font-[600] shadow-[0px 1px 2px rgba(56, 56, 56, 0.25)]">Send quote to suppliers</p>
                <input class="border border-[#DEE2E7] h-[40px] px-3 rounded-md outline-none w-full" type="text" name="" placeholder="What items you need?" >
                <textarea rows="3" cols="50" maxlength="200" placeholder="Type more details" class="border border-[#DEE2E7] px-3 rounded-md outline-none w-full"  ></textarea>
                <div class="flex">
                    <p class="border border-[#DEE2E7] h-[40px] px-7 mr-3 rounded-md flex items-center">Quantity</p>
                    <select class="border border-[#DEE2E7] h-[40px] px-3 rounded-md outline-none" name="" id="">
                        <option value="">Pcd</option>
                    </select>
                </div>
                <button class="bg-[#127FFF] text-white px-3 py-[6px] rounded-md w-[30%]">Send inquiry</button>
            </div>
        </div>

        <h1 class="text-[24px] font-[600] mt-[30px]">Recommended items</h1>

        <div class="w-full md:h-[640px] flex md:mt-[24px] rounded-md">
           
            <div class="hidden md:block w-full">
                <SwiperRecomended :items="recomended"/>

            </div>

            <div class="md:hidden grid grid-cols-2 bg-white">
                    <div v-for="slide in recomended" :key="slide.id" class="flex flex-col items-center border rounded-md ">
                        <img :src="slide.image" class="w-[143px] h-[143px]" alt="">
                        <div class="text-left mt-[5px] ml-[7px] w-full">
                        <p class="font-[500] flex items-center"><Icon name="mdi:currency-usd" /> {{ slide.price }}</p>
                        <p class="text-[#8B96A5] text-[13px]">{{ slide.name }}</p>
                    
                        </div>
                    </div>
            </div>
        </div>

        <h1 class="text-[24px] font-[600] mt-[30px]">Our extra services</h1>
        
        <div class="w-full md:h-[200px] flex mt-[24px] rounded-md">
           
           <div class="w-full static md:flex justify-between">
                <Service/>
           </div>
       </div>

       <h1 class="text-[24px] font-[600] mt-[30px]">Suppliers by region</h1>

       <div class="w-full md:h-[82px] mt-[24px]  grid grid-cols-2 md:grid-cols-5 ">
            <div v-for="el in regions" :key="el.id" class="flex items-center justify-start gap-3">
                <img :src="el.flap" alt="" class="w-[28px] h-[20px]">
                <div class="flex flex-col items-start justify-center mt-1">
                    <p class="leading-[10px]">{{ el.name }}</p>
                    <p class="text-[#8B96A5] text-[13px]">{{ el.email }}</p>
                </div>
            </div>
       </div>

    </div>
</template>

<script setup>

 
</script>


<style scoped>

</style>