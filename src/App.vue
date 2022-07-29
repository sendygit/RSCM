<template>
  <main>
    <router-view />
  </main>

  <footer class="bg-black py-[135px] px-side">
    <div class="grid grid-cols-4 text-white px-side gap-32">
      <div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-xl">Pasien & Keluarga</h1>
          <div class="mt-8 flex flex-col space-y-6 text-lg text-[#D5D5D5]">
            <p>Alur Pendaftaran Pasien</p>
            <router-link :to="{ name: 'BuatPerjanjian' }">Buat Perjanjian dengan Dokter</router-link>
            <p>Biaya Pengobatan</p>
            <p>Jadwal Poliklinik</p>
            <p>Rujukan Gawat Darurat</p>
            <p>Tata Tertib & Jam Berkunjung</p>
          </div>
        </div>
        <div class="mt-[80px]">
          <h1 class="font-semibold text-xl">Tenaga Medis</h1>
          <div class="mt-8 flex flex-col space-y-6 text-lg text-[#D5D5D5]">
            <router-link :to="{ name: 'CariDokter' }">Cari Dokter yang ada di RSCM</router-link>
            <p>Pengobatan Penyakit</p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-xl">Riset Penelitian</h1>
          <div class="mt-8 flex flex-col space-y-6 text-lg text-[#D5D5D5]">
            <p>Berita Penelitian</p>
            <p>Peneliti dari RSCM</p>
            <p>Tentang Penelitian RSCM</p>
            <p>List Penelitian</p>
          </div>
        </div>
        <div class="mt-[80px]">
          <h1 class="font-semibold text-xl">Pendidikan</h1>
          <div class="mt-8 flex flex-col space-y-6 text-lg text-[#D5D5D5]">
            <p>Pendidikan & Latihan</p>
            <p>Kerja sama dengan kami</p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-col">
          <h1 class="font-semibold text-xl">Kontak Kami</h1>
          <div class="mt-8 flex flex-col space-y-6 text-lg text-[#D5D5D5]">
            <div class="flex">
              <img class="w-6 h-6 mr-2" src="@/assets/icon/mail.svg" alt="Icon Mail" />
              <p>Info@rscm.co.id</p>
            </div>
            <div class="flex">
              <img class="w-6 h-6 mr-2" src="@/assets/icon/call.svg" alt="Icon Call" />
              <p>1500 135</p>
            </div>
            <div class="flex">
              <img class="w-6 h-6 mr-2" src="@/assets/icon/location.svg" alt="Icon Location" />
              <p>
                Jalan Diponogoro <br />
                No. 71 Jakarta
              </p>
            </div>
          </div>
        </div>
        <div class="mt-[80px]">
          <h1 class="font-semibold text-xl">Social Media</h1>
          <div class="mt-8 flex space-x-6">
            <img class="w-6 h-6 mr-2" src="@/assets/icon/facebook.svg" alt="Icon Facebook" />
            <img class="w-6 h-6 mr-2" src="@/assets/icon/twitter.svg" alt="Icon Twitter" />
            <img class="w-6 h-6 mr-2" src="@/assets/icon/youtube.svg" alt="Icon Youtube" />
          </div>
        </div>
        <div>
          <button class="border border-white hover:bg-mermud hover:border-0 rounded-full w-[205px] h-[61px] font-medium text-2xl mt-[80px]"><router-link to="/faq">F A Q</router-link></button>
        </div>
      </div>

      <div>
        <div>
          <h1 class="font-semibold text-xl">Didukung Oleh</h1>
        </div>
        <div class="mt-8">
          <div class="flex">
            <img src="@/assets/icon/logo_kars.svg" alt="" />
            <img class="ml-12" src="@/assets/icon/logo_segitiga.svg" alt="" />
          </div>
          <img class="mt-12" src="@/assets/icon/logo_ministry.svg" alt="" />
        </div>
      </div>
    </div>
  </footer>
</template>
