<template>
  <div @click="addContent(item)" class="add-new">
    <i class="material-icons">add_circle_outline</i>
    <span>Add new {{ item }}</span>
  </div>
</template>

<script>
import _ from 'lodash';
import { uuid } from 'vue-uuid';

export default {
  name: 'AddButton',

  props: {
    item: {
      type: String,
      default: '',
    },
    parentId: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      page: {
        uuid: null,
        type: 'page',
        title: 'Page Title',
        items: [],
      },
      question: {
        uuid: null,
        title: 'Question',
        type: 'question',
        response_type: null,
      },
      section: {
        uuid: null,
        title: 'Section title',
        type: 'section',
        items: [],
      },
    };
  },

  methods: {
    addContent() {
      const item = _.cloneDeep(this[this.item]);
      item.uuid = uuid.v1();
      this.$root.$emit('contentAdded', item, this.parentId);
    },
  },
};
</script>
