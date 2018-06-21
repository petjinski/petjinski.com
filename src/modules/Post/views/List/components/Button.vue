<script>
import blockMixin from '@/mixins/block';

export default {
  name: 'HomeButtonComponent',

  block: 'button',

  mixins: [
    blockMixin,
  ],
};
</script>

<template>
  <div :class="classNames">
    Hello World
  </div>
</template>

<style lang="stylus">
.button
  background-color: #000
  color: #fff
</style>
