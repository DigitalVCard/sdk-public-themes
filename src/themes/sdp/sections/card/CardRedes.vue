<template>
  <div class="flex justify-center space-x-3 pt-3 pb-8">
    <div v-for="(red, key) in redes" :key="key" class="px-0">
      <g-button
        :href="red.url"
        target="_blank"
        icon="pi"
        class="p-button-text p-button-plain"
        rel="noopener noreferrer"
      >
        <img width="28" :src="red.image" />
      </g-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    redes: {
      type: [Object, Array],
      required: true
    }
  }
});
</script>
