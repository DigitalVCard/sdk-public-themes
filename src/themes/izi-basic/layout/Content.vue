<template>
  <div class="primary h-full flex flex-col overflow-hidden">
    <div class="flex-shrink overflow-hidden">
      <div class="round overflow-hidden">
        <the-menu-app :classContent="['pt-12']"></the-menu-app>
      </div>
    </div>
    <div @click="$emit('input', false)" style="flex: 1 1 0px">
      <div class="overflow-hidden border-0 h-full relative">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({});
</script>
