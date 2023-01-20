<script setup lang="ts">
import PanelMenu from "primevue/panelmenu";
import { PrimeIcons } from "primevue/api";
import { useCourseStore } from "../store/CourseStore";
import { onBeforeMount, onMounted } from "vue-demi";
import { MenuItem } from "primevue/menuitem/MenuItem";
import { useRoute, useRouter } from "vue-router";
import Workbook from "../views/Workbook.vue";

let items: MenuItem[] = [{ label: "Abeceda", to: "/abeceda", icon: PrimeIcons.THUMBS_UP_FILL }];
const router = useRouter();

onBeforeMount(() => {
  const store = useCourseStore();
  store.getCourses.forEach((c) => {
    items.push({ label: c.title, to: "/" + c.slug });
    // router.addRoute({ path: "/ucbenik/" + c.slug, component: Workbook });
  });
});
</script>

<template>
  <PanelMenu :model="items" />
</template>
