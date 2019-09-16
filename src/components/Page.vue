<template>
  <div>
    <editable
      :itemId="page.uuid"
      :text="page.title"
      :tag="'h2'"
    />
    <div class="page-content">
      <items-wrapper
        v-for="(item, index) in page.items"
        :key="index"
        :item="item"
        :parent="page.uuid"
      />
      <div class="add-group">
        <add-item
          :item="'section'"
          :parentId="page.uuid"
        />
        <add-item
          :item="'question'"
          :parentId="page.uuid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AddItem from './AddItem.vue';
import ItemsWrapper from './ItemsWrapper.vue';
import Editable from './Editable.vue';

export default {
  name: 'Page',

  components: {
    AddItem,
    ItemsWrapper,
    Editable,
  },

  props: {
    page: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
