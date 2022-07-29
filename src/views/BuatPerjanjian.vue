<script setup>
import { ref } from "vue";
import TheHeader from "../components/TheHeader.vue";

const phone = ref("");
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="py-20 px-side">
    <h1 class="font-lora text-7xl text-butu">Buat Perjanjian Anda</h1>

    <div class="py-20">
      <hr />
    </div>

    <div class="flex ">
      <!-- col1 -->
      <div class="px-4 py-[6px]">
        <div>
          <div class="flex items-center">
            <button class="bulat group">
              <p class="font-lora font-medium text-2xl group-focus:text-white">1</p>
            </button>
            <div class="ml-4">
              <p class="font-lora text-xl text-[#696969] group-focus:text-mermud">Informasi Pasien</p>
            </div>
          </div>
          <div class="bg-bumud w-1 h-[84px] ml-[22px]"></div>
        </div>

         <div>
          <div class="flex items-center">
            <button class="bulat group>jyhtbgfdcsxa">
              <p class="font-lora font-medium text-2xl group-focus:text-white">2</p>
            </button>
            <div class="ml-4">
              <p class="font-lora text-xl text-[#696969] group-focus:text-mermud">Detail Keluhan</p>
            </div>
          </div>
          <div class="bg-bumud w-1 h-[84px] ml-[22px]"></div>
        </div>

         <div>
          <div class="flex items-center">
            <button class="bulat group>jyhtbgfdcsxa">
              <p class="font-lora font-medium text-2xl group-focus:text-white">3</p>
            </button>
            <div class="ml-4">
              <p class="font-lora text-xl text-[#696969] group-focus:text-mermud">Informasi Asuransi</p>
            </div>
          </div>
        </div>
      </div>

      <!-- col2 -->
      <div class="ml-[125px]">
        <form action="">

            <h1 class="font-lora font-medium text-[32px] text-butu">Informasi Pasien</h1>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">Nama</h2>
              <input class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969]" type="text" placeholder="Nama Lengkap" />
            </div>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">Status</h2>
              <select class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969]">
                <option selected>Pilih salah satu</option>
                <option>Status 1</option>
                <option>Status 2</option>
                <option>Status 3</option>
                <option>Status 4</option>
              </select>
            </div>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">Tanggal Lahir</h2>
              <input class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969]" type="date" placeholder="hari"/>
            </div>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">Alamat</h2>
              <textarea class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969] h-[278px]" type="text" placeholder="Masukkan Alamat sesuai KTP"></textarea>
            </div>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">No. Telephone</h2>
               <vue-tel-input v-model="phone" class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969]"></vue-tel-input>
            </div>
            <div class="py-4 pl-4 mt-16 mb-8">
              <h2 class="text-medium text-2xl text-[#575757]">Email</h2>
              <input class="focus:outline-none focus:drop-shadow-[0_0px_2px_rgba(102,175,233,0.6)] border border-[#C9C9C9] focus:border-[#66afe9] rounded-[4px] p-8 text-base w-full mt-4 text-[#696969]invalid:outline-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 " type="email" placeholder="Email" />
            </div>
        </form>
        <div>
            <button class="bg-mermud hover:bg-[#FC616D] px-[110px] py-[30px] rounded-full text-white font-medium text-2xl ml-4">
                Lanjut
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bulat{
  @apply rounded-full flex-shrink-0 bg-bumud w-[48px] h-[48px] grid place-content-center focus:bg-mermud 
}
</style>

<!-- <div class="border-2 ml-[24px] -mt-1 border-bumud bg-bumud origin-left rotate-90 w-[84px] mb-5"></div> -->
<!-- <input class="outline-none" type="text" placeholder="Nama Lengkap"> -->
