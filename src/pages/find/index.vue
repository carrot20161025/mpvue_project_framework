<template>
  <div>
    发现
    <p style="margin-top: 50px; text-align: center" @click="toCounter"><button>测试封装的goTo函数，去counter页面</button></p>

  </div>
</template>

<script>
import { formatTime } from '@/utils/index'

export default {

  data () {
    return {
      logs: []
    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },

  methods: {
    toCounter() {
      // wx.navigateTo({
      //   url:'/pages/counter/main?name=lalala'
      // })
      this.$router.goTo({
        path:'/pages/counter/main',
        query:{
          name: "lalala",
          age: 89
        }
      });
      // goTo({
      //   path:'/pages/counter/main',
      //   query:{name: "lalala"}
      // })
    }
  }
}
</script>

<style>

</style>
