<script setup lang="ts">
import { onMounted } from "vue";
import Navigation from "./components/Navigation.vue";
import { useLessonStore } from "./store/LessonStore";
import lessonData from "./assets/lessons.json";

onMounted(() => {
  const store = useLessonStore();
  console.log(lessonData);
});
</script>

<template>
  <div class="grid">
    <div class="col-fixed">
      <Navigation />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
