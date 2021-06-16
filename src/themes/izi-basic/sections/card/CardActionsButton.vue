<template>
  <div class="text-center" v-if="!action.hide">
    <a
      :href="href?.(action.value)"
      @click="onAction(action.value)"
      target="_blank"
    >
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
    href: {
      type: Function,
      default: () => undefined
      // required: true
    },
    onAction: {
      type: Function,
      default: () => void 0
    },
    text: String,
    customClass: [String, Array],
    icon: { type: String, required: true },
    action: {
      type: Object as PropType<Record<string, Value>>,
      required: true
    }
  }
});
</script>
