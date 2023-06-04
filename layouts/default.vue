<template>
    <div class="w-full">
        <Header/>
    </div>
    <div class="w-full border-y-2 border-gray-300">
        <Header-bottom/>
    </div>
   <div class="bg-[#EFF2F4]">
        <slot/>
   </div>
    <div class="w-full bg-[#EFF2F4]">
        <FooterTop/>
    </div>
    <div class="w-full bg-white">
        <FooterMiddle/>
    </div>
    <div class="w-full bg-[#EFF2F4]">
        <FooterBottom/>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>