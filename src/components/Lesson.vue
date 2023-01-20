<script setup lang="ts">
import { useCourseStore } from "../store/CourseStore";
const store = useCourseStore();
</script>

<template>
  <h2>Poglavje {{ store.courses.length }}</h2>
</template>
