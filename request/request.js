let baseUrl;
if (process.env.NODE_ENV === 'production') {
	// 生产环境域名
	baseUrl = '';
}
if (process.env.NODE_ENV === 'development') {
	// 开发环境域名
	baseUrl = 'http://localhost/';
}
let reqCount = 0,
	resCount = 0; //记录请求次数和响应次数

const request = ({
	loading = true,//是否显示加载动画
	url,//接口地址后缀
	method = "GET",//请求方式
	data = {},//请求参数
	header = {},//请求头
}) => {
	reqCount++;
	if (loading) {
		// 默认显示loading，配置loading为false不显示
		uni.showLoading({
			title: '加载中...'
		});
	}
	let token = uni.getStorageSync('token') || '';
	return new Promise((resolve, reject) => {
		console.log(0)
		uni.request({
			sslVerify: false,
			method: method,
			url: baseUrl + url,
			data: data,
			header: { ...header,
				authorization: token
			}
		}).then((response) => {
			resCount++
			if (reqCount === resCount) uni.hideLoading(); //防止连续请求多个接口时loading闪现
			let [error, res] = response;
			if (res.data.code === 0) {
				// 接口返回数据正常
				resolve(res.data);
			} else {
				// 接口返回异常
				uni.showToast({
					title: "接口请求报错",
					icon: "none"
				});
				resolve(res.data);
			}
		}).catch(error => {
			// 请求异常
			resCount++
			if (reqCount === resCount) uni.hideLoading();
			uni.showToast({
				title: "接口请求失败",
				icon: "none"
			});
			let [err, res] = error;
			reject(err)
		})
	});
}
export default request
