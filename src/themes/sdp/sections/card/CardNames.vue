<template>
  <div class="text-center pt-3">
    <div class="text-4xl font-medium text-gray-800">
      {{ data.firstname }} {{ data.surname }}
    </div>
    <div class="w-65 bg-white rounded-lg overflow-hidden mx-auto">
      <div
        class="py-2 text-lg rounded-full p m-1 mb-3 px-2 text-center uppercase tracking-wide text-white relative bg-primary"
      >
        <span>
          {{ data.position }}
        </span>

        <div class="w-full flex justify-center -mb-2 mt-1 absolute">
          <g-sheet
            height="10"
            width="120"
            class="absolute rounded-full bg-secondary"
          >
          </g-sheet>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    data: {
      type: Object,
      required: true
    }
  }
});
</script>
