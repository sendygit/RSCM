<script setup>
import Card from "../components/Card.vue";
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="px-side py-20">
    <div class="grid grid-cols-2">
      <div class="px-4">
        <div class="bg-[#FFF6F7]">
          <h1 class="font-lora text-7xl text-butu p-4">Riset Penelitian</h1>
          <p class="text-[#575757] text-lg px-4 pb-4">Temukan semua informasi terkait penelitian dan hasilnya yang di kembangkan oleh Dokter yang ada di Rumah Sakit Cipto Mangunkusumo</p>
        </div>

        <div class="space-y-6 mt-8">
          <a href="">
            <button class="flex items-center justify-between w-full py-6 px-4 text-[#575757] hover:bg-mermud hover:text-white">
              <h2 class="font-medium text-xl">Berita Penelitian RSCM</h2>
              <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
            </button>
          </a>
          <a href="">
            <button class="flex items-center justify-between w-full py-6 px-4 text-[#575757] hover:bg-mermud hover:text-white">
              <h2 class="font-medium text-xl">Peneliti dari RSCM</h2>
              <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
            </button>
          </a>
          <a href="">
            <button class="flex items-center justify-between w-full py-6 px-4 text-[#575757] hover:bg-mermud hover:text-white">
              <h2 class="font-medium text-xl">Tentang Penelitian RSCM</h2>
              <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
            </button>
          </a>
        </div>
      </div>

      <div>
        <img src="@/assets/img/riset.png" alt="Riset" />
      </div>
    </div>

    <div class="mt-20 bg-[#F8F8F8] px-8 py-[83px]">
      <h1 class="font-lora font-medium text-[32px] text-butu">List Penelitian</h1>
      <div class="flex">
        <Card
          title="Daftar Penelitian Staf RSUPN di Rumah Sakit Cipto Mangunkusumo tahun 2017"
          desc="Daftar Penelitian Staf RSUPN Rumah Sakit Cipto Mangunkuso yang sudah di Publikasi Nasional & Internasional tahun 2017"
        ></Card>
        <Card
          title="Daftar Penelitian Staf RSUPN di Rumah Sakit Cipto Mangunkusumo tahun 2017"
          desc="Daftar Penelitian Staf RSUPN Rumah Sakit Cipto Mangunkuso yang sudah di Publikasi Nasional & Internasional tahun 2017"
        ></Card>
      </div>
    </div>
  </div>
</template>
