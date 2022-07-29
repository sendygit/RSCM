<script setup>
const props = defineProps({
  icon: String,
  title: String,
  desc: String,
  link: String,
});

function getImageUrl(name) {
  return new URL(`../assets/icon/${name}.svg`, import.meta.url).href;
}
</script>

<template>
  <div class="pt-4 px-4">
    <img :src="getImageUrl(icon)" alt="" />
    <div class="">
      <h1 class="mt-6 font-inter font-medium text-2xl text-[#575757] lg:text-xl">{{ title }}</h1>
      <p class="mt-4 mb-8 text-[#696969] text-lg lg:text-base">
        {{ desc }}
      </p>
    </div>
    <button class="group transition-all  ease-in-out ">
      <router-link :to="{ name: link }" class="flex items-center text-mermud font-inter font-medium text-xl duration-1000 group-hover:underline">Lihat 
      <img class="ml-4 duration-500 group-hover:translate-x-6" src="@/assets/icon/arrow_r.svg" alt="Icon Arrow" /></router-link>
    </button>
  </div>
</template>
