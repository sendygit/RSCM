<script setup>
import Card from "../components/Card.vue";
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="px-side py-20">
    <div class="image bg-no-repeat relative flex items-center w-full">
      <img src="@/assets/img/konsul.png" alt="Gambar Konsul" />
      <div class="absolute w-[596px] h-[512px] bg-black bg-opacity-[15%]"></div>
      <div class="bg-[#FFF6F7] h-[512px] flex items-center">
        <div class="flex flex-col">
          <div class="p-4 mx-4 mb-8">

            <h1 class="font-lora text-7xl lg:text-5xl text-butu">Pasien & Keluarga</h1>
            <p class="text-lg lg:text-base text-[#575757] mt-4">
              Cari semua informasi yang anda butuhkan disini baik sebagai Pasien maupun Keluarga Pasien agar Kunjungan anda menjadi lebih nyaman saat berada di Rumah Sakit Cipto Mangunkusumo
            </p>
          </div>
          <div class="flex items-center text-mermud text-2xl">
            <button class="px-8 py-6 hover:bg-mermud hover:text-white underline underline-offset-4 hover:no-underline text-2xl lg:text-xl"><a href="">Saya Seorang Pasien</a></button>
            <div class="border border-[#575757] opacity-60 h-8"></div>
            <button class="px-8 py-6 hover:bg-mermud hover:text-white underline underline-offset-4 hover:no-underline text-2xl lg:text-xl"><a href="">Saya Keluarga Pasien</a></button>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-[121px] pb-20">
      <hr />
    </div>

    <div class="">
      <h1 class="font-lora font-medium text-[32px] text-butu">Pasien</h1>
      <div class="grid grid-cols-2 gap-y-16 gap-x-32 mt-8">
        <Card title="Bagaimana Alur Pendaftaran Pasien yang di RSCM" desc="Berikut adalah data & informasi terkait biaya pengobatan diRSCM"></Card>
        <Card title="Berapa biaya yang dikeluarkan di RSCM?" desc="Berikut adalah data & informasi terkait biaya pengobatan diRSCM "></Card>
        <Card title="Bagaimana cara membuat perjanjian dengan Dokter di RSCM?" desc="Berikut adalah data & informasi terkait membuat perjanjian dengan Dokter yang ada di RSCM"></Card>
        <Card title="Rujukan Gawat Darurat di RSCM" desc="Berikut adalah cara mengupload Rujukan Gawat Darurat di RSCM"></Card>
        <Card title="Semua Jadwal Poliklinik di RSCM" desc="Berikut adalah semua Jadwal Poliklinik yang ada di RSCM"></Card>
        <Card title="Tata Tertib dan Jam Berkunjung di RSCM" desc="Berikut adalah data & informasi terkait Tata Tertib dan Jadwal Berkunjung di RSCM"></Card>
      </div>
    </div>
  </div>
</template>

<!-- <style>
.image {
  background-image: url("@/assets/img/konsul.png");
}
</style> -->
