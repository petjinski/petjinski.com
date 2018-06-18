import * as types from './mutation-types';

export default {
  [types.SET_HELLO](state, payload) {
    state.hello = payload;
  },
};
