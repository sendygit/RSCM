<script setup>
import TheHeader from "../components/TheHeader.vue";
</script>

<template>
<header>
    <TheHeader />
  </header>

  <div class="px-side py-20">
    <h1 class="font-lora text-7xl text-butu">Frequently Asked Question</h1>

    <div class="py-20">
      <hr />
    </div>

    <div>
      <h1 class="text-butu font-lora font-medium text-[32px]">Pendaftaran Baru Pasien</h1>
      <div class="grid grid-cols-2 gap-32 mt-16">
        <div>
          <h1 class="font-medium text-2xl text-[#575757]">Apa saja syarat pendaftaran bagi Pasien baru BPJS ?</h1>
          <ul class="list-disc text-[#696969] text-lg mt-8 space-y-6 ml-6">
            <li>Kartu BPJS asli dan Fotocopy</li>
            <li>KTP asli yang masih berlaku</li>
            <li>Fotocopy KK</li>
            <li>Surat Rujukan dari Faskes yang ditunjuk BPJS</li>
          </ul>
        </div>
        <div class="mr-[153px]">
          <h1 class="font-medium text-2xl text-[#575757]">Apa saja syarat pendaftaran bagi Pasien baru Jaminan (Perusahaan, Asuransi, Yayasan ?</h1>
          <ul class="list-disc text-[#696969] text-lg mt-8 space-y-6 ml-6">
            <li>Membawa Guarantee Letter dari Perusahaan, Asuransi atau Yayasan yang telah bekerjasama dengan RSCM</li>
            <li>Kartu Asuransi atau ID Card dari Perusahaan</li>
            <li>KTP asli yang masih berlaku</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="py-20">
      <hr />
    </div>

    <div>
      <h1 class="text-butu font-lora font-medium text-[32px]">Jadwal di RSCM</h1>
      <div class="grid grid-cols-2 gap-32 mt-16">
        <div>
          <h1 class="font-medium text-2xl text-[#575757]">Pada Pukul berapa loket pendaftaran rawat jalan dibuka ?</h1>
          <ul class="list-disc text-[#696969] text-lg mt-8 space-y-6 ml-6">
            <li>Senin - Jumat, Pukul 17.00 - 18.30 WIB</li>
            <li>Sabtu, Minggu & Libur Nasional :</li>
            <li class="list-none">1. Pukul 11.00 - 12.00 WIB</li>
            <li class="list-none">2. Pukul 17.00 - 18.30 WIB</li>
          </ul>
        </div>
        <div class="mr-[153px]">
          <h1 class="font-medium text-2xl text-[#575757]">Bagaimana Saya dapat melihat jadwal Dokter yang sedang Praktek di RSCM</h1>
          <ul class="list-disc text-[#696969] text-lg mt-8 space-y-6 ml-6">
            <li>Silahkan anda bisa mengklik <a class="text-mermud underline font-medium text-xl" href="">Jadwal Dokter</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
