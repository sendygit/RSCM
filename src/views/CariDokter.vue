<script setup>
import TheHeader from "../components/TheHeader.vue";
import ButtonPerjanjian from "../components/ButtonPerjanjian.vue";
</script>

<template>
  <header>
    <TheHeader />
  </header>

  <div class="py-20">
    <div class="jumbotron px-[90px] py-20 flex flex-col items-center">
      <div>
        <h1 class="font-lora text-7xl">Cari Dokter</h1>
      </div>
      <div class="flex mt-8 w-full">
        <label class="h-[72px] rounded-full border border-[#C9C9C9] flex flex-grow items-center p-6 ml-auto bg-white" for="search">
          <img class="mr-4" src="@/assets/icon/search.svg" alt="Icon Search" />
          <input id="search text-[#575757] text-xl" class="flex-grow border-none focus:outline-none" type="search" placeholder="Michael" />
        </label>

        <!-- <h1 class=""></h1> -->

        <ButtonPerjanjian class="ml-8"></ButtonPerjanjian>
      </div>
    </div>

    <div class="px-side pt-20 flex">
      <div>
        <div class="flex flex-cols bg-[#393939] text-white p-8">
          <div class="">
            <h1 class="font-lora font-medium text-[32px]">Filter</h1>
            <div>
              <h2 class="font-medium text-2xl mt-8">Pengobatan</h2>
              <div class="mt-8">
                <div class="p-4 flex text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Orang Dewasa</p>
                </div>
                <div class="p-4 flex mt-2 text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Anak - Anak</p>
                </div>
              </div>
            </div>

            <div>
              <h2 class="font-medium text-2xl mt-8">Tipe Dokter</h2>
              <div class="mt-8">
                <div class="p-4 flex text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Dokter Umum</p>
                </div>
                <div class="p-4 flex mt-2 text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Dokter Spesialis</p>
                </div>
              </div>
            </div>

            <div>
              <h2 class="font-medium text-2xl mt-8">Jenis Kelamin</h2>
              <div class="mt-8">
                <div class="p-4 flex text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Laki - Laki</p>
                </div>
                <div class="p-4 flex mt-2 text-lg text-[#D5D5D5]">
                  <div class="relative w-6 h-6 border rounded grid place-items-center">
                    <input type="checkbox" id="ccc" class="absolute w-3 h-3 appearance-none checked:bg-white cursor-pointer" />
                  </div>
                  <p class="ml-4">Perempuan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="ml-8 flex-grow">
        <div class="flex items-center">
          <div>
            <img src="@/assets/img/dokter1.png" alt="" />
          </div>
          <div class="grid place-items-start">
            <div class="p-4 ml-[32px] mr-4 my-[26.5px]">
              <h1 class="font-bold text-2xl text-[#575757]">Michael Doe</h1>
              <p class="mt-6 mb-16 text-lg text-[#575757]">Dokter Spesialis Kulit</p>
              <ButtonPerjanjian />
            </div>
          </div>
        </div>

        <div class="py-20">
          <hr />
        </div>

        <div class="flex items-center">
          <div>
            <img src="@/assets/img/dokter2.png" alt="" />
          </div>
          <div class="grid place-items-start">
            <div class="p-4 ml-[32px] mr-4 my-[26.5px]">
              <h1 class="font-bold text-2xl text-[#575757]">Michael Jordan</h1>
              <p class="mt-6 mb-16 text-lg text-[#575757]">Dokter Anak</p>
              <ButtonPerjanjian />
            </div>
          </div>
        </div>

        <div class="py-20">
          <hr />
        </div>

        <div class="flex items-center">
          <div>
            <img src="@/assets/img/dokter3.png" alt="" />
          </div>
          <div class="grid place-items-start">
            <div class="p-4 ml-[32px] mr-4 my-[26.5px]">
              <h1 class="font-bold text-2xl text-[#575757]">Michael Kolscz</h1>
              <p class="mt-6 mb-16 text-lg text-[#575757]">Dokter Mata</p>
              <ButtonPerjanjian />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style>
.jumbotron {
  background-image: url("@/assets/img/bg_caridokter.png");
  @apply bg-cover;
}
</style>
