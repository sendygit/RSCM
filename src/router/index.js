import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/pasien-keluarga",
      name: "Pasien&Keluarga",
      component: () => import("@/views/PasienKeluarga.vue"),
    },
    {
      path: "/tenaga-medis",
      name: "TenagaMedis",
      component: () => import("@/views/TenagaMedis.vue"),
    },
    {
      path: "/riset-penelitian",
      name: "RisetPenelitian",
      component: () => import("@/views/RisetPenelitian.vue"),
    },
    {
      path: "/pendidikan",
      name: "Pendidikan",
      component: () => import("@/views/Pendidikan.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import("@/views/FAQ.vue"),
    },
    {
      path: "/cari-dokter",
      name: "CariDokter",
      component: () => import("@/views/CariDokter.vue"),
    },
    {
      path: "/buat-perjanjian",
      name: "BuatPerjanjian",
      component: () => import("@/views/BuatPerjanjian.vue"),
    },
    {
      path: "/blog",
      name: "Blog",
      component: () => import("@/views/Blog.vue"),
    },
    {
      path: "/artikel",
      name: "Artikel",
      component: () => import("@/views/Artikel.vue"),
    },
  ],
});

export default router;
