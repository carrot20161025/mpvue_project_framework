//文章相关所有api请求
import Vue from 'vue';

/**
 * [arcticleList 获取文章详情]
 * @Author   
 * @DateTime 2018-09-26
 * @neccessaryParam  [Number]  id  文章id
 */
export const getArticleDetail = function(id) {
  return Vue.prototype.$http.get('/arcticle/detail',{
    params:{
      Id:id
    }
  })
  .then(res => {
    return res;
  })
}
