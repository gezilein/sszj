<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCourseStore } from "../store/CourseStore";
const store = useCourseStore();
const route = useRoute();
</script>

<template>
  <h2>Poglavje {{ store.courses.length }}</h2>
  {{ route.fullPath }}
  {{ route.params.course }}
</template>
