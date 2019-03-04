<template>
  <div class="shangquan">
    <!-- 搜索行 -->
    <top-search :type="1"></top-search>

    <!-- <button type="primary" @click="getArtDetail">测试获取文章详情接口</button> -->

    <div class="sq-list">
      <sq-list-item v-for="(item, index) in sqList" :key="index" :data="item"></sq-list-item>
    </div>
  </div>
</template>

<script>
import sqListItem from '@/components/sqListItem'
import topSearch from '@/components/topSearch'
import { getArticleDetail } from '@/assets/api/testAPI'

export default {
  components: {
    topSearch,
    sqListItem
  },

  data () {
    return {
      sqList: [
        {
          distance: '0.1km',
          giveRatio: '35',
          mAddress: '成都市成都市成都市成都市成都市成都市成都市成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: 'xxx火锅',
          mtId: 3,
          storeType: '餐饮美食'
        },
        {
          distance: '0.1m',
          giveRatio: '35',
          mAddress: '成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: '晲',
          mtId: 3,
          storeType: '餐饮美食'
        },
        {
          distance: '0.1m',
          giveRatio: '35',
          mAddress: '成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: 'xxx火锅',
          mtId: 3,
          storeType: '餐饮美食'
        },
        {
          distance: '0.1m',
          giveRatio: '35',
          mAddress: '成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: '晲',
          mtId: 3,
          storeType: '餐饮美食'
        },
        {
          distance: '0.1m',
          giveRatio: '35',
          mAddress: '成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: 'xxx火锅',
          mtId: 3,
          storeType: '餐饮美食'
        },
        {
          distance: '0.1m',
          giveRatio: '35',
          mAddress: '成都市',
          mHead: 'https://api.novenblog.xin/images/arc-default3.jpg',
          mId: 100015,
          mName: '晲',
          mtId: 3,
          storeType: '餐饮美食'
        }
      ]
    }
  },

  methods: {

  },

  async created () {
    // let app = getApp()
    // let res = await this.$http.get('/arcticle/detail', { params: {Id: 81} });
    // console.log(res);
    

    let data = await getArticleDetail(78);
    console.log(data);
  },

  methods: {
    // async getArtDetail() {
    //   let data = await getArticleDetail(78);
    //   console.log(data);
    // }
  }
}
</script>
<style lang="less">
  .shangquan {
    .sq-list {
      margin: 20rpx 0;
    }
  }
</style>
