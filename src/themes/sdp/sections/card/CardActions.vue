<template>
  <div class="p-3 flex justify-center flex-wrap">
    <card-actions-button
      :actions="actions"
      type="phone"
      text="Trabajo"
      icon="phone"
      :href="(v) => `tel:${v}`"
    ></card-actions-button
    ><card-actions-button
      :actions="actions"
      type="cellphone"
      text="Celular"
      icon="cellphone"
      :href="(v) => `tel:${v}`"
    ></card-actions-button>

    <card-actions-button
      :actions="actions"
      type="whatsapp"
      text="Whatsapp"
      icon="whatsapp"
      :href="(v) => `https://api.whatsapp.com/send?phone=${v}`"
    ></card-actions-button
    ><card-actions-button
      :actions="actions"
      type="email"
      text="Email"
      icon="email-outline"
      :href="(v) => `mailto:${v}`"
    ></card-actions-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardActionsButton from './CardActionsButton.vue';
export default defineComponent({
  components: { CardActionsButton },
  props: {
    actions: {
      type: Object,
      required: true
    }
  }
});
</script>
