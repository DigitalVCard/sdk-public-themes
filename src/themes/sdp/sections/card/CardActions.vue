<template>
  <div class="p-3 flex justify-center flex-wrap">
    <card-actions-button
      v-for="(action, key) in actions.others"
      :key="key"
      :action="action"
      type="phone"
      text="Trabajo"
      :icon="action.icon"
      :onAction="routeActions[action.type]"
      :href="hrefActions[action.type]"
    ></card-actions-button>
  </div>
</template>

<script lang="ts">
import { useHelpers } from '@/use';
import { defineComponent } from 'vue';
import CardActionsButton from './CardActionsButton.vue';
export default defineComponent({
  components: { CardActionsButton },
  props: {
    actions: {
      type: Object,
      required: true
    }
  },
  setup() {
    const { useActions } = useHelpers();
    const { hrefActions, routeActions } = useActions();
    // console.log(hrefActions);

    return { hrefActions, routeActions };
  }
});
</script>
