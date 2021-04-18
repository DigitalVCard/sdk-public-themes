<template>
  <div class="flex bg-gray-50 border-t-1">
    <a
      class="flex-1 flex py-4 justify-center cursor-pointer"
      :href="links.vcard"
      download
    >
      Guardar
      <g-icon icon="mdi:download" class="text-gray-600 pl-2"></g-icon>
    </a>

    <div
      class="flex-1 flex py-4 justify-center cursor-pointer"
      @click="toogleQrCode"
    >
      Codigo QR
      <g-icon icon="mdi:qrcode" class="text-gray-600 pl-2"></g-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useShare } from '@vueuse/core';
import { useHelpers } from '@/use';

export default defineComponent({
  setup() {
    const {
      useLinks,
      useMyCard,
      useTheme,
      useColors,
      useActions
    } = useHelpers();

    const myCard = useMyCard();
    const links = useLinks();
    const { themeOptions, icons } = useTheme();
    const myCardInfo = myCard.info || {};

    const { isSupported, share } = useShare();
    const { toogleMenu, toogleQrCode } = useActions();

    const onShare = () => {
      const text = `${myCardInfo.firstname} ${myCardInfo.surname}`;
      const url = `${location.origin}${location.pathname}`;
      if (isSupported) {
        share({
          text,
          title: text,
          url
        });
      } else {
        alert('Opcion no soportada para este navegador');
      }
    };

    return {
      onShare,
      myCard,
      myCardInfo,
      toogleQrCode,
      links,
      icons
    };
  }
});
</script>
