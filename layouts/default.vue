<template>
    <div class="fixed z-[-1] bg-[#F2F2F2] w-full h-[100vh]" />

    <div id="default" class=" w-full  z-50">
        
        <TopMenu />
        <MainHeader />
        
        
        <Loading v-if="userStore.isLoading"/>
        
        <div class="lg:pt-[130px] md:pt-[110px] pt-[80px]" />
        <div>
            <slot />
        </div>

        <Footer />

    </div>

</template>

<script setup>
import {useUserStore} from '~/stores/user'
const userStore = useUserStore()

let isCartHover = ref(false)

let searchItem = ref('')
let isSearching = ref(true)

</script>

