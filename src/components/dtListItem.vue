<template>
  <div class="dt-list-item-box">
    <div class="dt-list-item">
    	<!-- 头像栏 -->
    	<div class="dt-list-item-header space-between">
    		<div class="user-info">
    			<div class="cover">
    				<img :src="data.coverUrl">
    			</div>
    			<div class="nickname ml20 mt10">
    				<p>{{data.nickname}}</p>
    				<p class="mt10">{{data.publishTime}}</p>
    			</div>
    		</div>
    		<div class="user-type">{{data.topicType}}</div>
    	</div>

    	<div class="dt-list-item-comment">
    		<p class="text-ess-2">{{data.commentContent}}</p>
    		<!-- 评论图片 -->
				<ul class="comment-pic mt20">
					<li v-for="(item, index) in data.picurls" :key="index">
						<img :src="item">
					</li>
				</ul>
				<!-- 转发 评论 点赞 查看详情 数据 -->
				<ul class="comment-statistics space-between">
					<li class="flex-center ml20">
						<img src="/static/images/dt/forwarding@2x.png">
						<span class="ml20">{{ data.tanspondCount }}</span>
					</li>
					<li class="flex-center ml20">
						<img src="/static/images/dt/comments@2x.png">
						<span class="ml20">{{ data.commentCount }}</span>
					</li>
					<li class="flex-center ml20">
						<img src="/static/images/dt/praise@2x.png">
						<span class="ml20">{{ data.zanCount }}</span>
					</li>
					<li class="flex-center ml20">
						<img src="/static/images/dt/view@2x.png">
						<span class="ml20">查看详情</span>
					</li>
				</ul>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
  	return {
  		commentPicList: []
  	}
  },
  created() {
  	
  }
}
</script>

<style lang="less">
	.dt-list-item-box {
		padding: 0 20rpx;
		.dt-list-item {
			padding: 20rpx;
			background: #fff;
			border-radius: 10rpx;
			&-header {
				height: 100rpx;
				border-bottom: 1px solid rgba(241,241,241,1);
				.user-info {
					display: flex;
					.cover > img {
						width: 80rpx;
						height: 80rpx;
						border-radius: 50%;
					}
					.nickname {
						color: rgba(48,48,48,1);
						font-size: 30rpx;
						font-weight: bold;
						p:last-child {
							color: rgba(96,96,96,1);
							font-size: 24rpx;
							font-weight: normal;
						}
					}
				}
				.user-type {
					padding: 10rpx 20rpx;
					color: #fff;
					font-size: 28rpx;
					background: rgba(255,154,85,1);
					border-radius: 10rpx;
				}
			}

			&-comment {
				padding: 20rpx 0 0 100rpx;
				p {
					max-width: 589rpx;
					color: rgba(48,48,48,1);
					font-size: 28rpx;
					line-height: 34rpx;
				}
				.comment-pic {
					display: flex;
					flex-wrap: wrap;
					li {
						margin-left: 20rpx;
						margin-bottom: 20rpx;
						&:nth-child(3n+1) {
							margin-left: 0;
						}
						img {
							width: 180rpx;
							height: 176rpx;
						}
					}
				}
				.comment-statistics {
					display: flex;
					li {
						color:rgb(96,96,96);
						font-size:28rpx;
						&:first-child {
							margin-left: 0;
						}
						img {
							width: 41rpx;
							height: 41rpx;
						}
					}
				}
			}
		}
	}
</style>
