import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'
import getters from './getters.js'

export default new Vuex.Store({
	state,
  actions,
  getters,
  mutations,
	// actions,
	// modules:{
	// 	mutations: {
	// 		mutations,
	// 		state,
	// 	}
	// },
	// getters
})
