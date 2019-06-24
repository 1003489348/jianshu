<template>
	<div>
		<div class="layui-row layui-hide-sm header">
			<li class="layui-col-xs3 left">
				<a href="/shye"><img src="../assets/nav-logo.faf216af.png" /></a>
			</li>
			<li class="layui-hide-md layui-col-xs8 ment">
				<p>创作你的创作</p>
			</li>
			<li class="layui-col-md3 layui-col-xs1 right">
				<i class="layui-icon layui-icon-spread-left" @click="show=!show"></i>
			</li>
		</div>
		<div class="layui-row Items" v-if="!show">
			<ul>
				<a href="shye"><li>首页</li></a>
				<a href="/qianbao"><li>钱包</li></a>
				<a href="/guanz"><li>关注</li></a>
				<a href="/pinglun"><li>消息</li></a>
				<a href="/wenzhang"><li>写文章</li></a>
				<a href="/shoucang"><li>收藏文章</li></a>
				<a href="/fankui"><li>帮助与反馈</li></a>
				<a href="/sjdsz"><li>设置</li></a>
				<a href="/"><li>退出</li></a>
			</ul>
		</div>
		<div class="Set" v-show="!show" @click="show=!show"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				show: true
			}
		},
		methods:{
			setShow(){
				this.show = !this.show
			}
		}
	}
</script>

<style scoped lang="scss">
	*{
		margin: 0;
		padding: 0;
	}
	.header {
		font-weight: 400;
		width: 100%;
		height: 48px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
		position: fixed;
		line-height: 45px;
		background: #FFFFFF;
		z-index: 1;
		.left{
			img {
				width: 56%;
				margin-left: 18px;
			}
		}
		.ment{
			line-height: 48px;
			p{
				font-size: 16px; 
				color: #999999; 
				margin-left: -13px;
			}
		}
		.right{
			line-height: 48px; 
			font-size: 16px; 
			color: rgb(233,111,90); 
			float: right;
			i{
				font-size: 20px;
			}
		}
	}
	.Items{
		width: 100%;
		position: fixed;
		z-index: 2;
		margin-top: 48px;
		background: rgb(255, 255, 255,.9);
		box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
		border-radius: 0 0 15px 15px;
		ul{
			li{
				text-align: center;
				height: 40px;
				width: 100%;
				line-height: 40px;
				font-size: 16px;
				margin: 0 auto;
				border-top: 1px solid #999999;
				color: #4e4e4e;
				font-weight: 700;
				border-radius: 3px;
			}
		}
	}
	.Set{
		width: 100%;
		height: 667px;
		position: fixed;
		z-index: 1;
	}
</style>
