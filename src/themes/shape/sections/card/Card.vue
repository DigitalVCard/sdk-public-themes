<template>
  <g-scroll-content class="h-full relative z-1" color="white">
    <template #body>
      <card-avatar :photo="myCardInfo.photo" :info="myCardInfo"> </card-avatar>
    </template>
  </g-scroll-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useLinks, useMyCard, useTheme, useColors } from '@/sdk/use';
import CardAvatar from './CardAvatar.vue';
import { useShare } from '@vueuse/core';
import { useHelpers } from '@/use';

export default defineComponent({
  components: { CardAvatar },
  setup() {
    const { useLinks, useMyCard, useTheme, useColors } = useHelpers();

    const myCard = useMyCard();
    const links = useLinks();
    const { themeOptions, icons } = useTheme();
    const myCardInfo = myCard.info || {};

    const actions = myCard.themeOptions?.basic?.actions || {};
    let bgImage;

    if (myCard.themeOptions?.basic?.background?.show) {
      bgImage = myCard.themeOptions.basic.background.image;
    } else {
      bgImage = themeOptions?.basic?.image;
    }
    const { isSupported, share } = useShare();
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
      links,
      actions,
      bgImage,
      icons
    };
  }
});
</script>
