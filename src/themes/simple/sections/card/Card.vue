<template>
  <g-scroll-content class="h-full relative z-1" :style="bgGradient">
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

        <the-redes :redes="myCard.redes" is-dark></the-redes>

        <div class="text-center">
          <div class="pt-0">
            <a :href="links.vcard" download>
              <g-button
                class="p-button-raised w-52 p-button-text bg-gray-50 border-none text-lg shadow-lg rounded-lg text-gray-900"
              >
                <g-icon
                  :icon="icons.addCard || 'mdi:account-plus'"
                  class="mr-2"
                ></g-icon>
                Guardar contacto
              </g-button>
            </a>
          </div>
          <div class="pt-3">
            <a :href="`tel:${myCard?.vCard?.cellphone}`" download>
              <g-button
                class="p-button-raised w-52 p-button-text bg-gray-50 border-none text-lg shadow-lg rounded-lg text-gray-900"
              >
                <g-icon :icon="'mdi:phone'" class="mr-5"></g-icon>
                Llamar ahora
              </g-button>
            </a>
          </div>

          <div class="pt-8 pb-3">
            <g-button
              color="primary"
              class="border-2 p-button-outlined border-white text-white rounded-lg h-8 p-button-plain"
              @click="onShare"
            >
              compartir
              <g-icon class="pl-2" :icon="icons.share || 'mdi:share-variant'"
                >mdi-share-variant</g-icon
              >
            </g-button>
          </div>
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
import { useShare } from '@vueuse/core';
import { useHelpers } from '@/use';

export default defineComponent({
  components: { CardAvatar, CardNames },
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
