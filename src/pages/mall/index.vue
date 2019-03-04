<template>
  <div class="mall">
    <!-- 搜索行 -->
    <top-search :type="1"></top-search>

    <!-- 轮播图 -->
    <div class="banner-box">
      <swiper
        indicator-dots="true"
        autoplay="true"
        interval="2000"
        duration="1000">
        <block v-for="(item, index) in bannerUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" mode="aspectFill" />
          </swiper-item>
        </block>
      </swiper>
    </div>

    <!-- 测试vuex -->
    <div>
      vuex中的count： {{count}}<br>
      <p class="sss">
        <button @click="add">点击+1</button>
        <button @click="random">点击增加一个随机数</button>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatTime } from '@/utils/index'
import topSearch from '@/components/topSearch'

export default {
  components: {
    topSearch
  },

  computed: {
    ...mapGetters([
      'count'
    ])
  },

  data () {
    return {
      bannerUrls: [
        'https://api.novenblog.xin/images/users/arc-default2.jpg',
        'https://api.novenblog.xin/images/ut3EsBmnz8fZ3nT0_photo_1550728544.jpeg',
        'https://api.novenblog.xin/images/-zVzgvORiXFbsVmK_photo_1550730687.jpeg',
        'https://api.novenblog.xin/images/rq2ernsCP2UI5DQ5_photo_1551227763.jpg',
        'https://api.novenblog.xin/images/wtNtWaGRFp_O2B4f_photo_1550730007.png'
      ]
    }
  },

  created () {
    
  },
  methods: {
    add() {
      //触发actions中的add，触发的函数叫 dispatch
      this.$store.dispatch('add' , 1);

      this.texta = 'world'
    },

    random() {
      //传参
      let random = parseInt(Math.random() * 5 + 5);
      this.$store.dispatch('add',random);
    }
  }
}
</script>

<style lang="less">
.mall {
  .banner-box {
    swiper {
      height: 250rpx;
      .slide-image {
        max-height: 250rpx;
      }
    }
  }
  .sss {
    margin-top: 200rpx;
  }
}
</style>
