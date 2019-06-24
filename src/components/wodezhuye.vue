<template>
	<div>
		<div class="heard layui-hide-xs" style="width: 100%; height: 58px;">
			<top></top>
		</div>
		<div class="heard layui-hide-sm" style="width: 100%; height: 58px;">
			<sjdh></sjdh>
		</div>
		<div class="layui-row">
			<div class="layui-col-md12 layui-hide-xs">
				<div id="centent" style="margin-top: 50px;">
					<div class="layui-row">

						<!--界面左上-->
						<div class="layui-col-md8" style="padding-right: 47px;">
							<div>
								<div class="layui-inline" style="margin-right: 23px; float: left;">
									<img src="../images/bing.webp" width="105px" height="105px" class="layui-circle">
								</div>
								<div style="float:left;  padding-top: 15px;">
									<div style="font-size:25px ;font-weight: 600; color: #333333;">
										sky904
									</div>
									<div>
										<div style=" width:45px; border-right: 2px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;">13</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; ">关注<i class="layui-icon layui-icon-right" style="font-size: 10px;"></i></a>
										</div>
										<div style=" width:55px; border-right: 2px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">2</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">粉丝<i class="layui-icon layui-icon-right" style="font-size: 10px;"></i></a>
										</div>
										<div style=" width:55px; border-right: 2px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">文章<i class="layui-icon layui-icon-right" style="font-size: 10px;"></i></a>
										</div>
										<div style=" width:50px; border-right: 2px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">字数</a>
										</div>
										<div style=" width:70px; border-right: 2px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">收获喜欢</a>
										</div>
										<div style=" width:55px;  margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">简书帖</a>
										</div>

									</div>
								</div>
							</div>

							<!--界面左下-->
							<div class="layui-row">
								<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
									<ul class="layui-tab-title">
										<li class="layui-this" style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142247.png" /></i>文章</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142321.png" /></i>动态</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142339.png" /></i>最新评论</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142353.png" /></i>热门</li>

									</ul>
									<div class="layui-tab-content" style="height: 100px;">
										<div class="layui-tab-item layui-show">
											<div class="layui-row" style="padding-top: 35px; border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904</span></a>
												<span style="color: #a2a2a2;">关注了作者·2017.12.06&nbsp;21:00</span>

												<div style="width: 100%;height: 200px; background: #f7f7f7;border-radius: 3px; border: 2px #e7e7e7 solid; margin-top:22px ;">
													<div style="width: 93%; height: 90px;background: #f7f7f7; border-bottom: 1px #dfdfdf solid; margin: 0 auto; padding-top:25px ;">
														<div style="float: left; background: #f7f7f7;">
															<div class="layui-inline" style=" float: left;">
																<a href="#"><img src="../images/hangju.webp" width="60px" height="60px" class="layui-circle"></a>
															</div>
															<a href="#" style="background: #f7f7f7; margin-left: 10px; color: #0c0c0c; font-size: 25px;margin-bottom: 10px;  ">四哥0819</a>
															<div style="background: #f7f7f7; color: #8f8f8f; margin-left: 70px;  ">写了52988字，被520人人关注，获得了359个喜欢</div>
														</div>
														<button v-show="downIcon" @click="sort" style="float: right; background:#f7f7f7 ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #f7f7f7;font-size: 20px;"></i>已关注</button>

														<button v-show="!downIcon" @click="sort" style="float: right; background:#42c02e ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;color:#FFFFFF;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #42c02e;font-size: 20px;color:#FFFFFF;"></i>关注</button>
													</div>
													<div style="width: 93%;background: #f7f7f7;  margin: 0 auto; padding-top:25px ; color: #8f8f8f;">
														从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。
													</div>
												</div>

											</div>
											<div style="margin-top: 22px;border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">赞了评论·2017.12.06&nbsp;21:00</span>
												<div style="color: #0c0c0c; margin:20px  0px; font-size: 18px;">可以分享下代码不</div>
												<div style="height: 57px;display: flex;align-items:Center; border-left: 3px #d7d7d7 solid; padding-left: 27px;">sky904&nbsp;<span style="color: #a2a2a2;">评论自</span>5.0简单的删除数据表中的一条数据学习之六</div>
											</div>
											<div style="margin-top: 22px; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">发表了评论·2017.12.06&nbsp;21:00</span>
											</div>
										</div>

										<div class="layui-tab-item">
											<div class="layui-row" style="padding-top: 35px; border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904</span></a>
												<span style="color: #a2a2a2;">关注了作者·2017.12.06&nbsp;21:00</span>

												<div style="width: 100%;height: 200px; background: #f7f7f7;border-radius: 3px; border: 2px #e7e7e7 solid; margin-top:22px ;">
													<div style="width: 93%; height: 90px;background: #f7f7f7; border-bottom: 1px #dfdfdf solid; margin: 0 auto; padding-top:25px ;">
														<div style="float: left; background: #f7f7f7;">
															<div class="layui-inline" style=" float: left;">
																<a href="#"><img src="../images/hangju.webp" width="60px" height="60px" class="layui-circle"></a>
															</div>
															<a href="#" style="background: #f7f7f7; margin-left: 10px; color: #0c0c0c; font-size: 25px;margin-bottom: 10px;  ">四哥0819</a>
															<div style="background: #f7f7f7; color: #8f8f8f; margin-left: 70px;  ">写了52988字，被520人人关注，获得了359个喜欢</div>
														</div>
														<button v-show="down" @click="sort1" style="float: right; background:#f7f7f7 ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #f7f7f7;font-size: 20px;"></i>已关注</button>

														<button v-show="!down" @click="sort1" style="float: right; background:#42c02e ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;color:#FFFFFF;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #42c02e;font-size: 20px;color:#FFFFFF;"></i>关注</button>
													</div>
													<div style="width: 93%;background: #f7f7f7;  margin: 0 auto; padding-top:25px ; color: #8f8f8f;">
														从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。
													</div>
												</div>

											</div>
											<div style="margin-top: 22px;border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">赞了评论·2017.12.06&nbsp;21:00</span>
												<div style="color: #0c0c0c; margin:20px  0px; font-size: 18px;">可以分享下代码不</div>
												<div style="height: 57px;display: flex;align-items:Center; border-left: 3px #d7d7d7 solid; padding-left: 27px;">sky904&nbsp;<span style="color: #a2a2a2;">评论自</span>5.0简单的删除数据表中的一条数据学习之六</div>
											</div>
											<div style="margin-top: 22px; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">发表了评论·2017.12.06&nbsp;21:00</span>
											</div>

										</div>

									</div>
								</div>
							</div>

						</div>
						<!--界面右部-->

						<div class="layui-col-md4">
							<div style="height: 100px; border-bottom: 2px #f1f1f1 solid;">
								<div style="color: #a1a1a1; margin-bottom:22px ;">
									<span>个人简历</span>
									<a href="#" style="float: right; color: #a1a1a1;"><i class="layui-icon layui-icon-edit"></i>编辑</a>
								</div>
								<div style="font-weight: 500; color: #010101;">123</div>
							</div>
							<div style="height: 120px; border-bottom: 2px #f1f1f1 solid;">
								<div style="margin-top:30px ; margin-bottom: 41px;">
									<a style=" color: #333333; font-size: 20px; font-weight: 500;"><i class="layui-icon layui-icon-app" style="font-size: 20px;padding-right: 20px;"></i>我喜欢的专题/文集/连载</a>
								</div>
								<div>
									<a style=" margin-bottom:35px color: #333333; font-size: 20px;"><i class="layui-icon layui-icon-rate" style="font-size: 20px; padding-right:20px ;"></i>我喜欢的文章</a>
								</div>
							</div>
							<div style="height: 120px; border-bottom: 2px #f1f1f1 solid;">
								<div style="margin-top: 25px;">
									<span style="color: #a1a1a1;">我创建的专题</span>
									<a href="#" style="float: right; color: #67ad48;">+新建专题</a>
									<div style="margin-top: 30px;"><i class="layui-icon layui-icon-tabs" style="font-size: 25px;padding-right: 20px;"></i><span style="font-size: 18px; color:$555555 ;">weex+vue</span></div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<!--手机端-->

		<div class="layui-row" style="margin-top:20px">
			<div class="layui-col-xs12 layui-hide-md">

				<div style="margin-top: 50px; width: 100%; margin: 0 auto;">
					<div class="layui-row">

						<!--界面左上-->
						<div class="layui-col-md8">
							<div>
								<div class="layui-inline" style="margin-right: 20px; float: left;margin-left: 20px;">
									<img src="../images/bing.webp" class="layui-circle xsimage">
								</div>
								<div style="float:left;  padding-top: 15px; width: 250px;">
									<div style="font-size:21px ;font-weight: 600; color: #333333;">
										sky904
									</div>
									<div>
										<div style=" width:42px; border-right: 1px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;">13</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; ">关注<i class="layui-icon layui-icon-right" style="font-size: 5px;"></i></a>
										</div>
										<div style=" width:52px; border-right: 1px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">2</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">粉丝<i class="layui-icon layui-icon-right" style="font-size: 5px;"></i></a>
										</div>
										<div style=" width:52px; border-right: 1px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">文章<i class="layui-icon layui-icon-right" style="font-size: 5px;"></i></a>
										</div>
										<div style=" width:40px; border-right: 1px #f1f1f1 solid; margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">字数</a>
										</div>
										<div style=" width:56px;  margin-top: 10px;padding-top: 5px; display: inline; float: left;">
											<div style="color: #323232;  width: 40px; display: inline;padding-left: 8px;">0</div>
											<a href="#" style=" color: #989898; font-size: 12px; display: block; padding-left: 8px;">收获喜欢</a>
										</div>


									</div>
								</div>
							</div>

							<!--界面左下-->
							<div class="layui-row">
								<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief" style="margin-left: 26px;">
									<ul class="layui-tab-title">
										<li class="layui-this" style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142247.png" /></i>文章</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142321.png" /></i>动态</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142339.png" /></i>最新评论</li>
										<li style=""><i style="margin-right: 10px;"><img src="../images/QQ截图20190606142353.png" /></i>热门</li>

									</ul>
									<div class="layui-tab-content" style="height: 100px;">
										<div class="layui-tab-item layui-show">
											<div class="layui-row" style="padding-top: 35px; border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904</span></a>
												<span style="color: #a2a2a2;">关注了作者·2017.12.06&nbsp;21:00</span>

												<div style="width: 100%;height: 200px; background: #f7f7f7;border-radius: 3px; border: 2px #e7e7e7 solid; margin-top:22px ;">
													<div style="width: 93%; height: 90px;background: #f7f7f7; border-bottom: 1px #dfdfdf solid; margin: 0 auto; padding-top:25px ;">
														<div style="float: left; background: #f7f7f7;">
															<div class="layui-inline" style=" float: left;">
																<a href="#"><img src="../images/hangju.webp" width="60px" height="60px" class="layui-circle"></a>
															</div>
															<a href="#" style="background: #f7f7f7; margin-left: 10px; color: #0c0c0c; font-size: 25px;margin-bottom: 10px;  ">四哥0819</a>
															<div style="background: #f7f7f7; color: #8f8f8f; margin-left: 70px;  ">写了52988字，被520人人关注，获得了359个喜欢</div>
														</div>
														<button v-show="down" @click="sort1" style="float: right; background:#f7f7f7 ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #f7f7f7;font-size: 20px;"></i>已关注</button>

														<button v-show="!down" @click="sort1" style="float: right; background:#42c02e ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;color:#FFFFFF;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #42c02e;font-size: 20px;color:#FFFFFF;"></i>关注</button>
													</div>
													<div style="width: 93%;background: #f7f7f7;  margin: 0 auto; padding-top:25px ; color: #8f8f8f;">
														从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。
													</div>
												</div>

											</div>
											<div style="margin-top: 22px;border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">赞了评论·2017.12.06&nbsp;21:00</span>
												<div style="color: #0c0c0c; margin:20px  0px; font-size: 18px;">可以分享下代码不</div>
												<div style="height: 57px;display: flex;align-items:Center; border-left: 3px #d7d7d7 solid; padding-left: 27px;">sky904&nbsp;<span style="color: #a2a2a2;">评论自</span>5.0简单的删除数据表中的一条数据学习之六</div>
											</div>
											<div style="margin-top: 22px; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">发表了评论·2017.12.06&nbsp;21:00</span>
											</div>
										</div>

										<div class="layui-tab-item">
											<div class="layui-row" style="padding-top: 35px; border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904</span></a>
												<span style="color: #a2a2a2;">关注了作者·2017.12.06&nbsp;21:00</span>

												<div style="width: 100%;height: 200px; background: #f7f7f7;border-radius: 3px; border: 2px #e7e7e7 solid; margin-top:22px ;">
													<div style="width: 93%; height: 90px;background: #f7f7f7; border-bottom: 1px #dfdfdf solid; margin: 0 auto; padding-top:25px ;">
														<div style="float: left; background: #f7f7f7;">
															<div class="layui-inline" style=" float: left;">
																<a href="#"><img src="../images/hangju.webp" width="60px" height="60px" class="layui-circle"></a>
															</div>
															<a href="#" style="background: #f7f7f7; margin-left: 10px; color: #0c0c0c; font-size: 25px;margin-bottom: 10px;  ">四哥0819</a>
															<div style="background: #f7f7f7; color: #8f8f8f; margin-left: 70px;  ">写了52988字，被520人人关注，获得了359个喜欢</div>
														</div>
														<button v-show="down" @click="sort1" style="float: right; background:#f7f7f7 ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #f7f7f7;font-size: 20px;"></i>已关注</button>

														<button v-show="!down" @click="sort1" style="float: right; background:#42c02e ; border: 1px #b9b9b9 solid; width: 135px; height: 54px; border-radius:50px ; text-align: center; display: flex;justify-content:center;align-items:Center;font-size: 20px;color:#FFFFFF;cursor:pointer;">
															<i class="layui-icon layui-icon-ok" style="background: #42c02e;font-size: 20px;color:#FFFFFF;"></i>关注</button>
													</div>
													<div style="width: 93%;background: #f7f7f7;  margin: 0 auto; padding-top:25px ; color: #8f8f8f;">
														从一个糟糕的人开始做起，你会发现一直在朝着精彩的人生奔跑。
													</div>
												</div>

											</div>
											<div style="margin-top: 22px;border-bottom: 2px solid #f1f1f1; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">赞了评论·2017.12.06&nbsp;21:00</span>
												<div style="color: #0c0c0c; margin:20px  0px; font-size: 18px;">可以分享下代码不</div>
												<div style="height: 57px;display: flex;align-items:Center; border-left: 3px #d7d7d7 solid; padding-left: 27px;">sky904&nbsp;<span style="color: #a2a2a2;">评论自</span>5.0简单的删除数据表中的一条数据学习之六</div>
											</div>
											<div style="margin-top: 22px; padding-bottom: 33px;">
												<a href="#"><img src="../images/bing.webp" width="32px" height="33px" class="layui-circle">
													<span style="padding-left: 10px; padding-right: 5px;">sky904·</span></a>
												<span style="color: #a2a2a2;">发表了评论·2017.12.06&nbsp;21:00</span>
											</div>

										</div>

									</div>
								</div>
							</div>

						</div>
						<!--界面右部-->


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
			top: top,
			sjdh
		},
		data() {
			return ({
				downIcon: true,
				down: true,
				downI: true,
				downIc: true,
			})
		},
		methods: {
			sort() {
				this.downIcon = !this.downIcon
			},
			sort1() {
				this.down = !this.down
			},
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
		background: #FFFFFF;
	}

	#centent {
		width: 65%;
		margin: 0 auto;
	}

	.xsimage {
		width: 80px;
		height: 80px;

	}
</style>
