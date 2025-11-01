<template>
  <footer class="bg-[#101943] text-[#F5AD3A] py-8 mt-12">
    <div class="text-center">
      <p class="mb-4 text-lg font-semibold">Ikuti Kami</p>

      <!-- Ikon Sosmed -->
      <div class="flex justify-center space-x-8 text-3xl">
        <!-- Facebook -->
        <a
          href="https://www.facebook.com/profile.php?id=61582737554579&mibextid=LQQJ4d&mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform duration-300 hover:scale-125 hover:text-[#ffbd56]"
        >
          <FontAwesomeIcon :icon="['fab', 'facebook']" />
        </a>

        <!-- Instagram -->
        <a
          href="https://www.instagram.com/homeindustri_mak.uwo?igsh=MWR5aXZoZXJkbXJ2aA%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform duration-300 hover:scale-125 hover:text-[#ffbd56]"
        >
          <FontAwesomeIcon :icon="['fab', 'instagram']" />
        </a>

        <!-- TikTok -->
        <a
          href="https://www.tiktok.com/@home.industri.mak.uwo?_t=ZS-90xLnoyH90h&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-transform duration-300 hover:scale-125 hover:text-[#ffbd56]"
        >
          <FontAwesomeIcon :icon="['fab', 'tiktok']" />
        </a>
      </div>

      <p class="mt-6 text-sm text-[#F5AD3A]/80">© 2025 Home Industri Mak Uwo</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
