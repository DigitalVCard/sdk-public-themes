<template>
  <a :href="href" @click="onAction" target="_blank">
    <g-button
      icon="pi"
      class="h-14 w-14 bg-secondary rounded-full p-button-raised p-button-text p-button-plain text-white"
    >
      <g-text-color secondary>
        <g-icon :icon="icon"></g-icon>
      </g-text-color>
    </g-button>
  </a>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useHelpers } from '@/use';

export default defineComponent({
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    icon: {
      type: String
    }
  },
  setup(props) {
    const { useMyCard, useActions, useShared, useLinks } = useHelpers();
    const { info } = useMyCard();
    const { vcard } = useLinks();
    const { onShare } = useShared();
    const { hrefActions, routeActions } = useActions();
    let href = ref<string | null>(null);
    const onHref = hrefActions[props.type];
    if (onHref) href.value = onHref(props.value || '/');
    if (props.type === 'save') href.value = vcard;
    const onAction = () => {
      if (!href.value) {
        onShare(`${info.firstname} ${info.surname}`);
      }
    };

    return {
      href,
      onAction
    };
  }
});
</script>
