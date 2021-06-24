<template>
  <div class="text-center px-1 py-2" v-if="!action.hide">
    <a :href="href?.(action.value)" @click="onAction(action.value)">
      <g-button
        class="p-button-text p-button-plain rounded-full bg-gray-100 shadow text-sm text-gray-900"
      >
        <!-- <v-icon color="secondary">{{ icon || 'mdi-help' }}</v-icon> -->
        <g-icon :icon="icon" class="text-secondary mr-2"></g-icon>
        <span v-if="action.type === 'internal' || action.type === 'other'">
          {{ action.title }}
        </span>
        <span v-else>
          {{ action.value }}
        </span>
      </g-button>
    </a>

    <!-- 
    <div class="text-xs pt-1">
      {{ text }}
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    href: {
      type: Function,
      default: () => undefined
    },
    onAction: {
      type: Function,
      default: () => void 0
    },
    text: String,
    icon: { type: String, required: true },
    action: {
      type: Object,
      required: true
    }
  }
});
</script>
