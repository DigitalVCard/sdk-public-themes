<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <g-sheet height="200" class="bg-primary block w-full relative shape">
      <!-- <v-img height="180" :src="bg"> </v-img> -->
    </g-sheet>
    <div class="-mt-20 flex items-center space-x-4 relative">
      <div>
        <g-button
          icon="pi"
          class="h-14 w-14 bg-secondary rounded-full p-button-raised p-button-text p-button-plain text-white"
        >
          <g-icon icon="mdi:account-plus"></g-icon>
        </g-button>
      </div>
      <div
        class="elevation-6 h-40 w-40 rounded-full overflow-hidden border-primary border-8"
      >
        <img :src="photo" alt="" />
      </div>
      <div>
        <g-button
          icon="pi"
          class="h-14 w-14 bg-secondary rounded-full p-button-raised p-button-text p-button-plain text-white"
        >
          <g-icon icon="mdi:email-outline"></g-icon>
        </g-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    photo: {
      type: String,
      required: true
    }
  }
});
</script>
<style>
.shape {
  clip-path: ellipse(77% 94% at 40% 0%);
}
</style>
