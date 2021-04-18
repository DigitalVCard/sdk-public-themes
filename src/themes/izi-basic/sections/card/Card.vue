<template>
  <g-scroll-content class="h-full relative z-1 bg-gray-50">
    <template #body>
      <div class="overflow-hidden">
        <card-avatar
          :photo="myCardInfo.photo"
          :backgroundImage="bgImage"
        ></card-avatar>
        <card-names
          :firstname="myCardInfo.firstname"
          :surname="myCardInfo.surname"
          :position="myCardInfo.position"
        ></card-names>
        <card-actions :actions="actions"></card-actions>

        <div class="text-center bg-gray-50 pt-4">
          <div class="pt-8 pb-6">
            <g-button
              color="primary"
              class="border-2 p-button-outlined border-gray-700 text-gray-700 rounded-lg h-8 p-button-plain"
              @click="onShare"
            >
              compartir
              <g-icon class="pl-2" :icon="icons.share || 'mdi:share-variant'"
                >mdi-share-variant</g-icon
              >
            </g-button>
          </div>
          <the-redes :redes="myCard.redes"></the-redes>
        </div>
      </div>
    </template>
  </g-scroll-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useLinks, useMyCard, useTheme, useColors } from '@/sdk/use';
import CardAvatar from './CardAvatar.vue';
import CardNames from './CardNames.vue';
import CardActions from './CardActions.vue';

import { useShare } from '@vueuse/core';
import { useHelpers } from '@/use';

export default defineComponent({
  components: { CardAvatar, CardNames, CardActions },
  setup() {
    const { useLinks, useMyCard, useTheme, useColors } = useHelpers();

    const myCard = useMyCard();
    const links = useLinks();
    const { themeOptions, icons } = useTheme();
    const myCardInfo = myCard.info || {};
    const colors = useColors();
    console.log(colors);

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
    const bgGradient = {
      background: `linear-gradient(0deg, ${colors['primary-darken4']} 0%, ${colors['primary-darken2']} 40%, ${colors.primary} 100%)`
    };
    return {
      onShare,
      myCard,
      myCardInfo,
      links,
      actions,
      bgImage,
      icons,
      bgGradient
    };
  }
});
</script>
