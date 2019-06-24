<template>
	<div>
		<header class="layui-row">
			<li class="layui-col-md1 layui-col-xs3 left">
				<a href="/"><img src="../images/logo.png" /></a>
			</li>
			<li class="layui-col-md1" style="border-top: 1px solid #FFFFFF;"></li>
			<li class="layui-col-md2">
				<a href="/">
					<div class="layui-col-md4 layui-hide-xs center1">
						<i class="layui-icon layui-icon-find-fill"></i> 发现
					</div>
				</a>
				<a href="/guanz">
					<div class="layui-col-md4 layui-hide-xs center">
						<i class="layui-icon layui-icon-read"></i> 关注
					</div>
				</a>
				<a href="/pinglun">
					<div class="layui-col-md4 layui-hide-xs center1" @mouseenter='ente(index)' @mouseleave="leave()">
						<i class="layui-icon layui-icon-notice"></i> 消息
						<div v-show="seen&&index==current">
							<ul class="biao">
								<a href="/pinglun">
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-square"></i>&nbsp;&nbsp;&nbsp;评论</li>
								</a>
								<a href="/tixe">
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-message"></i>&nbsp;&nbsp;&nbsp;简信</li>
								</a>
								<a href="/tougao">
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-upload-drag"></i>&nbsp;&nbsp;&nbsp;投稿请求</li>
								</a>
								<a href="/zan">
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-username"></i>&nbsp;&nbsp;&nbsp;喜欢和赞</li>
								</a>
								<a href="/guanzhu">
									<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-more"></i>&nbsp;&nbsp;&nbsp;其他</li>
								</a>
							</ul>
						</div>
					</div>
				</a>
			</li>
			<li class="layui-col-md2 layui-hide-xs center2">
				<div :class="{input: isshow,input1: !isshow}" @click="isshow=!isshow">
					<input type="text" placeholder="搜索"><i class="layui-icon layui-icon-search"></i>
					<div class="cl" v-if="!isshow">
						<p @click="sorts">换一批</p>
						<p>小星星&nbsp;&nbsp;&nbsp; 马云&nbsp;&nbsp;&nbsp; 蚂蚁金融</p>
						<p>喜羊羊&nbsp;&nbsp;&nbsp; serve &nbsp;&nbsp;&nbsp; class</p>
						<p>灰太狼 &nbsp;&nbsp;&nbsp;小学 &nbsp;&nbsp;&nbsp; 萨德勒</p>
					</div>
					<div class="cl" v-show="!downIcon">
						<p>小星星&nbsp;&nbsp;&nbsp; 马云&nbsp;&nbsp;&nbsp; 蚂蚁金融</p>
						<p>喜羊羊&nbsp;&nbsp;&nbsp; serve &nbsp;&nbsp;&nbsp; class</p>
						<p>灰太狼 &nbsp;&nbsp;&nbsp;小学 &nbsp;&nbsp;&nbsp; 萨德勒</p>
					</div>
				</div>
			</li>
			<li class="layui-hide-md layui-col-xs1" style="line-height: 58px;"><i class="layui-icon layui-icon-spread-left" style="font-size: 20px; color: rgb(150,150,150);"></i></li>
			<li class="layui-col-md3 layui-col-xs4" style="border-top: 1px solid #FFFFFF;"></li>
			<li class="layui-col-md1 layui-col-xs3 center3">
				<div class="layui-col-md6 layui-col-xs5 center5" @click="allshow=!allshow">Aa
					<div class="clin" v-if="!allshow">
						<div class="layui-row bott">
							<div class="layui-col-md6 clin1">
								<i class="layui-icon layui-icon-rate-solid"></i>夜间模式
							</div>
							<div class="layui-col-md6">
								<div class="layui-col-md6 clin2">开</div>
								<div class="layui-col-md6 clin3">关</div>
							</div>
						</div>
						<div class="layui-row clin4">
							<div class="layui-col-md6 clin2">宋体</div>
							<div class="layui-col-md6 clin3">黑体</div>
						</div>
						<div class="layui-row clin4">
							<div class="layui-col-md6 clin2">简</div>
							<div class="layui-col-md6 clin3">繁</div>
						</div>
					</div>
				</div>
				<el-button style="margin-top: 5px;" type="text" @click="setMaskShow"><i class="layui-col-md2 layui-col-xs3 layui-icon layui-icon-diamond"></i></el-button>
				<span class="layui-badge" @click="setMaskShow">beta</span>
			</li>
			<li class="layui-col-md2 layui-hide-xs right" @mouseenter='enter(key)' @mouseleave="leave()">
				<div class="layui-col-md1" style="border-bottom: 1px solid #FFFFFF;"></div>
				<img class="layui-col-md3" src="../assets/78f2855a-80fd-419a-9fb2-1aeed39690f0.png" alt="">
				<i class="layui-col-md1 layui-icon layui-icon-triangle-d right4">
					<div class="user" v-show="item&&index==current">
						<a href="/wodezhuye">
			<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-friends"></i>&nbsp;&nbsp;&nbsp;我的主页</li></a>
			<a href="/shoucang">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-s-platform"></i>&nbsp;&nbsp;&nbsp;收藏的文章</li>
			</a>
			<a href="/xihuan">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-star-fill"></i>&nbsp;&nbsp;&nbsp;喜欢的文章</li>
			</a>
			<a href="/yigou">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-close-fill"></i>&nbsp;&nbsp;&nbsp;已购内容</li>
			</a>
			<a href="/qianbao">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-s-goods"></i>&nbsp;&nbsp;&nbsp;我的钱包</li>
			</a>
			<a href="/shezhi">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="el-icon-s-tools"></i>&nbsp;&nbsp;&nbsp;设置</li>
			</a>
			<a href="/fankui">
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-reply-fill"></i>&nbsp;&nbsp;&nbsp;帮助与反馈</li>
			</a>
			<a>
				<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="layui-icon layui-icon-spread-left"></i>&nbsp;&nbsp;&nbsp;退出</li>
			</a>
	</div>
	</i>
	<a href="/wenzhang">
		<div class="layui-col-md5 right2"><i class="layui-icon layui-icon-tree"></i>写文章</div>
	</a>
	</li>
	</header>
	<div class="child" id="child" v-show="maskShow">
		<div class="modal-header">
			<h3 class="modal-title">简书钻相关功能，目前仅能在</h3>
			<h3 class="notic">简书App查看</h3>
			<div style="margin: 20px 0 0;position: relative;">
				<img src="../assets/download-apps-page-bottom-qrcode-8c63808111ffb1746c08cbd262adbe2e.png" alt="">
			</div>
			<p>扫码下载 简书App</p>
		</div>

		<button @click="setMaskShow">我知道了</button>
	</div>
	<div class="mask" v-show="maskShow" @click="setMaskShow"></div>
	<div class="mask1" v-show="!isshow" @click="setMaskShow1"></div>
	<div class="mask1" v-show="!allshow" @click="setMaskShow2"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seen: false,
				current: 0,
				item: false,
				isshow: true,
				show: true,
				allshow: true,
				maskShow: false,
				downIcon: true,
			}
		},
		methods: {
			ente(index) {
				this.seen = true;
				this.current = index;
			},
			enter(key) {
				this.item = true;
				this.current = key;
			},
			leave() {
				this.seen = false;
				this.item = false;
				this.current = null;
			},
			open() {
				this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
					dangerouslyUseHTMLString: true
				});
			},
			setMaskShow() {
				this.maskShow = !this.maskShow;
			},
			setMaskShow1() {
				this.isshow = !this.isshow;
			},
			setMaskShow2() {
				this.allshow = !this.allshow;
			},
			sorts() {
				this.downIcon = !this.downIcon
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		font-weight: '微软雅黑';
	}

	.mask {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #000;
		opacity: 0.5;
		z-index: 998;
	}

	.mask1 {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 998;
	}

	.child {
		position: fixed;
		width: 350px;
		height: 400px;
		border: 1px solid #ccc;
		top: 10%;
		left: 35%;
		background: #fff;
		z-index: 999;
	}

	.child img {
		width: 50%;
	}

	.child button {
		width: 150px;
		height: 35px;
		border: none;
		color: #FFFFFF;
		border-radius: 25px;
		background: rgb(233, 111, 90);
		margin-left: 100px;
		margin-top: 20px;
		cursor: pointer;
	}

	.notic {
		display: block;
		margin-top: 5px;
		vertical-align: middle;
		color: rgb(233, 111, 90);
	}

	.modal-header {
		text-align: center;
		margin-top: 20px;
	}

	.modal-title {
		color: #333;
	}

	header {
		width: 100%;
		height: 58px;
		border-bottom: 1px solid #CCCCCC;
		position: fixed;
		z-index: 1;
		background-color: #FFFFFF;
	}

	.left img {
		height: 58px;
		margin: 0 auto;
		float: right;
		cursor: pointer;
	}

	.center {
		font-size: 16px;
		line-height: 58px;
		color: #000000;
		text-align: center;
		cursor: pointer;
		color: rgb(233, 111, 90);
	}

	.cl {
		width: 180px;
		border: 1px solid #cccccc;
		border-top: none;
		box-shadow: #cccccc 0 0 2px 1px;
		margin-top: 10px;
		border-radius: 5px;
		z-index: 1;
		background: #FFFFFF;
	}

	.cl p {
		font-size: 12px;
		height: 30px;
		cursor: pointer;
	}

	.cl p:hover {
		color: #000;
	}

	.biao {
		width: 180px;
		box-shadow: #cccccc 0 0 3px 1px;
		border-radius: 5px;
	}

	.biao li {
		height: 50px;
		line-height: 50px;
		background: #FFFFFF;
		text-align: left;
	}

	.biao li:hover {
		background: rgb(240, 241, 241);
	}

	.biao li i {
		color: rgb(233, 111, 90);
		font-size: 22px;
		font-weight: bold;
	}

	.center i {
		font-size: 16px;
		color: rgb(233, 111, 90);

	}

	.center1 {
		font-size: 16px;
		line-height: 58px;
		text-align: center;
		cursor: pointer;
	}

	.center1 i {
		font-size: 16px;
	}

	.center1:hover {
		background-color: rgb(245, 245, 245);
	}

	.center2 {
		text-align: center;
	}

	.input input {
		width: 160px;
		border: none;
		background-color: rgb(238, 238, 238);
	}

	.input1 input {
		width: 150px;
		border: none;
		margin-left: -20px;
		background-color: rgb(238, 238, 238);
	}

	.input i {
		float: right;
	}

	.input1 i {
		float: right;
	}

	.input {
		width: 240px;
		height: 38px;
		border-radius: 40px;
		margin-top: 10px;
		line-height: 38px;
		background-color: rgb(238, 238, 238);
		color: rgb(150, 150, 150);
		margin-left: 15px;
	}

	.input1 {
		width: 300px;
		height: 38px;
		border-radius: 40px;
		margin-top: 10px;
		line-height: 38px;
		background-color: rgb(238, 238, 238);
		color: rgb(150, 150, 150);
		margin-left: 15px;
		transition: width .5s;
		-moz-transition: width .5s;
		/* Firefox 4 */
		-webkit-transition: width .5s;
		/* Safari 和 Chrome */
		-o-transition: width .5s;
	}

	.center2 i {
		margin-right: 20px;
	}

	.center3 {
		line-height: 58px;
		text-align: center;
	}

	.center5 {
		color: rgb(150, 150, 150);
		font-size: 20px;
		cursor: pointer;
	}

	.center3 i {
		font-size: 22px;
		color: rgb(233, 111, 90);
		font-weight: bold;
		cursor: pointer;
	}

	.center3 span {
		background-color: rgb(233, 111, 90);
		width: 30px;
		height: 15px;
		cursor: pointer;
	}

	.right a {
		font-size: 16px;
		color: #969696;
		text-align: center;
		line-height: 58px;
		text-decoration: none;
	}

	.right img {
		width: 15%;
		margin-top: 10px;
		cursor: pointer;
	}

	.right4 {
		line-height: 58px;
		color: rgb(152, 152, 152);
		font-size: 20px;
		cursor: pointer;
	}

	.right1 {
		width: 80px;
		height: 38px;
		border: 1px solid rgb(233, 111, 90);
		border-radius: 20px;
		margin-top: 10px;
		line-height: 38px;
		text-align: center;
		color: rgb(233, 111, 90);
		cursor: pointer;
	}

	.right1:hover {
		background-color: rgb(254, 247, 246);
	}

	.right2 {
		width: 100px;
		height: 38px;
		margin-left: 20px;
		border-radius: 20px;
		background-color: rgb(233, 111, 90);
		color: #FFFFFF;
		margin-top: 10px;
		line-height: 38px;
		text-align: center;
		cursor: pointer;
	}

	.right2:hover {
		background-color: rgb(236, 97, 73);
	}

	.user {
		width: 170px;
		z-index: 1;
		margin-top: 2px;
		background: #FFFFFF;
		margin-left: -65px;
		box-shadow: #cccccc 0 0 5px 1px;
		border-radius: 0 0 5px 5px;
	}

	.user li {
		font-size: 14px;
		height: 50px;
		line-height: 50px;
		cursor: pointer;
		color: #000000;
		text-align: left;
	}

	.user li i {
		color: rgb(233, 111, 90);
		font-size: 22px;
	}

	.user li:hover {
		background: rgb(245, 245, 245);
	}

	.clin {
		width: 230px;
		height: 200px;
		border-radius: 5px;
		line-height: 70px;
		box-shadow: #cccccc 0 0 5px 1px;
		background: #FFFFFF;
	}

	.clin1 {
		font-size: 14px;
		text-align: center;
		height: 70px;
	}

	.clin1 i {
		color: #989898;
		font-size: 16px;
	}

	.clin2 {
		height: 40px;
		border-radius: 25px 0 0 25px;
		border: 1px solid #cccccc;
		border-right: none;
		margin-top: 15px;
		font-size: 14px;
		line-height: 40px;
	}

	.clin3 {
		height: 40px;
		border-radius: 0 25px 25px 0;
		border: 1px solid #cccccc;
		border-left: none;
		background: rgb(109, 178, 244);
		margin-top: 15px;
		font-size: 14px;
		line-height: 40px;
		color: #FFFFFF;
	}

	.bott {
		border-bottom: 1px solid #cccccc;
		width: 80%;
		margin: 0 auto;
	}

	.clin4 {
		width: 80%;
		margin: 0 auto;
	}
</style>
