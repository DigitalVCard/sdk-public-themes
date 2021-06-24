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
            :icon="item.icon || `mdi:${item.type}`"
            class="text-gray-400 inline-block"
          ></g-icon>
        </div>
        <div
          v-if="item.type !== 'address'"
          class="w-9/12 pr-2 text-base border-b-1px border-gray-300 py-4"
        >
          <div class="font-bold">
            {{ item.value }}
          </div>
          <div>
            {{ item.title }}
          </div>
        </div>
        <div
          v-else
          class="w-9/12 pr-2 text-base border-b-1px border-gray-300 py-4"
        >
          <div class="whitespace-pre-line">
            {{ item.description }}
          </div>
          <div>
            <a :href="item.value" target="_blank">
              <span class="uppercase text-blue-500"> Ver en mapa </span>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="flex items-center text-sm" v-if="actions?.['address']">
        <div class="w-3/12 text-center text-xl">
          <g-icon
            :icon="icons['address']"
            class="text-gray-400 inline-block"
          ></g-icon>
        </div>
     
      </div> -->
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
      return [...props.actions?.others]
        .filter((action) => {
          if (!action.value) {
            return false;
          } else if (action.value === '0') {
            return false;
          } else if (action.value === '/') {
            return false;
          } else {
            return true;
          }
          // return
        })
        .reverse()
        .map((v, ix) => {
          //
          return {
            ...v,
            customClass: 'bg-primary'
          };
        })
        .reverse();
    });
    return { icons, items };
  }
});
</script>
