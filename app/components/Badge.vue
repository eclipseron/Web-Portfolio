<script setup lang="ts">
  const props = defineProps({
    title: String
  })
</script>

<template>
  <p class="font-mono px-2 py-1 bg-primary/20 w-fit rounded-lg">{{ props.title }}</p>
</template>