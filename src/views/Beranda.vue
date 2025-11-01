<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->

<template>





    <section class="animate-fadeIn flex flex-col-2 md:flex-row items-center justify-between px-6 md:px-16 lg:px-32 py-10 md:py-20">
  <!-- Kiri: Text -->
  <div class=" w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101943] leading-tight">
      HOME INDUSTRI <br /> MAK UWO
    </h1>
    <p class="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
      Rendang Maco Khas Kampar
    </p>
    <router-link to=/produk>
    <button class="mt-6 px-6 py-3 bg-[#101943] text-[#F5AD3A] rounded-[20px] shadow text-sm sm:text-base hover:bg-[#F5AD3A] hover:text-[#101943] cursor-pointer">
      Pesan Sekarang
    </button>
  </router-link>
  </div >

  <!-- Kanan: Gambar -->
  <div class="w-full md:w-1/2 flex justify-center md:justify-end">
    <img
      src="@/assets/hero.png"
      alt="Produk"
      class="w-64 sm:w-80 md:w-100 lg:w-140 max-w-144 "
    />
  </div>
</section>

<section class="px-4 md:px-8 lg:px-16 py-10">
    <div class="bg-[#101943] rounded-[30px] shadow-[0_9px_15px_rgba(0,0,0,0.70)] p-8 md:p-12">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-[#F5AD3A] text-center md:text-left">
        
        <!-- VISI -->
        <div>
          <h2 class="text-xl font-bold mb-4 ">VISI</h2>
          <p class="text-sm leading-relaxed">
            Mewujudkan pengalaman kuliner siap saji yang mengangkat cita rasa autentik khas nusantara dengan kualitas terbaik, sentuhan inovasi, dan kemudahan bagi siapa pun untuk menikmati kelezatan rendang daun teh khas Kampar kapan saja dan di mana saja.
          </p>
        </div>

        <!-- MISI -->
        <div>
          <h2 class="text-xl font-bold mb-4 ">MISI</h2>
          <p class="text-sm leading-relaxed">
            Mewujudkan pengalaman kuliner siap saji yang mengangkat cita rasa autentik khas nusantara dengan kualitas terbaik, sentuhan inovasi, dan kemudahan bagi siapa pun untuk menikmati kelezatan rendang daun teh khas Kampar dengan cara yang praktis dan menyenangkan.
          </p>
        </div>

      </div>
    </div>
  </section>
  <section class="bg-white pt-8 px-4 sm:px-6 lg:px-8 text-[#101943] pb-16">
  <h1 class="text-2xl font-bold text-center mb-9 uppercase">Alasan Memilih Kami</h1>

  <div class="grid sm:grid-cols-1 md:grid-cols-3 justify-center items-center text-center max-w-6xl mx-auto">
    
    <!-- 1. Produk Unggulan -->
    <div class="flex flex-col items-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
      <div class="bg-[#101943] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
        <FontAwesomeIcon :icon="['fas', 'angles-up']" />
      </div>
      <h2 class="text-xl font-bold mb-2">Produk Unggulan & Berkualitas</h2>
      <p class="text-md">
        Rendang daun teh khas Kampar dengan cita rasa rempah dan aroma daun berlangkas (daun teh) yang menggugah selera.
      </p>
    </div>

    <!-- 2. Harga Terjangkau -->
    <div class="flex flex-col items-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
      <div class="bg-[#101943] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
        <FontAwesomeIcon :icon="['fas', 'dollar-sign']" />
      </div>
      <h2 class="text-xl font-bold mb-2">Harga Terjangkau</h2>
      <p class="text-md">
        Lezat dan terjangkau. Perpaduan rasa gurih, empuknya daging, dan aroma daun teh yang khas menjadikannya pilihan tepat untuk semua kalangan.
      </p>
    </div>

    <!-- 3. Pelayanan Cepat & Ramah -->
    <div class="flex flex-col items-center p-6 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1">
      <div class="bg-[#101943] rounded-full w-16 h-16 flex items-center justify-center mb-4 text-white text-2xl">
        <FontAwesomeIcon :icon="['fas', 'smile']" />
      </div>
      <h2 class="text-xl font-bold mb-2">Pelayanan Cepat & Ramah</h2>
      <p class="text-md">
        Mengutamakan kenyamanan pelanggan. Setiap pesanan diproses dengan cepat dan penuh perhatian, agar cita rasa tradisional tersaji dengan pelayanan modern.
      </p>
    </div>

  </div>
</section>


<section class="mt-4">
  <div>
    <!-- Bagian hijau -->
    <div class="bg-[#101943] text-[#F5AD3A] pb-50 pt-10 text-center">
      <div class="pt-10 max-w-4xl mx-auto px-8">
    <h2 class="flex justify-center text-2xl font-bold mb-8 ">Kenapa Home Industri Mak Uwo Berbeda?</h2>
    <p class="text-justify leading-relaxed mb-8">
      Home Industri Mak Uwo hadir dari perpaduan antara kekayaan tradisi dan sentuhan inovasi kuliner Nusantara. Kami berkomitmen menjaga cita rasa autentik rendang khas Indonesia, dipadukan dengan bahan pilihan serta aroma khas daun berlangkas (daun teh) yang menjadi ciri istimewa kami. Setiap hidangan dibuat dengan sepenuh hati — tanpa bahan pengawet — demi menjaga rasa, kualitas, dan keaslian cita rasa khas Mak Uwo.
    </p>

    <p class="text-justify leading-relaxed mb-8">
      menghadirkan produk yang mengutamakan cita rasa dan keaslian bahan. Karena bagi kami, makanan bukan hanya tentang rasa, tapi juga tentang momen dan kebersamaan yang tercipta darinya. Di setiap kemasan, tersimpan cerita tentang proses yang penuh ketelitian, mulai dari pemilihan bahan, cara memasak, hingga penyajian yang menjaga kelezatan alami.
    </p>
    <p class="text-justify leading-relaxed mb-8">
      Kami percaya bahwa cita rasa terbaik hadir dari kejujuran dalam proses dan ketulusan dalam setiap masakan. Melalui setiap produk, kami ingin menghadirkan kembali suasana hangat dapur rumahan Indonesia — rasa yang akrab, menggugah kenangan, dan menumbuhkan kebanggaan akan kuliner Nusantara.
    </p>
  </div>
    </div>

    <!-- Card putih -->
    <div class="max-w-6xl mx-auto -mt-24 bg-white rounded-2xl shadow-lg p-10 text-[#101943]">
      <!-- Judul -->
      <h2 class="text-2xl font-bold text-center mb-10">Ciri Khas Produk Kami</h2>

      <!-- Grid icon -->
      <div class="grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <!-- Item -->
        <div class="flex flex-col items-center">
          <div class="bg-[#101943] p-6 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke-width="1" 
                 stroke="currentColor" 
                 class="w-10 h-10 text-[#F5AD3A]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 2C9 8 4 10 4 15a8 8 0 0016 0c0-5-5-7-8-13z" />
            </svg>
          </div>
          <h3 class="font-medium">Pemilihan Bahan Alami</h3>
        </div>

        <!-- Item -->
        <div class="flex flex-col items-center">
          <div class="bg-[#101943] p-6 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke-width="1" 
                 stroke="currentColor" 
                 class="w-10 h-10 text-[#F5AD3A]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M5 10V8a7 7 0 0114 0v2m-1 10H6a2 2 0 01-2-2v-6h16v6a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="font-medium">Proses Masak Tradisional</h3>
        </div>

        <!-- Item -->
        <div class="flex flex-col items-center">
          <div class="bg-[#101943] p-6 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke-width="1" 
                 stroke="currentColor" 
                 class="w-10 h-10 text-[#F5AD3A]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <h3 class="font-medium">Inovasi Cita Rasa</h3>
        </div>

        <!-- Item -->
        <div class="flex flex-col items-center">
          <div class="bg-[#101943] p-6 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke-width="1" 
                 stroke="currentColor" 
                 class="w-10 h-10 text-[#F5AD3A] ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 7l9-4 9 4-9 4-9-4zm0 4l9 4 9-4M3 15l9 4 9-4" />
            </svg>
          </div>
          <h3 class="font-medium">Pengemasan Modern</h3>
        </div>
      </div>
    </div>
  </div>

</section>


  <section>
    <div class="my-16 text-[#F5AD3A] px-8">
      <h2 class="text-2xl text-center md:text-2xl font-bold mb-12 text-[#101943]">
        Keunggulan Produk
      </h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in items"
          :key="index"
          @click="openModal(item)"
          class="p-6 bg-[#101943] rounded-xl shadow hover:shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1 cursor-pointer"
        >
          <h3 class="font-semibold text-lg mb-2">{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click.self="closeModal"
    >
      <div
        class="bg-white p-8 rounded-2xl shadow-lg max-w-md w-[90%] text-center animate-fadeIn"
      >
        <h3 class="text-xl font-bold text-[#101943] mb-4">
          {{ selectedItem.title }}
        </h3>
        <p class="text-gray-700 mb-6">{{ selectedItem.detail }}</p>
        <button
          @click="closeModal"
          class="px-5 py-2 text-[#F5AD3A] bg-[#101943] rounded-lg font-semibold hover:bg-[#F5AD3A] hover:text-[#101943] transition"
        >
          Tutup
        </button>
      </div>
    </div>
  </section>


  <section class=" py-12 px-4 ">
    <div class="max-w-6xl mx-auto">
      <!-- Judul -->
      <h2 class="text-2xl md:text-3xl font-bold text-center text-[#101943] mb-8">
        Dokumentasi
      </h2>

      <!-- Grid Foto -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <img src="@/assets/galeri1.jpg" alt="Proses Pembuatan" class="rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform" />
        <img src="@/assets/galeri3.jpg" alt="Bahan Baku" class="rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform" />
        <img src="@/assets/galeri5.jpg" alt="Produk Jadi" class="rounded-lg shadow-lg hover:scale-105 hover:brightness-110 transition-transform" />
      
      </div>

      <!-- Tombol -->
      <div class="text-center">
        <router-link 
  to="/tentang-kami#galeri"
  class="inline-block px-6 py-3 border-2 border-[#101943] text-[#101943] font-bold rounded-full hover:bg-[#101943] hover:text-[#F5AD3A] transition"
>
  LIHAT GALERI LENGKAP
</router-link>
      </div>
    </div>
  </section>







</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const selectedItem = ref({});

const items = [
  {
    title: "100% Bahan Alami",
    desc: "Dibuat dari rempah dan bahan pilihan tanpa bahan kimia.",
    detail:
      "Home Industri Mak Uwo menggunakan bahan segar seperti daun teh dan rempah pilihan tanpa bahan pengawet atau pewarna buatan.",
  },
  {
    title: "Tanpa Pengawet",
    desc: "Aman dikonsumsi oleh semua kalangan.",
    detail:
      "Setiap makanan dimasak secara alami tanpa bahan kimia tambahan, menjadikannya aman untuk anak-anak maupun orang dewasa.",
  },
  {
    title: "Rasa Autentik",
    desc: "Menghadirkan cita rasa Nusantara yang khas.",
    detail:
      "Rasa khas rendang tradisional berpadu dengan aroma daun teh menciptakan pengalaman kuliner unik dan autentik.",
  },
  {
    title: "Resep Turun-temurun",
    desc: "Menjaga tradisi kuliner warisan daerah",
    detail:
      "Mengusung cita rasa autentik khas daerah yang dijaga turun-temurun agar tetap orisinal.",
  },
  {
    title: "Pengiriman Cepat",
    desc: "Pesanan dikirim dengan aman dan cepat.",
    detail:
      "Setiap pesanan dikirim secepat mungkin agar produk sampai dalam kondisi terbaik dan siap dinikmati.",
  },
];

function openModal(item) {
  selectedItem.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}









</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}


</style>



  