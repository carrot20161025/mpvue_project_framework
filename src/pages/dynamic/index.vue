<template>
  <div class="dynamic">
    <!-- 搜索行 -->
    <top-search :type="2"></top-search>

    <!-- 图标组 -->
    <div class="icon-list-box mt20">
      <ul class="icon-list">
        <li @click="goTo" v-for="(item, index) in iconList" :key="index">
          <img class="icon-list-item-img" :src="item.icon">
          <p class="mt10">{{item.title}}</p>
        </li>
      </ul>
    </div>

    <!-- 最新、最热 -->
    <div class="newest-hot-box">
      <div class="newest-hot-item">
        <div class="newest flex-center selected">
          <span>最新</span>
          <img src="/static/images/dt/new@2x.png">
        </div>
      </div>
      <div class="separate-line">|</div>
      <div class="newest-hot-item">
        <div class="hot flex-center">
          <span>最热</span>
          <img src="/static/images/dt/hot@2x.png">
        </div>
      </div>
    </div>

    <div class="dt-list mt20 mb20" v-for="(item, index) in dtList" :key="index">
      <dt-list-item :data="item"></dt-list-item>
    </div>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import topSearch from '@/components/topSearch'
import dtListItem from '@/components/dtListItem'

export default {

  components: {
    topSearch,
    dtListItem
  },

  data () {
    return {
      iconList: [
        {
          icon: '/static/images/dt/Real estate@2x.png',
          title: '房产'
        },
        {
          icon: '/static/images/dt/work@2x.png',
          title: '工作'
        },
        {
          icon: '/static/images/dt/car@2x.png',
          title: '汽车'
        },
        {
          icon: '/static/images/dt/life@2x.png',
          title: '生活'
        },
        {
          icon: '/static/images/dt/service@2x.png',
          title: '服务'
        },
        {
          icon: '/static/images/dt/Business@2x.png',
          title: '商机'
        },
        {
          icon: '/static/images/dt/technology@2x.png',
          title: '科技'
        },
        {
          icon: '/static/images/dt/financial@2x.png',
          title: '金融'
        },
        {
          icon: '/static/images/dt/store@2x.png',
          title: '百货'
        },
        {
          icon: '/static/images/dt/treasure@2x.png',
          title: '福宝'
        }
      ],
      dtList: [
        {
          commentCount: 231, // 评论数量
          tanspondCount: 21, // 转发数量
          zanCount: 34, // 点赞
          commentContent: '啦啦啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿啦啦啦啦啦啦啦啦，啦啦啦啦啦啦啦啦绿绿绿绿绿啦啦啦啦啦', // 评论内容
          nickname: '福宝宝0996934',
          picurls: [
            'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg',
            'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg', 
            'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg', 
            'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg', 
            'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg'
          ], // 评论图片
          publishTime: '2019-02-26',
          topicType: '生活',
          coverUrl: 'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg' // 用户头像
        },
        {
          commentCount: 231, // 评论数量
          tanspondCount: 21, // 转发数量
          zanCount: 34, // 点赞
          commentContent: 'asdasdsad', // 评论内容
          nickname: '福宝宝0996934',
          picurls: ['https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg'], // 评论图片
          publishTime: '2019-02-26',
          topicType: '生活',
          coverUrl: 'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg' // 用户头像
        },
        {
          commentCount: 231, // 评论数量
          tanspondCount: 21, // 转发数量
          zanCount: 34, // 点赞
          commentContent: 'asdasdsad', // 评论内容
          nickname: '福宝宝0996934',
          picurls: [], // 评论图片
          publishTime: '2019-02-26',
          topicType: '生活',
          coverUrl: 'https://api.novenblog.xin/images/cQaqGr9Fs-M_o7sv_photo_1549899088.jpg' // 用户头像
        }
      ]
    }
  },

  created () {
    
  },
  methods: {
    goTo() {
      this.$router.goTo({
        path:'/pages/house/index/main',
        query:{
          name: "lalala",
          age: 89
        }
      });
    }
  }
}
</script>

<style lang="less">

</style>
