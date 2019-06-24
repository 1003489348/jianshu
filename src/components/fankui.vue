<template>
	<div>
		<div class="layui-hide-sm" style="height: 48px;">
			<sjdh></sjdh>
		</div>
		<div class="layui-row layui-hide-xs" style="height: 58px;">
			<top></top>
		</div>
		<div class="bord">
			<el-row>
				<el-col :span="16">
					<div class="re-l">
						<p>热门问题</p>
					</div>
					<div class="re">
						<a href="#">2019.5.12 关于发布文章后内容消失的问题的公告</a>
						<a href="#">为什么文章会被锁定？</a>
						<a href="#">如果你被封号了？</a>
						<a href="#">如何更换绑定的手机号，原有手机号不用了怎么办？</a>
						<a href="#">简书钻「减少」了怎么办？</a>
						<a href="#">简书钻和简书贝的常见问题</a>
						<a href="#">如何注销简书账号</a>
						<a href="#">简书账号绑定解绑相关问题汇总</a>
						<a href="#">iOS充值问题（余额、使用、异常问题）</a>
						<a href="#">简书收入结算与提现常见问题</a>
						<a href="#">我该如何发表一篇付费文章？</a>
						<a href="#">文章列表处的缩略图不显示怎么办？</a>
						<a href="#">简书官方专题投稿指南大全</a>
						<a href="#">公告：简书关注和涨粉的一些说明</a>
						<a href="#">关于举报“抄袭类文章”的说明</a>
						<a href="#">文章字数统计有问题怎么办</a>
						<a href="#">如何在简书进行创作</a>
						<a href="#" style="border-bottom:none;">关于文章投稿次数的有关说明</a>
					</div>
					<div class="re-l">
						<p>如何玩转简书</p>
					</div>
					<div class="re">
						<a href="#">怎么关闭评论</a>
						<a href="#">如何在简书进行创作</a>
						<a href="#">发现页热门文章使用指南</a>
						<p v-for="(aaa, key) in aaas" :key="key" v-show="key<num2">{{aaa}}</p>
						<span @click="showMore2">{{txt2}}</span>
					</div>
					<div class="re-l">
						<p>简书账号问题</p>
					</div>
					<div class="re">
						<a href="#">怎么关闭评论</a>
						<a href="#">如何在简书进行创作</a>
						<a href="#">发现页热门文章使用指南</a>
						<p v-for="(ccc, key) in cccs" :key="key" v-show="key<num4">{{ccc}}</p>
						<span @click="showMore4">{{txt4}}</span>
					</div>
					<div class="re-l">
						<p>身份认证</p>
					</div>
					<div class="re">
						<a href="#" style="border-bottom:none;">简书新浪微博联合认证说明</a>
					</div>
					<div class="re-l">
						<p>简书帮助中心</p>
					</div>
					<div class="re">
						<a href="#">怎么关闭评论</a>
						<a href="#">如何在简书进行创作</a>
						<a href="#">发现页热门文章使用指南</a>
						<p v-for="(item, key) in items" :key="key" v-show="key<num">{{item}}</p>
						<span @click="showMore">{{txt}}</span>
					</div>
					<div class="re-l">
						<p>有关简书文章的一切</p>
					</div>
					<div class="re">
						<a href="#">怎么关闭评论</a>
						<a href="#">如何在简书进行创作</a>
						<a href="#">发现页热门文章使用指南</a>
						<p v-for="(bbb, key) in bbbs" :key="key" v-show="key<num3">{{bbb}}</p>
						<span @click="showMore3">{{txt3}}</span>
					</div>
				</el-col>


				<el-col :span="8" class="hidden-xs-only contR">
					<div class="rer-r">
						<div class="rer" style="height:54.5px;">
							<img src="../assets/ren.png">
							<span>没解决你的疑问？</span>
							<a href="#" style="display: block; margin-top:-18px; color:#3194d0;margin-left:60px;">去反馈 ></a>
						</div>
						<div class="hint-text">
							帐户冻结、文章锁定问题，请邮件联系 help@jianshu.com
						</div>
						<div class="hint-text">
							程序/功能问题、bug 反馈，可添加“简书专题社群委员会委员长”微信号：Jianshu_dama，备注“Web公测”，加群第一时间获得帮助。
						</div>
						<div class="hint-text">
							也可以<a href="#" style=" color: #3194d0;">联系我们 ></a>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<style scoped>
	.bord {
		width: 65%;
		height: 300px;
		margin: 0 auto;
		margin-top: 58px;
		padding: 30px 0;
		/* border: 1px red solid; */
	}

	.re-l {
		margin-bottom: 15px;
		padding-left: 10px;
		font-size: 20px;
		line-height: 1;
		border-left: 4px solid #ea6f5a;
	}

	.re {
		width: 75%;
		border: 1px #d5d5d5 solid;
		margin-bottom: 30px;
		padding: 10px 28px;
		border-radius: 6px;
		text-align: left;
	}

	.re a {
		display: block;
		padding: 12px 0;
		font-size: 15px;
		color: #3194d0;
		text-decoration: none;
		border-bottom: 1px solid #d5d5d5;
	}

	.re p {
		color: #3194d0;
		padding: 6px 0;
		font-size: 15px;
		border-bottom: 1px solid #d5d5d5;
	}

	.re span {
		padding: 10px 0;
		text-align: center;
		display: block;
		color: #999;
	}

	.rer-r {
		width: 250px;
		height: 371.900px;
		margin-top: 35px;
	}

	.rer-r img {
		width: 60px;
		height: 54.5px;
		/* margin-left: -57px; */
		vertical-align: middle;
	}

	.hint-text {
		margin-top: 30px;
		padding-top: 30px;
		border-top: 1px solid #f0f0f0;
		font-size: 14px;
		text-align: left;
	}

	@media screen and (max-width:750px) {
		.re {
			width: 133%
		}
	}
</style>
<script>
	import 'element-ui/lib/theme-chalk/display.css';
	import top from './top3.vue'
	import sjdh from './sjdh.vue'

	export default {
		name: 'fankui',
		data() {
			return {
				items: [
					"怎么关闭评论",
					"如何在简书进行创作",
					"发现页热门文章使用指南",
					"如何让更多的人看到自己的文章",
					"公告：关于首页投稿专题密集投稿相关问题",
				],
				aaas: [
					"如果你发现自己帐号里的文章/钱包金额都没了",
					"无法接收短信验证码",
					"多个账号支持合并吗？",
					"绑定账号的时候提示被占用怎么办？",
					"如何更换绑定的手机号，原有手机号不用了怎么办？"
				],
				bbbs: [
					"如何绑定和解绑手机号/邮箱",
					"如果你发现自己帐号里的文章/钱包金额都没了",
					"无法接收短信验证码",
					"多个账号支持合并吗？",
					"绑定账号的时候提示被占用怎么办？",
					"如何更换绑定的手机号，原有手机号不用了怎么办？"
				],
				cccs: [
					"为什么文章会被锁定？",
					"如果你被封号了？",
					"多个账号支持合并吗？",
					"绑定账号的时候提示被占用怎么办？",
					"如何更换绑定的手机号，原有手机号不用了怎么办？"
				],
				isShow: true,
				isShow2: true,
				isShow3: true,
				isShow4: true,
				num: 0,
				txt: "展开全部∨",
				num2: 0,
				txt2: "展开全部 ∨",
				txt3: "展开全部∨",
				num3: 0,
				txt4: "展开全部∨",
				num4: 0,
			};
		},
		methods: {
			showMore() {
				console.log("1", this.isShow);
				this.isShow = !this.isShow;
				console.log("2", this.isShow);
				this.num = this.isShow ? 0 : this.items.length;
				this.txt = this.isShow ? "展开全部∨" : "";
			},
			showMore2() {
				console.log("1", this.isShow2);
				this.isShow2 = !this.isShow2;
				console.log("2", this.isShow2);
				this.num2 = this.isShow2 ? 0 : this.items.length;
				this.txt2 = this.isShow2 ? "展开全部∨" : "";
			},
			showMore3() {
				console.log("1", this.isShow3);
				this.isShow3 = !this.isShow3;
				console.log("2", this.isShow3);
				this.num3 = this.isShow3 ? 0 : this.items.length;
				this.txt3 = this.isShow3 ? "展开全部∨" : "";
			},
			showMore4() {
				console.log("1", this.isShow4);
				this.isShow4 = !this.isShow4;
				console.log("2", this.isShow4);
				this.num4 = this.isShow4 ? 0 : this.items.length;
				this.txt4 = this.isShow4 ? "展开全部∨" : "";
			}
		},
		components: {
			top,
			sjdh
		}
	};
</script>
