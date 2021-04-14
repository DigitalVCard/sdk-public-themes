<template>
  <g-scroll-content class="h-full bg-white">
    <template #body>
      <div class="">
        <card-avatar :photo="myCardInfo.photo"></card-avatar>
        <card-names :data="myCardInfo"></card-names>
        <div class="text-center pt-4 pb-3">
          <g-icon
            icon="mdi:map-marker"
            class="inline-block -mb-2 text-secondary"
          ></g-icon>
          Ciudad, Pais
        </div>
        <div class="px-2">
          <card-actions :actions="actions"></card-actions>
        </div>
      </div>
    </template>
  </g-scroll-content>
</template>

<script lang="ts">
import { defineComponent, computed, inject } from 'vue';
import CardAvatar from './CardAvatar.vue';
import CardNames from './CardNames.vue';
import CardActions from './CardActions.vue';
import CardRedes from './CardRedes.vue';
import { useHelpers } from '@/use';
export default defineComponent({
  components: { CardAvatar, CardNames, CardActions },

  setup(props) {
    const { useMyCard } = useHelpers();
    const myCard = useMyCard();
    const myCardInfo = myCard.info || {};
    const actions = myCard.themeOptions?.basic?.actions || {};

    return { myCardInfo, actions };
  }
});
</script>
