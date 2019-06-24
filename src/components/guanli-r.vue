<template>
	<!-- <div class="bod"> -->


	<!-- <div class="layui-row"> -->
	<!-- 右边内容 -->
	<div class="layui-col-md9">
		<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
			<ul class="layui-tab-title">
				<li class="layui-this">全部推荐</li>
				<li> <span class="layui-icon layui-icon-username">&nbsp;</span>推荐作者</li>
				<li> <span class="layui-icon layui-icon-app">&nbsp;</span>推荐专题</li>
			</ul>
			<div class="layui-tab-content" style="margin-top: 10px;">
				<!-- 内容1 -->
				<div class="layui-tab-item layui-show">

					<!-- 第一块 -->
					<div class="layui-col-md12" style=" padding-bottom: 15px; margin-top: 20px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="spa">
								<span class="layui-icon layui-icon-auz">&nbsp;简书推荐专题</span>
							</div>
							<a href="/sheying">
								<div class="cont1">
									<img class="layui-col-md2 layui-hide-xs" src="../assets/1.webp">
									<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
										<a>摄影</a>
										<p>生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
										<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
									</div>
								</div>
							</a>
						</div>
						<div v-show="downIcon" @click="sort" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon" @click="sort" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第一块结束 -->
					<!-- 第二块 -->
					<div class="layui-col-md12" style=" padding-bottom: 15px; margin-top: 20px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="spa">
								<span class="layui-icon layui-icon-auz">&nbsp;简书推荐专题</span>
							</div>
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/12.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">旅行</a>
									<p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。1....</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon1" @click="sort1" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon1" @click="sort1" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第二块结束 -->
					<!-- 第三块 -->
					<div class="layui-col-md12" style=" padding-bottom: 15px; margin-top: 20px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="spa">
								<span class="layui-icon layui-icon-auz">&nbsp;简书推荐专题</span>
							</div>
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/2.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">读书</a>
									<p>读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon2" @click="sort2" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon2" @click="sort2" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第三块结束 -->
					<!-- 第四块 -->
					<div class="layui-col-md12" style=" padding-bottom: 15px; margin-top: 20px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="spa">
								<span class="layui-icon layui-icon-auz">&nbsp;简书推荐专题</span>
							</div>
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/7314c5cc-ca7f-4542-b914-2c8dffaf324d.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">自然科普</a>
									<p>自然科普专题收录与推荐标准请参考:https://www....</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon3" @click="sort3" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon3" @click="sort3" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第四块结束 -->
					<!-- 第一块 -->
					<div v-for="(item, key) in items" :key="key" v-show="key<num" class="layui-col-md12" style="padding-bottom: 15px; margin-top: 20px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="spa">
								<span class="layui-icon layui-icon-auz">&nbsp;简书推荐专题</span>
							</div>
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" :src="item.src">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">{{item.h}}</a>
									<p>{{item.j}}</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
					</div>
					<!-- 第一块结束 -->
					<div @click="showMore" class="layui-col-md12 bod-bottom">
						{{txt}}
					</div>
				</div>

				<!-- 内容2 -->
				<div class="layui-tab-item">
					<!-- 第四块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/7314c5cc-ca7f-4542-b914-2c8dffaf324d.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">自然科普</a>
									<p>自然科普专题收录与推荐标准请参考:https://www....</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon" @click="sort" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon" @click="sort" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第四块结束 -->
					<!-- 第二块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/12.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">旅行</a>
									<p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。1....</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon1" @click="sort1" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon1" @click="sort1" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第二块结束 -->
					<!-- 第五块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">手绘</a>
									<p>本专题是绘画爱好者的乐园，欢迎互相分享学习; 关于专题投稿要求...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon2" @click="sort2" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon2" @click="sort2" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第五块结束 -->
					<!-- 第一块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/1.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">摄影</a>
									<p>生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon3" @click="sort3" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon3" @click="sort3" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第一块结束 -->

					<!-- 第一块 -->
					<div v-for="(item, key) in items" :key="key" v-show="key<num" class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" :src="item.src">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">{{item.h}}</a>
									<p>{{item.j}}</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
					</div>
					<!-- 第一块结束 -->
					<div @click="showMore" class="layui-col-md12 bod-bottom">
						{{txt}}
					</div>

				</div>
				<!-- 内容3 -->
				<div class="layui-tab-item">
					<!-- 第三块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/2.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">读书</a>
									<p>读书专题收录与读书有关的书评、读书笔记、阅读方法、读书清单等文章...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon3" @click="sort3" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon3" @click="sort3" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第三块结束 -->

					<!-- 第五块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/acfaa0ce-42fe-424a-b7c8-9a0136fb96ec.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">手绘</a>
									<p>本专题是绘画爱好者的乐园，欢迎互相分享学习; 关于专题投稿要求...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon2" @click="sort2" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon2" @click="sort2" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第五块结束 -->
					<!-- 第一块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/1.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">摄影</a>
									<p>生活本无趣 光影挽留年 用图片 说故事 记录生活 记...</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon1" @click="sort1" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon1" @click="sort1" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第一块结束 -->
					<!-- 第二块 -->
					<div class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" src="../assets/12.webp">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">旅行</a>
									<p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。1....</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div v-show="downIcon" @click="sort" class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
						<div v-show="!downIcon" @click="sort" class="layui-col-md2 cont-r1">
							<a class="layui-hide-xs" id="show">
								<span id="show1">已关注</span>
								<span id="show2">取消关注</span>
							</a>
							<a class="layui-hide-md" style="width: 100%;" id="show">
								<span id="show1">已关注</span>
							</a>
						</div>
					</div>
					<!-- 第二块结束 -->

					<!-- 第一块 -->
					<div v-for="(item, key) in items" :key="key" v-show="key<num" class="layui-col-md12" style="margin-top: 10px; border-bottom: 1px solid #f0f0f0;">
						<div class="layui-col-md10">
							<div class="cont1">
								<img class="layui-col-md2 layui-hide-xs" :src="item.src">
								<div class="layui-col-md10 cont-1" style="padding-left: 13px; margin-bottom: 20px;">
									<a href="">{{item.h}}</a>
									<p>{{item.j}}</p>
									<span class="layui-icon layui-icon-app">&nbsp;116.2K篇文章 · 2361.9K人关注</span>
								</div>
							</div>
						</div>
						<div class="layui-col-md2 cont-r">
							<a class="layui-hide-xs"><span>+关注</span></a>
							<a style="width: 100%;" class="layui-hide-md"><span>+关注</span></a>
						</div>
					</div>
					<!-- 第一块结束 -->
					<div @click="showMore" class="layui-col-md12 bod-bottom">
						{{txt}}
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- </div> -->
	<!-- </div> -->
</template>

<style>
	#show:hover #show1 {
		display: none;

	}

	#show:hover {
		background-color: #f0f0f0;
	}

	#show2 {
		display: none;
	}

	#show:hover #show2 {
		display: block;

	}

	.bod {
		margin: 50px auto;
		width: 65%;
	}

	.body-left {
		height: 2000px;
		border: 1px solid red;
	}

	.layui-tab-brief>.layui-tab-title .layui-this {
		color: #646464;
		font-size: 15px;
	}

	.layui-tab-title li {
		font-weight: bold;
		color: #969696;
		font-size: 15px;
	}

	.layui-tab-brief>.layui-tab-more li.layui-this:after,
	.layui-tab-brief>.layui-tab-title .layui-this:after {
		border-bottom: 2px solid #646464;
	}

	.spa span {
		font-size: 12px;
		color: #ec6e56;
	}

	.cont1 img {
		width: 52px;
		height: 52px;
		border-radius: 4px;
	}

	.cont1 {
		margin-top: 15px;
	}

	.cont-1 a {
		font-size: 15px;
		font-weight: 700;
		color: #333;
		display: block;
		margin: 0 0 7px;
	}

	.cont-1 p {
		color: #969696;
		font-size: 12px;
		margin: 0 0 7px;
	}

	.cont-1 span {
		font-size: 12px;
		color: #969696;
	}

	.cont-r a {
		display: block;
		width: 100px;
		height: 40px;
		background-color: #42c02e;
		border-radius: 20px;
		cursor: pointer;
	}

	.cont-r {
		margin-top: 30px;
	}

	.cont-r a:hover {
		background: rgb(61, 185, 34);
	}

	.cont-r a span {
		display: block;
		font-size: 16px;
		font-weight: 400;
		color: #FFFFFF;
		text-align: center;
		line-height: 40px;
	}

	.cont-r1 a {
		display: block;
		width: 100px;
		height: 40px;
		background-color: #ffffff;
		border-radius: 20px;
		cursor: pointer;
		border: 1px solid hsla(0, 0%, 59%, .6);
	}

	.cont-r1 {
		margin-top: 30px;
	}

	.cont-r1 a span {
		display: block;
		font-size: 16px;
		font-weight: 400;
		text-align: center;
		line-height: 40px;
		color: #8c8c8c;
	}


	.bod-bottom {
		width: 100%;
		height: 40px;
		margin: 30px auto 60px;
		padding: 10px 15px;
		text-align: center;
		font-size: 15px;
		border-radius: 20px;
		background-color: #a5a5a5;
		display: block;
		color: #FFFFFF;
	}
</style>

<script>
	export default {
		data() {
			return {
				downIcon: false,
				downIcon1: false,
				downIcon2: false,
				downIcon3: false,
				seen: true,
				txt: '阅读更多',
				isShow: true,
				items: [{

						h: "自然科普",
						j: "是：老司机/奶爸/吃货写：职场的坑/父女的哏/美食的魂...",
						src: require('../assets/12.webp')

					},
					{
						h: "北落西门",
						j: "简书签约作者，商业管理优秀作者，视觉优秀作者，顺丰速运集团前高管...",
						src: require('../assets/1.webp')

					},
					{
						h: "无限猴子",
						j: "一只有限写作的无限猴子~ 版权合作事宜请联系行距文化：pub@...",
						src: require('../assets/3.webp')

					}
				],
			}
		},
		methods: {
			sort() {
				this.downIcon = !this.downIcon
			},
			sort1() {
				this.downIcon1 = !this.downIcon1
			},
			sort2() {
				this.downIcon2 = !this.downIcon2
			},
			sort3() {
				this.downIcon3 = !this.downIcon3
			},
			showMore() {
				this.isShow = !this.isShow;
				this.num = this.isShow ? 0 : this.items.length;
				this.txt = this.isShow ? '阅读更多' : '收起'
			}

		}

	}
</script>
