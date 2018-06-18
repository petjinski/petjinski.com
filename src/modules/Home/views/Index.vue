<script>
import blockMixin from '@/mixins/block';

export default {
  /**
   * The name of the view.
   */
  name: 'HomeIndexView',

  /**
   * The name of the block.
   */
  block: 'view',

  mixins: [
    blockMixin,
  ],
};
</script>

<template>
  <div :class="classNames">
    HelloWorld!
  </div>
</template>

<style lang="stylus">

</style>
