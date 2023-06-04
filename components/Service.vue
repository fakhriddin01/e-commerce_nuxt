<template>

    <div v-for="el in services" :key="el.id" class="relative ">
        <div class="bg-black h-[120px] rounded-t-md">
            <img :src="el.image" class="transparent-[50%] w-full h-[120px] rounded-md" alt="">
            <div class="bg-[#D1E7FF] w-[55px] h-[55px] rounded-full flex items-center justify-center absolute right-[21px] bottom-[50px]">
                <Icon :name="el.icon" color="black" class="text-[23px]" />
            </div>
        </div>
        <div class="bg-white h-[80px] font-[500] p-[20px] rounded-b-md">
            <p class="w-[60%]">{{ el.title }}</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>