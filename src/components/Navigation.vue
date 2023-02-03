<script setup lang="ts">
import PanelMenu from "primevue/panelmenu";
import { PrimeIcons } from "primevue/api";
import { useCourseStore } from "../store/CourseStore";
import { onBeforeMount, onMounted } from "vue-demi";
import { MenuItem } from "primevue/menuitem/MenuItem";

let items: MenuItem[] = [{ label: "Abeceda", to: "/abeceda", icon: PrimeIcons.THUMBS_UP_FILL }];

onBeforeMount(() => {
  const store = useCourseStore();

  store.getCourses.forEach((c) => {
    let lessonItems = c.lessons.map<MenuItem>((l, index) => {
      return { label: l.title, to: "/" + c.slug + "/" + l.slug };
    });
    items.push({ label: c.title, items: lessonItems });
  });
});
</script>

<template>
  <PanelMenu :model="items" style="width: 15rem" />
</template>
