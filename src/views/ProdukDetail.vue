<template>
  <div v-if="product" class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl mt-10 overflow-hidden">
    <!-- Gambar Produk -->
    <div class="relative">
      <img :src="product.images[currentImage]" :alt="product.name" class="w-full h-96 object-cover" />
      <button @click="prevImage" class="absolute left-4 top-1/2 -translate-y-1/2 bg-[#101943] text-[#F5AD3A] p-3 rounded-full">‹</button>
      <button @click="nextImage" class="absolute right-4 top-1/2 -translate-y-1/2 bg-[#101943] text-[#F5AD3A] p-3 rounded-full">›</button>
      <div class="absolute bottom-0 left-0 right-0 bg-[#101943] text-[#F5AD3A] p-4 text-center">
        <h1 class="text-3xl font-bold capitalize">{{ product.name }}</h1>
      </div>
    </div>

    <!-- Detail Produk -->
    <div class="p-8 text-gray-800">
      <p class="text-lg leading-relaxed text-justify mb-6">{{ product.description }}</p>

      <!-- Info Produk -->
      <!-- Info Produk -->
<div class="grid sm:grid-cols-2 gap-4 mb-8">
  <div>
    <p class="font-semibold text-[#101943]">Pilih Berat ⚖️</p>
    <select v-model="selectedWeight" class="border p-2 rounded-md w-full">
      <option v-for="(option, idx) in product.options" :key="idx" :value="option">
        {{ option.weight }}
      </option>
    </select>
  </div>
  <div>
    <p class="font-semibold text-[#101943]">Cita Rasa 🌿</p>
    <p>{{ product.flavor }}</p>
  </div>
  <div>
    <p class="font-semibold text-[#101943]">Harga 💰</p>
    <p class="text-[#F5AD3A] text-xl font-bold">Rp {{ formatRupiah(selectedWeight.price) }}</p>
  </div>
  <div>
    <p class="font-semibold text-[#101943]">Bahan Utama 🍗</p>
    <p>{{ product.bahan }}</p>
  </div>
</div>

<!-- Bagian bawah: Jumlah + Cocok Untuk -->
<div class="grid sm:grid-cols-2 gap-6 items-start mb-6">
  <!-- Jumlah -->
  <div>
    <p class="text-gray-800 font-medium mb-2">Jumlah:</p>
    <div class="flex items-center border border-gray-300 rounded-lg w-max">
      <button @click="decreaseQty" class="px-4 py-2 text-xl font-bold text-[#101943] hover:bg-gray-100 transition">−</button>
      <span class="px-6 py-2 text-lg font-semibold">{{ quantity }}</span>
      <button @click="increaseQty" class="px-4 py-2 text-xl font-bold text-[#101943] hover:bg-gray-100 transition">+</button>
    </div>
  </div>

  <!-- Cocok Untuk -->
  <div>
    <p class="font-semibold text-[#101943]">Cocok Untuk 🍽️</p>
    <p>{{ product.cocok }}</p>
  </div>
</div>

<!-- Total -->
<div class="mt-4 border-t border-gray-200 pt-4">
  <p class="text-lg font-medium text-gray-700">
    Total: <span class="text-[#F5AD3A] font-semibold">Rp {{ formatRupiah(totalPrice) }}</span>
  </p>
</div>

<!-- Tombol -->
<button
  @click="sendToWhatsApp"
  class="mt-8 bg-[#101943] text-[#F5AD3A] py-3 px-6 rounded-lg font-semibold hover:bg-[#0b113a] transition-all duration-300 flex items-center justify-center mx-auto cursor-pointer"
>
  Pesan Sekarang
</button>

    </div>
  </div>

  <div v-else class="text-center p-10 text-gray-500">Produk tidak ditemukan.</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import galeri1 from '@/assets/galeri1.jpg';
import galeri2 from '@/assets/galeri2.jpg';

const route = useRoute();
const product = ref(null);
const quantity = ref(1);
const currentImage = ref(0);
const selectedWeight = ref(null);

const productList = [
  {
    id: 1,
    name: 'Rendang Teri Daun Teh',
    description: 'Rendang Teri Daun Teh adalah inovasi rendang khas Kampar yang menghadirkan perpaduan unik antara gurihnya ikan teri pilihan dan aroma harum daun berlangkas (daun teh) segar. Dimasak perlahan menggunakan santan kelapa dan bumbu tradisional hingga menghasilkan tekstur kering, lembut, dan kaya rasa. Cita rasanya pedas gurih dengan wangi teh yang lembut — cocok untuk kamu yang suka lauk praktis dan tahan lama tanpa bahan pengawet.',
    flavor: 'Gurih asin khas teri berpadu dengan pedas ringan dan aroma teh yang menenangkan. Teksturnya kering dan sedikit renyah, membuatnya cocok sebagai lauk ataupun camilan gurih.',
    bahan: 'Ikan teri pilihan, daun berlangkas (daun teh), santan kelapa, cabai merah, bawang merah, bawang putih, rempah-rempah',
    cocok: 'Penggemar rasa gurih pedas, penikmat lauk kering, dan pecinta cita rasa tradisional khas Riau.',
    options: [
      { weight: '250 gram', price: 35000 },
      { weight: '500 gram', price: 65000 },
    ],
    images: [],
  },
  {
    id: 2,
    name: 'Rendang Udang Daun Teh',
    description: 'Rendang Udang Daun Teh menghadirkan perpaduan sempurna antara rasa manis gurih alami udang segar dan aroma lembut daun teh. Dimasak perlahan dengan santan dan rempah pilihan khas Kampar hingga menghasilkan warna cokelat keemasan dan bumbu yang melekat sempurna. Rasanya unik, lezat, dan meninggalkan aroma khas yang bikin ketagihan.',
    flavor: 'Gurih pedas dengan sentuhan manis alami dari udang segar. Bumbu rendangnya pekat, aromanya khas, dan rasa daun tehnya lembut di akhir — memberi keseimbangan sempurna antara pedas dan segar.',
    bahan: 'Udang segar pilihan, daun teh segar, santan kelapa, cabai merah, bawang merah, bawang putih, rempah khas kampar.',
    cocok: 'Menu lauk untuk makan siang, bekal praktis, oleh-oleh khas daerah, atau stok lauk kering di rumah.',
    options: [
      { weight: '250 gram', price: 35000 },
      { weight: '500 gram', price: 65000 },
    ],
    images: [],
  },
  {
    id: 3,
    name: 'Rendang Ayam Daun Teh',
    description: 'Rendang Ayam Daun Teh memadukan lembutnya daging ayam segar dengan aroma harum dari daun teh pilihan. Proses masaknya yang lama dan perlahan membuat bumbu meresap hingga ke dalam daging, menghasilkan rasa gurih, pedas ringan, dan wangi teh yang khas. Hidangan ini memberikan sensasi baru dalam menikmati rendang tradisional.',
    flavor: 'Rendang ini memiliki rasa gurih yang kuat dengan aroma teh yang halus. Tekstur daging ayamnya empuk, bumbunya meresap sempurna, dan ada sensasi pedas hangat yang menenangkan.',
    bahan: 'Daging ayam segar, daun berlangkas (daun teh), santan kelapa, cabai merah, bawang merah, bawang putih, rempah-rempah',
    cocok: 'Pecinta rendang klasik yang ingin mencoba versi lebih wangi dan lembut, serta cocok untuk menu harian atau acara spesial.',
    options: [
      { weight: '250 gram', price: 35000 },
      { weight: '500 gram', price: 65000 },
    ],
    images: [],
  },
  {
    id: 4,
    name: 'Rendang Ikan Salai',
    description: 'Rendang Ikan Salai Asap Khas Kampar adalah varian rendang dengan cita rasa smoky dan gurih yang kuat. Ikan salai dimasak perlahan dengan rempah pilihan, menghasilkan aroma asap yang khas dan rasa rendang yang dalam. Cocok untuk kamu yang mencari rasa autentik khas Riau dengan sentuhan tradisional yang kaya.',
    flavor: 'Gurih dengan aroma asap yang kuat dan rasa rempah yang seimbang.',
    bahan: 'Ikan salai (ikan asap khas kampar), santan kelapa, cabai merah, bawang merah, bawang putih, rempah-rempah pilihan',
    cocok: 'Pecinta rendang gurih, penggemar cita rasa asap tradisional, dan mereka yang ingin menikmati masakan khas Riau dengan karakter kuat.',
    options: [
      { weight: '250 gram', price: 35000 },
      { weight: '500 gram', price: 65000 },
    ],
    images: [],
  },
];

onMounted(() => {
  const id = Number(route.params.id);
  product.value = productList.find((p) => p.id === id);
  selectedWeight.value = product.value?.options[0];
});

const increaseQty = () => quantity.value++;
const decreaseQty = () => quantity.value > 1 && quantity.value--;
const nextImage = () => currentImage.value = (currentImage.value + 1) % product.value.images.length;
const prevImage = () => currentImage.value = (currentImage.value - 1 + product.value.images.length) % product.value.images.length;
const formatRupiah = (num) => num.toLocaleString('id-ID');
const totalPrice = computed(() => selectedWeight.value ? selectedWeight.value.price * quantity.value : 0);

const sendToWhatsApp = () => {
  const phone = '6285355292285';
  const message = `Halo, saya ingin memesan *${product.value.name}* ukuran *${selectedWeight.value.weight}* sebanyak *${quantity.value} kemasan*.\nTotal: Rp ${formatRupiah(totalPrice.value)}.`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
</script>
