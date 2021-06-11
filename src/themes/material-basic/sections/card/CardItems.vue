<template>
  <div class="pt-2px px-2px">
    <div class="justify-center text-gray-800">
      <div
        v-for="(item, ix) in items"
        :key="ix"
        class="flex items-center text-sm"
      >
        <div class="w-3/12 text-center text-xl">
          <g-icon
            :icon="icons[item.type] || `mdi:${item.type}`"
            class="text-gray-400 inline-block"
          ></g-icon>
        </div>
        <div class="w-9/12 pr-2 text-base border-b-1px border-gray-300 py-4">
          <div class="font-bold">
            {{ item?.action.value }}
          </div>
          <div>
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="flex items-center text-sm" v-if="actions?.['address']">
        <div class="w-3/12 text-center text-xl">
          <g-icon
            :icon="icons['address']"
            class="text-gray-400 inline-block"
          ></g-icon>
        </div>
        <div class="w-9/12 pr-2 text-base border-b-1px border-gray-300 py-4">
          <div class="whitespace-pre-line">
            {{ actions?.['address']?.address }}
          </div>
          <div>
            <a :href="actions?.['address']?.value">
              <span class="uppercase text-blue-500"> Ver en mapa </span>
            </a>
          </div>
        </div>
      </div>
      <!-- <div
        class="flex-1"
        v-for="item in items"
        :actions="actions"
        :type="item.type"
        :text="item.text"
        :icon="icons[item.type] || `mdi:${item.type}`"
        :href="item.href"
        :customClass="item.customClass"
      >
        {{ item }}
      </div> -->
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
    const { useTheme } = useHelpers();
    const { icons } = useTheme();
    const items = computed(() => {
      return [
        {
          type: 'phone',
          text: 'Trabajo',
          href: (v: unknown) => `tel:${v}`
        },
        {
          type: 'cellphone',
          text: 'Celular',
          href: (v: unknown) => `tel:${v}`
        },
        {
          type: 'whatsapp',
          text: 'Whatsapp',
          href: (v: unknown) => `https://api.whatsapp.com/send?phone=${v}`
        },
        {
          type: 'email',
          text: 'Email',
          href: (v: unknown) => `mailto:${v}`
        }
        // {
        //   type: 'address',
        //   text: 'Dirección',
        //   href: (v: '') => v
        // }
      ]
        .filter((v) => {
          return props.actions?.[v.type] && props.actions?.[v.type]?.show;
        })
        .reverse()
        .map((v, ix) => {
          //
          return {
            ...v,
            action: props.actions?.[v.type],
            customClass: 'bg-primary'
          };
        })
        .reverse();
    });
    return { icons, items };
  }
});
</script>
