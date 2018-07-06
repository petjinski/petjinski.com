<script>
import { mapActions, mapState } from 'vuex';

export default {
  /**
   * The name of the view.
   */
  name: 'NotFoundIndexView',

  data() {
    return {
      helloTo: 'World!',
    };
  },
  computed: {
    ...mapState('Core', {
      hello: state => state.hello,
    }),
  },
  methods: {
    ...mapActions('Core', [
      'setHello',
    ]),
  },
};
</script>

<template>
  <div>
    {{ $t('Core.errors.404') }}
    <form @submit.prevent="setHello(helloTo)">
      <input
        v-model="helloTo"
        type="text"
        placeholder="Say hello to..."
      >
      <button type="submit">Send!</button>
    </form>
    {{ hello }}
    <router-link :to="{ name: 'Home::Index'}">Redirect...</router-link>
  </div>
</template>

<style></style>
