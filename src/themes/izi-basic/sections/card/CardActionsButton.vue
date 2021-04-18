<template>
  <div class="text-center" v-if="actions[type] && actions[type].show">
    <a :href="href(actions[type].value)" target="_blank">
      <g-button
        icon="pi"
        class="h-22 w-full flex flex-col items-center justify-center border-none p-button-text p-button-plain rounded-none"
        :class="customClass"
      >
        <g-icon :icon="icon" class="text-white"></g-icon>
        <div class="text-sm pt-1 text-white font-medium uppercase">
          {{ text }}
        </div>
      </g-button></a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Value } from '@redware/card-types/v1/card';
export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    href: {
      type: Function,
      required: true
    },
    text: String,
    customClass: [String, Array],
    icon: { type: String, required: true },
    actions: {
      type: Object as PropType<Record<string, Value>>,
      required: true
    }
  }
});
</script>
