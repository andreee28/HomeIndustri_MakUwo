<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->

<template>
  <section
      v-motion
      :initial="{ opacity: 0, y: 50 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
      class="text-center py-16 px-6 bg-gradient-to-b from-[#101943] to-[#18235c] text-white"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#F5AD3A]">Tentang Home Industri Mak Uwo</h1>
      <p class="max-w-2xl mx-auto leading-relaxed text-lg">
        Home Industri Mak Uwo hadir dari semangat mengangkat cita rasa khas Nusantara dengan sentuhan inovatif.
        Kami menggunakan bahan lokal terbaik seperti <b>daun berlangkas (daun teh)</b>
        yang memberikan aroma dan rasa khas pada rendang kami.
      </p>
      <button
        class="bg-[#F5AD3A] text-[#101943] px-6 py-3 rounded-lg mt-6 font-semibold hover:bg-[#ffbd56] transition-all"
      ><router-link to="/tentang-kami#tentang">
        Kenali Lebih Dalam
      </router-link>
      </button>
    </section> 

   

<!-- <section> -->
<!-- h. Galeri Foto & Video -->
 <!-- <section id="galeri"></section>
<div  class="text-[#101943]">
  <h2 class="text-2xl md:text-3xl font-bold mb-6 text-center">Galeri Foto</h2>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <img src="@/assets/galeri1.jpg" alt="kegiatan" class="rounded-lg shadow-lg">
    <img src="@/assets/galeri2.jpg" alt="Proses pembuatan" class="rounded-lg shadow-lg">
    <img src="@/assets/galeri3.jpg" alt="proses pembuatan" class="rounded-lg shadow-lg">
    <img src="@/assets/galeri4.jpg" alt="Kegiatan" class="rounded-lg shadow-lg">
    <img src="@/assets/galeri5.jpg" alt="proses pembuatan" class="rounded-lg shadow-lg">
  
    
  </div>
</div>
</section> -->
<!-- GANTI HANYA BAGIAN GALERI INI -->
<section id="galeri" class="pb-4 pt-12 bg-white text-[#101943] ">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center">
      Galeri Foto
    </h2>

    <!-- Grid Galeri -->
    <div
      id="galeriGrid"
      class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500"
    >
      <img src="@/assets/galeri1.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri2.jpg" alt="Proses Pembuatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri3.jpg" alt="Produk" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri4.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/berlangkas1.jpg" alt="Proses Pembuatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri5.jpg" alt="Produk" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri6.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri7.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/berlangkas2.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/berlangkas3.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri9.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      <img src="@/assets/galeri8.jpg" alt="Kegiatan" class="rounded-lg shadow-lg object-cover w-full h-64" />
      
    </div>

    <!-- Tombol Lihat Selengkapnya -->
    <div class="text-center mt-8">
      <button
        id="toggleGaleri"
        class="bg-[#101943] text-[#F5AD3A] px-6 py-2 rounded-full hover:bg-[#F5AD3A] hover:text-[#101943] transition-all duration-300 flex items-center justify-center mx-auto cursor-pointer"
      >
        <span>Lihat Selengkapnya</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="2" stroke="currentColor"
             class="w-5 h-5 ml-2 transition-transform duration-300">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
</section>


<section id="tentang">
 
</section>


<section class="grid sm:grid-cols-1 md:grid-cols-2 items-center max-w-7xl m-auto p-8 lg:p-24 gap-8 md:gap-12 lg:gap-16 text-[#101943]">
<div class="flex justify-center items-center lg:-mb-14">
 <div class="grid grid-cols-2 gap-3 max-w-sm">

 <div class="col-span-1"> <img src=" @/assets/galeri6.jpg " alt="Foto 1"
class="rounded-lg shadow-lg object-cover w-full aspect-square" />
</div>
<div class="col-span-1">
 <img src="@/assets/galeri8.jpg " alt="Foto 2"
class="rounded-lg shadow-lg object-cover w-full aspect-square" />
</div>

 <div class="col-span-2">
 <img src="@/assets/galeri3.jpg " alt="Foto 3"
class="rounded-lg shadow-lg object-cover w-full aspect-video" />
</div>
 </div> 
</div>


<div class="w-full text-left">
 <h3 class="text-2xl md:text-3xl font-bold mb-4 text-center">
Asal-usul Inspirasi Produk
 </h3>
 <p class="leading-relaxed mb-4">
  Rendang Daun Berlangkas lahir dari rasa ingin menghadirkan sesuatu yang berbeda tanpa meninggalkan cita rasa khas daerah. Ide ini muncul ketika melihat bagaimana masyarakat Kampar sering memanfaatkan daun berlangkas sebagai bahan pelengkap masakan sehari-hari. Daun ini dikenal memiliki aroma lembut dan rasa gurih alami yang bisa menambah kelezatan masakan tanpa perlu tambahan penyedap buatan. Namun, penggunaannya masih jarang dikembangkan secara kreatif di dunia kuliner modern.
 </p>
 <p class="leading-relaxed mb-4">
  Dari situ muncul gagasan untuk memadukan daun berlangkas dengan rendang — sebuah eksperimen yang menghasilkan cita rasa baru yang unik. Perpaduan antara wangi lembut daun berlangkas dan rempah khas nusantara menciptakan harmoni rasa yang segar sekaligus menggugah selera.
 </p>
 <p>
  Lebih dari sekadar inovasi rasa, Rendang Daun Berlangkas juga menjadi bentuk penghargaan terhadap potensi bahan lokal yang melimpah di daerah Kampar. Setiap proses memasaknya menunjukkan ketekunan, kesabaran, dan rasa cinta terhadap hasil bumi sendiri — nilai-nilai yang ingin terus dijaga dan dikenalkan melalui setiap suapan rendang ini.
 </p>
 </div>
</section>


      <section class="pb-20">
  <div class="max-w-5xl mx-auto px-6">
    <!-- Judul Section -->
   

    <!-- Sejarah & Filosofi -->
    

    <!-- Manfaat & Kelebihan -->
    <div class="mb-10 -mt-4">
      <h3 class="text-2xl font-semibold text-[#101943] mb-4">
        Manfaat & Kelebihan Rendang Daun Teh
      </h3>
      <ul class="list-disc list-inside text-[#101943] leading-relaxed space-y-2">
        <li>Terbuat dari bahan alami pilihan dan segar</li>
        <li>Memiliki aroma khas yang menggugah selera</li>
        <li>Bisa tahan lama tanpa bahan pengawet</li>
        <li>Cocok sebagai lauk maupun oleh-oleh khas</li>
      </ul>
    </div>

    <!-- Kenapa Pilih Rendang Mak Uwo -->
    <div class="mb-12">
      <h3 class="text-2xl font-semibold text-[#101943] mb-4">
        Kenapa Harus Pilih Rendang Mak Uwo
      </h3>
      <p class="text-[#101943] leading-relaxed">
        Home Industri Mak Uwo hadir dengan cita rasa otentik yang dibuat dengan bahan pilihan dan proses masak tradisional. Kami selalu mengutamakan kualitas, rasa, dan pelayanan terbaik bagi pelanggan. Setiap porsi rendang menjadi wujud dedikasi kami terhadap kuliner Nusantara.
      </p>
    </div>

    <!-- Tips Menikmati -->
    <div>
      <h3 class="text-2xl font-semibold text-[#101943] mb-4">
        Tips Menikmati Rendang Daun Teh
      </h3>
      <ul class="list-disc list-inside text-[#101943] leading-relaxed space-y-2">
        <li>Sajikan dengan nasi hangat untuk rasa maksimal</li>
        <li>Padukan dengan sambal dan lalapan segar</li>
        <li>Simpan di tempat tertutup agar tetap awet</li>
      </ul>
    </div>
  </div>
</section>


<!-- b. Tentang Singkat Produk -->
<!-- <div class="mb-16">
  <h2 class="text-2xl md:text-3xl font-bold mb-4">Tentang Singkat Produk</h2>
  <p class="leading-relaxed text-gray-600">
    Rendang Daun Teh adalah inovasi kuliner khas Nusantara dengan keunikan penggunaan daun teh asli Kampar,
    berpadu bahan tradisional pilihan dan resep turun-temurun keluarga.
    Rasa gurih autentik hadir dari perpaduan rempah alami dan proses masak yang penuh kesabaran.
  </p>
</div>  -->

<!-- c. Keunggulan Produk -->


<!-- d. Produk Unggulan -->
<!-- <div class="mb- px-8">
  <h2 class="text-2xl md:text-3xl font-bold mb-6">Produk Unggulan</h2>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="border rounded-xl overflow-hidden shadow">
      <img src="" alt="Rendang Daun Teh Original" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">Rendang Daun Teh Original</h3>
        <p class="text-indigo-600 font-bold mt-2">Rp 45.000</p>
      </div>
    </div>
    <div class="border rounded-xl overflow-hidden shadow">
      <img src="" alt="Rendang Daun Teh Pedas" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">Rendang Daun Teh Pedas</h3>
        <p class="text-indigo-600 font-bold mt-2">Rp 50.000</p>
      </div>
    </div>
    <div class="border rounded-xl overflow-hidden shadow">
      <img src="" alt="Rendang Daun Teh Teri" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="font-semibold">Rendang Daun Teh Teri</h3>
        <p class="text-indigo-600 font-bold mt-2">Rp 55.000</p>
      </div>
    </div>
  </div>
</div> -->

<!-- g. Sertifikasi atau Penghargaan -->



















<!-- ini batas -->



  <div class="bg-white text-gray-800">
    <!-- HERO / PROFIL SINGKAT -->
     

    <!-- ASAL USUL DAUN BERLANGKAS -->
    <section class="py-10 px-6 bg-gray-50 text-center">
    <h2 class="text-2xl md:text-3xl font-bold mb-10 text-[#101943]">
      Mengenal Daun Berlangkas 🌿
    </h2>

    <div class="relative max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-white">
      <!-- Tombol Kiri -->
      <button
        @click="prevSlide"
        class="absolute left-1 top-1/3 transform -translate-y-1/2 bg-[#101943] border rounded-full p-2 shadow hover:bg-[#101943]/80 z-10"
      >
        <span class="text-xl text-[#F5AD3A]">‹</span>
      </button>

      <!-- Gambar + Deskripsi -->
      <transition-group name="fade" tag="div" class="relative">
        <div
          v-for="(slide, index) in [slides[currentSlide]]"
          :key="index"
          class="p-8"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="rounded-xl mx-auto w-full md:w-3/4 h-80 object-cover"
          />
          <h3 class="text-2xl font-semibold mt-6 text-[#101943]">
            {{ slide.title }}
          </h3>
          <p class="text-[#101943] mt-4 text-lg leading-relaxed">
            {{ slide.description }}
          </p>
        </div>
      </transition-group>

      <!-- Tombol Kanan -->
      <button
        @click="nextSlide"
        class="absolute right-1 top-1/3 transform -translate-y-1/2 bg-[#101943] border rounded-full p-2 shadow hover:bg-[#101943]/80 z-10"
      >
        <span class="text-xl text-[#F5AD3A]">›</span>
      </button>

      <!-- Indikator -->
      <div class="flex justify-center mt-6 mb-8 space-x-2">
        <span
          v-for="(dot, i) in slides"
          :key="i"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="i === currentSlide ? 'bg-[#101943]' : 'bg-gray-300'"
          @click="goToSlide(i)"
        ></span>
      </div>
    </div>
  </section>

    <!-- DAPUR MACHO -->
    <section class="pt-16 pb-4 bg-[#F9FAFB] text-center">
  <h2 class="text-3xl font-bold mb-6 text-[#101943]">Dari Dapur ke Meja Makan 🍳</h2>
  <p class="max-w-3xl mx-auto text-gray-600 text-lg mb-12">
    Proses pembuatan makanan kami dilakukan dengan penuh ketelitian — mulai dari pemilihan bahan segar,
    pengolahan yang higienis, hingga pengemasan yang rapi agar kualitas tetap terjaga.
  </p>

  <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <!-- <img src="@/assets/hero.png" alt="Bumbu" class="w-12 mx-auto mb-4" /> -->
      <h3 class="font-semibold text-xl text-[#101943]">Bahan Pilihan</h3>
      <p class="text-gray-600 mt-2">Kami hanya menggunakan bahan segar dan berkualitas dari petani lokal.</p>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <!-- <img src="@/assets/hero.png" alt="Memasak" class="w-12 mx-auto mb-4" /> -->
      <h3 class="font-semibold text-xl text-[#101943]">Rasa Autentik Nusantara</h3>
      <p class="text-gray-600 mt-2">Setiap resep diolah dengan teknik tradisional untuk menjaga cita rasa khas yang otentik.</p>
    </div>

    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <!-- <img src="@/assets/hero.png" alt="Kemasan" class="w-12 mx-auto mb-4" /> -->
      <h3 class="font-semibold text-xl text-[#101943]">Pengemasan Rapi</h3>
      <p class="text-gray-600 mt-2">Setiap produk dikemas higienis agar tetap segar saat sampai di tangan pelanggan.</p>
    </div>
  </div>
</section>


    <!-- PRODUK COMING SOON -->
    <section class="py-20 px-6 bg-gray-50 text-center">
      <div
        v-motion
        :initial="{ opacity: 0, y: 60 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
        class="max-w-4xl mx-auto"
      >
        <h2 class="text-3xl font-bold mb-6">Inovasi Selanjutnya Segera Hadir 🚀</h2>
        <p class="text-lg leading-relaxed mb-10">
          Kami sedang mengembangkan varian baru seperti <b>Rendang Telur</b> dan
          <b>Rendang Paru </b>. Nantikan kehadirannya di etalase kami!
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="p-8 border-2 border-dashed rounded-2xl">
            <img
              src="@/assets/hero.png"
              alt="Coming Soon"
              class="opacity-50 rounded-xl mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-600">Rendang Telur</h3>
            <p class="text-sm text-gray-500 italic">Coming Soon...</p>
          </div>
          <div class="p-8 border-2 border-dashed rounded-2xl">
            <img
              src="@/assets/hero.png"
              alt="Coming Soon"
              class="opacity-50 rounded-xl mb-4"
            />
            <h3 class="text-xl font-semibold text-gray-600">Rendang Paru</h3>
            <p class="text-sm text-gray-500 italic">Coming Soon...</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOG UMKM -->
    <section class="py-12 bg-white text-[#101943]">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">
      Cerita & Inspirasi dari Home Industri Mak Uwo ✍️
    </h2>

    <!-- Grid Card -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      <div
        v-for="(item, i) in blogs"
        :key="i"
        class="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all text-left h-full flex flex-col"
      >
        <h3 class="text-xl font-semibold mb-3 text-left">{{ item.judul }}</h3>
        <p class="text-gray-600 text-sm mb-4 flex-grow text-left">
          {{ item.deskripsi }}
        </p>
        <button
          @click="bukaCerita(item)"
          class="text-[#101943] font-medium hover:underline mt-auto text-left"
        >
          Baca Selengkapnya →
        </button>
      </div>
    </div>
  </div>



  <!-- Overlay Cerita -->
  <transition name="fade-slide">
    <div
      v-if="ceritaTerbuka"
      class="fixed inset-0 z-50 flex justify-center items-center p-6 backdrop-blur-sm bg-white/30"
    >
      <div
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.6 } }"
        class="bg-white/90 rounded-2xl max-w-3xl w-full p-8 shadow-2xl border border-gray-200 text-left overflow-y-auto max-h-[90vh]"
      >
        <h3 class="text-2xl font-bold mb-4 text-[#101943]">
          {{ ceritaTerbuka.judul }}
        </h3>
        <p class="text-gray-700 leading-relaxed mb-6">
          {{ ceritaTerbuka.isi }}
        </p>

        <div class="text-center">
          <button
            @click="tutupCerita"
            class="bg-[#101943] text-[#F5AD3A] px-6 py-2 rounded-full hover:bg-[#F5AD3A] hover:text-[#101943] transition"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  </transition>
</section>
<div class="mb-16 text-[#101943] px-8 mt-12">
  <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center">Sertifikasi</h2>

  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
    <!-- Sertifikat Halal -->
    <div class="p-6 border rounded-2xl shadow-md bg-white w-full max-w-sm flex flex-col items-center transition hover:shadow-lg hover:scale-[1.02] duration-300">
      <div class="overflow-hidden rounded-lg border mb-4 w-full h-64 bg-gray-50 flex items-center justify-center">
        <img src="" alt="Sertifikat Halal MUI" class="object-contain w-full h-full" />
      </div>
      <p class="font-semibold text-center">Sertifikat Halal MUI</p>
      <p class="text-sm text-gray-600 text-center mt-1">Dokumen resmi dari MUI sebagai bukti kehalalan produk.</p>
    </div>

    <!-- NIB -->
    <div class="p-6 border rounded-2xl shadow-md bg-white w-full max-w-sm flex flex-col items-center transition hover:shadow-lg hover:scale-[1.02] duration-300">
      <div class="overflow-hidden rounded-lg border mb-4 w-full h-64 bg-gray-50 flex items-center justify-center">
        <img src="" alt="Nomor Induk Berusaha" class="object-contain w-full h-full" />
      </div>
      <p class="font-semibold text-center">Nomor Induk Berusaha (NIB)</p>
      <p class="text-sm text-gray-600 text-center mt-1">
        Bukti legalitas usaha yang terdaftar resmi di OSS atas nama pemilik usaha.
      </p>
    </div>

    <!-- BPOM -->
    <div class="p-6 border rounded-2xl shadow-md bg-white w-full max-w-sm flex flex-col items-center transition hover:shadow-lg hover:scale-[1.02] duration-300">
      <div class="overflow-hidden rounded-lg border mb-4 w-full h-64 bg-gray-50 flex items-center justify-center">
        <img src="" alt="BPOM" class="object-contain w-full h-full" />
      </div>
      <p class="font-semibold text-center">BPOM</p>
      <p class="text-sm text-gray-600 text-center mt-1">
        Sertifikasi kelayakan pangan yang menjamin keamanan produk untuk dikonsumsi.
      </p>
    </div>
    <div class="p-6 border rounded-2xl shadow-md bg-white w-full max-w-sm flex flex-col items-center transition hover:shadow-lg hover:scale-[1.02] duration-300">
      <div class="overflow-hidden rounded-lg border mb-4 w-full h-64 bg-gray-50 flex items-center justify-center">
        <img src="" alt="BPOM" class="object-contain w-full h-full" />
      </div>
      <p class="font-semibold text-center">BPOM</p>
      <p class="text-sm text-gray-600 text-center mt-1">
        Sertifikasi kelayakan pangan yang menjamin keamanan produk untuk dikonsumsi.
      </p>
    </div>
  </div>
</div>

    <!-- VISI MISI -->
    
<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->
    <!-- AJAK KOLABORASI -->
    <section class="py-20 px-6 bg-[#101943] text-center text-[#F5AD3A]">
  <div
    v-motion
    :initial="{ opacity: 0, y: 60 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    class="max-w-3xl mx-auto"
  >
    <h2 class="text-3xl font-bold mb-4">Mau Kolaborasi dengan Kami?</h2>
    <p class="text-lg mb-6">
      Kami terbuka untuk kerja sama dengan UMKM, influencer kuliner, dan distributor daerah.
      Ayo tumbuh bersama Rendang Macho!
    </p>
    <a
      href="https://wa.me/6285355292285?text=Halo%2C%20saya%20ingin%20kolaborasi%20dengan%20Home%20Industri%20Mak%20Uwo"
      target="_blank"
      class="inline-block bg-[#F5AD3A] text-[#101943] px-8 py-3 rounded-lg font-semibold hover:bg-[#ffbd56] transition-all"
    >
      Hubungi Kami di WhatsApp
    </a>
  </div>
</section>

  </div>
  <div class="text-center mt-12">
    <a 
      href="/favicon.ico"
      download
      class="bg-[#2b367c] text-white px-4 py-2 text-sm rounded-md shadow-md hover:bg-[#3e4a9b] transition-all"
    >
      📘 Download Buku Panduan
    </a>
  </div>

  

    </template>

<script setup>
import { ref } from "vue";

const ceritaTerbuka = ref(null);

const bukaCerita = (item) => {
  ceritaTerbuka.value = item;
};

const tutupCerita = () => {
  ceritaTerbuka.value = null;
};

const blogs = [
  {
    judul: "Tips UMKM Kuliner Bertahan di Era Online",
    deskripsi:
      "Strategi sederhana agar bisnis kuliner tetap laku meski persaingan makin ketat.",
    isi: "Dalam era digital seperti sekarang, UMKM kuliner harus beradaptasi dengan perubahan pola konsumsi pelanggan. Salah satu cara terbaik adalah dengan memanfaatkan media sosial untuk promosi, serta membuka layanan pemesanan online agar pelanggan lebih mudah menjangkau produk kamu.",
  },
  {
    judul: "Inovasi Rasa Tradisional dengan Sentuhan Modern",
    deskripsi:
      "Bagaimana menjaga cita rasa asli sambil menghadirkan inovasi yang menarik pelanggan.",
    isi: "Dalam dunia kuliner, inovasi adalah kunci agar produk tetap relevan. Namun, menjaga cita rasa tradisional juga penting untuk mempertahankan identitas. Caranya bisa dengan menambahkan bahan baru yang tetap harmonis dengan rasa dasar atau mengubah cara penyajian agar lebih modern tanpa mengubah resep utama. Dengan begitu, pelanggan lama tetap puas, dan pelanggan baru pun tertarik untuk mencoba."
  },
  {
    judul: "Cara Menjaga Branding UMKM Kuliner",
    deskripsi:
      "Kiat praktis agar brand kamu tetap dipercaya dan dikenal pelanggan.",
    isi: "Branding bukan hanya soal logo atau nama, tetapi tentang bagaimana pelanggan merasakan pengalaman dari produkmu. Konsistensi rasa, pelayanan, dan cerita di balik produk menjadi faktor penting membangun kepercayaan jangka panjang.",
  },
  {
    judul: "Mengenal Bahan Lokal Bernilai Tinggi",
    deskripsi:
      "Bahan alami Indonesia punya potensi besar untuk produk premium.",
    isi: "Indonesia kaya akan bahan pangan lokal yang berkualitas tinggi. Dengan sedikit inovasi dan sentuhan modern, bahan-bahan ini bisa menjadi produk bernilai premium yang disukai pasar domestik maupun internasional.",
  },
  {
    judul: "Tips Mengembangkan Varian Produk Tanpa Kehilangan Ciri Asli",
    deskripsi:
      "Tambahkan variasi produk tanpa membuat pelanggan lama merasa asing.",
    isi: "Salah satu kesalahan umum UMKM adalah membuat varian rasa yang terlalu jauh dari produk aslinya. Sebaiknya kembangkan varian dengan tetap membawa ciri khas utama, misalnya melalui bahan tambahan, tingkat kepedasan, atau tampilan kemasan. Dengan begitu, pelanggan baru tertarik mencoba, sementara pelanggan lama tetap merasa familiar."
  },
  {
    judul: "Mengapa UMKM Harus Punya Website Sendiri",
    deskripsi:
      "Website membuat brand kamu lebih kredibel dan mudah ditemukan pelanggan.",
    isi: "Meski media sosial penting, website memberi kesan profesional dan kontrol penuh terhadap brand kamu. Di website, kamu bisa menampilkan profil usaha, katalog produk, serta blog edukatif. Selain itu, website juga membantu usahamu muncul di hasil pencarian internet sehingga pelanggan bisa menemukanmu dengan mudah."
  },
  {
  judul: "Rahasia Konsistensi Rasa di Usaha Kuliner",
  deskripsi:
    "Konsistensi rasa adalah kunci agar pelanggan selalu kembali membeli produkmu.",
  isi: "Dalam dunia kuliner, rasa adalah segalanya. Namun lebih dari itu, konsistensi rasa menjadi penentu utama apakah pelanggan akan kembali atau tidak. Tidak cukup hanya sekali enak — pelanggan ingin merasakan kenikmatan yang sama setiap kali membeli. Untuk menjaga hal ini, penting bagi pelaku UMKM untuk memiliki standar resep dan proses produksi yang jelas. Gunakan takaran yang konsisten, bahan berkualitas, serta cara pengolahan yang sama setiap kali memasak. Selain itu, catat perubahan kecil apa pun yang bisa memengaruhi rasa, seperti tingkat panas, lama memasak, atau perbedaan bahan baku. Konsistensi juga bisa dijaga dengan pelatihan tim produksi agar semua anggota memahami cita rasa khas produkmu. Dengan menjaga rasa tetap sama dari waktu ke waktu, kamu sedang membangun kepercayaan dan identitas rasa yang akan selalu diingat pelanggan."
},

{
  judul: "Kelebihan Menggunakan Website Sebagai Toko Online Sendiri",
  deskripsi:
    "Website memberi kamu kebebasan penuh untuk menampilkan produk, cerita, dan gaya brand sendiri.",
  isi: "Memiliki website pribadi untuk bisnismu berarti kamu tidak hanya menjual produk, tapi juga membangun identitas dan kepercayaan jangka panjang. Di media sosial, kamu terikat dengan aturan dan algoritma yang bisa berubah kapan saja. Namun dengan website, kamu punya kendali penuh atas tampilan, informasi, dan cara berinteraksi dengan pelanggan. Website bisa berfungsi sebagai etalase digital yang menampilkan produk dengan desain yang menarik, informasi harga yang jelas, serta cerita di balik pembuatan produkmu. Kamu juga bisa menambahkan fitur pemesanan langsung, testimoni pelanggan, hingga blog yang berbagi tips dan kisah inspiratif. Selain itu, website membuat usahamu lebih mudah ditemukan di hasil pencarian internet, membuka peluang menjangkau pelanggan baru tanpa batas wilayah. Dengan website, kamu bukan hanya terlihat profesional, tetapi juga siap berkembang di dunia bisnis digital."
},

{
  judul: "Mengubah Komplain Jadi Peluang untuk Tumbuh",
  deskripsi:
    "Setiap keluhan pelanggan bisa menjadi bahan berharga untuk memperbaiki dan meningkatkan bisnismu.",
  isi: "Banyak pelaku usaha yang merasa kecewa saat menerima komplain dari pelanggan, padahal sebenarnya itu adalah bentuk perhatian dan peluang untuk tumbuh. Ketika pelanggan memberikan kritik, mereka sesungguhnya masih peduli dan ingin kamu memperbaiki layanan atau produk. Cara terbaik merespons komplain adalah dengan sikap terbuka dan empati. Dengarkan masalah mereka dengan sabar, akui kekurangan jika memang ada, lalu tawarkan solusi yang tulus. Dari setiap keluhan, kamu bisa menemukan celah untuk meningkatkan kualitas — entah dari rasa, kemasan, pelayanan, atau cara komunikasi. Bahkan, pelanggan yang puas dengan respon positifmu bisa berubah menjadi pelanggan setia. Jadi, alih-alih menghindari kritik, jadikan setiap komplain sebagai bahan evaluasi untuk membawa bisnismu ke arah yang lebih baik."
},

{
  judul: "Menghadirkan Pengalaman yang Berkesan bagi Pelanggan",
  deskripsi:
    "Rasa enak saja tidak cukup, pelanggan harus merasa terhubung dengan brand kamu.",
  isi: "Dalam dunia bisnis kuliner yang semakin ramai, pengalaman pelanggan adalah kunci pembeda yang sering diabaikan. Tidak hanya soal cita rasa, tetapi juga bagaimana pelanggan merasa dihargai, disambut, dan diingat. Pengalaman yang berkesan bisa muncul dari hal-hal sederhana seperti kemasan yang rapi, sapaan ramah di chat, atau pesan kecil ucapan terima kasih saat pengiriman. Ketika pelanggan merasa diperhatikan, mereka tidak hanya membeli produkmu — mereka membeli perasaan positif di baliknya. Kamu juga bisa memperkuat pengalaman ini dengan menceritakan kisah brand, menampilkan proses pembuatan, atau memperkenalkan tim di balik dapur. Semua itu menciptakan kedekatan emosional antara produk dan pelanggan. Dengan cara ini, setiap pembelian bukan sekadar transaksi, melainkan hubungan yang terus tumbuh."
},

{
  judul: "Pentingnya Mendengar Masukan dari Pembeli",
  deskripsi:
    "Masukan pelanggan bisa membuka wawasan baru tentang apa yang benar-benar mereka butuhkan.",
  isi: "Sering kali, pelaku usaha terlalu fokus pada produksi hingga lupa mendengar suara pelanggan. Padahal, pelanggan adalah sumber informasi paling jujur tentang kualitas produkmu. Mendengarkan mereka tidak hanya berarti membaca komentar atau pesan, tapi benar-benar memahami apa yang mereka rasakan setelah membeli. Dari masukan pelanggan, kamu bisa mengetahui apa yang perlu ditingkatkan — apakah rasa terlalu kuat, kemasan kurang praktis, atau pelayanan yang bisa dibuat lebih cepat. Jangan takut terhadap kritik, karena dari situlah lahir perbaikan yang berarti. Kamu juga bisa membuat survei sederhana, menanyakan pengalaman mereka secara langsung, atau memberi ruang bagi pelanggan untuk berbagi cerita di media sosial. Dengan mendengarkan dan merespons secara bijak, kamu membangun hubungan dua arah yang memperkuat loyalitas pelanggan terhadap brand kamu."
}

];


import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import berlangkas1 from "@/assets/berlangkas1.jpg";
import berlangkas2 from "@/assets/berlangkas2.jpg";
import berlangkas3 from "@/assets/berlangkas3.jpg";


const route = useRoute()

onMounted(() => {
  // ====== Fungsi scroll ke #galeri saat datang dari beranda ======
  if (route.hash === '#galeri') {
    const el = document.querySelector(route.hash)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    }
  }

  // ====== Script tombol "Lihat Selengkapnya" ======
  const grid = document.getElementById("galeriGrid")
  const images = Array.from(grid.querySelectorAll("img"))
  const btn = document.getElementById("toggleGaleri")
  const svgPath = btn.querySelector("path")
  const btnText = btn.querySelector("span")

  const batchSize = 9
  let visibleCount = batchSize

  // Awal: hanya tampilkan 9 foto pertama
  images.forEach((img, i) => {
    if (i >= batchSize) img.classList.add("hidden")
  })

  btn.addEventListener("click", () => {
    if (visibleCount < images.length) {
      // Tampilkan batch berikutnya
      const nextCount = Math.min(visibleCount + batchSize, images.length)
      for (let i = visibleCount; i < nextCount; i++) {
        images[i].classList.remove("hidden")
        images[i].classList.add("opacity-0")
        setTimeout(() => images[i].classList.remove("opacity-0"), 20)
      }
      visibleCount = nextCount

      if (visibleCount === images.length) {
        btnText.textContent = "Sembunyikan"
        svgPath.setAttribute("d", "M5 15l7-7 7 7") // panah ke atas
      }
    } else {
      // Sembunyikan kembali
      images.forEach((img, i) => {
        if (i >= batchSize) img.classList.add("hidden")
      })
      visibleCount = batchSize
      btnText.textContent = "Lihat Selengkapnya"
      svgPath.setAttribute("d", "M19 9l-7 7-7-7") // panah ke bawah

      // Scroll balik ke bagian atas galeri
      window.scrollTo({ top: grid.offsetTop - 100, behavior: "smooth" })
    }
  })
})

// 🌿 Daftar slide (kamu bisa tambah slide baru di sini!)
const slides = [
  {
    title: "Aroma Alami yang Menyegarkan 🌿",
    description:
      "Daun berlangkas memiliki aroma lembut dan khas yang mampu menenangkan pikiran serta menambah kesegaran pada masakan maupun lingkungan sekitar. Aromanya halus, alami, dan memberi kesan menenangkan.",
    image: berlangkas1,
  },
  {
    title: "Memberi Rasa Gurih Alami 🍃",
    description:
      "Ketika direbus atau dimasak, daun berlangkas mengeluarkan rasa gurih yang ringan dan alami tanpa perlu tambahan penyedap buatan. Inilah yang membuatnya menjadi pilihan ideal bagi pecinta cita rasa sehat dan alami.",
    image: berlangkas2,
  },
  {
    title: "Kaya Akan Senyawa Alami 🌱",
    description:
      "Daun berlangkas mengandung minyak atsiri dan senyawa bioaktif alami yang tidak hanya memberikan aroma segar, tetapi juga dipercaya membantu menenangkan tubuh dan pikiran secara alami.",
    image: berlangkas3,
  },
  {
    title: "Tahan di Iklim Tropis ☀️",
    description:
      "Tanaman berlangkas tumbuh subur di bawah sinar matahari tropis dan tidak memerlukan perawatan rumit. Cocok ditanam di pekarangan rumah, bahkan dengan kondisi tanah sederhana sekalipun.",
    image: berlangkas1,
  },
  {
    title: "Menambah Kesegaran pada Hidangan 💧",
    description:
      "Selain aromanya yang menenangkan, daun berlangkas mampu memberikan sensasi segar pada makanan, terutama pada masakan berbumbu kuat seperti rendang atau sup tradisional.",
    image: berlangkas1,
  },
  {
    title: "Ramah Lingkungan dan Alami 🌾",
    description:
      "Tanaman berlangkas tidak memerlukan bahan kimia atau pupuk berlebih untuk tumbuh. Sifatnya yang alami menjadikannya tumbuhan ramah lingkungan dan mudah dibudidayakan oleh siapa saja.",
    image: berlangkas2,
  },
];

// ⚙️ Logika slider
const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length;
};
const goToSlide = (i) => {
  currentSlide.value = i;
};

</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}


</style>






