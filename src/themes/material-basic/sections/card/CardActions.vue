<template>
  <div class="pt-2px g-bg-bg-primary">
    <div class="flex space-x-2px">
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
      return (
        [...props.actions?.others]
          // .filter((action) => {
          //   return !action.hide;
          // })
          .reverse()
          .map((v, ix) => {
            //
            return {
              ...v,
              customClass: 'bg-primary'
            };
          })
          .reverse()
      );
    });
    return { icons, items, hrefActions, routeActions };
  }
});
</script>
