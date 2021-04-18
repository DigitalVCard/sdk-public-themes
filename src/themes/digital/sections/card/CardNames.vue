<template>
  <div class="text-center pt-4">
    <div class="text-4xl font-medium text-white">
      {{ firstname }} {{ surname }}
    </div>
    <div class="w-56 md:w-64 rounded-lg overflow-hidden mx-auto">
      <div
        class="pb-2 pt-1 text-sm text-center font-regular uppercase tracking-wide text-white"
      >
        {{ position }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    firstname: {
      type: String
    },
    surname: {
      type: String
    },
    position: {
      type: String
    }
  }
});
</script>
