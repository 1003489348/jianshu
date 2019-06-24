<template>
	<div>
		<div class="layui-hide-xs">
			<dltop />
			<div class="layui-row" style="height: 100px;"></div>
			<div class="layui-row chat">
				<div class="layui-col-md4 chat_li">
					<a href="/pinglun">
						<div class="layui-col-md12">
							<i class="el-icon-chat-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;评论
						</div>
					</a>
					<a href="/tixe">
						<div class="layui-col-md12">
							<i class="el-icon-message"></i>&nbsp;&nbsp;&nbsp;&nbsp;简信
						</div>
					</a>
					<a href="/tougao">
						<div class="layui-col-md12">
							<i class="layui-icon layui-icon-upload-drag"></i>&nbsp;&nbsp;&nbsp;&nbsp;投稿请求
						</div>
					</a>
					<a href="/zan">
						<div class="layui-col-md12" style="background: rgb(240, 241, 241);">
							<i class="el-icon-cloudy"></i>&nbsp;&nbsp;&nbsp;&nbsp;喜欢和赞
						</div>
					</a>
					<a href="/guanzhu">
						<div class="layui-col-md12">
							<i class="layui-icon layui-icon-username"></i>&nbsp;&nbsp;&nbsp;&nbsp;关注
						</div>
					</a>
					<div class="layui-col-md12">
						<i class="layui-icon layui-icon-rmb"></i>&nbsp;&nbsp;&nbsp;&nbsp;赞赏和付费
					</div>
					<div class="layui-col-md12">
						<i class="layui-icon layui-icon-more"></i>&nbsp;&nbsp;&nbsp;&nbsp;其他提醒
					</div>
				</div>
				<div class="layui-col-md8 chat_item">
					<div class="layui-row item">
						<h3>全部简信</h3>
					</div>
					<div class="layui-row" style="height: 20px;"></div>
					<div class="layui-row lib">
						<div class="layui-col-md1"><img src="../../assets/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png" alt=""></div>
						<div class="layui-col-md8 left">
							<p>马云</p>
							<span>欢迎加入撒大大阿斯顿阿三打算大苏打撒法发啊啊沙发上阿萨阿瑟东阿萨啊</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 手机 -->
		<div class="layui-hide-sm">
			<sjdh></sjdh>
			<div class="layui-row" style="height: 60px;"></div>
			<div class="layui-row chat1">
				<div class="layui-col-md4 chat_li">
					<div class="layui-col-md12" style="background: rgb(240, 241, 241);">
						<a href="/zan"><i class="el-icon-chat-square"></i>&nbsp;&nbsp;&nbsp;&nbsp;喜欢和赞</a>
						<p class="zhan" style="float: right; color: rgb(233,111,90);" @click="show=!show">展开全部 <i class="layui-icon layui-icon-add-circle-fine"></i></p>
					</div>
					<div style="height: 100%;" v-if="!show">
						<a href="/pinglun">
							<div class="layui-col-md12">
								<i class="el-icon-message"></i>&nbsp;&nbsp;&nbsp;&nbsp;评论
							</div>
						</a>
						<a href="/tixe">
							<div class="layui-col-md12">
								<i class="layui-icon layui-icon-username"></i>&nbsp;&nbsp;&nbsp;&nbsp;简信
							</div>
						</a>
						<a href="/guanzhu">
							<div class="layui-col-md12">
								<i class="layui-icon layui-icon-upload-drag"></i>&nbsp;&nbsp;&nbsp;&nbsp;关注
							</div>
						</a>
						<a href="/tougao">
							<div class="layui-col-md12">
								<i class="el-icon-cloudy"></i>&nbsp;&nbsp;&nbsp;&nbsp;投稿请求
							</div>
						</a>
					</div>
				</div>
				<div class="layui-col-md8 chat_item">
					<div class="layui-row item">
						<h3>全部喜欢</h3>
					</div>
					<div class="layui-row" style="height: 20px;"></div>
					<div class="layui-row lib">
						<div class="layui-col-md1 layui-col-xs2"><img src="../../assets/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png" alt=""></div>
						<div class="layui-col-md8 layui-col-xs9 left">
							<p>马云</p>
							<span>欢迎加入撒大大阿斯顿阿三打算大苏打撒法发啊</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dltop from '../top2.vue'
	import sjdh from '../sjdh.vue'
	export default {
		name: 'Home',
		components: {
			dltop,
			sjdh
		},
		data(){
			return{
				show: true
			}
		}
	}
</script>

<style scoped lang="scss">
	.chat {
		font-weight: '微软雅黑';
		width: 65%;
		margin: 0 auto;

		.chat_li {
			div {
				width: 80%;
				height: 50px;
				line-height: 50px;
				font-size: 16px;
				color: #000000;
				cursor: pointer;
			}

			div:hover {
				background: rgb(240, 241, 241);
			}

			i {
				color: rgb(233, 111, 90);
				margin-left: 20px;
				font-size: 20px;
			}
		}

		.chat_item {
			.item {
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #cccccc;
			}

			.lib {
				width: 90%;

				img {
					width: 100%;
					border-radius: 50%;
					border: 1px solid #cccccc;
				}

				p {
					font-size: 18px;
				}

				span {
					font-size: 12px;
					line-height: 30px;
				}

				.left {
					margin-left: 20px;
				}
			}
		}
	}

	.chat1 {
		width: 90%;
		margin: 0 auto;
		font-weight: '微软雅黑';

		.chat_li {
			div {
				width: 100%;
				height: 50px;
				line-height: 50px;
				font-size: 16px;
				color: #000000;
				cursor: pointer;
				border-radius: 5px;
			}

			p{
				i {
					margin-right: 20px;
				}
			}
			
			a{
				i {
				color: rgb(233, 111, 90);
				margin-left: 20px;
				font-size: 20px;
				}
			}
		}

		.chat_item {
			.item {
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #cccccc;
				text-align: center;
			}

			.lib {
				width: 90%;
				margin: 10px 0;

				img {
					width: 100%;
					border-radius: 50%;
					border: 1px solid #cccccc;
					margin-left: 5px;
				}

				p {
					font-size: 24px;
				}

				span {
					font-size: 11px;
					line-height: 10px;
				}

				.left {
					margin-left: 20px;
				}
			}
		}
	}
</style>
