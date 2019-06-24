<template>
	<div>
		<div class="layui-hide-xs">
			<div class="heard" style="width: 100%; height: 58px;">
				<top></top>
			</div>
			<!-- 	导航结束 -->
			<div class="layui-row" style="width:960px;margin: 0 auto;margin-top: 60px;">
				<div class="top layui-col-md12" style="width: 100%;margin: 0 auto;">
					<div class="layui-col-md3" style="width: 29.16667%;">
						<a href="/u/782fd05916e9" class="avatar">
							<img src="../assets/0d0b369c-bbe9-4d54-a031-1177fa0ea311.webp">
						</a>
						<div class="info">
							<a href="/u/782fd05916e9" class="name">
								WSK_9a8c
							</a>
							<!---->
							<div class="bind">
								<el-tooltip class="item" effect="light" content="当前绑定手机:13582304410" placement="bottom-start">
									<el-button class="el" style="border: none;background: none;color: none;color: #969696;font-size: 12px;">已绑定手机</el-button>
								</el-tooltip>
							</div>

						</div>
					</div>
					<div class="middle layui-col-md5" style="width: 41.66667%;">
						<div class="money">账户余额</div>
						<span class="money-main" style="font-size: 28px;">0</span>
						<span class="money-sub" style="font-size: 18px;">.00元</span>
						<div style="margin-top: 20px;">
							<div class="btn layui-btn layui-btn-radius layui-btn-primary">
								提现
							</div> <span style="font-size: 13px;color: #969696;">*当前余额不足</span>
						</div>
					</div>
					<div class="meta layui-col-md3" style="width: 29.16667%;overflow: hidden;">
						<div style="margin-bottom: 5px;">每次提现最小额度为￥100.00</div>
						<div style="margin-bottom: 5px;">提现会在 3-5 个工作日内到账</div>
						<div style="margin-bottom: 5px;">结算后的收益，提现不再收取手续费</div>
						<a href="/p/72f326961ab3" style="font-size: 13px;color: #3194d0;display: block;">收入结算与提现常见问题</a>
					</div>
				</div>
				<!-- 头部结束 -->
				<div class="body layui-col-md12">
					<li class="title layui-row" style="width:888px;">
						<div class="layui-col-md2" style="border-right: 1px dashed #c8c8c8;width: 135px;">时间</div>
						<div class="layui-col-md1" style="padding-left: 15px;width: 90px;">类型</div>
						<div class="layui-col-md5" style="padding-left: 15px;width: 386px;border-left: 1px dashed #c8c8c8;">详情</div>
						<div class="layui-col-md2" style="padding-left: 15px;width: 110px;border-left: 1px dashed #c8c8c8;">金额</div>
						<div class="layui-col-md2" style="border-left: 1px dashed #c8c8c8;padding-left: 15px;width: 150px;">状态</div>
					</li>
				</div>
			</div>
		</div>
		<!-- pc端结束 -->
		<div class="layui-hide-sm">
			<div class="heard" style="width: 100%; height: 48px;margin-bottom: 25px;">
				<sjdh></sjdh>
			</div>
			<!-- 手机单导航结束 -->
			<div class="content">
				<div class="content1" style="border-bottom: 1px #DDDDDD solid;">
					<div class="banner" style="width: 90%;height: 100px; margin: 0 auto;">
						<span>0.00</span>
						<button class="layui-btn layui-btn-xs">提现</button>
					</div>
					<div style="padding-top: 10px;padding-bottom: 10px;">
						<div style="text-align: center;font-size:10px;color: #B7B7B7;letter-spacing:2px;">提现金额需满100元，<a style="color: #007DDB;">查看提现帮助</a></div>
					</div>
				</div>
				<!-- 头部结束 -->
				<div class="content2">
					<div style="width:90%;margin: 0 auto;padding-bottom: 30px;padding-top: 30px;" class="layui-row">
						<div class="layui-col-xs1"> <i class="el-icon-s-ticket" style="color: #F0AD4E;font-size: 20px;"></i></div>
						<div class="layui-col-xs11" style="border-bottom: 1px #DDDDDD solid;padding-bottom:30px;">
							<p style="float: left;">优惠券</p>
							<button style="float: right;background:#FD482C" class="layui-btn layui-btn-xs">0张可用</button>
						</div>
					</div>
					<div style="width:90%;margin: 0 auto;padding-bottom: 30px;" class="layui-row">
						<div class="layui-col-xs1"> <i class="layui-icon layui-icon-rmb" style="color: #FF0000;font-size: 20px;"></i></div>
						<div class="layui-col-xs11" style="border-bottom: 1px #DDDDDD solid;padding-bottom:30px;">
							<p style="float: left;">我的收入</p>
						</div>
					</div>
					<div style="width:90%;margin: 0 auto;padding-bottom: 30px;" class="layui-row">
						<div class="layui-col-xs1"> <i class="el-icon-s-goods" style="color:#272296;font-size: 20px;"></i></div>
						<div class="layui-col-xs11" style="border-bottom: 1px #DDDDDD solid;padding-bottom:30px;">
							<p style="float: left;">交易记录</p>
						</div>
					</div>
					<div style="width:90%;margin: 0 auto;padding-bottom: 30px;" class="layui-row">
						<div class="layui-col-xs1"> <i class="layui-icon layui-icon-app" style="color:#FD482C;font-size: 20px;"></i></div>
						<div class="layui-col-xs11" style="padding-bottom:30px;">
							<p style="float: left;">我的赞赏码</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import top from './top3.vue'
	import sjdh from './sjdh.vue'
	export default {
		name: 'Home',

		components: {
			top,
			sjdh
		},
	}
</script>

<style scoped>
	/* 手机端样式开始 */

	.content {
		width: 100%;

	}

	.banner {
		margin-top: 25px;
		background: url(../assets/qianbao.png) no-repeat;
		background-size: 100% 100%;
	}

	.banner span {
		line-height: 100px;
		padding-left: 30%;
		font-size: 24px;
		color: #FFFFFF;
	}

	.banner button {
		background: none;
		color: #FFFFFF;
		border: 1px solid #FFFFFF;
		float: right;
		display: block;
		position: relative;
		top: 40%;
		right: 5%;
	}

	/* 手机端样式结束 */
	.avatar {
		position: absolute;
		width: 80px;
		height: 80px;
		margin-right: 15px;
		display: inline-block;
		vertical-align: middle;
	}

	.avatar img {
		width: 100%;
		height: 100%;
		border: 1px solid #ddd;
		border-radius: 50%;
	}

	.info {
		display: inline-block;
		vertical-align: middle;
		padding: 15px 0 0 95px;
	}

	.name {
		color: #2f2f2f;
		text-decoration: none;
		font-size: 21px;
		font-weight: 700;
	}

	.bind {
		padding-top: 5px;
		background: none;
		font-size: 12px;
	}


	.middle {
		padding: 10px 55px;
		border-left: 1px solid #e4e4e4;
		border-right: 1px solid #e4e4e4;
	}

	.money {
		margin-right: 20px;
		font-size: 16px;
		color: #969696;
		display: inline-block;
	}

	.btn {
		width: 80px;
		margin-right: 15px;
		font-size: 15px;
		border: 1px solid rgba(59, 194, 29, .7);
		color: #42c02e !important;
	}

	.meta {
		padding: 10px 0px 10px 34px;
		font-size: 13px;
		color: #969696;
	}

	.body {
		margin-top: 30px;
		border: 1px solid #dcdcdc;
		border-radius: 6px 6px 0 0;
		margin-bottom: 0;
	}

	.title {
		padding: 25px 20px;
		font-size: 14px;
		color: #333;
		float: left;
	}
</style>
