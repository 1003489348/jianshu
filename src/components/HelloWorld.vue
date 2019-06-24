<template>
	<div class="layui-row layui-hide-xs" id="banner">
		<left style="margin-top:10%;"></left>
		<!-- 这是右边开始 -->
		<div id="right" class="layui-col-md4" style="margin-top:10%;padding-left:4%">
			<ul class="layui-col-md12">
				<li class="layui-col-md12"><a><img src="../images/right1.png"></a></li>
				<li class="layui-col-md12"><a><img src="../images/right2.png"></a></li>
				<li class="layui-col-md12"><a><img src="../images/right3.png"></a></li>
				<li class="layui-col-md12"><a><img src="../images/right4.png"></a></li>
			</ul>
			<div class="right1 layui-col-md12" style="margin-top2%;">
				<div class="layui-col-md4"><img class="layui-col-md4" style="width:80%; height:80%;opacity: .85;" src="../images/erweima.png"></div>
				<div class="layui-col-md8" style="margin-top: 10px;">
						<a href="#" class="lyui-col-md12" style="font-size:15px;color:#333;display: block;width: 140px; text-decoration: none;">下载简书手机App&nbsp;<i class="layui-icon layui-icon-right"></i></a>
						<p class="lyui-col-md12" style="margin-top:4px;font-size:13px;color:#999;display: block;width: 150px;">随时随地发现和创作内容</p>
				</div>
			</div>
			<div class="right2 layui-col-md12">
				<img style="border-radius:10px;" class="right2 layui-col-md12" src="../images/guanggao.jpg" />
				<button>广告</button>
			</div>
            <!-- 推荐作者开始 -->
			<div v-show="downIcon" class="right2 layui-col-md12" style="margin-top:5%;">
				<div class="right2 layui-col-md12">
					<span style="font-size:14px;color: #969696;float: left;">推荐作者</span>
					<a style="display: inline-block;font-size: 14px;color: #969696;float: right; text-decoration: none; cursor: pointer;"><i  @click="sorts" class="layui-icon layui-icon-refresh">&nbsp;换一批</i></a>
				</div>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border:1px solid #ddd;border-radius:50%;" src="../images/chadian.webp" />
					</div>
					<div class="layui-col-md9">
						
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">茶点故事</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了311.8k字 · 10.1k喜欢</p>
						</div>
						
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border: 1px solid #ddd;border-radius: 50%;" src="../images/bing.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">冰千里</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了497.9k字 · 8.7k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border: 1px solid #ddd;border-radius: 50%;" src="../images/hangju.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">行距版君</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了500.2k字 · 53.9k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;;border: 1px solid #ddd;border-radius: 50%;" src="../images/lostdays.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">lostdays</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了231.7k字 · 2.1k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border:1px solid #ddd;border-radius: 50%;" src="../images/wuxian.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">无限猴子</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了311.8k字 · 10.1k喜欢</p>
						</div>
					</div>
				</div>				
				</RouterLink>
			</div>
			<!-- 推荐作者结束 -->
			<!-- 推荐作者1开始 -->
			<div v-show="!downIcon" class="right2 layui-col-md12" style="margin-top:5%;">
				<div class="right2 layui-col-md12">
					<span style="font-size:14px;color: #969696;float: left;">推荐作者</span>
					<a style="display: inline-block;font-size: 14px;color: #969696;float: right; text-decoration: none; cursor: pointer;"><i @click="sorts" class="layui-icon layui-icon-refresh">&nbsp;换一批</i></a>
				</div>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border:1px solid #ddd;border-radius:50%;" src="../images/7761b285-2805-4534-9870-ba7dcc7538ec.webp" />
					</div>
					<div class="layui-col-md9">
						
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">阿栈</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了456k字 · 1.4k喜欢</p>
						</div>
						
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border: 1px solid #ddd;border-radius: 50%;" src="../images/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">念远怀人</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了640.9k字 · 12.7k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border: 1px solid #ddd;border-radius: 50%;" src="../images/eb973bb9-37ba-4d07-acec-850c0a66d1bb.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">简书大学堂</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了1506.3k字 · 33.8k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;;border: 1px solid #ddd;border-radius: 50%;" src="../images/eead6b83-452b-42a7-b77e-5dc9109d8a71.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">小万PPT</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了113.9k字 · 22.6k喜欢</p>
						</div>
					</div>
				</div>
				</RouterLink>
				<RouterLink to="/Text">
				<div class="layui-col-md12" style="margin-top:4%;">
					<div class="layui-col-md3">
						<img style="width:79.5%;border:1px solid #ddd;border-radius: 50%;" src="../images/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.webp" />
					</div>
					<div class="layui-col-md9">
						<div class="layui-col-md12" style="margin-top:1%;">
							<h1 style="padding-top:5px;margin-right:60px;font-size: 14px;display: block;float: left;">三儿王屿</h1>
							<a style="float:right;margin-top:5px;padding-left:0;font-size:13px;color:#42c02e;"><i class="layui-icon layui-icon-add-1"></i>关注</a>
							<p class="layui-col-md12" style="margin-top:3%;font-size: 12px;color: #969696;">写了155.9k字 · 3.3k喜欢</p>
						</div>
					</div>
				</div>				
				</RouterLink>
			</div>
        <!-- 推荐作者结束 -->
			<div class="right3 layui-col-md12">
				<a class="layui-col-md12" style="text-align: center; text-decoration: none; cursor: pointer;" href="/tjzz">查看全部
					<i class="layui-icon layui-icon-right"></i></a>
			</div>
			<div style="margin-top: 5%;" class="right2 layui-col-md12">
				<img style="border-radius:10px;" class="right2 layui-col-md12" src="../images/guanggo2.jpg" />
				<button>广告</button>
			</div>
		</div>
		<!-- 这是右边结束 -->
	</div>
	
</template>

<script>
	import left from './left.vue'
	export default {
		name: 'app',
		data() {
			return ({
				downIcon: true,
			})
		},
		methods: {
			sorts() {
				this.downIcon = !this.downIcon
			}
		},
		components: {
			left: left,
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#banner {
		width: 65%;
		margin: 0 auto;
	}
	#left {
		background: #0000FF;
	}

	#right img {
		width: 100%;
		min-height: 50px;
		margin-bottom: 6px;
		border-radius: 4px;
	}

	.right1 {
		margin-bottom: 30px;
		padding: 10px 22px;
		width: 100%;
		border: 1px solid #f0f0f0;
		border-radius: 6px;
		background-color: #fff;
	}

	.right2 button {
		position: absolute;
		border: none;
		bottom: 5px;
		right: 0;
		color: #fff;
		background-color: #000;
		padding: 0 5px;
		font-size: 12px;
		line-height: 20px;
		opacity: 0.7;
	}

	.right3 {
		padding: 7px 7px 7px 12px;
		width: 100%;
		font-size: 13px;
		color: #787878;
		background-color: #f7f7f7;
		border: 1px solid #dcdcdc;
		border-radius: 4px;
	}
</style>
