<template>
	<div id="app">
		<div style="height: 50px;">
			<sjdh></sjdh>
		</div>
		<div class="hidden-sm-and-up">
			<div class="beij">
				<div class="biaot"><a>基础设置</a></div>
			</div>
			<div class="neirong">
				<div class="label"><a>更换头像</a><img class="toux" src="../../assets/touxiang.jpg" alt=""></div>
				<div class="jiangex"></div>
				<div class="label"><a>更改昵称</a><input type="text" class="nicheng" placeholder="啦啦啦啦啦"></div>
				<div class="jiangex"></div>
				<div class="label"><a>更改性别</a><select class="xialaliebiao" name="public-choice" v-model="couponSelected" id="">
						<option :key="coupon.name" v-for="coupon in couponList">{{coupon.name}}</option>
					</select>
					<!-- <input type="text" class="xingbie" placeholder="男"> -->
				</div>
				<div class="jiangex"></div>
				<div class="label"><a>个人简介</a><input type="text" class="zhongwen" placeholder=""></div>
				<div class="jiangex"></div>
				<div class="label"><a>个人网站</a><input type="text" class="suoyou" placeholder="http://"></div>
				<div class="jiangex"></div>
				<div class="label"><a>语言设置</a><input type="text" class="zhongwen" placeholder="中文简体"></div>
				<div class="jiangex"></div>
				<div class="label"><a>接受谁的简信</a><input type="text" class="suoyou" placeholder="所有人"></div>
				<div class="jiangex"></div>
				<div class="label"><a>提醒邮件通知</a></div>
				<div class="jiangex"></div>
				<div class="label"><a>赞赏功能</a></div>
				<div class="jiangex"></div>
				<div class="label"><a>赞赏描述</a></div>
			</div>
			<div class="jiangex"></div>
			<div class="beij">
				<div class="biaot"><a>绑定账号登录简书</a><span>出于安全因素，你至少需要保留一种登录方式</span></div>
			</div>
			<div class="jiangex"></div>
			<div class="neirong">
				<div class="weibangd"><img src="../../assets/shouji.png" alt=""><a>未绑定</a></div>
				<div class="jiangex"></div>
				<a href="https://api.weibo.com/oauth2/authorize?client_id=1881139527&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fweibo%2Fcallback&response_type=code&state=%257B%257D">
					<div class="weibangd"><img src="../../assets/huiweibo.png" alt=""><a>未绑定</a></div>
				</a>
				<div class="jiangex"></div>
				<a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%257D#wechat_redirect">
					<div class="weibangd"><img src="../../assets/huiweixin.png" alt=""><a>未绑定</a></div>
				</a>
				<div class="jiangex"></div>
				<div class="yibangd"><img src="../../assets/xuanzqq.png" alt=""><a>已绑定</a></div>
				<div class="jiangex"></div>
				<div class="weibangd"><img src="../../assets/huidouban.png" alt=""><a>未绑定</a></div>
				<div class="jiangex"></div>
				<div class="weibangd"><img src="../../assets/email.png" alt=""><a>未绑定</a></div>
			</div>
			<div class="jiangex"></div>
			<div class="kbeij"></div>
			<div class="jiangex"></div>
			<div class="danhang">
				<div class="kuan">
					<a @click="dialogVisible = true">黑名单</a>
					<el-dialog title="黑名单" :visible.sync="dialogVisible" width="70%" :before-close="handleClose">
						<span>你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你。</span>
						<span slot="footer" class="dialog-footer">
							<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
						</span>
					</el-dialog>
				</div>
			</div>
			<div class="jiangex"></div>
			<div class="kbeij"></div>
			<div class="jiangex"></div>
			<div class="danhang">
				<div class="kuan"><a>打包下载所有文章</a></div>
			</div>
			<div class="jiangex"></div>
			<div class="kbeij"></div>
			<div class="jiangex"></div>
			<button class="shanchu">删除账号</button>
			<div class="dibian"></div>
		</div>
	</div>
</template>
<script>
	import sjdh from '../sjdh.vue'
	export default {
		data() {
			return ({
				couponList: [{
					name: '男'
				}, {
					name: '女'
				}, {
					name: '保密'
				}],
				dialogVisible: false
			})
		},
		created() {
			this.couponSelected = this.couponList[0].name;
		},
		methods: {
			couponSelected: '',
			getCouponSelected() {
				console.log(this.couponSelected)
			}
		},
		components: {
			sjdh
		}

	}
</script>

<style scoped>
	.sjdsz {
		margin: 0;
		padding: 0;
	}

	.beij {
		width: 100%;
		height: 40px;
		background-color: rgb(247, 247, 247);
	}

	.kbeij {
		width: 100%;
		height: 20px;
		background-color: rgb(247, 247, 247);
	}

	.biaot {
		width: 90%;
		height: 40px;
		margin: 0 auto;
	}

	.biaot a {
		display: block;
		font-size: 12px;
		color: rgb(255, 110, 110);
		line-height: 40px;
	}

	.biaot span {
		font-size: 10px;
		color: #979797;
		float: right;
		margin-top: -27px;
	}

	.jiangex {
		width: 100%;
		height: 1px;
		background-color: rgb(240, 240, 240);
	}

	.neirong {
		width: 90%;
		margin: 0 auto;
	}

	.label {
		height: 40px;
	}

	.label a {
		font-size: 14px;
		color: black;
		line-height: 40px;
	}

	.toux {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		float: right;
		margin-top: 2px;
	}

	.nicheng {
		border: none;
		float: right;
		width: 23%;
		line-height: 40px;
	}

	.xialaliebiao {
		float: right;
		margin-top: 10px;
		background: #FFFFFF;
		border: 1px solid #CCCCCC;
		border-radius: 2px;
	}
	
	.xingbie {
		border: none;
		float: right;
		width: 5%;
		line-height: 40px;
	}

	.zhongwen {
		border: none;
		float: right;
		width: 20%;
		line-height: 40px;
	}

	.suoyou {
		border: none;
		float: right;
		width: 15%;
		line-height: 40px;
	}

	.weibangd {
		height: 40px;
	}

	.weibangd img {
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}

	.weibangd a {
		font-size: 14px;
		color: #979797;
		line-height: 40px;
		margin-left: 20px;
	}

	.yibangd {
		height: 40px;
	}

	.yibangd img {
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}

	.yibangd a {
		font-size: 14px;
		color: #464646;
		line-height: 40px;
		margin-left: 20px;
	}

	.danhang {
		height: 40px;
	}

	.kuan {
		width: 90%;
		height: 40px;
		margin: 0 auto;
	}

	.kuan a {
		font-size: 14px;
		line-height: 40px;
	}

	.shanchu {
		border: none;
		background-color: red;
		font-size: 14px;
		color: white;
		width: 70%;
		height: 30px;
		border-radius: 30px;
		margin-left: 15%;
		margin-top: 20px;
	}

	.dibian {
		width: 100%;
		height: 20px;
	}
</style>
