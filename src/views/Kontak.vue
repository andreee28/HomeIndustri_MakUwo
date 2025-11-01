<template>
  <!-- Bagian Judul -->
  <section
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 0.8 } }"
    class="text-center py-16 px-6 bg-gradient-to-b from-[#101943] to-[#18235c] text-white"
  >
    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#F5AD3A]">Hubungi Kami</h1>
    <p class="max-w-2xl mx-auto leading-relaxed text-lg">
      Punya pertanyaan atau ingin pesan produk Home Industri Mak Uwo? Kirim pesan saja — kami akan segera membalas dan membantu kebutuhan Anda.
    </p>
  </section>

  <!-- Bagian Kontak -->
  <section id="kontak" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 text-[#101943] gap-12">

      <!-- Info Kontak -->
      <div>
        <h3 class="text-2xl font-semibold mb-6">Informasi Kontak</h3>
        <ul class="space-y-4">
          <li>📍 <span class="font-medium">Alamat:</span> Sungai Tonang, Kampar Utara, Riau</li>
          <li>📞 <span class="font-medium">Telepon/WhatsApp:</span> 0853-5529-2285</li>
          <li>✉️ <span class="font-medium">Email:</span> homeindustrimakuwo@gmail.com</li>
          <li>⏰ <span class="font-medium">Jam Operasional:</span> Senin-Sabtu, 09.00-17.00 WIB</li>
        </ul>

        <div class="mt-6">
          <a
            href="https://wa.me/6285355292285"
            target="_blank"
            class="inline-block bg-[#101943] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            💬 Chat via WhatsApp
          </a>
        </div>

        <!-- Google Maps -->
        <div class="mt-16 mb-8">
          <h4 class="text-lg font-semibold text-[#101943] mb-3">Lokasi Kami</h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7345417579!2d101.0606449!3d0.37130290000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d51700712555a5%3A0xddec106669e3819d!2sHome%20Industri%20Mak%20Uwo!5e0!3m2!1sen!2sid!4v1761724703319!5m2!1sen!2sid"
            width="100%"
            height="500"
            style="border:0;"
            allowfullscreen="true"
            loading="lazy"
            class="rounded-lg shadow"
          ></iframe>

          <div class="mt-4 flex justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=0.37132060874625095,101.06062684637283"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-[#101943] hover:bg-[#1b275f] text-white font-semibold px-6 py-3 rounded-lg shadow transition"
            >
              ➤ Arahkan ke Lokasi
            </a>
          </div>
        </div>
      </div>

      <!-- Form Kontak -->
      <div class="bg-[#101943] text-[#F5AD3A] p-8 rounded-lg shadow-md mb-12 flex flex-col justify-center">
        <h3 class="text-2xl font-semibold mb-6">Kirim Pesan</h3>

        <form @submit.prevent="sendEmail" class="space-y-4">
          <div>
            <label class="block font-medium mb-2">Nama</label>
            <input
              type="text"
              v-model="name"
              class="bg-white text-black w-full border border-[#F5AD3A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F5AD3A]"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div>
            <label class="block font-medium mb-2">Email</label>
            <input
              type="email"
              v-model="email"
              class="bg-white text-black w-full border border-[#F5AD3A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F5AD3A]"
              placeholder="Masukkan email Anda"
              required
            />
          </div>

          <div>
            <label class="block font-medium mb-2">Pesan</label>
            <textarea
              rows="5"
              v-model="message"
              class="bg-white text-black w-full border border-[#F5AD3A] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#F5AD3A]"
              placeholder="Tulis pesan Anda"
              required
            ></textarea>
          </div>

          <div class="flex justify-center items-center">
            <button
              type="submit"
              class="bg-[#F5AD3A] text-[#101943] font-semibold py-3 px-6 rounded-lg shadow-md cursor-pointer hover:bg-[#f7b44d] transition">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>

      <!-- FAQ Mini -->
      <div class="mt-8 text-[#F5AD3A]">
        <h3 class="text-xl font-semibold text-[#101943] mb-4">Pertanyaan Umum</h3>
        <div class="space-y-4">
          <details class="bg-[#101943] rounded-lg p-4 shadow">
            <summary class="font-medium cursor-pointer">Apakah bisa pesan dalam jumlah besar?</summary>
            <p class="mt-2">Bisa, kami melayani pemesanan sekala besar untuk acara atau reseller.</p>
          </details>
          <details class="bg-[#101943] rounded-lg p-4 shadow">
            <summary class="font-medium cursor-pointer">Bagaimana cara menyimpan produk agar tahan lama?</summary>
            <p class="mt-2">Simpan di tempat sejuk dan kering. Jika sudah dibuka, sebaiknya disimpan di kulkas.</p>
          </details>
          <details class="bg-[#101943] rounded-lg p-4 shadow">
            <summary class="font-medium cursor-pointer">Apakah produk menggunakan bahan pengawet?</summary>
            <p class="mt-2">Tidak, rendang kami tahan lama secara alami tanpa pengawet.</p>
          </details>
          <details class="bg-[#101943] rounded-lg p-4 shadow">
            <summary class="font-medium cursor-pointer">Apakah Rendang Macho bisa untuk oleh-oleh?</summary>
            <p class="mt-2">Sangat bisa! Kemasan kami praktis dan tahan lama, cocok untuk dibawa bepergian.</p>
          </details>
          <details class="bg-[#101943] rounded-lg p-4 shadow">
            <summary class="font-medium cursor-pointer">Bagaimana jika produk yang diterima rusak atau bocor?</summary>
            <p class="mt-2">Jangan khawatir, cukup hubungi tim kami maksimal 1x24 jam setelah menerima paket, kami siap bantu penggantian.</p>
          </details>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const name = ref("");
const email = ref("");
const message = ref("");

// 🔑 Ganti dengan data kamu dari EmailJS Dashboard
const serviceID = "service_ffb013m";
const templateID = "template_viam20d";
const publicKey = "PB15ceqj82Urs4R5p";

const sendEmail = () => {
  emailjs
    .send(
      serviceID,
      templateID,
      {
        name: name.value,
        email: email.value,
        message: message.value,
      },
      publicKey
    )
    .then(() => {
      alert("Pesan berhasil dikirim! 🎉");
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("Gagal mengirim pesan. Coba lagi nanti 😞");
    });
};
</script>
