// import Vue from 'vue';

// import Router from '@/router/index'
// import store from '@/store/index'

// actions
export default {
	//注意actions只能接收一个额外参数，如果有多个，可以考虑传对象或数组
	add({ commit, dispatch }, number) {
		//不能直接改变state
		//触发mutations
		commit('add', number)

		//同时触发另外一个全局属性的改变操作

		dispatch('getUserInfo')
	},
	// 显示/隐藏底部tab
	toggleTabBar({commit}, status) {
		commit('toggleTabBar', status)
	},
	// 触发mutations，设置当前底部tab索引，接收一个参数index，index是底部tab索引，从0开始
	setCurrentTab({commit}, index) {
		commit('setCurrentTab', index);
	},
	getUserInfo({ dispatch }) {
		
	}
}