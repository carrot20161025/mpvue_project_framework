// mutations
const mutations = {
	// 测试
  add(state, number) {
    //触发state的更新
    state.count += number;
  },
  // 显示/隐藏底部tab
  toggleTabBar(state, status) {
  	state.isShowTabbar = status;
  },
  // 设置当前底部tab索引，接收一个参数index，index是底部tab索引，从0开始
  setCurrentTab(state, index) {
  	state.currentTab = index;
  }
}


export default mutations
