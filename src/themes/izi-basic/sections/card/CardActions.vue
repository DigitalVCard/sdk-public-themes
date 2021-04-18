<template>
  <div class="justify-center flex">
    <card-actions-button
      class="flex-1"
      v-for="item in items"
      :actions="actions"
      :type="item.type"
      :text="item.text"
      :icon="icons[item.type] || `mdi:${item.type}`"
      :href="item.href"
      :customClass="item.customClass"
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
    const { useTheme } = useHelpers();
    const { icons } = useTheme();
    const items = computed(() => {
      return [
        {
          type: 'phone',
          text: 'Trabajo',
          href: (v) => `tel:${v}`
        },
        {
          type: 'cellphone',
          text: 'Celular',
          href: (v) => `tel:${v}`
        },
        {
          type: 'whatsapp',
          text: 'Whatsapp',
          href: (v) => `https://api.whatsapp.com/send?phone=${v}`
        },
        {
          type: 'email',
          text: 'Email',
          href: (v) => `mailto:${v}`
        }
      ]
        .filter((v) => {
          return props.actions?.[v.type] && props.actions?.[v.type]?.show;
        })
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
    return { icons, items };
  }
});
</script>
