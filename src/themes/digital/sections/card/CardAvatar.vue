<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <div class="w-full relative">
      <div
        class="h-48 bg-cover bg-center overflow-hidden"
        :style="bgStyle"
      ></div>
    </div>
    <div class="-mt-20 relative z-10">
      <div
        class="h-42 w-42 elevation-2 rounded-full overflow-hidden border-white border-8"
      >
        <img :src="photo" alt="" />
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
    },
    backgroundImage: {
      type: String
    }
  },
  setup(props) {
    const bgStyle = props.backgroundImage
      ? {
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundAttachment: 'initial'
        }
      : {};
    return {
      bgStyle
    };
  }
});
</script>
