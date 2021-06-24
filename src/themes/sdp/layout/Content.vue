<template>
  <div class="primary h-full flex flex-col overflow-hidden pt-1">
    <div class="flex-shrink overflow-hidden">
      <div class="round overflow-hidden">
        <the-menu-app></the-menu-app>
      </div>
    </div>
    <div @click="$emit('input', false)" class="mt-1" style="flex: 1 1 0px">
      <div class="overflow-hidden border-0 h-full relative">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </div>
    </div>
    <!-- <div class="flex-shrink"></div> -->
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-this-alias */

import { defineComponent } from 'vue';
export default defineComponent({});
</script>
