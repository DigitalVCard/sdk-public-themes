<template>
  <div class="text-center px-1 py-2" v-if="actions[type] && actions[type].show">
    <g-button
      :href="href(actions[type].value)"
      class="p-button-text p-button-plain rounded-full bg-gray-100 shadow text-sm text-gray-900"
    >
      <!-- <v-icon color="secondary">{{ icon || 'mdi-help' }}</v-icon> -->
      <g-icon :icon="icon" class="text-secondary mr-2"></g-icon>
      <span>
        {{ actions[type].value }}
      </span>
    </g-button>
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
      required: true
    },
    text: String,
    icon: { type: String, required: true },
    actions: {
      type: Object,
      required: true
    }
  }
});
</script>
