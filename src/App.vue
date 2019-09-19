<template>
  <div id="app">
    <label for="upload" class="btn btn-upload">
      Upload JSON
      <input type="file" id="upload" name="upload" @change="uploadJson">
    </label>
    <a
      class="btn btn-download"
      :href="`data:${prepareDownload()}`"
      :download="`settings-${settings.uuid}.json`"
      v-if="settings.items.length"
    >
      Download
    </a>
    <form-master :settings="settings" :key="settings.uuid" />
    <button
      @click="resetForm"
      class="btn btn-reset"
      v-if="settings.items.length"
    >
      Reset Form
    </button>
  </div>
</template>

<script>
import _ from 'lodash';
import { uuid } from 'vue-uuid';
import FormMaster from './components/Form.vue';

export default {
  name: 'app',
  components: {
    FormMaster,
  },

  data() {
    return {
      settings: {
        uuid: uuid.v1(),
        type: 'form',
        items: [],
      },
      emptyForm: {
        uuid: null,
        type: 'form',
        items: [],
      },
    };
  },

  mounted() {
    this.$root.$on('contentAdded', (page, parentId) => {
      this.addItem(page, parentId);
    });

    this.$root.$on('fieldUpdated', (value, item, property) => {
      this.findItem(this.settings.items, item)[property] = _.trim(value);
    });
  },

  methods: {
    addItem(item, parent) {
      const parentItem = _.eq(this.settings.uuid, parent)
        ? this.settings
        : this.findItem(this.settings.items, parent);

      return parentItem.items.push(item);
    },

    findItem(collection, id) {
      let item = _.find(collection, { uuid: id });

      if (item) {
        return item;
      }

      const self = this;
      _.each(collection, (child) => {
        item = self.findItem(child.items, id);
        if (item) {
          return false;
        }
      });

      return item;
    },

    resetForm() {
      Object.assign(this.settings, _.cloneDeep(this.emptyForm));
      this.settings.uuid = uuid.v1();
    },

    uploadJson(e) {
      const reader = new FileReader();
      reader.readAsText(e.target.files[0]);
      reader.onload = this.storeData;
    },

    storeData(e) {
      this.settings = JSON.parse(e.target.result);
    },

    prepareDownload() {
      return `text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(this.settings))}`;
    },
  },
};
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
