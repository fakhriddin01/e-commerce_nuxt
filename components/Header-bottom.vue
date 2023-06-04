<template>

    <div class="container mx-auto px-[130px]">
        <div class="hidden md:flex h-[56px] py-[20px] items-center justify-between">
            <ul class="flex items-center font-[500] gap-6">
                <li class="flex items-center"><Icon name="ic:round-menu" class="text-[23px] " /><span>All categoriy</span></li>
                <li class="flex items-center"><span>Hot offers</span></li>
                <li class="flex items-center"><span>Gift boxes</span></li>
                <li class="flex items-center"><span>Projects</span></li>
                <li class="flex items-center"><span>Menu Item</span></li>
                <li class="flex items-center"><span><select class="outline-none">
                    <option value="">Help</option>
                    <option value="">Find</option>
                </select></span></li>
            </ul>

            <ul class="flex items-center font-[500] gap-6">
                <li class="flex items-center"><span><select class="outline-none">
                    <option value="">English, USD</option>
                    <option value="">Russian, RUB</option>
                    <option value="">Uzbek, SUM</option>
                </select></span></li>
                <li class="flex">
                    Ship to <img class="w-[22px] ml-2" src="/DE.svg" alt=""> <select class="outline-none">
                    <option thumbnail="/DE.svg"><img src="/DE.svg" alt=""></option>
                    <option><img src="/AU.png" alt=""></option>
                    <option><img src="/AE.png" alt=""></option>
                    <option><img src="/CN.png" alt=""></option>
                    </select>
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>