<template>
  <div>
    <editable
      :itemId="item.uuid"
      :text="item.title"
      :tag="'h3'"
    />
    <div class="section">
      <items-wrapper
        v-for="(child, index) in item.items"
        :key="index"
        :item="child"
      />
      <div class="add-group">
        <add-item
          :item="'section'"
          :parentId="item.uuid"
        />
        <add-item
          :item="'question'"
          :parentId="item.uuid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Editable from './Editable.vue';
import AddItem from './AddItem.vue';

export default {
  name: 'Section',

  components: {
    Editable,
    AddItem,
    ItemsWrapper: () => import('./ItemsWrapper.vue'),
  },

  props: {
    item: {
      type: Object,
      default: () => {},
    },
    parent: {
      type: String,
      default: '',
    },
  },
};
</script>
