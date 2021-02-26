# 小程序通用基建模板-lqc

## 前言：

此项目是由[HbuildX](https://www.dcloud.io/hbuilderx.html)创建的uni-app项目，建议使用HbuildX进行开发。

在初始项目的基础上增加了分包配置示例、request封装、过滤器封装示例、公共方法封装示例、状态管理等。

运行测试环境：运行→运行到小程序模拟器→微信开发者工具（需安装并配置路径）

发布正式环境：发行→小程序-微信→（打包完成）→上传（微信开发者工具）

## 项目结构：

┌─ components            	复用组件目录

│  └─ a.vue         		复用组件 

├─ pages                	页面目录 

│  ├─ index 

│  │  └─ index.vue         	index页面 

│  └─ list 

│     └─ list.vue       	list页面 

├─ pages_xxx                分包页面目录 

│  ├─ xxx 

│  │  └─ xxx.vue         	分包页面 

│  └─ static 				分包静态资源目录

├─ static                 	主包静态资源目录

├─ unpackage                运行、发行的代码包

├─ utils                	

│  ├─ filter				过滤器(main.js导入)

│  └─ validate 				使用时导入对应方法(import {xxx} from '@/utils/validate')

├─ Vuex               	状态管理

├─ App.vue               	应用配置，配置App全局样式以及应用生命周期

├─ main.js              	入口文件 

├─ manifest.json           	配置应用名称、appid、logo、版本等打包信息

├─ pages.json           	配置页面路由、导航条、选项卡等页面类信息

└─ uni.scss           	 	常用样式变量(无需导入)

## 开发文档：

​		*部分常用说明，更多请参考[uni-app官方文档](https://uniapp.dcloud.io/)*

- **开发、生产环境判断**

```
if (process.env.NODE_ENV === 'development') {
	console.log("测试环境")
}
if (process.env.NODE_ENV === 'production') {
	console.log("正式环境")
}
```

- **生命周期**

  **应用级**(app.vue)：

  ​	onLaunch:初始化完成时触发（全局只触发一次）

  ​	onShow:启动，或从后台进入前台显示

  ​	onHide:从前台进入后台

  ​	onPageNotFound:页面不存在监听函数

  **页面级**(page.vue)：

  ​	onLoad:监听页面加载，用于页面传参

  ​	onUnload:监听页面卸载

  ​	onPullDownRefresh:页面下拉，一般用于下拉刷新

  ​	onReachBottom:页面滚动到底部,一般用于加载更多

  ​	onPageScroll:监听页面滚动

  **组件级**(components.vue)：

  ​	同vue生命周期

- **页面跳转**

  uni.navigateTo:跳转页面(保留当前页面)

  uni.navigateBack:返回上一页

  uni.redirectTo:跳转页面(关闭当前页面)

  uni.switchTab:跳转到 tabBar 页面

- **本地存储**

  异步、同步

  uni.setStorage、uni.setStorageSync 添加指定数据缓存

  uni.getStorage、uni.getStorageSync 获取指定数据缓存

  uni.getStorageInfo、uni.getStorageInfoSync 获取所有数据缓存

  uni.removeStorage、uni.removeStorageSync 移除指定数据缓存

  uni.clearStorage、uni.clearStorageSync 移除所有数据缓存

- **数据请求**

  ```
  this.$request(options).then((res)=>{})
  options:{
  	method, //请求方式、非必传(默认get)
  	url, 	//接口地址后缀、必传
  	data, 	//请求参数、非必传
  	header, //请求头、非必传
  	loading，//loading动画、非必传(默认为true)
  }
  ```

  