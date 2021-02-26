<template>
	<view class="content">
		<div class="test-list">
			<div class="test-title">过滤器:</div>
			<div class="test-item">{{date | formatDate}}</div>
			<div class="test-title">校验方法:</div>
			<div class="test-item">
				<input v-model="phone" style="border: 1px solid #ccc;" placeholder="输入手机号" />
				<div>{{isPhone(phone)?'是':"不是"}}手机号</div>
			</div>
			<div class="test-title">弹窗:</div>
			<div class="test-item item-link" @click="handleLoading">loading</div>
			<div class="test-item item-link" @click="handleToast">toast</div>
			<div class="test-item item-link" @click="handleModal">modal</div>
			<div class="test-item item-link" @click="handleSheet">sheet</div>
			<div class="test-title">跳转:</div>
			<div class="test-item item-link" @click="toUrl('/pages/find/find',2)">跳转tab</div>
			<div class="test-item item-link" @click="toUrl('/pages_user/user/user',1)">跳转page</div>
			<div class="test-title">接口:</div>
			<div class="test-item item-link" @click="testRequest">数据请求</div>

			<div class="test-title">vueX测试:</div>
			<div class="test-item">
				<input style="border: 1px solid #ccc;" placeholder="输入状态" @input="changeState" />
				<div>状态更改为：{{testState}}</div>
			</div>
		</div>
	</view>
</template>

<script>
	import {
		isPhone
	} from '@/utils/validate'
	export default {
		data() {
			return {
				date: new Date(),
				phone: '',
				isPhone: isPhone,
			}
		},
		computed: {
			testState() {
				return this.$store.getters.testState
			}
		},
		onLoad() {},
		methods: {
			handleLoading() {
				uni.showLoading({
					title: '加载中'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000);
			},
			handleToast() {
				uni.showToast({
					title: 'toadt文字',
					icon: 'none',
					duration: 2000
				});
			},
			handleModal() {
				uni.showModal({
					title: '提示',
					content: '这是一个提示弹窗',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			handleSheet() {
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success: function(res) {
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: function(res) {
						console.log(res.errMsg);
					}
				});
			},
			toUrl(path, type) {
				if (type === 1) {
					uni.navigateTo({
						url: path
					});
				}
				if (type === 2) {
					uni.switchTab({
						url: path
					});
				}
			},
			testRequest() {
				this.$request({
					method: "POST",
					url: "/api",
					data: {}
				}).then((response) => {})
			},
			changeState(event) {
				this.$store.commit("CHECKTEST", event.detail.value);
			}
		}
	}
</script>

<style scoped lang="scss">
	.test-list {
		padding: 50rpx 30rpx;
		display: flex;
		justify-content: center;
		flex-direction: column;

		.test-title {
			font-size: 36rpx;
			font-weight: bold;
		}

		.test-item {
			display: inline-block;
			width: auto;
			margin-left: 72rpx;
			margin-right: auto;
			font-size: 32rpx;
			line-height: 60rpx;
		}

		.item-link {
			color: blue;
			border-bottom: 1px solid;
			padding: 10rpx 10rpx 0;
		}
	}
</style>
