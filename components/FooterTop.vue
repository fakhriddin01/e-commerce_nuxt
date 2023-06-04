<template>
    <div class="container mx-auto px-[5px] md:px-[130px]">
        <div class="flex flex-col items-center justify-center h-[190px]">
            <h1 class="text-[20px] font-[600]">Subscribe on our newsletter</h1>
            <h2 class="text-[16px] text-center">Get daily news on upcoming offers from many suppliers all over the worldx</h2>
            <div class="rounded-md flex gap-3 mt-5">
                <el-input placeholder="Email">
                    <template  #prefix><Icon name="ph:envelope" class="text-[23px] bg-white" /></template>
                </el-input>
                <el-button class="subscribe">Subscribe</el-button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.subscribe{
    background: linear-gradient(180deg, #127FFF 0%, #0067FF 100%);
    color: white;
}
</style>