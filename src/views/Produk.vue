<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->

<template>
  <div class="text-[#F5AD3A] flex flex-wrap justify-center mx-auto max-w-7xl p-8 bg-white min-h-screen">
    <ProdukBox
      v-for="produk in produkList"
      :key="produk.id"
      :produk="produk"
    />
  </div>
</template>

<script setup>
import ProdukBox from '../components/ProdukBox.vue'


const produkList = [
  { id: 1, name: "rendang teri daun teh", imageUrl: "" },
  { id: 2, name: "rendang udang daun teh", imageUrl: "" },
  { id: 3, name: "rendang ayam daun teh", imageUrl: "" },
  { id: 4, name: "rendang ikan salai", imageUrl: "" },

];
</script>


