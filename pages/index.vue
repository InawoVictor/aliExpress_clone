<template>
    <div id="IndexPage" class="mt-4 mx-auto px-2 max-w-[1200px]">
        <div v-if="products"
            class="grid xl:grid-cols-6 lg:grid-cols-5 
            md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
        >

            <div v-for="product in products" :key="product.id">
                <ProductCard :product="product" />
            </div>

        </div>
    </div>
</template>

<script setup>
const products = [
    {
        id: 1, title: 'Title 1', 
        desc: 'This is a description', img:'https://picsum.photos/id/7/800/800',
        price: 9090
    },
    {
        id: 2, title: 'Title 2', 
        desc: 'This is a description', img:'https://picsum.photos/id/71/800/800',
        price: 5689
    },
    {
        id: 3, title: 'Title 3', 
        desc: 'This is a description', img:'https://picsum.photos/id/72/800/800',
        price: 9700
    },
    {
        id: 4, title: 'Title 4', 
        desc: 'This is a description', img:'https://picsum.photos/id/73/800/800',
        price: 7099
    },
    {
        id: 5, title: 'Title 5', 
        desc: 'This is a description', img:'https://picsum.photos/id/74/800/800',
        price: 6200
    },
    {
        id: 6, title: 'Title 6', 
        desc: 'This is a description', img:'https://picsum.photos/id/75/800/800',
        price: 9990
    },
    {
        id: 7, title: 'Title 7', 
        desc: 'This is a description', img:'https://picsum.photos/id/76/800/800',
        price: 3599
    },
    {
        id: 8, title: 'Title 8', 
        desc: 'This is a description', img:'https://picsum.photos/id/77/800/800',
        price: 9460
    },
    {
        id: 9, title: 'Title 9', 
        desc: 'This is a description', img:'https://picsum.photos/id/78/800/800',
        price: 4579
    }, 
    {
        id: 10, title: 'Title 10', 
        desc: 'This is a description', img:'https://picsum.photos/id/79/800/800',
        price: 9900
    },
]



</script>
