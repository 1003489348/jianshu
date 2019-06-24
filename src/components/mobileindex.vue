<style scoped lang="scss">
	.top-title {
		padding: 10px 18px;

		p {
			display: inline;
			float: right;
			color: #888;
			font-size: 13px;
			font-weight: 400;
			line-height: 1.75;
		}

		span {
			font-size: 14px;
			font-weight: 700;
			color: #545454;
		}
	}

	.top-title1 {
		padding: 0px 18px;

		a {
			display: inline-block;
			padding: 4px 10px;
			margin: 0 12px 12px 0;
			font-size: 14px;
			position: relative;
			color: #ea6f5a;
			border: 1px solid #ea6f5a;
			border-radius: 5px;
		}
	}

	.cont {
		border-bottom: 1px solid #f0f0f0;
		padding: 15px 18px;

		h6 {
			font-size: 18px;
			font-weight: 700;
			color: #333;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			line-height: 25px;

		}

		img {
			width: 80px;
			height: 80px;
			border-radius: 10px;
			float: right;
		}

		p {
			margin-top: 7px;
			font-size: 13px;
			color: #999;
			overflow: hidden;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			line-height: 1.5;

		}
	}

	.cont-bottom {
		margin-top: 8px;

		i {
			color: #ea6f5a;
		}

		span {
			margin-right: 10px;
			font-size: 12px;
			color: #b1b1b1;
		}
	}

	.showmore {
		margin: auto 0;
		padding: 15px 0 15px 7px;
		text-align: center;
		font-size: 15px;
		color: #969696;
	}

	.footer {
		margin: auto 0;
		height: 230px;
		background-image: url(../images/back.png);
		line-height: 230px;
		text-align: center;

		a {
			width: 50%;
			padding: 10px 30px;
			font-size: 16px;
			color: #fff;
			background-color: #ea6f5a;
			border-radius: 4px;
			text-align: center;
		}
	}
</style>
<template>
	<div>
		<div class="layui-hide-xs">
		<home></home>
		</div>
	<div class="layui-row layui-hide-md">
		<dh></dh>
		<div class="layui-row" style="height: 60px;"></div>
		<div class="layui-col-xs12">
			<div class="top-title">
				<span>热门专题</span>
				<p v-on:click="changeflag" class="layui-icon layui-icon-refresh-3">换一批</p>
			</div>
			<a href="/yuedugengduo">
				<div class="top-title1">
					<a v-for="item in lists.slice(a,b)" :key="item">{{item.name}}</a>
				</div>
				<div style="height: 10px; background-color: #f5f5f5;">
				</div>
				<div class="cont layui-row">
					<h6 class="layui-col-xs8">刘备不折腾就是个卖鞋的，刘邦不折腾就是个流氓，你若折腾会是……</h6>
					<img class="layui-col-xs3" src="../images/bing.webp">
					<p class="layui-col-xs8">悄悄告诉你们 关注我会越来越美哦：） by：美丽君 ♥ 晚上好，美丽的你们 Best wishes for you...</p>
					<div class="cont-bottom layui-col-xs12">
						<i class="layui-icon layui-icon-diamond">&nbsp;</i>
						<span>1803</span>
						<span>美丽君</span>
						<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
						<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
					</div>
				</div>
			</a>

			<div class="cont layui-row">
				<h6 class="layui-col-xs8">39岁的她让众人沦为背景，这件衣服能将不同人的气质发挥出来</h6>
				<img class="layui-col-xs3" src="../images/14352811-24e977934f3af8c7.jpeg">
				<p class="layui-col-xs8">大家好，这里是芳芳～ 欢迎来到：芳芳的爱美圣经（ID：weare_shopaholics），关注同名公众号，分享各...</p>
				<div class="cont-bottom layui-col-xs12">
					<i class="layui-icon layui-icon-diamond">&nbsp;</i>
					<span>1803</span>
					<span>美丽君</span>
					<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
					<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
				</div>
			</div>

			<div class="cont layui-row">
				<h6 class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</h6>
				<img class="layui-col-xs3" src="../images/15863532-19169c55616ca748.jpg">
				<p class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</p>
				<div class="cont-bottom layui-col-xs12">
					<i class="layui-icon layui-icon-diamond">&nbsp;</i>
					<span>1803</span>
					<span>美丽君</span>
					<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
					<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
				</div>
			</div>

			<div class="cont layui-row">
				<h6 class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</h6>
				<img class="layui-col-xs3" src="../images/15863532-19169c55616ca748.jpg">
				<p class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</p>
				<div class="cont-bottom layui-col-xs12">
					<i class="layui-icon layui-icon-diamond">&nbsp;</i>
					<span>1803</span>
					<span>美丽君</span>
					<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
					<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
				</div>
			</div>

			<div class="cont layui-row">
				<h6 class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</h6>
				<img class="layui-col-xs3" src="../images/15863532-19169c55616ca748.jpg">
				<p class="layui-col-xs8">有一种“整容”叫德云社穿长袍，岳云鹏魅力四射，最帅还是张云雷。 不知道大家有没有发现，如今的娱乐圈越来越多样化，层...</p>
				<div class="cont-bottom layui-col-xs12">
					<i class="layui-icon layui-icon-diamond">&nbsp;</i>
					<span>1803</span>
					<span>美丽君</span>
					<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
					<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
				</div>
			</div>

			<div v-for="(item, key) in items" :key='key' v-show="key<num">
				<div class="cont layui-row">
					<h6 class="layui-col-xs8">{{item.h}}</h6>
					<img class="layui-col-xs3" :src="item.src">
					<p class="layui-col-xs8">{{item.j}}</p>
					<div class="cont-bottom layui-col-xs12">
						<i class="layui-icon layui-icon-diamond">&nbsp;</i>
						<span>1803</span>
						<span>美丽君</span>
						<span class="layui-icon layui-icon-dialogue">&nbsp;0</span>
						<span class="layui-icon layui-icon-star-fill">&nbsp;0</span>
					</div>
				</div>
			</div>
			<div @click="showMore" class="showmore">
				{{txt}}
			</div>
			<div style="height: 10px; background-color: #f5f5f5;">
			</div>
			<div class="footer">
				<a href="">
					下载简书，创作你的创作
				</a>
			</div>




		</div>
	</div>
	</div>
</template>

<script>
	import dh from './sjdh.vue'
	import Home from './Home.vue'
	export default {
		components: {
			dh,
			Home
		},
		data() {
			return {
				a: 0,
				b: 5,
				flag: 1,
				count: 1,
				isShow: true,
				txt: '点击展开更多 V',
				num: 0,
				lists: [{
						name: "手绘"
					},
					{
						name: "旅行在路上"
					},
					{
						name: "摄影"
					},
					{
						name: "读书"
					},
					{
						name: "故事"
					},
					{
						name: "上班这点事"
					},
					{
						name: "简书电影"
					},
					{
						name: "连载小说"
					},
					{
						name: "生活家"
					},
					{
						name: "产品"
					},
					{
						name: "娱乐圈"
					},
					{
						name: "王小波"
					},
				],
				items: [{
						h: "据说这是一千年后的中学历史课本，哈哈哈笑抽了",
						j: "据说这是一千年后的中学历史课本，哈哈哈笑抽了 我们经常会有历史课，所以很多历史知识都被我们提及和学习，我们知道几百...",
						src: require('../images/chadian.webp')
					},
					{
						h: "牛仔裤骚出新境界，求设计师别再作妖了！",
						j: "编辑 | 阿圈呐授权：普象工业设计小站 （ID: iamdesign） 每每一到换季，时尚圈不作妖就难受得慌 这不...",
						src: require('../images/4788228-984055a8708987e4.webp')
					},
					{
						h: "嫁给爱情的刘诗诗，消失了。",
						j: "文|斜杠先生来源|斜杠先生（ID：isslash） 最近，半隐退状态的准妈妈刘诗诗因为吃火锅上了热搜：吴奇隆在3月...",
						src: require('../images/hangju.webp')
					}
				],
			}
		},
		methods: {
			changeflag() {
				for (this.a = Math.ceil(Math.random() * 10), this.b = Math.ceil(Math.random() * 10); this.a >= this.b; this.a--);
				if (this.b - this.a < 4) {
					this.a--;
					this.b++;
				}
				if (this.a < 0) {
					this.a++
				}
			},
			showMore() {
				this.isShow = !this.isShow;
				this.num = this.isShow ? 0 : this.items.length;
				this.txt = this.isShow ? '点击展开更多 V' : '收起'
			}
		}
	}
</script>
