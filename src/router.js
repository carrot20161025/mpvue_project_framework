/**
 * [goToExec 小程序跳转的执行函数，区分tabbar与非tabbar]
 * @Author   
 * @DateTime 2018-08-15
 * @param    {[Object]}   app       [小程序入口实例]
 * @param    {[Object]}   params    [跳转参数]
 * @param    {Boolean}  isReplace [是否是替换当前路径，用wx.redirectTo]
 * @return   {[type]}             [description]
 */
const goToExec = (params = {}) => {
  let {path,query,isReplace} = params;
  if(!path || path == '') {
    console.log('要跳转的path不能为空！');
    return
  }

  delete params.path;
  
  query = query || {};

  let tabBarArr = ['index','articleList','moodList','my'];
  let isInTabBar = false;

  for(let i = 0 ; i < tabBarArr.length ; i ++) {
     // let lastPath = path.split('/').pop();
     // path:'/pages/counter/main',
     let lastPath = path.split('/').slice(-2, -1);

     if(lastPath == tabBarArr[i]) {
        isInTabBar = true;
        break;
     }
  }
 
  //跳转到tabbar,用 wx.switchTab({path:xxx}),且要用另外的方式传参
  if(isInTabBar) {
    //修改参数全局变量,传入了什么参数，就附加到全局的app.globalData.tabBarData身上，在目标页面也直接这样获取
    // app.globalData.tabBarData = Object.assign({},query);

    //跳转到tab
    wx.switchTab({
      url:path
    });
  }else {
    //编码参数列表
    let paramsStr,tmp;
    tmp = Object.keys(query).map(( item,index )=> item + '=' + Object.values(query)[index]);
    paramsStr = tmp.join('&');
    let askparameter = paramsStr ? '?' :'';

    console.log('当前页面路径：  '+ path + askparameter + paramsStr)

    if(isReplace) {
      wx.redirectTo({
        url:path + askparameter + paramsStr
      });
    }else {
      wx.navigateTo({
        url:path + askparameter + paramsStr
      });
    }
  }
}


/**
 * [goBack 返回上几页]
 * @Author   
 * @DateTime 2018-10-08
 * @param    {[Number]}   delta [要返回的页数]
 * @return   {[type]}         [description]
 */
const goBack = (delta) => {
  wx.navigateBack({
      delta
  })
}


export default {
  goToExec,
  goBack
}