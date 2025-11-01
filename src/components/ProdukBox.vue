<template>
  <div
    class="bg-[#0a154a] rounded-[20px] shadow-xl border border-slate-700 overflow-hidden w-64 h-auto max-h-80 m-4 my-8 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
  >
    <div class="h-40 mx-6 mt-6 bg-gray-300 rounded-xl overflow-hidden flex items-center justify-center">
      <img
        v-if="produk.imageUrl"
        :src="produk.imageUrl"
        :alt="produk.name"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="p-5 text-center">
      <h3 class="text-lg font-semibold mb-6">{{ produk.name }}</h3>
      <router-link
        :to="`/produk/${produk.id}`"
        class="bg-white text-[#161a34] py-2 px-10 rounded-xl border border-slate-600 hover:bg-[#F5AD3A] transition duration-300"
      >
        Lihat
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  produk: {
    type: Object,
    required: true
  }
})
</script>










<!-- <template>
    <div class="bg-[#0a154a] rounded-[20px] shadow-xl border border-slate-700 overflow-hidden w-70 h-auto m-3 mb-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
      <div class="h-40 mx-[35px] mt-[30px] bg-white rounded-xl overflow-hidden">
          <img :src="produk.imageUrl" :alt="produk.name" class="w-full h-full object-cover">
      </div>
      <div class="p-5 text-center ">
        <h3 class="text-white text-lg font-semibold  mb-8">{{ produk.name }}</h3>
       
        
        <router-link :to="`/produk/${produk.id}`" class="bg-white text-[#161a34] py-2 px-10 rounded-xl border- border-slate-600 hover:bg-[#F5AD3A] transition duration-300">
          Lihat
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';
  
  const props = defineProps({
    produk: {
      type: Object,
      required: true
    }
  });
  </script> -->