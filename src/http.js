// import wx from 'wx';//引用微信小程序wx对象

const config = {
  // 接口的根路径
  baseUrl: 'https://api.novenblog.xin',// https://m.yunhuiyuan.cn
  // 超时时间
  timeout: 5000,
  // 设置请求的 header
  headers: {
    'Content-Type': 'application/json',
  },
  // 自定义请求拦截器（模拟axios）
  interceptors: {
    // 请求拦截
    request(configs) {
      configs.headers.appCode = 3;
      // console.log(configs);

      return configs
    },
    // 响应拦截
    response(wxRes) {
      // console.log(wxRes);
      // 微信API返回的请求是否成功
      if(wxRes.statusCode != 200 ){
        wx.showToast({
          title: "网络出错，稍后再试",
          icon: "none"
        });
        return false;
      }

      // 返回请求成功的接口数据
      // 举例：拦截后台接口code为21的
      let { code, description } = wxRes.data;
      if(code === 21) {
        wx.showToast({
          title: description,
          icon: "none"
        });
        return false;
      }
      return wxRes.data;
    }
  }
}


const http = {
  get(url, params) {
    // wx.showLoading({
    //   title: '加载中',//数据请求前loading，提高用户体验
    // })
    return new Promise((resolve, reject) => {
      // 拦截请求，这里可以进行自定义的配置
      let configs = Object.assign(config, { url, ...params });
      let {
        baseUrl,
        headers,
        url: configsUrl,
        params: configsParams
      } = config.interceptors.request(configs);
      wx.request({
        url: baseUrl + configsUrl,
        data: configsParams,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: headers,
        success: function (wxRes) {
          // success
          // wx.hideLoading();
          let configsRes = config.interceptors.response(wxRes);
          if(configsRes) {
            // console.log(configsRes);
            resolve(configsRes);
          }
          // resolve(wxRes.data);
        },
        fail: function (error) {
          // fail
          // wx.hideLoading();
          reject(error);//请求失败
        },
        complete: function () {
          // wx.hideLoading();
          // complete
        }
      })
    })
  },
  post(url, datas) {
    // wx.showLoading({
    //   title: '加载中',
    // })
    return new Promise((resolve, reject) => {
      // 拦截请求，这里可以进行自定义的配置
      let configs = Object.assign(config, {url, datas});
      let {
        baseUrl,
        headers,
        url: configsUrl,
        datas: configsDatas
      } = config.interceptors.request(configs);
      wx.request({
        url: baseUrl + configsUrl,
        data: configsDatas,
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: headers, // 设置请求的 header
        success: function (wxRes) {
          // success
          // wx.hideLoading();
          let configsRes = config.interceptors.response(wxRes);
          if(configsRes) {
            // console.log(configsRes);
            resolve(configsRes);
          }
          // resolve(wxRes.data);
        },
        fail: function (error) {
          // fail
          // wx.hideLoading();
          reject(error);
        },
        complete: function () {
          // complete
          // wx.hideLoading();
        }
      })
    })
  }
}

export default http;//暴露出来供其他文件引用