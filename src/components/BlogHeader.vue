<template>
  <div class="mt-[104px] px-side">
    <div class="flex items-center">
      <div class="items-start">
        <router-link :to="{ name: 'Home' }"><img src="@/assets/icon/logo-rscm.svg" alt="Logo RSCM" /></router-link>
      </div>

      <div class="w-1/2 h-[72px] rounded-full border border-[#C9C9C9] flex items-center pl-6 ml-auto">
        <img src="@/assets/icon/search.svg" alt="Icon Search" />
        <h1 class="text-black opacity-25 pl-3">Cari di Artikel</h1>
      </div>

      <div class="flex items-center text-xs ml-12 space-x-4">
        <img src="@/assets/icon/facebook1.svg" alt="Icon Globe" />
        <img src="@/assets/icon/twitter1.svg" alt="" />
        <img src="@/assets/icon/youtube1.svg" alt="Icon Drop Down" />
      </div>
    </div>

    <div class="flex mt-20 ">
      <button class="border border-r-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow  ">Semua</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6  xl:py-6 text-lg lg:text-sm text-butu focus:bg-mermud focus:text-white flex-grow ">COVID-19</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Penyakit</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Pengobatan</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Pasien</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6  xl:py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Tenaga Medis</button>
      <button class="border border-x-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Dokter</button>
      <button class="border border-l-[#C9C9C9] bg-[#F5F5F3] px-10 py-6 text-lg lg:text-base text-butu focus:bg-mermud focus:text-white flex-grow ">Pendidikan</button>
    </div>
  </div>
</template>
