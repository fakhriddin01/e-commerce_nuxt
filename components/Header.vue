<template>

    <div class="container mx-auto px-[5px] md:px-[130px]">
        <div class="flex h-[86px] py-[20px] items-center justify-between">
            <div class="flex items-center gap-2">
                <div class="md:hidden flex text-[23px]">
                    <Icon name="ic:round-menu" />
                </div>
                    <nuxt-link to="/"><img src="/logo-colored.svg" alt=""></nuxt-link>
            </div>
            <div class="hidden md:flex h-[40px] ">
                <input type="text" placeholder="Search" class="border pl-2 border-[#0D6EFD] border-y-2 border-l-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#0D6EFD] w-[420px]">
                <select id="currency" name="currency" class=" border border-[#0D6EFD] border-y-2 border-l-[1px] bg-transparent py-0 pl-2 pr-7  focus-visible:outline-none focus:ring-1 sm:text-sm">
                    <option>All Categories</option>
                    <option>CAD</option>
                    <option>EUR</option>
                </select>
                <button class="bg-[#0D6EFD] text-white px-6 py-2 rounded-r-md">Search</button>
            </div>

            <div class="flex gap-3">
                <div class="flex flex-col items-center justify-center text-gray-500">
                    <nuxt-link to="/profile"><Icon name="ic:baseline-person" class="text-[23px] " /></nuxt-link>
                    <p class="text-[12px]">Profile</p>
                </div>
                <div class="hidden md:flex flex-col items-center justify-center text-gray-500">
                    <nuxt-link to="/message"><Icon name="material-symbols:chat-rounded" class="text-[23px] " /></nuxt-link>
                    <p class="text-[12px]">Message</p>
                </div>
                <div class="hidden md:flex flex-col items-center justify-center text-gray-500">
                    <nuxt-link to="/orders"><Icon name="mdi:heart" class="text-[23px] " /></nuxt-link>
                    <p class="text-[12px]">Orders</p>
                </div>
                <div class="flex flex-col items-center justify-center text-gray-500">
                    <nuxt-link to="/carts"><Icon name="ic:sharp-shopping-cart" class="text-[23px] " /></nuxt-link>
                    <p class="text-[12px]">My Cart</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>