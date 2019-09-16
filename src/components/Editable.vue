<template>
  <div class="editable">
    <i class="material-icons" @click="edit">edit</i>
    <component
      :is="tag"
      v-if="!editing"
    >
      {{ text }}
    </component>
    <input
      v-else
      type="text"
      :class="`content-${tag}`"
      ref="title"
      :value="text"
      @input="emitChange"
      @keyup.enter="blur"
      @blur="blur"
    >
  </div>
</template>

<script>
export default {
  name: 'Editable',

  props: {
    tag: {
      type: String,
      default: 'p',
    },
    itemId: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      editing: false,
    };
  },

  methods: {
    edit() {
      this.editing = true;
      this.$nextTick(() => this.$refs.title.focus());
    },

    blur() {
      this.editing = false;
    },

    emitChange(event) {
      this.$root.$emit('fieldUpdated', event.target.value, this.itemId, 'title');
    },
  },
};
</script>
