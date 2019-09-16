<template>
  <div class="form">
    <page
      v-for="(page, index) in settings.items"
      :key="index"
      :page="page"
    />
    <add-item
      :item="'page'"
      :parentId="settings.uuid"
    />
  </div>
</template>

<script>
import Page from './Page.vue';
import AddItem from './AddItem.vue';

export default {
  name: 'FormMaster',

  components: {
    Page,
    AddItem,
  },

  props: {
    settings: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
