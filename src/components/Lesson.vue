<script setup lang="ts">
import { Lesson } from "../models/Lesson";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { PrimeIcons } from "primevue/api";
import { ref } from "vue";
import { Section } from "../models/Section";
import { useCourseStore } from "../store/CourseStore";
import BlockUI from "primevue/blockui";
import Card from "primevue/card";
import Divider from "primevue/divider";
import Galleria from "primevue/galleria";
import MenuBar from "primevue/menubar";
import Panel from "primevue/panel";
import ToggleButton from "primevue/togglebutton";
import Toolbar from "primevue/toolbar";
import { ToggleableWord } from "../models/ToggleableWord";

const contentBaseUrl = "http://212.44.105.27/";
const store = useCourseStore();
let lesson = ref<Lesson>();
let section = ref<Section>();
let showGallery = ref<boolean>(true);
let showWords = ref<boolean>(true);

onBeforeRouteUpdate((to) => {
  lesson.value = store.getCourses
    .find((c) => c.slug === to.params.course)
    ?.lessons.find((l) => l.slug === to.params.lesson);

  section.value = undefined;
});

const onMenuClick = function (s: Section): void {
  s.words?.forEach((w) => (w.showGallery = w.showWord = true));
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
      :buttonProps="{ style: 'background:red' }"
    >
    </MenuBar>
    <Toolbar v-if="section" class="my-2">
      <template #start>
        <ToggleButton
          v-model="showGallery"
          onLabel="Galerija"
          offLabel="Galerija"
          :onIcon="PrimeIcons.CHECK"
          :offIcon="PrimeIcons.TIMES"
          class="mx-1"
          @change="section?.words.forEach((w) => (w.showGallery = showGallery))"
        />

        <ToggleButton
          v-model="showWords"
          onLabel="Beseda"
          offLabel="Beseda"
          :onIcon="PrimeIcons.CHECK"
          :offIcon="PrimeIcons.TIMES"
          @change="section?.words.forEach((w) => (w.showWord = showWords))"
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
                <BlockUI :blocked="!word.showGallery" class="gallery-overlay">
                  <img
                    v-if="slotProps.item.endsWith('.jpg')"
                    :src="contentBaseUrl + slotProps.item"
                    style="height: 240px"
                  />
                  <video
                    height="240"
                    v-if="slotProps.item.endsWith('.mp4')"
                    onclick="if(this.paused) this.play(); else this.pause();"
                    :src="contentBaseUrl + slotProps.item"
                  ></video>
                </BlockUI>
              </template>
            </Galleria>
          </template>
          <template #footer>
            <Toolbar>
              <template #start>
                <BlockUI :blocked="!word.showWord" class="gallery-overlay">
                  {{ word.title }}
                </BlockUI>
              </template>
              <template #end>
                <ToggleButton
                  v-model="word.showGallery"
                  onLabel="Galerija"
                  offLabel="Galerija"
                  :onIcon="PrimeIcons.CHECK"
                  :offIcon="PrimeIcons.TIMES"
                  class="mx-1"
                />

                <ToggleButton
                  v-model="word.showWord"
                  on-label="Beseda"
                  off-label="Beseda"
                  :onIcon="PrimeIcons.CHECK"
                  :offIcon="PrimeIcons.TIMES"
                />
              </template>
            </Toolbar>
          </template>
        </Card>
      </div>
    </div>
  </Panel>
</template>

<style>
.gallery-overlay > .p-component-overlay {
  background: rgba(255, 255, 255, 1) !important;
}
</style>
