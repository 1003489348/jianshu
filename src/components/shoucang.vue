<template>
	<div>
		<div class="heard layui-hide-xs" style="width: 100%; height: 58px;">
			<top></top>
		</div>
		
		<div class="heard layui-hide-sm" style="width: 100%; height: 58px;">
			<sjdh></sjdh>
		</div>

		<div class="layui-row grid-demo grid-demo-bg1">
			<div class="layui-col-md12 layui-hide-xs">
				<div class="grid-demo">
					<img src="../assets/旗帜icon.png">
					<h1>收藏的文章</h1>
				</div>
			</div>


			<div class="layui-col-md9">
				<div class="grid-demo grid-demo-bg2">
					<h3>趣头条自媒体平台新手小白日赚千元的技巧</h3>
					<h6>做自媒体的人最关注的就是每天自己账号的后台数据，因为数据决定当天的收益。因此只要每天能达到几十万的数据，相信对于做自媒体的朋友来说，一个月下来，...</h6>
					<p>小黄说自媒体</p>
					<img src="../assets/消息.png" style="margin-left: 89px;"><span>4</span>
					<img src="../assets/爱心.png" style="margin-left: 25px;"><span>18</span>
					<hr style="margin-top: 1px;">
				</div>
			</div>

			<div class="layui-col-md3">
				<div class="grid-demo grid-demo-bg3">
					<img src="../assets/2.jpg">
				</div>
			</div>

			<div class="layui-col-md9">
				<div class="grid-demo grid-demo-bg2">
					<h3>聊聊VueJs 组件化编程</h3>
					<h6>这篇文章是同事Awe, vue插件小王子写的，现在转过来，原文只有md，不知道网上链接。
						前端开发的现状 随着互联网设备的宽带和硬件的发展， web...</h6>
					<p>乖小鬼</p>
					<img src="../assets/消息.png"><span>1</span>
					<img src="../assets/爱心.png" style="margin-left: 25px;"><span>5</span>
					<hr style="margin-top: 1px;">
				</div>
			</div>

			<div class="layui-col-md3">
				<div class="grid-demo grid-demo-bg3">
					<img src="../assets/ti.png">
				</div>
			</div>

			<div class="layui-col-md9">
				<div class="grid-demo grid-demo-bg2">
					<h3>秦始皇修的这条路，为何2000年都不长草？看看下面埋得东西就知道了</h3>
					<h6>秦始皇是中国历史上第一个皇帝，统一六国后，在疆域辽阔的基础上，积极对外进行扩张，南征百越，北击匈奴，开发北疆，开拓西南，效果显著。为了使交通方便..</h6>
					<p>月儿密使</p>
					<img src="../assets/消息.png" style="margin-left: 64px;"><span>50</span>
					<img src="../assets/爱心.png" style="margin-left: 25px;"><span>268</span>
					<hr style="margin-top: 1px;">
				</div>
			</div>

			<div class="layui-col-md3">
				<div class="grid-demo grid-demo-bg3">
					<img src="../assets/1.jpg">
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import top from './top3.vue'
	import sjdh from './sjdh.vue'
	export default {
		components: {
			top: top,
			sjdh
		}
	}
</script>

<style scoped>
	.layui-row {
		width: 60%;
		margin: 0 auto;
		margin-top: 24PX;
	}

	.layui-col-md12 {
		height: 110px;
		border-radius: 12px;
		background: #e79985;
	}

	.layui-col-md12 img {
		width: 35px;
		height: 33px;
		margin-left: 40px;
		margin-top: 40px;
	}

	.layui-col-md12 h1 {
		margin: -36px 110px;
		color: #fff9ec;
		font-weight: 600;
	}

	.layui-col-md9 h3 {
		font-weight: 700;
		margin-top: 34px;
		font-size: 18px;

	}

	.layui-col-md9 h6 {
		margin-top: 15px;
		color: #b7b7b7;
	}

	.layui-col-md9 img {
		width: 15px;
		height: 12px;
		margin-top: -32px;
		margin-left: 53px;
	}

	.layui-col-md9 p {
		color: #b7b7b7;
		margin-top: 19px;

	}

	.layui-col-md9 span {
		margin-top: -16px;
		margin-left: 3px;
		color: #b7b7b7;
		position: absolute;
	}

	.layui-col-md3 img {
		width: 140px;
		height: 106px;
		padding: 26px;
		margin-top: 18px;
		margin-left: 15px;
	}
</style>
