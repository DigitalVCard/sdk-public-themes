<template>
  <div class="pt-3 flex items-center px-2">
    <div class="w-12">
      <!-- <g-button
        v-if="showMenu"
        icon="pi"
        class="p-button-text"
        @click="toogleMenu"
      >
        <g-icon
          :icon="state.menu ? 'mdi:close' : icons.menu || 'mdi:menu'"
          size="2.3em"
          class="text-white text-theme"
        ></g-icon>
      </g-button> -->
    </div>
    <div class="flex-auto"></div>
    <div class="py-1">
      <img :src="images.logo" style="max-height: 42px" />
    </div>
    <div class="flex-auto"></div>

    <div class="text-right w-12">
      <!-- <g-button icon="pi" class="p-button-text" @click="toogleQrCode">
        <g-icon
          :icon="icons.qrcode || 'mdi:qrcode'"
          size="2em"
          class="text-white text-theme"
        ></g-icon>
      </g-button> -->
    </div>
  </div>
  <div
    class="flex flex-wrap justify-center pt-2 relative z-10"
    v-if="items.length > 1"
  >
    <g-button
      v-for="(item, key) in items"
      :key="key"
      class="flex flex-col items-center justify-center p-button-text p-button-plain text-white hover:bg-gray-800 hover:bg-opacity-40"
      :class="$route.path === item.to ? 'bg-primary-darken1' : ''"
      @click="
        () => {
          $router.push(item.to);
        }
      "
    >
      <div class="text-xs font-medium">{{ item.name }}</div>
    </g-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// import QrDialog from '@/components/DialogQrCode.vue';
import { useHelpers } from '@/use';
export default defineComponent({
  setup() {
    const {
      useActions,
      useStates,
      useSettings,
      useTheme,
      useSections
    } = useHelpers();
    // const { info, imgLogo, isDark } = useCard();
    const { sections } = useSections();
    const { images, icons } = useTheme();
    const { info } = useSettings();
    const state = useStates();
    const { toogleMenu, toogleQrCode } = useActions();
    const showMenu = !!sections.length;

    return {
      items: sections,
      state,
      info,
      toogleMenu,
      toogleQrCode,
      images,
      showMenu,
      icons
    };
  }
});
</script>
