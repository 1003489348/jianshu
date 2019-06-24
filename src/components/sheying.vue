<template>
	<div>
		<div class="layui-hide-sm" style="height:60px;">
			<sjdh></sjdh>
		</div>
		<div class="layui-hide-xs" style="height:100px;">
			<dltop />
		</div>
		<div class="layui-row ment layui-hide-xs">
			<div class="layui-col-md3 ment_l">
				<div class="layui-row ment_l_b">
					<div class="layui-col-md4 c">&nbsp;&nbsp;&nbsp;全部关注</div>
					<div class="layui-col-md6 i" @click="show=!show"><i class="layui-icon layui-icon-triangle-d"></i>
						<div class="tui" v-if="!show">
							<li>全部关注</li>
							<li>只看作者</li>
							<li>只看专题</li>
							<li>只看文集</li>
							<li>只看推送更新</li>
						</div>
					</div>
				</div>
				<a href="/guanz">
					<div class="layui-row ment_l_c">
						&nbsp;&nbsp;&nbsp;<img src="../assets/addfollow-fc392ec918dda9d19818181ca42d2d7e.png" alt="">&nbsp;&nbsp;&nbsp;增加关注
					</div>
				</a>
				<a href="/sheying">
					<div class="layui-row ment_l_c" style="background: rgb(240,240,240); border-radius: 5px;">
						&nbsp;&nbsp;&nbsp;<img src="../assets/1.webp" alt="">&nbsp;&nbsp;&nbsp;摄影
					</div>
				</a>
				<div class="layui-row ment_l_c">
					&nbsp;&nbsp;&nbsp;<img src="../assets/2.webp" alt="">&nbsp;&nbsp;&nbsp;旅行·在路上
				</div>
				<div class="layui-row ment_l_c">
					&nbsp;&nbsp;&nbsp;<img src="../assets/3.webp" alt="">&nbsp;&nbsp;&nbsp;自然科普
				</div>
				<div class="layui-row ment_l_c">
					&nbsp;&nbsp;&nbsp;<img src="../assets/12.webp" alt="">&nbsp;&nbsp;&nbsp;@IT·互联网
				</div>
			</div>
			<right />
		</div>
		<div class="layui-hide-md">
			<right />
		</div>
	</div>
</template>

<script>
	import dltop from "./top1.vue"
	import sjdh from "./sjdh.vue"
	import right from './collection.vue'
	export default {
		data() {
			return {
				show: true
			}
		},
		components: {
			dltop,
			right,
			sjdh
		}
	}
</script>

<style scoped lang='scss'>
	.ment {
		width: 65%;
		margin: 0 auto;

		.ment_l {
			border-right: 1px solid rgb(230, 230, 230);

			.ment_l_b {
				height: 40px;
				border-bottom: 1px solid rgb(230, 230, 230);

				.c {
					line-height: 40px;
				}

				.i {
					width: 15px;
					height: 15px;
					background: rgb(200, 200, 200);
					border-radius: 50%;
					cursor: pointer;
					margin-top: 12px;
					line-height: 15px;
					text-align: center;

					i {
						color: #ffffff;
						font-size: 12px;
					}
				}

				.tui {
					color: #000000;
					width: 120px;
					background-color: #ffffff;
					z-index: 999;
					box-shadow: #cccccc 0 0 5px 1px;
					border-radius: 5px;
					margin-left: -50px;
					margin-top: 10px;

					li {
						height: 40px;
						line-height: 40px;
					}

					li:hover {
						background: rgb(245, 245, 245);
						border-radius: 5px;
					}
				}
			}

			.ment_l_c {
				height: 60px;
				line-height: 60px;
				cursor: pointer;

				img {
					width: 16%;
					border-radius: 5px;
					z-index: -1;
				}
			}

			.ment_l_c:hover {
				background: rgb(240, 240, 240);
				border-radius: 5px;
			}
		}
	}
</style>
