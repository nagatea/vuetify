// Extensions
import VWindow from '../VWindow/VWindow'

// Types & Components
import { BaseItemGroup, GroupableInstance } from './../VItemGroup/VItemGroup'

/* @vue/component */
export default VWindow.extend({
  name: 'v-tabs-items',

  props: {
    mandatory: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    getValue (item: GroupableInstance, i: number) {
      return item.id || BaseItemGroup.options.methods.getValue.call(this, item, i)
    },
  },
})