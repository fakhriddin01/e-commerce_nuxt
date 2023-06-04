<template>
    


</template>

<script setup>

const state = useCounterStore();



const isCategory = ref(false)
const isBrands = ref(false)
const isFeatures = ref(false)
const isPrice = ref(false)
const isCondition = ref(false)
const isRating = ref(false)
const isManufacturer = ref(false)
const checkList = ref([])


const check = (event) =>{
    setTimeout(() => {
        state.change(checkList.value)
    }, 1000);

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
</script>

<style scoped>

</style>