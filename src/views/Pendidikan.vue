<script setup>
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="px-side py-20">
    <div class="py-20">
      <hr />
    </div>

    <div class="font-lora text-7xl text-butu">
      <h1>Pendidikan</h1>
    </div>
    <div class="flex items-center justify-between font-medium text-[28px] pt-12 pb-10 text-[#575757]">
      <p class="text-mermud">Peserta Didik Klinis</p>
      <p>Guru Pembimbing Klinis</p>
      <p>Karir</p>
      <p>Tentang Kami</p>
    </div>

    <div>
      <img class="w-full" src="@/assets/img/suster.png" alt="Suster" />
    </div>

    <div class="font-lora font-medium text-[32px] text-butu pt-20">
      <h2>Pendidikan & Latihan</h2>
    </div>

    <div class="grid grid-cols-2 gap-8 pt-8">
      <div class="flex flex-col w-full">
        <div class=" bg-mermud font-bold text-[32px] text-white px-[37px] pt-16 pb-8">
          <h1>Pendidikan & Latihan External RSCM 2019</h1>
        </div>
          <img src="@/assets/img/bedah1.png" alt="" />
        <button class="flex items-center justify-between py-6 pl-4 pr-[42px] text-[#575757] border border-[#575757] hover:bg-mermud hover:text-white">
          <h2 class="font-medium text-xl">Baca Artikel</h2>
          <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
        </button>
      </div>

      <div class="flex flex-col w-full">
        <div class=" bg-butu font-bold text-[32px] text-white px-[37px] pt-16 pb-8">
          <h1>Pendidikan & Latihan Internal RSCM 2019</h1>
        </div>
          <img src="@/assets/img/bedah2.png" alt="" />
        <button class="flex items-center justify-between py-6 pl-4 pr-[42px] text-[#575757] border border-[#575757] hover:bg-mermud hover:text-white">
          <h2 class="font-medium text-xl">Baca Artikel</h2>
          <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
        </button>
      </div>

    </div>
  </div>
</template>
