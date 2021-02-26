<script>
	export default {
		onLaunch: function() {
			if (process.env.NODE_ENV === 'development') {
				// uni.showToast({
				// 	title: "开发环境",
				// 	duration: 3000,
				// 	icon: 'none'
				// });
			}
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.page-fixed-center{
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
</style>
