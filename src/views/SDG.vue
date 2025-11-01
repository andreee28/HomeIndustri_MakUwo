<!-- [#101943]   ini warna biru   [#F5AD3A]   ini oren -->
<template>
    <section class="max-w-6xl mx-auto px-6 py-12 prose lg:prose-lg">
      <header class="mb-8 text-[#101943]">
        <h1 class="text-2xl font-bold text-center mb-10 ">KOMITMEN KAMI UNTUK MASA DEPAN YANG LEBIH BAIK</h1>
        <p class="mt-2 text-gray-700">Home Industri Mak Uwo bekerja dengan prinsip bahwa setiap langkah produksi, distribusi, dan pelayanan dapat membawa manfaat ekonomi, sosial, dan lingkungan tanpa harus mengorbankan cita rasa.</p>
      </header>
  
      <!-- Navigation untuk section -->
      <nav class="mb-8 flex flex-wrap gap-2 justify-center">
        <button
          v-for="(s, i) in sections"
          :key="s.id"
          class="text-sm px-3 py-1 rounded-full border hover:bg-[#101943] hover:text-[#F5AD3A]"
          :class="activeId === s.id ? 'bg-[#101943] text-[#F5AD3A]' : 'bg-white text-[#101943]'"
          @click="scrollToSection(s.id)">
          {{ s.short }}
        </button>
      </nav>
  
      <!-- Content Sections -->
      <article>
        <section
          v-for="(s, i) in sections"
          :key="s.id"
          :id="s.id"
          class="mb-10 p-6 rounded-xl shadow-sm bg-[#101943] text-[#F5AD3A] "
        >
          <h2 class="text-2xl font-semibold mb-2">{{ s.title }}</h2>
          <p class="mb-4" v-if="s.lead">{{ s.lead }}</p>
  
          <div class="space-y-3">
            <p v-for="(p, idx) in s.paragraphs" :key="idx">{{ p }}</p>
          </div>
  
          <ul class="mt-4 list-disc list-inside" v-if="s.points?.length">
            <li v-for="(pt, j) in s.points" :key="j">{{ pt }}</li>
          </ul>
  
          <div class="mt-4 flex gap-3">
            <a v-if="s.cta" :href="s.cta.href" class="inline-block px-4 py-2 rounded-md border bg-[#101943] text-white">{{ s.cta.text }}</a>
          </div>
        </section>
      </article>
  
      <!-- Footer / Ringkasan -->
      <aside class="mt-12 p-6 rounded-lg bg-gray-50">
        <h3 class="font-semibold">Ringkasan Komitmen</h3>
        <p class="mt-2 text-gray-700">Home Industri Mak Uwo berusaha menyelaraskan kegiatan usaha kami dengan prinsip-prinsip yang adil, ramah lingkungan, serta mendukung perekonomian lokal. Kami selalu berfokus pada kesehatan dan kepuasan pelanggan, sambil berkomitmen untuk menjalankan usaha dengan cara yang konsisten dan bertanggung jawab.</p>
        <p class="mt-2 text-gray-700"></p>
        <div class="mt-4 text-sm text-gray-600">Langkah-langkah kecil yang diambil hari ini dapat memberikan dampak besar jika dilakukan secara berkelanjutan. Kami percaya perubahan positif dapat dimulai dari hal-hal sederhana yang terus dilakukan dengan tekad.</div>
      </aside>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const activeId = ref('');
  
  const sections = [
    {
      id: 'bahan-lokal',
      short: 'Bahan Lokal',
      title: 'Memilih Bahan Lokal yang Berkelanjutan',
      lead: 'Kami lebih memilih bahan baku dari pemasok lokal yang menerapkan praktik bertanggung jawab.',
      paragraphs: [
        'Penggunaan bahan lokal memperpendek rantai pasok sehingga mengurangi emisi dari transportasi, sekaligus menjaga kesegaran bahan sehingga rasa tetap prima.',
        'Kami membangun hubungan jangka panjang dengan pemasok lokal untuk mendukung praktik yang ramah lingkungan dan adil secara ekonomi.'
      ],
      points: [
        'Prioritas pada pemasok yang menerapkan rotasi tanaman dan pupuk organik.',
        'Pembelian musiman untuk mengurangi kebutuhan penyimpanan panjang dan pemborosan.'
      ],
      // cta: { text: 'Pelajari pemasok kami', href: '/tentang-kami#pemasok' }
    },
  
    {
      id: 'ketenagakerjaan',
      short: 'Pekerja',
      title: 'Kesejahteraan Pekerja dan Lingkungan Kerja Layak',
      lead: 'Kami percaya bahwa tenaga kerja yang dihargai menghasilkan kualitas produk yang lebih baik.',
      paragraphs: [
        'Home Industri Mak Uwo menerapkan standar upah yang adil serta jam kerja yang manusiawi. Kami berinvestasi pada pelatihan untuk karyawan agar produksi lebih efisien dan aman.',
        'Fasilitas kebersihan, keamanan pangan, dan kesehatan kerja rutin menjadi bagian dari operasional harian kami.'
      ],
      points: [
        'Pelatihan kebersihan pangan berkala.',
        'Kompensasi yang kompetitif dan program penghargaan karyawan.'
      ]
    },
  
    {
      id: 'limbah-dan-daur-ulang',
      short: 'Limbah',
      title: 'Mengurangi Limbah & Mendorong Daur Ulang',
      lead: 'Setiap sisa bahan diolah untuk mengurangi pemborosan dan dampak lingkungan.',
      paragraphs: [
        'Sisa sayuran atau rempah dioptimalkan untuk kompos atau pakan ternak bila memungkinkan, bekerja sama dengan petani lokal.',
        
      ],
      points: [
        'Program pengomposan internal.',
        'Kerja sama dengan penyedia daur ulang lokal untuk sampah plastik.'
      ]
    },
  
    {
      id: 'energi-dan-air',
      short: 'Energi & Air',
      title: 'Efisiensi Energi dan Penggunaan Air yang Bijak',
      lead: 'Operasional dapur diatur untuk mengurangi pemakaian energi dan konsumsi air tanpa mengorbankan kualitas makanan.',
      paragraphs: [
        'Peralatan hemat energi dan prosedur memasak terstandarisasi membantu menurunkan penggunaan bahan bakar dan listrik.',
        
      ],
      points: [
        'Pengecekan rutin pada peralatan untuk memastikan efisiensi.',
        'Penggunaan penampungan air hujan untuk kegiatan non-higienis.'
      ]
    },
  
    {
      id: 'kesehatan-gizi',
      short: 'Gizi',
      title: 'Gizi dan Keamanan Pangan',
      lead: 'Kami menjaga standar keamanan pangan dan transparansi nutrisi agar pelanggan dapat membuat pilihan yang tepat.',
      paragraphs: [
        'Resep kami diuji agar memastikan keamanan mikrobiologis dan stabilitas rasa.',
        'Informasi bahan dan alergen disediakan dengan jelas pada label dan menu digital.'
      ],
      points: [
        'Labeling alergen jelas.',
        'Pilihan porsi yang cocok untuk keluarga dan individu.'
      ]
    },
  
    {
      id: 'ekonomi-lokal',
      short: 'Ekonomi Lokal',
      title: 'Mendorong Ekonomi Lokal dan Kewirausahaan',
      lead: 'Dengan berbelanja lokal, kami turut memperkuat ekonomi setiap komunitas yang terlibat.',
      paragraphs: [
        'Kemitraan kami dengan pemasok lokal memberi peluang pendapatan tambahan untuk keluarga pedagang kecil.',
        'Menyediakan pelatihan pemasaran dan manajemen usaha untuk mitra yang ingin mengembangkan bisnis mereka. Selain itu, kami bekerja sama langsung dengan koperasi lokal dan mengadakan workshop pengemasan serta branding bagi UMKM mitra untuk meningkatkan daya saing mereka di pasar.'
      ],
      points: [
        'Pembelian langsung dari koperasi petani.',
        'Workshop pengemasan dan branding bagi UMKM mitra.'
      ]
    },
  
    {
      id: 'iklim',
      short: 'Iklim',
      title: 'Langkah Kecil untuk Kurangi Dampak Iklim',
      lead: 'Kami sadar setiap tahap produksi punya jejak karbon, oleh karenanya kami berupaya menurunkannya secara bertahap.',
      paragraphs: [
        'Optimalisasi rute distribusi dan penggunaan kendaraan logistik yang efisien membantu menurunkan emisi transportasi.',
        
      ],
      points: [
        'Perencanaan pengiriman terjadwal untuk mengurangi perjalanan kosong.',
      
      ]
    },
  
    {
      id: 'kesetaraan',
      short: 'Kesetaraan',
      title: 'Kesetaraan dan Inklusi',
      lead: 'Kami mendukung lingkungan yang inklusif untuk semua karyawan dan mitra.',
      paragraphs: [
        'Praktik rekrutmen kami terbuka tanpa diskriminasi, dan kami menyediakan kesempatan yang setara untuk kenaikan karier.',
        'Program khusus dipersembahkan bagi perempuan dan kelompok yang terhambat peluangnya untuk peningkatan keterampilan.'
      ],
      points: [
        'Kebijakan rekrutmen non-diskriminatif.',
        'Program mentoring untuk peningkatan keterampilan.'
      ]
    },
  
    {
      id: 'inovasi',
      short: 'Inovasi',
      title: 'Inovasi Produk & Rantai Pasok',
      lead: 'Berinovasi pada resep, kemasan dan proses untuk menciptakan dampak positif yang lebih besar.',
      paragraphs: [
        'Kami fokus pada pengembangan kemasan ramah lingkungan dan penyajian porsi yang lebih sesuai agar dapat mengurangi pemborosan makanan.',
        'Penerapan sistem pesanan yang mengurangi overproduction dengan basis pre-order membantu mengurangi pemborosan.'
      ],
      points: [
        'R&D pada kemasan komposabel.',
        'Sistem pre-order untuk mengontrol produksi.'
      ]
    },
  
   
      
      // cta: { text: 'Lihat laporan ringkas', href: '/laporan' }
    
  ];
  
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    activeId.value = id;
  }
  
  onMounted(() => {
    // set active berdasarkan hash atau posisi awal
    const hash = window.location.hash.replace('#', '');
    if (hash && sections.find(s => s.id === hash)) activeId.value = hash;
  });
  </script>
  
  <style scoped>
  /* Sedikit styling agar sesuai dengan tema navbar mu */
  .prose a { color: #101943; }
  button:focus { outline: none; box-shadow: 0 0 0 3px rgba(16,25,67,0.12); }
  </style>
  