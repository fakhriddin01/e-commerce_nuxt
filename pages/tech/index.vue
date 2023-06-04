<template>
    <div class="container mx-auto px-[5px] md:px-[130px] md:pt-[20px]">
        <p class="text-gray-500 h-[64px]">Home > Computer and Tech</p>
        <div class="flex">
            <aside class="w-[20%]">
                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Category')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Category <Icon v-if="!isCategory" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isCategory" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div role="none">
                            <a v-for="el in category.tech" href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">{{ el }}</a>
                        </div>
                    </div>           
                </div>

                
                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Brands')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Brands <Icon v-if="!isBrands" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isBrands" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group  v-model="checkList" size="large" class="flex flex-col">
                                <el-checkbox  size="large" v-for="el in filters['Brands']" :key="el" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>              

                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Features')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Features <Icon v-if="!isFeatures" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isFeatures" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group v-model="checkList" size="large" class="flex flex-col">
                                <el-checkbox size="large" v-for="el in filters['Features']" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>

                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Price')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Price range <Icon v-if="!isPrice" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isPrice" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group v-model="checkList" size="large" class="flex flex-col">
                                <el-checkbox size="large" v-for="el in filters['Price']" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>

                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Ratings')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Ratings <Icon v-if="!isRating" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isRating" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group  v-model="checkList" size="large" class="">
                                <el-checkbox size="large" v-for="el in filters['Ratings']" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>

                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Condition')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Condition <Icon v-if="!isCondition" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isCondition" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group  v-model="checkList" size="large" class="flex flex-col">
                                <el-checkbox size="large" v-for="el in filters['Condition']" :key="el" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>

                <div class="relative inline-block text-left w-full border-b border-gray-300">
                    <button @click="toggleCategory('Manufacturer')" class="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold text-gray-900" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Manufacturer <Icon v-if="!isManufacturer" name="material-symbols:keyboard-arrow-down-rounded" class="text-[20px] text-gray-400" /> <Icon v-else name="ic:round-keyboard-arrow-up" class="text-[20px] text-gray-400" />
                    </button> 
                    <div v-if="isManufacturer" class=" z-10 w-full origin-top-right  focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="flex flex-col items-start ml-4">
                            <el-checkbox-group  v-model="checkList" size="large" class="flex flex-col">
                                <el-checkbox size="large" v-for="el in filters['Manufacturer']" @click.stop="check(el)" :label="el" />
                            </el-checkbox-group>    
                        </div>
                    </div>           
                </div>
            </aside>
            <div class="w-[80%] pl-[12px]">
                <div class="flex justify-between items-center bg-white p-[10px] rounded-md border border-gray-300">
                    <p>12,911 items in <b>Mobile accessory</b></p>
                    <div class="flex items-center">
                        <el-checkbox label="Verified only" size="large" />
                        <el-select  class="m-2" placeholder="Featured" size="large">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            />
                        </el-select>
                        <el-radio-group v-model="isCollapse" style="">
                            <el-radio-button :label="false"><Icon name="carbon:show-data-cards" class="text-[22px]" :class="isCollapse ? 'text-blue-400' : 'text-black' " /></el-radio-button>
                            <el-radio-button :label="true"><Icon name="clarity:view-cards-line" class="text-[22px]" :class="isCollapse ? 'text-black' : 'text-blue-300' " /></el-radio-button>
                        </el-radio-group>
                    </div>
                </div>
                <div class="flex flex-wrap mt-[20px]">
                    <div v-for="el in state.count" :key="el" class="border border-blue-400 rounded-md px-3 py-[5px] mb-2 flex justify-between items-center mr-2" >
                        <p class="text-[18px]">{{ el }}</p>
                        <Icon name="mdi:close" @click="deleteFilter(el)" class="text-[18px] mt-1 ml-2" />    
                    </div>
                    <button class="text-blue-400 my-auto" @click="deleteAll">Clear all filter</button>
                </div>

                <div class="grid grid-cols-3 gap-8 mt-[20px]">
                    <div v-for="el in paginatedData" :key="el.id" class=" pt-[15px] bg-white flex flex-col items-center justify-start rounded-md border border-gray-300">
                            <img :src="el.image" alt="" class="mb-[20px]">
                       <div class="bg-gray-50 w-full rounded-b-md border-y border-gray-300 flex">
                         
                                <div class="bg-gray-50 p-[20px] w-full rounded-b-md">
                                    <p class="flex justify-start items-center text-[20px] font-[600]"><Icon name="fxemoji:heavydollarsign" class="" />{{ el.price }}</p>
                                    <div class="demo-rate-block flex items-center">
                                        <el-rate  v-model="el.rating" size="large" allow-half />
                                        <p class="text-[#FF9017] text-[18px] ml-3">{{ el.rating }}</p>
                                    </div>
                                    <p class="text-[#606060] text-[21px] font-[600]">{{ el.name }}</p>
                                </div>
                          
                            <div class="m-[19px] border w-[48px] h-[40px] flex items-center justify-center rounded-md shadow">
                                <Icon name="ic:baseline-favorite-border" class="text-blue-600 text-[22px]"  />
                            </div>
                       </div>
                        
                    </div>
                </div>

                <!-- Pagination -->
                <div class="flex items-center justify-between  border-gray-200 px-4 py-3 sm:px-6">
                    
                    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end ">
                        <div>
                            <el-select v-model="itemsPerPage" class="m-2 w-[100px]" placeholder="Show 9" size="large">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select>
                        </div>
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <svg @click="previousPage" :disabled="currentPage === 1" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                                <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
                                <a v-for="el in totalPages" aria-current="page" @click="changePage(el)"  class="relative z-10 inline-flex items-center bg-gray-150 border border-2 px-4 py-2 text-sm font-semibold text-black focus:z-20 " :class=" currentPage === el ? 'bg-blue-400 text-white' : ''">{{ el }}</a>
                                
                                <a  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                                    <svg @click="nextPage" :disabled="currentPage === totalPages" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Pagination END -->
            </div>
        </div>
    </div>
</template>

<script setup>
const state = useCounterStore();

const isCategory = ref(false)
const isBrands = ref(true)
const isFeatures = ref(true)
const isPrice = ref(false)
const isCondition = ref(false)
const isRating = ref(false)
const isManufacturer = ref(false)
const checkList = ref(['Samsung', 'Apple'])


const check = (event) =>{
    setTimeout(() => {
        state.change(checkList.value)
    }, 300);

}

onMounted(()=>{
    check()
})
const deleteAll = ()=>{
    checkList.value = []
    check()
}
const deleteFilter = (el)=>{
    
    const index = checkList.value.indexOf(el);

    if (index === -1) {
      
    } else {
        checkList.value.splice(index, 1);
    }
}

const toggleCategory = (filter)=>{
    
    if(filter=='Brands'){
        isBrands.value = !isBrands.value
    }
    if(filter=='Features'){
        isFeatures.value = !isFeatures.value
    }
    if(filter=='Price'){
        isPrice.value = !isPrice.value
    }
    if(filter=='Condition'){
        isCondition.value = !isCondition.value
    }
    if(filter=='Ratings'){
        isRating.value = !isRating.value
    }
    if(filter=='Manufacturer'){
        isManufacturer.value = !isManufacturer.value
    }
    if(filter=='Category'){
        isCategory.value = !isCategory.value
    }
}


const itemsPerPage = ref(9);

const currentPage = ref(1);

const paginatedData = computed(() => {
    const startIndex = (currentPage.value - 1) * itemsPerPage.value;
    const endIndex = startIndex + itemsPerPage.value;
    const arr = offers.slice(startIndex, endIndex);
    return arr
});
const totalPages = computed(() => Math.ceil(offers.length / itemsPerPage.value));

const nextPage = () => {
    console.log(totalPages.value, currentPage.value)
    if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
    }
};

const previousPage = () => {
    if (currentPage.value > 1) {
    currentPage.value -= 1;
    }
};

const changePage = (page) => {
    currentPage.value = page
} 
const options = [
  {
    value: 3,
    label: '3/page',
  },
  {
    value: 6,
    label: '6/page',
  },
  {
    value: 9,
    label: '9/page',
  },
  {
    value: 30,
    label: '30/page',
  },
]
</script>

<style lang="scss" scoped>

</style>