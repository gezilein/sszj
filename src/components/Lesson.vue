<script setup lang="ts">
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { Lesson } from "../models/Lesson";
import { useCourseStore } from "../store/CourseStore";
import Panel from "primevue/panel";
import MenuBar from "primevue/menubar";
import Card from "primevue/card";
import { Section } from "../models/Section";
import Galleria from "primevue/galleria";
import Toolbar from "primevue/toolbar";
import ToggleButton from "primevue/togglebutton";
import { PrimeIcons } from "primevue/api";

const contentBaseUrl = "http://212.44.105.27/";
const store = useCourseStore();
let lesson = ref<Lesson>();
let section = ref<Section>();
let showGallery = ref<boolean>(true);

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
    <Toolbar>
      <template #start>
        <ToggleButton
          v-model="showGallery"
          onLabel="Galerija vidna"
          offLabel="Galerija skrita"
          :onIcon="PrimeIcons.CHECK"
          :offIcon="PrimeIcons.TIMES"
        />
      </template>
    </Toolbar>
    <div class="grid" v-if="section">
      <div v-for="word in section?.words" class="col-4">
        <Card>
          <template #content>
            <Galleria
              :value="word.content"
              :numVisible="1"
              :circular="true"
              :showItemNavigators="word.content.length > 1"
              :showThumbnails="false"
              width="2rem"
            >
              <template #item="slotProps">
                <img
                  v-if="slotProps.item.endsWith('.jpg')"
                  :src="contentBaseUrl + slotProps.item"
                  style="height: 240px"
                />
                <video height="240" controls v-if="slotProps.item.endsWith('.mp4')">
                  <source :src="contentBaseUrl + slotProps.item" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </template>
            </Galleria>
          </template>
          <template #footer>
            {{ word.title }}
          </template>
        </Card>
      </div>
    </div>
  </Panel>
</template>
