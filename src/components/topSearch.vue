<template>
  <div class="top-search-box">
  	<!-- 仅搜索框和购物车 的搜索 -->
    <div v-if="type == 1" class="search-row space-between">
      <div class="search-box1">
        <img class="search-icon" src="/static/images/sq/sousuohui@2x.png">
        <input type="text" name="search" placeholder="请输入您想要查找的内容">
      </div>
      <img class="shopping-car ml20" src="/static/images/sq/guowuche@2x.png">
    </div>

		<!-- 包含位置、发布 的搜索 -->
    <div v-else class="search-row space-between">
      <div><img class="address-icon" src="/static/images/dt/weizhi@2x.png"></div>
      <div class="ml20">青羊区</div>
      <div class="search-box2 ml20">
        <input type="text" name="search" placeholder="请输入您想要查找的内容">
        <img class="search-icon" src="/static/images/sq/sousuohui@2x.png">
      </div>
      <div class="ml20">发布</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  data() {
  	return {
  		
  	}
  },
  created() {
  	// console.log(this.type);
  }
}
</script>

<style lang="less">
	.search-row {
		padding: 10rpx 20rpx;
    height: 88rpx;
    font-size: 30rpx;
    color: rgba(255,255,255,.8);
    background: rgba(229,8,8,1);
    .search-box1 {
      position: relative;
      flex: 1;
      height: 58rpx;
      input {
        padding: 0 60rpx;
        font-size: 26rpx;
        background: #fff;
        border-radius: 50rpx;
      }
      .search-icon {
        position: absolute;
        top: 15rpx;
        left: 20rpx;
        width: 28rpx;
        height: 28rpx;
      }
    }
    .shopping-car {
      width: 60rpx;
      height: 59rpx;
    }

    .address-icon {
      width: 25rpx;
      height: 32rpx;
    }
    .search-box2 {
      position: relative;
      flex: 1;
      height: 58rpx;
      input {
        padding: 0 30rpx;
        font-size: 26rpx;
        background: #fff;
        border-radius: 50rpx;
      }
      .search-icon {
        position: absolute;
        top: 15rpx;
        right: 20rpx;
        width: 28rpx;
        height: 28rpx;
      }
    }
  }
</style>
