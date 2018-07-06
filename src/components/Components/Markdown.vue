<script>
export default {
  name: 'MarkdownComponent',

  props: {
    input: {
      required: false,
      type: String,
      default: '',
    },
  },

  render(createElement) {
    return createElement('div', {
      domProps: {
        innerHTML: this.$md.render(this.input),
      },
    });
  },
};
</script>
