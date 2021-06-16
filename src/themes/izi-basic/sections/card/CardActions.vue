<template>
  <div class="justify-center flex bg-gray-50">
    <card-actions-button
      class="flex-1"
      v-for="(action, key) in items"
      :key="key"
      :action="action"
      type="phone"
      :text="action.title"
      :icon="action.icon"
      :onAction="routeActions[action.type]"
      :href="hrefActions[action.type]"
      :customClass="action.customClass"
    >
    </card-actions-button>
  </div>
</template>

<script lang="ts">
import { useHelpers } from '@/use';
import { computed, defineComponent } from 'vue';
import CardActionsButton from './CardActionsButton.vue';
export default defineComponent({
  components: { CardActionsButton },
  props: {
    actions: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { useTheme, useActions } = useHelpers();
    const { hrefActions, routeActions } = useActions();

    const { icons } = useTheme();
    const items = computed(() => {
      return [...props.actions.others]

        .reverse()
        .map((v, ix) => {
          //
          return {
            ...v,
            customClass: [ix === 0 ? 'bg-primary' : `bg-primary-darken${ix}`]
          };
        })
        .reverse();
    });
    return { icons, items, hrefActions, routeActions };
  }
});
</script>
