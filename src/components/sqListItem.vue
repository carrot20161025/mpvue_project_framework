<template>
  <div class="list-item-box">
    <div class="list-item flex">
    	<div class="list-item-img">
    		<span>{{data.storeType}}</span>
    		<img :src="data.mHead">
    	</div>
    	<div class="list-item-other flex flex-1 flex-justify-between flex-column">
    		<div class="list-item-other-title">
    			<div>{{data.mName}}</div>
    			<div class="jifen">返积分<span>{{data.giveRatio}}%</span></div>
    		</div>
    		<div class="list-item-other-address space-between">
    			<div class="address text-ess-1">{{data.mAddress}}</div>
    			<div>{{data.distance}}</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less">
	.list-item-box {
		height: 230rpx;
		background: #fff;
		border-bottom: 1px solid #eee;
		.list-item {
			padding: 25rpx 20rpx;
			&-img {
				position: relative;
				margin-right: 20rpx;
				width: 180rpx;
				height: 180rpx;
				span {
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					padding: 6rpx 10rpx;
					font-size: 24rpx;
					color: #fff;
					white-space: nowrap;
					background: rgba(229,8,8,0.7);
					border-radius: 10rpx;
				}
				img {
					width: 100%;
					height: 100%;
				}
			}

			&-other {
				padding: 10rpx 0;
				&-title {
					font-size: 32rpx;
					font-weight: bold;
					color: rgba(51,51,51,1);
					.jifen {
						margin-top: 10rpx;
						padding: 6rpx 15rpx;
						max-width: 142rpx;
						font-size: 24rpx;
						color: #fff;
						background: rgba(255,91,53,1);
						border-radius: 10rpx;
						span {
							font-size: 30rpx;
						}
					}
				}
				&-address {
					font-size: 24rpx;
					color: rgba(153,153,153,1);
					.address {
						max-width: 420rpx;
					}
				}
			}
		}
	}
</style>
