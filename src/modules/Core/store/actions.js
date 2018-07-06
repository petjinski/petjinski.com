import * as types from './mutation-types';

const setHello = async ({ commit }, payload) => {
  setTimeout(() => commit(types.SET_HELLO, payload), 1000);
};

export default {
  setHello,
};
