<script>
import blockMixin from '@/mixins/block';
import UIButton from './components/Button.vue';

export default {
  /**
   * The name of the view.
   */
  name: 'HomeIndexView',

  /**
   * The name of the block.
   */
  block: 'view',

  components: {
    UIButton,
  },

  mixins: [
    blockMixin,
  ],
};
</script>

<template>
  <div class="view">
    <UIButton />
  </div>
</template>

<style lang="stylus">

</style>
