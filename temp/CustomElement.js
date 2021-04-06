import { h } from "vue";

export default {
  props: {
      tag: {
          type: String,
          required: true,
      }
  },

  render(t) {
    return [
      h(t.tag, {}),
    ];
  }
};
