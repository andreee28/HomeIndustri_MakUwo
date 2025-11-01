<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->

<template >
  <nav class="flex items-center justify-between py-1 lg:px-8 md:px-6 bg-white shadow relative">
    <!-- Logo -->
    <div>
      <img src="@/assets/logo.png" class="w-20 sm:w-24 md:w-28 lg:w-32 max-w-[120px]" alt="logo" />
    </div>

    <!-- Menu Desktop -->
    <div class="relative max-sm:hidden sm:hidden md:flex border-[2px] rounded-[40px] border-[#101943]">
      <!-- indikator bulat -->
      
<span
  v-if="!route.path.startsWith('/SDG')"
  class="absolute top-1 bottom-1 bg-[#101943] rounded-[30px] transition-all duration-300 z-[0]"
  :style="{ left: indicatorLeft + 'px', width: indicatorWidth + 'px' }"
></span>


      <ul ref="menuRef" class="flex items-center justify-center text-[#101943] z-10">
        <!-- Penahan kiri -->
        <ul class="text-red-100/0 lg:pt-[11px] lg:pb-[13px] md:pt-[10px] md:pb-[12px]">.</ul>

        <!-- Menu Items -->
        <li class="text-[#101943] rounded-[30px] pt-[8px] pb-[10px] px-[15px] mx-[1px] " 
            >
          <router-link to="/" class="lg:text-[16px] md:text-[14px] px-5 flex active:text-[#F5AD3A]" @click="moveIndicator(0)" active-class="text-[#F5AD3A] " >Beranda</router-link>
        </li>
        <li class="text-[#101943] rounded-[30px] pt-[8px] pb-[10px] px-[15px] mx-[1px]"
            >
            <router-link
    to="/produk"
    class="lg:text-[16px] md:text-[14px] px-5 flex"
    :class="route.path.startsWith('/produk') ? 'text-[#F5AD3A]' : ''"
    @click="moveIndicator(1)"
  >
    Produk
  </router-link>
        </li>
        <li class="text-[#101943] rounded-[30px] pt-[8px] pb-[10px] px-[15px] mx-[1px]"
            >
          <router-link to="/tentang-kami" class="lg:text-[16px] md:text-[14px] whitespace-nowrap px-5 flex" @click="moveIndicator(2)" active-class="text-[#F5AD3A] ">Tentang Kami</router-link>
        </li>
        <li class="text-[#101943] rounded-[30px] pt-[8px] pb-[10px] px-[15px] mx-[1px]"
            >
          <router-link to="/kontak" class="lg:text-[16px] md:text-[14px] px-5 flex" active-class="text-[#F5AD3A]" @click="moveIndicator(3)">Kontak</router-link>
        </li>

        <!-- Penahan kanan -->
        <ul class="text-red-100/0 lg:pt-[11px] lg:pb-[13px] md:pt-[10px] md:pb-[12px]">.</ul>
      </ul>
    </div>


     <router-link to="/SDG" class="max-sm:hidden w-20 sm:w-24 md:w-28 lg:w-32 max-w-[120px] text-[#101943]"active-class="text-[#F5AD3A]" @click="moveIndicator(4)">SDG's </router-link>

 
    <button @click="toggleMenu" class="md:hidden text-[#101943] focus:outline-none">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
    </button>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
      <ul class="flex flex-col items-start p-4 space-y-2">
        <li><router-link to="/" class="block w-full text-left py-2 px-4 " active-class="text-[#F5AD3A] bg-[#101943] rounded-[15px]">Beranda</router-link></li>
        <li><router-link to="/produk" class="block w-full text-left py-2 px-4 " active-class="text-[#F5AD3A] bg-[#101943] rounded-[15px]">Produk</router-link></li>
        <li><router-link to="/tentang-kami" class="block w-full text-left py-2 px-4" active-class="text-[#F5AD3A] bg-[#101943] rounded-[15px]">Tentang Kami</router-link></li>
        <li><router-link to="/kontak" class="block w-full text-left py-2 px-4" active-class="text-[#F5AD3A] bg-[#101943] rounded-[15px] ">Kontak</router-link></li>
        <li><router-link to="/SDG" class="block w-full text-left py-2 px-4" active-class="border-2 text-[#101943] rounded-[15px] ">SDG's</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const indicatorLeft = ref(0);
const indicatorWidth = ref(0);
const menuRef = ref(null);
const isOpen = ref(false);

const route = useRoute();

function moveIndicator(index) {
  const items = menuRef.value?.querySelectorAll("li");
  if (!items || !items[index]) return;
  const el = items[index];
  indicatorLeft.value = el.offsetLeft;
  indicatorWidth.value = el.offsetWidth;
}

// 🧠 Fungsi untuk atur indikator berdasarkan path sekarang
async function updateIndicatorFromRoute(path) {
  await nextTick();
  const lowerPath = path.toLowerCase();

  // Handle berbagai kemungkinan route termasuk turunan
  if (lowerPath === "/") moveIndicator(0);
  else if (lowerPath.startsWith("/produk")) moveIndicator(1);
  else if (lowerPath.startsWith("/tentang-kami")) moveIndicator(2);
  else if (lowerPath.startsWith("/kontak")) moveIndicator(3);
  else if (lowerPath.startsWith("/SDG")) moveIndicator(4);
  else moveIndicator(0); // default fallback biar gak error
}

// Toggle menu mobile
function toggleMenu() {
  isOpen.value = !isOpen.value;
}

// Saat pertama kali masuk halaman
onMounted(() => {
  updateIndicatorFromRoute(route.path);
});

// Saat ganti halaman atau refresh
watch(() => route.path, (newPath) => {
  updateIndicatorFromRoute(newPath);
});
</script>
