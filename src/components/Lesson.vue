<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { Lesson } from "../models/Lesson";
import { useCourseStore } from "../store/CourseStore";
import Panel from "primevue/panel";
import MenuBar from "primevue/menubar";
import Card from "primevue/card";
import { Section } from "../models/Section";

const store = useCourseStore();
const route = useRoute();
let lesson = ref<Lesson>();
let section = ref<Section>();

onBeforeRouteUpdate((to) => {
  lesson.value = store.getCourses
    .find((c) => c.slug === to.params.course)
    ?.lessons.find((l) => l.slug === to.params.lesson);

  section.value = undefined;
});

const onMenuClick = function (s: Section): void {
  section.value = s;
};
</script>

<template>
  <Panel v-if="lesson" :header="lesson?.title">
    <MenuBar
      v-if="lesson.sections.length"
      :model="
        lesson?.sections.map((s) => {
          return {
            label: s.title,
            command: (e) => onMenuClick(s),
          };
        })
      "
      class="my-2"
    />
    <Card v-if="section">
      <template #content>
        {{ section?.title }}
      </template>
    </Card>
  </Panel>
</template>
