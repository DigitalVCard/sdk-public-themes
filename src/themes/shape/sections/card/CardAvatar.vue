<template>
  <div
    class="flex flex-col justify-center items-center mx-auto min-h-full"
    :style="styles.bg"
  >
    <div class="h-48 w-full"></div>
    <div
      class="relative z-10 w-full text-center"
      :style="styles.section"
      :class="styles.text"
    >
      <div
        v-if="shape === 'circle'"
        class="-mt-19 h-38 w-38 elevation-2 rounded-full overflow-hidden border-white border-2 inline-block"
      >
        <img :src="photo" alt="" />
      </div>
      <div
        v-else-if="shape === 'square'"
        class="-mt-19 h-38 w-38 elevation-2 rounded-lg overflow-hidden border-white border-2 inline-block"
      >
        <img :src="photo" alt="" />
      </div>
      <div v-else-if="shape === 'hexagon'" class="-mb-2">
        <div
          class="shape-hex mx-auto bg-gray-50 w-150px h-180px relative flex items-center justify-center -mt-90px elevation-2"
        >
          <div
            class="shape-hex mx-auto w-145px h-175px absolute flex items-center justify-center"
          >
            <img :src="photo" alt="" class="absolute w-170px max-w-170px" />
          </div>
        </div>
      </div>
      <div v-else-if="shape === 'shield'" class="-mb-2">
        <div
          class="shape-shield mx-auto bg-gray-50 w-150px h-170px relative flex items-center justify-center -mt-75px elevation-2"
        >
          <div
            class="shape-shield mx-auto w-145px h-165px absolute flex items-center justify-center"
          >
            <img :src="photo" alt="" class="absolute w-170px max-w-170px" />
          </div>
        </div>
      </div>

      <div class="text-center pt-4 pb-4">
        <div class="text-4xl font-semibold leading-none -mb-2">
          {{ myCardInfo.firstname }} {{ myCardInfo.surname }}
        </div>
        <div class="h-1px w-24 bg-gray-700 inline-block"></div>
        <div class="w-56 md:w-64 rounded-lg overflow-hidden mx-auto">
          <div
            class="pb-2 text-sm text-center font-regular uppercase tracking-wide"
          >
            {{ myCardInfo.position }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex-auto w-full">
      <div class="w-full flex pt-6">
        <div class="flex flex-col items-baseline mx-auto">
          <div v-for="(red, key) in redes" :key="key" class="px-0">
            <a :href="red.url" target="_blank">
              <g-button
                class="p-button-text p-button-plain bg-transparent"
                :class="styles.bgText"
                rel="noopener noreferrer"
              >
                <img
                  width="28"
                  v-if="red.media?.image"
                  :src="red.media.image"
                />
                <g-icon
                  size="22"
                  v-else-if="red.media?.icon"
                  :icon="red.media.icon"
                />
                <div class="pl-3">
                  {{ red.name }}
                </div>
              </g-button>
            </a>
          </div>
        </div>
      </div>
      <div class="text-center pt-2"></div>

      <div class="pt-3 pb-6 text-center">
        <a :href="'/'" download>
          <g-button
            class="elevation-6 p-button-text border-none text-lg rounded-lg"
            :style="styles.section"
            :class="styles.text"
          >
            Portafolio
            <g-icon icon="mdi:chevron-right" class="ml-2"></g-icon> </g-button
        ></a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHelpers } from '@/use';

export default defineComponent({
  props: {},
  setup(props) {
    const { useColors, useSettings, useMyCard } = useHelpers();
    const { theme } = useSettings();
    const { themeOptions, redes, info } = useMyCard();
    const mode = theme.options?.shape?.mode || 'invert';
    const colors = useColors();
    const myCardInfo = info || {};

    const bgStyle = props.backgroundImage
      ? {
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundAttachment: 'initial'
        }
      : {};
    const bgGradient = {
      background: `linear-gradient(315deg, ${colors['primary-darken4']} 0%, ${colors['primary-darken2']} 20%, ${colors.primary} 100%)`
    };
    const styles = {
      normal: {
        bg: {},
        section: bgGradient,
        text: ['text-white'],
        bgText: ['text-gray-600']
      },
      invert: {
        bg: bgGradient,
        section: {
          backgroundColor: 'white'
        },
        text: ['text-gray-700'],
        bgText: ['text-white']
      }
    };
    return {
      bgStyle,
      colors,
      styles: styles?.[mode] || styles.normal,
      bgGradient,
      mode: 'normal',
      shape: themeOptions.shape?.shape || 'shield',
      redes,
      myCardInfo,
      photo: myCardInfo.photo
    };
  }
});
</script>
<style lang="css">
/*
 * ==== hexagon
 */
.shape-hex {
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
}
.shape-shield {
  clip-path: polygon(100% 0, 100% 75%, 50% 100%, 0 75%, 0 0);
}
</style>
