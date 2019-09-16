<template>
  <div>
    <editable
      :itemId="item.uuid"
      :text="item.title"
      :tag="'p'"
    />
    <dropdown
      :options="options"
      :selected="selected"
      @updateOption="selectType"
      :placeholder="'Select type'"
    />
  </div>
</template>

<script>
// eslint-disable-next-line
import Dropdown from 'vue-dropdowns';
import Editable from './Editable.vue';

export default {
  name: 'Question',

  components: {
    Dropdown,
    Editable,
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

  data() {
    return {
      options: [
        {
          name: 'Text',
          value: 'text',
        },
        {
          name: 'Number',
          value: 'number',
        },
      ],
    };
  },

  computed: {
    selected: {
      get() {
        return this.getSelected();
      },
      set(value) {
        return value;
      },
    },
  },

  methods: {
    getSelected() {
      const responseType = this.item.response_type;

      return responseType
        ? {
          name: responseType && `${responseType.charAt(0).toUpperCase()}${responseType.slice(1)}`,
          value: responseType,
        }
        : {};
    },

    selectType(payload) {
      this.selected = payload;
      this.$root.$emit('fieldUpdated', payload.value, this.item.uuid, 'response_type');
    },
  },
};
</script>

<style scoped>
  div {
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
