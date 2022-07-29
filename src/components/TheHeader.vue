<template>
  <div class="bg-mermud text-lg font-inter py-6 px-side text-white flex items-center h-[72px]">
    <img src="@/assets/icon/danger.svg" alt="icon danger" />
    <h1 class="ml-4">Kunjungi pusat pemberitahuan tentang COVID - 19</h1>
  </div>

  <div class="flex items-center mt-[72px] px-side">
    <div class="items-start">
      <router-link :to="{ name: 'Home' }"><img src="@/assets/icon/logo-rscm.svg" alt="Logo RSCM" /></router-link>
    </div>

    <div class="w-1/2 h-[72px] rounded-full border border-[#C9C9C9] flex items-center pl-6 ml-auto">
      <img src="@/assets/icon/search.svg" alt="Icon Search" />
      <h1 class="text-black opacity-25 pl-3">Cari di RSCM</h1>
    </div>

    <div class="flex items-center text-xs ml-16">
      <img src="@/assets/icon/globe.svg" alt="Icon Globe" />
      <h1 class="mx-2">Indonesia</h1>
      <img src="@/assets/icon/arrow-down.svg" alt="Icon Drop Down" />
    </div>
  </div>

  <div class="flex text-lg px-side pt-[80px] items-center justify-between">
    <div class="flex items-center">
      <h1>Tentang RSCM</h1>
      <img class="ml-2 w-6 h-6" src="@/assets/icon/arrow-down.svg" alt="Icon Drop Down" />
    </div>
    <div class="flex items-center">
      <h1>Informasi Kesehatan</h1>
      <img class="ml-2 w-6 h-6" src="@/assets/icon/arrow-down.svg" alt="Icon Drop Down" />
    </div>
    <div class="flex items-center">
      <h1>Pelayanan & Fasilitas</h1>
      <img class="ml-2 w-6 h-6" src="@/assets/icon/arrow-down.svg" alt="Icon Drop Down" />
    </div>
    <div class="flex">
      <h1>Jadwal Dokter</h1>
    </div>
    <div class="flex">
      <h1>Informasi Publik</h1>
    </div>
    <div class="flex">
      <h1>Rujukan Nasional</h1>
    </div>
    <div class="flex">
      <router-link :to="{ name: 'Blog' }">Blog</router-link>
    </div>
  </div>
</template>
