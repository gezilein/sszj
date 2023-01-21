<script setup lang="ts">
import { onActivated, onBeforeUpdate, onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { Lesson } from "../models/Lesson";
import { useCourseStore } from "../store/CourseStore";
import Panel from "primevue/panel";

const store = useCourseStore();
const route = useRoute();
let lesson = ref<Lesson>();

onBeforeRouteUpdate((to, from, next) => {
  lesson.value = store.getCourses
    .find((c) => c.slug === to.params.course)
    ?.lessons.find((l) => l.slug === to.params.lesson);
  next();
});

onMounted(() => {});
</script>

<template>
  <Panel v-if="lesson" :header="lesson.title">
    {{ lesson.slug }}
  </Panel>
</template>
