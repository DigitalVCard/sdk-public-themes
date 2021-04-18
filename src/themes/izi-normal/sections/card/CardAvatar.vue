<template>
  <div class="shadow-xl relative z-5"></div>
  <div
    class="flex flex-col justify-center items-center mx-auto bg-primary elevation-1"
  >
    <div class="relative z-10 py-8">
      <div class="h-42 w-42 elevation-2 rounded-full overflow-hidden">
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
