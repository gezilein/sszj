<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { Lesson } from "../models/Lesson";
import { useCourseStore } from "../store/CourseStore";
import Panel from "primevue/panel";

const store = useCourseStore();
let lesson = ref<Lesson>();

onBeforeRouteUpdate((to) => {
  lesson.value = store.getCourses
    .find((c) => c.slug === to.params.course)
    ?.lessons.find((l) => l.slug === to.params.lesson);
});
</script>

<template>
  <Panel v-if="lesson" :header="lesson.title">
    {{ lesson.slug }}
  </Panel>
</template>
