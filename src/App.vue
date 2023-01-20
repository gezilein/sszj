<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue";
import Navigation from "./components/Navigation.vue";
import { useCourseStore } from "./store/CourseStore";
import courseData from "./assets/data.json";
import { Course } from "./models/Course";

onMounted(() => {
  const store = useCourseStore();
  store.setCourses(courseData.courses);
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
