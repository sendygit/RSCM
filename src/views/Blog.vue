<script setup>
import BlogHeader from "../components/BlogHeader.vue";
</script>

<template>
  <header>
    <BlogHeader />
  </header>

  <div class="px-side py-20">
    <div class="jumbotron flex flex-col items-center">
      <div class="px-[408px] py-[136px]">
        <h1 class="font-lora text-7xl lg:text-5xl text-white">Artikel RSCM</h1>
      </div>
    </div>

    <div class="flex flex-col mt-20">
      <div class="flex py-5">
        <div class="flex flex-col pr-8">
          <img class="" src="@/assets/img/corona1.png" alt="" />

          <router-link class="py-6 pl-4 pr-[42px] text-[#575757] hover:text-white border border-[#575757] hover:bg-mermud" :to="{ name: 'Artikel' }">
            <button class="flex items-center justify-between w-full">
              <h2 class="font-medium text-xl">Baca Artikel</h2>
              <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
            </button>
          </router-link>
        </div>

        <div class="w-[793px]">
          <h1 class="font-lora font-medium text-mermud text-[32px]">Omicron Sebagai Salah Satu Varian Terbaru Covid-19</h1>
          <p class="font-medium text-2xl text-[#575757]">
            Omicron adalah varian terbaru virus corona yang juga menyebabkan penyakit Covid-19. Mengutip laman Covid19.go.id, Varian ini menyebar lebih cepat dari varian COVID-19 lainnya, namun dengan
            gejala lebih ringan atau cenderung tidak bergejala. Varian ini sudah terdeteksi di beberapa negara sejak pertama kali ditemukan di Benua Afrika. Varian jenis ini pertama kali terdeteksi di
            Afrika Selatan. Varian ini disebut sebagai salah satu yang sangat cepat dalam menularkan virus.Omicron memiliki tingkat penularan yang jauh lebih cepat dibandingkan varian Delta. Sejak
            ditemukan pertama kali pada 24 November 2021 di Afrika Selatan, kini Omicron telah terdeteksi di lebih dari 110 negara dan diperkirakan akan terus meluas. Di level nasional, pergerakan
            Omicron juga terus meningkat sejak pertama kali dikonfirmasi pada 16 Desember 2021. perkembangan kasus Covid-19 varian jenis ini (B.1.1.529) di Indonesia telah mencapai 5.106 kasus per
            Minggu 13 Februari 2022. Varian [...]
          </p>
          <div class="flex items-center mt-16">
            <div class="flex items-center">
              <img src="@/assets/icon/eye.svg" alt="" />
              <p class="ml-2 text-lg text-[#696969]">3K kali dibaca</p>
            </div>
            <div class="flex items-center ml-16">
              <img src="@/assets/icon/clock.svg" alt="" />
              <p class="ml-2 text-lg text-[#696969]">15 Juni 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-20">
        <hr />
      </div>

      <div class="flex py-5">
        <div class="flex flex-col pr-8">
          <img class="" src="@/assets/img/vaksin.png" alt="" />
          <button class="flex items-center justify-between py-6 pl-4 pr-[42px] text-[#575757] border border-[#575757] hover:bg-mermud hover:text-white">
            <h2 class="font-medium text-xl">Baca Artikel</h2>
            <span class="text-4xl"><i class="fa fa-angle-right"></i></span>
          </button>
        </div>

        <div class="w-[793px]">
          <h1 class="font-lora font-medium text-mermud text-[32px]">3,7 Juta Warga Jakarta sudah disuntik Vaksin Booster, COVID - 19 di Jakarta menurun</h1>
          <p class="font-medium text-2xl text-[#575757]">
            Sebanyak 3.792.251 orang sudah menerima vaksin dosis ketiga atau booster di DKI Jakarta. Teranyar, 10.164 orang menerima vaksin booster pada Minggu, 15 Mei 2022. "Vaksinasi booster terus
            dilakukan," kata Kepala bidang Pencegahan dan Pengendalian Penyakit Dinas Kesehatan DKI Jakarta Dwi Oktavia dalam keterangan resmi, dikutip Senin, 16 Mei 2022. Penerima dosis satu saat ini
            sebanyak 12.526.283 orang (124,2 persen). Proporsinya, 70,4 persen merupakan warga dengan KTP DKI dan 29,6 persen warga KTP non DKI. Sedangkan, total penerima vaksin dosis kedua mencapai
            10.686.438 orang (106 persen). Proporsinya 73,7 persen merupakan warga dengan KTP DKI dan 26,3 persen warga KTP non DKI. Sebanyak 1.456 orang yang divaksin dosis kedua, kemarin. Dinas
            Kesehatan DKI Jakarta mencatat jumlah kasus aktif di Jakarta naik 20 pada Minggu, 15 Mei 2022. Sehingga, jumlah kasus aktif kini sebanyak 877, mencakup orang yang masih dirawat atau isolas
            [...]
          </p>
          <div class="flex items-center mt-16">
            <div class="flex items-center">
              <img src="@/assets/icon/eye.svg" alt="" />
              <p class="ml-2 text-lg text-[#696969]">3K kali dibaca</p>
            </div>
            <div class="flex items-center ml-16">
              <img src="@/assets/icon/clock.svg" alt="" />
              <p class="ml-2 text-lg text-[#696969]">15 Juni 2022</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-20">
        <hr />
      </div>

      <div class="flex self-center">
        <button class="border border-[#575757] py-4 px-[17.5px] focus:bg-mermud focus:text-white focus:border-white">1</button>
        <button class="border border-[#575757] py-4 px-[17.5px] focus:bg-mermud focus:text-white focus:border-white ml-4">2</button>
        <button class="border border-[#575757] py-4 px-[17.5px] focus:bg-mermud focus:text-white focus:border-white ml-4">3</button>
        <button class="border border-[#575757] py-4 px-[17.5px] focus:bg-mermud focus:text-white focus:border-white ml-4">4</button>
        <button class="border border-[#575757] py-4 px-[17.5px] focus:bg-mermud focus:text-white focus:border-white ml-4 mr-8">5</button>
        <button>
          <img src="@/assets/icon/arrow_r.svg" alt="" />
        </button>
      </div>

      <div class="py-20">
        <hr />
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  background-image: url("@/assets/img/bg_blog.png");
  @apply bg-cover;
}
</style>
