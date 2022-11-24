
<script setup lang="ts">
import Menu from "primevue/menu";
import { MenuItem } from "primevue/menuitem";
import { PrimeIcons } from "primevue/api";

let items: MenuItem[] = [
  { label: "Abeceda", to: "/abeceda", icon: PrimeIcons.THUMBS_UP_FILL },
  { label: "Učbenik", to: "/ucbenik", icon: PrimeIcons.BOOK },
];
</script>

<template>
  <Menu :model="items" position="left" />
</template>
