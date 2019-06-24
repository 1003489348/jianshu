<template>
	<div>
		<sjdh></sjdh>
		<div class="layui-row" style="height: 20px;"></div>
		<div class="sjdzz">
			<el-row class="hidden-sm-and-up">
				<el-col :xs="24" :sm="24">
					<div class="grid-content bg-purple">
						<div class="bjtup"></div>
					</div>
				</el-col>
				<el-col :xs="8" :sm="8">
					<div class="grid-content bg-purple">
						<div class="sjdtoux"><img class="sjdtx" src="../assets/9f238bd0-cca6-4fe9-bc06-c8256bf39f86 .jpg" alt=""></div>
					</div>
				</el-col>
				<el-col :xs="16" :sm="16">
					<div class="grid-content bg-purple">
						<div class="sjdnicheng">
							<a class="nicheng">程序员之言</a>
							<div class="xiangxi">
								<p class="shuzi">75</p>
								<span class="wenzi">关注</span>
								<p class="shuzi">706</p>
								<span class="wenzi">粉丝</span>
								<p class="shuzi">191.096</p>
								<span class="wenzi">简书钻</span>
							</div>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24">
					<div class="grid-content bg-purple">
						<a class="jianjie">公众号：<span class="lianjie">https://www.jianshu.com/p/98b20c4d2db5</span></a><br>
						<p class="pizhu">写了47.3万字，获得了2150个喜欢</p>
					</div>
				</el-col>
				<el-col :xs="12" :sm="12">
					<div class="grid-content bg-purple-button">
						<button class="guanzhu" @click="show=!show" v-if="!show">+ 关注</button>
						<button class="yguanzhu" v-if="show" @click="show=!show">√ 已关注</button>
					</div>
				</el-col>
				<el-col :xs="12" :sm="12">
					<div class="grid-content bg-purple-button">
						<button class="zanshangzz">赞赏作者</button>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24">
					<div class="grid-content bg-purple">
						<div class="kongbai"></div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24">
					<div class="grid-content bg-purple">
						<div class="tabqiehuan">
							<el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
								<el-tab-pane></el-tab-pane>
								<el-tab-pane></el-tab-pane>
								<el-tab-pane label="最新发布" name="first">
									<wenjian />
								</el-tab-pane>
								<el-tab-pane label="最新评论" name="second">
									<wenjian />
								</el-tab-pane>
								<el-tab-pane label="热门" name="third">
									<wenjian />
								</el-tab-pane>
							</el-tabs>
						</div>
					</div>
				</el-col>
				<el-col :xs="24" :sm="24">
					<div class="grid-content bg-purple">
						<div class="wenzhang"></div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import wenjian from './wenjian.vue'
	import sjdh from './sjdh.vue'
	export default {
		data() {
			return {
				activeName: 'first',
				show: false
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		components: {
			wenjian: wenjian,
			sjdh
		}
	};
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.el-col {
		border-radius: 4px;
	}

	.bjtup {
		width: 100%;
		height: 150px;
		background: url('../assets/img-user-background-image-default.a89eb3a3.jpg') no-repeat;
	}

	.sjdtoux {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		border: 4px solid white;
		margin-top: -20px;
		margin-left: 15px;
	}

	.sjdtx {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.sjdnicheng {
		width: 100%;

	}

	.nicheng {
		display: block;
		text-decoration: none;
		font-size: 18px;
		font-weight: bold;
		color: rgb(53, 53, 53);
		margin-top: 10px;
		/* float: left;
    margin-left: 140px;
    margin-top: -60px; */
	}

	.xiangxi {
		margin-top: 10px;
		margin-left: -13px;
	}

	p {
		display: inline;
	}

	.shuzi {
		font-size: 14px;
		color: rgb(34, 34, 34);
		margin-left: 13px;
	}

	.wenzi {
		margin-left: 5px;
		font-size: 14px;
		color: rgb(163, 163, 163);
	}

	.jianjie {
		display: block;
		color: rgb(58, 58, 58);
		margin-left: 20px;
		margin-top: 15px;

	}

	.lianjie {
		text-decoration: none;
		color: rgb(17, 160, 255);
	}

	.pizhu {
		font-size: 14px;
		color: rgb(129, 129, 129);
		margin-left: 20px;
	}

	.bg-purple-button {
		width: 100%;
		height: 50px;
		margin-top: 20px;
	}

	.guanzhu {
		width: 85%;
		height: 40px;
		margin-left: 10%;
		border-radius: 3px;
		border: none;
		background-color: rgb(0, 211, 11);
		text-align: center;
		color: white;
		font-size: 16px;
	}

	.yguanzhu {
		width: 85%;
		height: 40px;
		margin-left: 10%;
		border-radius: 3px;
		border: 1px solid rgb(218, 218, 218);
		background-color: white;
		text-align: center;
		font-size: 16px;
	}

	.zanshangzz {
		width: 85%;
		height: 40px;
		margin-left: 5%;
		border-radius: 3px;
		border: 1px solid rgb(218, 218, 218);
		background-color: white;
		text-align: center;
		font-size: 16px;
	}

	.kongbai {
		margin-top: 15px;
		width: 100%;
		height: 10px;
		background-color: rgb(241, 241, 241);
	}

	.tabqiehuan {
		width: 100%;
		height: 40px;
	}

	.tab label {
		border-bottom: 1px solid green;
	}
</style>
