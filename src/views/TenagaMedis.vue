<script setup>
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="grid grid-cols-2 px-side py-20">
    <div>
      <h1 class="font-lora text-7xl border-y-2 border-[#C9C9C9] py-10 text-butu">Tenaga Medis</h1>
      <h2 class="font-lora font-medium text-[32px] lg:text-3xl pt-10 text-butu">Pengobatan</h2>
      <div class="grid grid-cols-3 pt-8 pb-16 pr-[137px] gap-x-[62px] text-[#696969] text-lg lg:text-sm font-medium">
        <div class="space-y-12">
          <p>Absans</p>
          <p>Abses Telinga</p>
          <p>Alzheimer</p>
          <p>Anoreksia</p>
          <p>Asam Urat</p>
        </div>
        <div class="space-y-12">
          <p>Bronkitis</p>
          <p>Cacar Air</p>
          <p>Campak</p>
          <p>Chron Disease</p>
          <p>Dakrioadenitis</p>
        </div>
        <div class="space-y-12">
          <p>Demam Kuning</p>
          <p>Depresi</p>
          <p>Dexetimide</p>
          <p>Disfungsi Ereksi</p>
          <p>Encok</p>
        </div>
      </div>

      <div>
        <button class="outline outline-2 rounded-full px-[115px] py-6 outline-[#FC4150] text-mermud hover:bg-mermud hover:text-white">
          <!-- <a href="" class="font-medium text-2xl">Cek Semua Pengobatan</a> -->
          Cek Semua Pengobatan
        </button>
      </div>
    </div>

    <div class="pl-8">
      <img src="@/assets/img/konsul2.png" alt="konsul2" />
    </div>
  </div>
</template>
