<template>
  <div class="flex flex-col justify-center items-center mx-auto">
    <g-sheet height="200" class="bg-primary block w-full relative shape">
      <!-- <v-img height="180" :src="bg"> </v-img> -->
    </g-sheet>
    <div class="-mt-20 flex items-center space-x-4 relative">
      <div>
        <the-action
          :type="left.type || 'save'"
          :value="left.value"
          :icon="left.icon || 'mdi:account-plus'"
        ></the-action>
      </div>
      <div
        class="elevation-6 h-40 w-40 rounded-full overflow-hidden border-primary border-8"
      >
        <img :src="photo" alt="" />
      </div>
      <div>
        <the-action
          :type="right.type || 'shared'"
          :value="right.value"
          :icon="right.icon || 'mdi:share-variant'"
        ></the-action>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHelpers } from '@/use';
import TheAction from './CardAvatarAction.vue';
export default defineComponent({
  components: {
    TheAction
  },
  props: {
    photo: {
      type: String,
      required: true
    }
  },
  setup() {
    const { useMyCard } = useHelpers();
    const { themeOptions } = useMyCard();
    console.log(themeOptions);

    const left = themeOptions.paralel?.actions?.left || {};
    const right = themeOptions.paralel?.actions?.right || {};

    return { left, right };
  }
});
</script>
<style>
.shape {
  clip-path: ellipse(77% 94% at 40% 0%);
}
</style>
