<script setup>
import Card from "../components/Card.vue";
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="px-side py-20">
    <div class="jumbotron h-[512px] text-white font-lora font-bold text-7xl relative">
      <div class="absolute inset-0 flex items-end bg-black bg-opacity-[15%]">
        <h1 class="mb-[57px] ml-[69px] max-w-4xl leading-[92px]">Menolong, Memberikan yang Terbaik</h1>
      </div>
    </div>
    <div class="flex space-x-16 items-center justify-between gap-x-8 mt-20">
      <Card title="Pasien & Keluarga" icon="people" desc="Temukan informasi terkait kunjungan anda" link="Pasien&Keluarga"></Card>
      <Card title="Tenaga Medis" icon="heart" desc="Temukan informasi terkait kunjungan anda" link="TenagaMedis"></Card>
      <Card title="Riset Penelitian" icon="chart" desc="Temukan informasi terkait kunjungan anda" link="RisetPenelitian"></Card>
      <Card title="Pendidikan" icon="teacher" desc="Temukan informasi terkait kunjungan anda" link="Pendidikan"></Card>
    </div>

    <div class="py-20">
      <hr />
    </div>

    <div class="grid grid-cols-3 gap-x-8">
      <div>
        <h1 class="font-lora font-medium text-[64px] lg:text-[56px]">Informasi COVID-19</h1>
        <p class="font-inter text-lg lg:text-base">
          Pusat sumber daya & informasi Rumah <br />
          Sakit Cipto Mangunkusumo,cek berita terupdate terkait COVID-19
        </p>
      </div>

      <div class="text-white h-[568px] bg-mermud rounded">
        <div class="pt-[19px] px-[22px]">
          <h1 class="font-lora text-4xl lg:text-3xl font-medium">Vaksin yang tersedia di RSCM</h1>
          <div class="mt-8 space-y-6 text-lg lg:text-base">
            <p>1. Vaksin Covid-19 Sinovac</p>
            <p>2. Vaksin Covid-19 Bio farma</p>
            <p>3. Vaksin Covid-19 AstraZeneca</p>
            <p>5. Vaksin Covid-19 Moderna</p>
            <p>6. Vaksin Covid-19 Pfizer</p>
          </div>
        </div>
      </div>

      <div class="">
        <div class="h-[137px] bg-butu text-white rounded">
          <div class="py-5 pl-[34px]">
            <h1 class="font-lora font-medium text-4xl lg:text-3xl">Vaksin di RSCM</h1>
            <button class="mt-4 group transition-all ease-in-out">
              <a class="flex items-center duration-1000 group-hover:underline font-medium text-xl lg:text-lg" href="#"
                >Vaksin Sekarang <img class="ml-4 duration-500 group-hover:translate-x-6" src="@/assets/icon/arrow_w.svg" alt="Icon Arrow"
              /></a>
            </button>
          </div>
        </div>

        <div class="bg-bumud h-[399px] mt-8 rounded text-butu pt-7 pl-8">
          <h1 class="font-lora font-medium text-4xl lg:text-3xl pr-[58px]">Jumlah COVID-19 di setiap Kota</h1>
          <div class="font-medium text-lg lg:text-base text-[#575757] space-y-8 mt-8">
            <p>Jakarta</p>
            <p>Bandung</p>
            <p>Surabaya</p>
          </div>
          <button class="mt-12 group transition-all ease-in-out">
            <a class="flex items-center duration-1000 group-hover:underline font-medium text-xl lg:text-base" href="#"
              >Lainnya <img class="ml-4 duration-500 group-hover:translate-x-6" src="@/assets/icon/arrow_g.svg" alt="Icon Arrow"
            /></a>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.jumbotron {
  background-image: url("@/assets/img/jumbotron_home.png");
  @apply bg-cover;
}
</style>
