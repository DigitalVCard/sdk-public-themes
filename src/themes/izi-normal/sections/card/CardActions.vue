<template>
  <div class="justify-center">
    <card-actions-button
      v-for="(action, key) in items"
      :key="key"
      :action="action"
      :text="action.title"
      :icon="action.icon"
      :onAction="routeActions[action.type]"
      :href="hrefActions[action.type]"
      :customClass="action.customClass"
    />
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
      return [...props.actions.others].map((v, ix) => {
        //
        return {
          ...v,
          customClass: [`bg-secondary-darken${ix + 1}`]
        };
      });
    });
    return { icons, items, hrefActions, routeActions };
  }
});
</script>
