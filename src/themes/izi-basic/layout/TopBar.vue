<template>
  <div class="flex items-center relative">
    <div class="w-12 absolute top-0 left-3 z-50">
      <g-button
        v-if="showMenu"
        icon="pi"
        class="p-button-text"
        @click="toogleMenu"
      >
        <g-icon
          :icon="
            state.menu
              ? 'mdi:close'
              : icons.menu || 'fluent:office-apps-24-filled'
          "
          size="2em"
          :class="
            $route.path !== '/'
              ? 'text-gray-600'
              : mode === 'normal'
              ? 'text-gray-600'
              : 'text-white'
          "
        ></g-icon>
      </g-button>
    </div>
    <!-- <div class="flex-auto"></div>
    <div class="py-1">
      <img :src="images.logo" style="max-height: 42px" />
    </div>
    <div class="flex-auto"></div>

    <div class="text-right w-12">
      <g-button icon="pi" class="p-button-text" @click="toogleQrCode">
        <g-icon
          :icon="icons.qrcode || 'mdi:qrcode'"
          size="2em"
          class="text-white text-theme"
        ></g-icon>
      </g-button>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// import QrDialog from '@/components/DialogQrCode.vue';
import { useHelpers } from '@/use';

export default defineComponent({
  setup() {
    // const { info, imgLogo, isDark } = useCard();
    const {
      useActions,
      useStates,
      useSettings,
      useTheme,
      useSections
    } = useHelpers();
    const { sections } = useSections();
    const { images, icons } = useTheme();
    const { info } = useSettings();
    const state = useStates();
    const { toogleMenu, toogleQrCode } = useActions();
    const showMenu = !!sections.length;
    const { theme } = useSettings();
    const mode = theme.options?.shape?.mode || 'invert';

    return {
      state,
      info,
      toogleMenu,
      toogleQrCode,
      images,
      showMenu,
      mode,
      icons
    };
  }
});
</script>
