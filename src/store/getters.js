//专门提供给前台的接口，用来访问某个state字段
/*
  这里面定义所有页面需要的展示数据，具体的内容根据具体组件要求来定义
 */
export default {
	// 测试数据
	count(state) {
		return state.count;
	},
	// 是否显示底部tab
	isShowTabbar(state) {
		return state.isShowTabbar;
	},
	// 当前底部tab索引
	currentTab(state) {
		return state.currentTab;
	}
}