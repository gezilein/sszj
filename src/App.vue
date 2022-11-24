<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="grid">
    <div class="col-fixed" style="width: 220px">
      <Navigation />
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>
