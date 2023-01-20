
<script setup lang="ts">
import PanelMenu from 'primevue/panelmenu';
import { PrimeIcons } from "primevue/api";

let items = [
  { label: "Abeceda", to: "/abeceda", icon: PrimeIcons.THUMBS_UP_FILL },
  { label: "Učbenik", to: "/ucbenik", icon: PrimeIcons.BOOK },
];
</script>

<template>
  <PanelMenu :model="items" />
</template>
