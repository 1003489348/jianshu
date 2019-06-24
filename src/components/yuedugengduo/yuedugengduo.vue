<template>
	<div>
		<div class="layui-hide-xs" >
			<div class="heard" style="width: 100%; height: 58px;">
				<top></top>
			</div>
			<div class="layui-row" style="width: 620px;margin: 0 auto;">
				<div class="top">
					<h1 class="title" style="margin-top:50px;margin-bottom: 10px;">vue打包上线</h1>
					<div style="margin: 30px 0 40px;">
						<a class="avatar" href="/u/2f3eb9be64fb" style="width:48px;height: 48px;vertical-align: middle;display: inline-block;">
							<img src="../../images/7e0347ed-ca19-4634-962d-4fd0f55c680b.jpg" alt="96" style="width: 100%;height: 100%;border: 1px solid #ddd;border-radius: 50%;">
						</a>
						<div style="vertical-align: middle;display:inline-block;margin-left:8px;">
							<span class="name" style="margin-right: 3px;font-size: 16px;vertical-align: middle;"><a style="color: #333;">cs大个子女生</a></span>
							<button v-show="downIcon" @click="sort" class="layui-btn layui-btn-xs layui-btn-radius layui-btn-danger" style="width: 52px;height: 18px;text-align: center;background: #42c02e;color: #FFFFFF;line-height: 18px;">
								<i class="layui-icon layui-icon-add-1"></i>关注
							</button>
							<button v-show="!downIcon" @click="sort" class="layui-btn layui-btn-xs layui-btn-radius layui-btn-danger" id="yiguanzhu">
								<span id="yiguan"><i class="layui-icon layui-icon-ok"></i>已关注 </span>
								<span id="quxiaoguanzhu"><i class="layui-icon layui-icon-close"></i>取消关注</span>
							</button>
							<div class="meta" style="margin-top: 5px;font-size: 12px;color: #969696;">
								<!-- 简书钻 -->
								<span class="jsd-meta" style="padding-right: 5px;color:#ea6f5a!important;font-size: 2px;">
									<i class="layui-icon layui-icon-diamond" style="font-size: 12px;"></i>&nbsp;1.2
								</span>
								<!-- 如果文章更新时间大于发布时间，那么使用 tooltip 显示更新时间 -->
								<span style="padding-right: 5px;">2019.03.05 16:36</span>
								<span style="padding-right: 5px;">字数 175</span>
								<span style="padding-right: 5px;">阅读 283</span><span style="padding-right: 5px;">评论 0</span><span style="padding-right: 5px;">喜欢10</span></div>
						</div>
						<!-- 头部结束 -->
						<div class="show-content" style="color: #2f2f2f;word-break: break-word!important;font-size: 16px;font-weight: 400;line-height: 1.7;margin-top: 30px;">
							<p style="margin: 0 0 25px;"><b>1.写好的项目 首先更改&nbsp; &nbsp;把config-index.js中的&nbsp;&nbsp;assetsPublicPath:"/",更改为&nbsp;assetsPublicPath: './',&nbsp; 为了更改路径</b></p>
							<p style="margin: 0 0 25px;"><b><i>productionSourceMap: ture,改为productionSourceMap: false, 文件打包体积减少80%.<br></i></b></p>
							<p style="margin: 0 0 25px;"><b><i>注意:</i>尽量不要把引入的css和js放入到index.html&nbsp; 容易报错,可以放在app.vue中.</b></p>
						</div>
					</div>
				</div>
			</div>
			<div style="width:700px;margin: 0 auto;">
				<div>
					<img style="max-width: 100%;height: auto;vertical-align: middle;border: 0;cursor: zoom-in;" data-original-src="../../5360532-37fdd3135c39aa6d.webp" data-original-width="1207" data-original-height="820" data-original-format="image/png" data-original-filesize="138310" src="../../images/5360532-37fdd3135c39aa6d.webp">
					<p style="margin: 25px 0 35px 25px;font-weight: 700;width: 620px;display: block;font-size: 16px;line-height: 1.7;"><b>注意:页面不报错,但是是空白,就更改src里面的 router-index.js中的&nbsp; mode:"histohasry", 修改为 mode:"hash".</b></p>
				</div>
				<div>
					<img style="max-width: 100%;height: auto;vertical-align: middle;border: 0;cursor: zoom-in;" data-original-src="../../5360532-37fdd3135c39aa6d.webp" data-original-width="1207" data-original-height="820" data-original-format="image/png" data-original-filesize="138310" src="../../images/5360532-37fdd3135c39aa6d.webp">
					<p style="margin: 25px 0 65px 25px;font-weight: 700;width: 620px;display: block;font-size: 16px;line-height: 1.7;"><b>然后执行npmrun build</b></p>
				</div>
				<div>
					<img style="max-width: 100%;height: auto;vertical-align: middle;border: 0;cursor: zoom-in;" data-original-src="../../5360532-37fdd3135c39aa6d.webp" data-original-width="1207" data-original-height="820" data-original-format="image/png" data-original-filesize="138310" src="../../images/5360532-37fdd3135c39aa6d.webp">
					<p style="margin: 25px 0 65px 25px;font-weight: 700;width: 620px;display: block;font-size: 16px;line-height: 1.7;"><b>然后你的文件里面就会多一个 dist文件,里面是解压好的,你只需要把dist文件 放在服务器就可以了.</b></p>
				</div>
				<div>
					<img style="max-width: 100%;height: auto;vertical-align: middle;border: 0;cursor: zoom-in;" data-original-src="../../5360532-37fdd3135c39aa6d.webp" data-original-width="1207" data-original-height="820" data-original-format="image/png" data-original-filesize="138310" src="../../images/5360532-17f906bcc4d609f9.webp">
					<p style="margin: 25px 0 65px 25px;font-weight: 700;width: 620px;display: block;font-size: 16px;line-height: 1.7;"><b>然后你服务器前缀加上就可以看到效果了</b></p>
				</div>
				<div>
					<img style="max-width: 100%;height: auto;vertical-align: middle;border: 0;cursor: zoom-in;" data-original-src="../../5360532-37fdd3135c39aa6d.webp" data-original-width="1207" data-original-height="820" data-original-format="image/png" data-original-filesize="138310" src='../../images/5360532-7e835aad87b08dfa.webp'>
				</div>
				<div style="min-height: 144px;padding: 20px 0;text-align: center;clear: both;">
					<p style="padding: 0 30px;margin-bottom: 20px;min-height: 24px;font-size: 17px;font-weight: 700;color: #969696;">小礼物走一走，来简书关注我</p>
					<button @click="wsks()"  style="margin-bottom: 20px;padding: 8px 25px;font-size: 16px;color: #fff;background-color: #ea6f5a;border-radius: 20px;line-height: 19px;" class="layui-btn layui-btn-radius layui-btn-danger">赞赏支持</button>
					<!-- 赞赏隐藏页面 -->
						<div v-if="wsk" style="font-size: 15px;color: #333;z-index: 1; position: fixed;top: 20%;right:25%; width: 618px;background:#FFFFFF;box-shadow: #CCCCCC 0 0 5px 2px; border-radius: 10px;">
							<div @click="wsks()" class="layui-col-md12" style="padding-top: 20px;padding-right: 20px; float: right;"><i style="float: right;" class="layui-icon layui-icon-close"></i></div>
							<div class="layui-col-md12">
								<div style="position: relative;left:38%; width: 36px;height: 36px;float: left;">
									<img style="width: 100%;border: 1px solid #ddd;border-radius: 50%;" src="../../assets/7e0347ed-ca19-4634-962d-4fd0f55c680b.jpg">	
								</div>
								<p style="font-size: 16px;font-weight: bold;line-height: 36px;position: relative;left:40%;float: left;">给作者送糖</p>
								<i style="font-size: 16px;font-weight: bold;line-height: 36px;margin-left: 3%;color: #EA6F5A;" class="el-icon-sugar"></i>
							</div>
						    <div style="margin: 25px 0;" class="layui-col-md12">
								<div style="margin: 0 -5px;width: 85%;margin: 0 auto;">
									<div :class="activeClass == index ? 'active':''" @click="changeTabs(index)" v-for="(wsk6,index) in wsk6" style=" float: left;line-height: 54px;border: 1px solid #E6E6E6;border-radius: 4px;font-weight: normal;color: #999999;cursor: pointer;width: 156px;height: 56px;margin: 0 5px 15px;">
										<i  class="el-icon-sugar"></i> <span>{{wsk6}}</span> <span class="piece">颗</span>
									</div>
									<label style="float: left;line-height: 54px;border: 1px solid #E6E6E6;border-radius: 4px;font-weight: normal;color: #999999;cursor: pointer;width: 156px;height: 56px;margin: 0 5px 15px;">
										<input type="text"  placeholder="自定义" style="border: none;width: 50px;color:#999999;" />
									</label>
								</div>
							    <div class="layui-col-md12">
									<div  style="width:73%;position: relative;right:10px ; margin: 0 auto; padding: 15px 20px;margin-bottom: 0;font-size: 14px;border: 1px solid #E6E6E6;color: #333333;border-radius: 4px;background-color: rgba(180, 180, 180, 0.1);">
									  <textarea style="width: 100%;height: 44px;padding: 0;margin: 0;resize: none;background: none !important;border: none !important;" placeholder="给Ta留言…"></textarea>
									</div>
								</div>
							    <div class="layui-col-md12" style="text-align: center;margin-top: 30px;">
									<span style="font-size: 28px;font-weight: bold;color: #EA6F5A;">￥{{wsknum}}</span>
									<span v-show="genghuan" style="font-size: 14px;">，用微信支付 <a @click="genghuans()" style="color: #3194D0;">更换</a></span>
									
								</div> 
								<div v-show="!genghuan" class="layui-col-md12">
										<div style="width: 85%;margin: 0 auto;">
											<div style="float: left;margin: 20px 5px 10px;width: 156px;height: 56px;line-height: 54px;text-align: center;border: 1px solid #E6E6E6;border-radius: 4px;cursor: pointer;">
												<img style="width: 112px;height: 30px;" src="../../images/weixin (2).png">
											</div>
											<div style="float: left;margin: 20px 5px 10px;width: 156px;height: 56px;line-height: 54px;text-align: center;border: 1px solid #E6E6E6;border-radius: 4px;cursor: pointer;">
												<img style="width: 112px;height: 30px;" src="../../images/zhifubao.png">
											</div>
											<el-tooltip class="item" effect="dark" content="请到简书App操作" placement="top">
												<div style="float: left;margin: 20px 5px 10px;width: 156px;height: 56px;line-height: 54px;text-align: center;border: 1px solid #E6E6E6;border-radius: 4px;cursor: pointer;">												
														<el-button style="border: none; font-weight: 700;" plain disabled >简书余额</el-button>											
												</div>
											</el-tooltip>
										</div>
								</div>
								<div class="layui-col-md12" style="margin-top: 20px;">
									<button style="line-height: 0; margin-bottom: 20px;padding: 8px 25px;font-size: 16px;color: #fff;background-color: #ea6f5a;border-radius: 20px;"	class="layui-btn layui-btn-radius layui-btn-danger">立即支付</button>
								</div>
							</div>
						</div>
				</div>
				<div style="width: 620px;margin: 0 auto;">
					<div style="font-size: 12px;cursor: pointer;margin-bottom: 30px;">
						<a href="/nb/34836387" style="color: #c8c8c8;">
							<i class="layui-icon layui-icon-read"></i>&nbsp;
							<span>vue打包上线</span>
						</a>
						<div style="float: right;color: #c8c8c8;margin-top: 5px;line-height: 1.7;">
							© 著作权归作者所有
						</div>
						<div style="float:right;margin-top: 5px;margin-right: 30px;">
							<a style="color: #c8c8c8;">举报文章</a>
						</div>
					</div>
					<div style="width:580px;margin: 0 auto;padding: 20px;background-color: hsla(0,0%,71%,.1);border: 1px solid #e1e1e1;border-radius: 4px;font-size: 12px;">
						<div style="min-height: 47px;">
							<a style="float: left;margin-right: 10px;width: 48px;height: 48px;" href="/u/2f3eb9be64fb">
								<img src="../../images/7e0347ed-ca19-4634-962d-4fd0f55c680b.jpg" alt="96" style="width: 100%;height: 100%;border: 1px solid #ddd;border-radius: 50%;">
							</a>
						</div>
						<div style="margin-top: -45px;">
							<button v-show="downIcon" @click="sort" class="layui-btn layui-btn-md layui-btn-radius layui-btn-danger" style="float: right;margin-top: 4px;padding: 8px 0;width: 100px;font-size: 16px;line-height: 0;background-color: #42c02e;">
								<i class="layui-icon">&#xe654;</i>关注
							</button>
							<button v-show="!downIcon" @click="sort" class="layui-btn layui-btn-xs layui-btn-radius layui-btn-danger" id="guanzhu">
								<span id="yiguan1"><i class="layui-icon layui-icon-ok"></i>已关注 </span>
								<span id="quxiao"><i class="layui-icon layui-icon-add-1"></i>取消关注</span>
							</button>
							<a style="margin-right: 3px;font-size: 17px;line-height: 1.8;vertical-align: middle;">cs大个子女生</a>
							<p style="margin-bottom: 0;color: #969696;">写了 2200 字，被 15 人关注，获得了 20 个喜欢</p>
						</div>
					</div>
					<div style="margin-top: 40px;margin-bottom: 80px;">
						<div style="display: inline-block;">
							<!-- 喜欢1 -->
							<div v-show="downIconss" @click="sortss" id="xihuan" style="position: relative;padding: 13px 0 15px 0;font-size: 0;border: 1px solid #EA6F5A;border-radius: 40px;">
								<div style="display: inline-block;font-size: 19px;"><a style="position: relative;padding: 18px 30px 18px 55px;color: #EA6F5A;">喜欢</a></div>
								<div style="font-size: 18px;border-left: 1px solid rgba(236, 97, 73, 0.4);display: inline-block;margin-left: -15px;">
									<a style="color: #EA6F5A;padding: 18px 26px 18px 18px;">11</a>
								</div>
							</div>
							<!-- 	喜欢2 -->
							<div v-show="!downIconss" @click="sortss" style="position: relative;padding: 13px 0 15px 0;font-size: 0;background:#EA6F5A ; border-radius: 40px;border: 1px solid #EA6F5A;">
								<div style="display: inline-block;font-size: 19px;"><a style="position: relative;padding: 18px 30px 18px 55px;color: white;">喜欢</a></div>
								<div style="font-size: 18px;border-left: 1px solid white;display: inline-block;margin-left: -15px;">
									<a style="color: white;padding: 18px 26px 18px 18px;">12</a>
								</div>
							</div>
							<!---->
						</div>
						<div style="float: right;margin-top: 6px;">
							<el-tooltip class="item" effect="dark" content="分享到微信" placement="top">
								<el-button style="width: 50px;height: 50px;margin-left: 5px;text-align: center;border: 1px solid #dcdcdc;border-radius: 50%;vertical-align: middle;display: inline-block;position: relative;">
									<i class="layui-icon layui-icon-login-wechat" style="color: #00FF00;font-size: 27.44px;margin-left: -9px;"></i>
								</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="分享到微博" placement="top">
								<el-button style="width: 50px;height: 50px;margin-left: 5px;text-align: center;border: 1px solid #dcdcdc;border-radius: 50%;vertical-align: middle;display: inline-block;position: relative;">
									<i class="layui-icon layui-icon-login-weibo" style="color:#FD482C; font-size: 27.44px;margin-left: -9px;"></i>
								</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="我是图片" placement="top">
								<el-button style="width: 50px;height: 50px;margin-left: 5px;text-align: center;border: 1px solid #dcdcdc;border-radius: 50%;vertical-align: middle;display: inline-block;position: relative;">
									<i class="layui-icon layui-icon-picture" style="color:#E4E4E4 ;font-size: 27.44px;margin-left: -9px;"></i>
								</el-button>
							</el-tooltip>
							<a style="width: auto;padding: 4px 18px;font-size: 14px;color: #9b9b9b;line-height: 40px;border-radius: 50px;margin-left:5px; text-align: center;border: 1px solid #dcdcdc;vertical-align: middle;padding-top:15px;padding-bottom: 15px;">更多分享</a>
						</div>
						<!-- 发表文章栏目 -->
						<div style="padding-top: 20px;margin-top: 80px;" v-show="downIconssss">
							<div style="box-sizing: border-box;">
								<div style="position: relative;margin-left: 48px;">
									<a style="position: absolute;left: -48px;margin-right: 5px;width: 38px;height: 38px;vertical-align: middle;display: inline-block;">
										<img src="../../images/0d0b369c-bbe9-4d54-a031-1177fa0ea311.webp" style="width: 100%;height: 100%;border: 1px solid #ddd;border-radius: 50%;vertical-align: middle;">
									</a>
									<textarea @click="sortssss()" v-model="person1s.name" placeholder="写下你的评论..." style="padding: 10px 15px;width:546px;height:58px;font-size: 13px; border: 1px solid #dcdcdc;border-radius: 4px;background-color: hsla(0,0%,71%,.1);resize: none;display: inline-block;vertical-align: top;outline-style: none;"></textarea>
									<!-- 下面隐藏栏目 -->
									<!-- v-on:click="showCont()" -->
								</div>
								<!---->
							</div>
						</div>
						<!-- 发表文章2 -->
						<div style="padding-top: 20px;margin-top: 80px;" v-show="!downIconssss">
							<div style="box-sizing: border-box;">
								<div style="position: relative;margin-left: 48px;">
									<a style="position: absolute;left: -48px;margin-right: 5px;width: 38px;height: 38px;vertical-align: middle;display: inline-block;">
										<img src="../../images/0d0b369c-bbe9-4d54-a031-1177fa0ea311.webp" style="width: 100%;height: 100%;border: 1px solid #ddd;border-radius: 50%;vertical-align: middle;">
									</a>
									<textarea v-model="person1s.name" placeholder="写下你的评论..." style="padding: 10px 15px;width:546px;height:58px;font-size: 13px; border: 1px solid #dcdcdc;border-radius: 4px;background-color: hsla(0,0%,71%,.1);resize: none;display: inline-block;vertical-align: top;outline-style: none;"></textarea>
									<!-- 下面隐藏栏目 -->
									<!-- v-on:click="showCont()" -->
									<div style="height: 50px;">
										<!-- v-if="person1.show" -->
										<div style="position: relative;float: left;margin-top: 14px;"><i style="vertical-align: middle; font-size: 20px;color: #969696;" class="layui-icon layui-icon-face-smile-b"></i></div>
										<div style="float: left;margin: 20px 0 0 20px;font-size: 13px;color: #969696;">Ctrl+Enter 发表</div>
										<button @click="addPersons()" class="layui-btn layui-btn-md layui-btn-radius layui-btn-danger" style="line-height: 0; float: right;width: 78px;margin: 10px 0;padding: 8px 18px;font-size: 16px; border: none;border-radius: 20px;color: #fff!important;background-color: #42c02e;cursor: pointer;outline: none;display: block;">
											发送
										</button>
										<a @click="sortssss()" style="float: right;margin: 18px 30px 0 0;font-size: 16px;color: #969696;">取消</a>
									</div>
								</div>
								<!---->
							</div>
						</div>
					</div>
					<!-- 发表评论结束 -->
					<div style="padding-bottom: 20px;font-size: 17px;border-bottom: 1px solid #f0f0f0;">
						<div style="box-sizing: border-box;">
							<div style="box-sizing: border-box;">
								<div style="padding-bottom: 20px;font-size: 17px;font-weight: 700;border-bottom: 1px solid #f0f0f0;">
									<span style="vertical-align: middle;">1条评论</span>
									<a style="margin-left: 10px;padding: 4px 8px;font-size: 12px;color: #969696;border: 1px solid #e1e1e1;border-radius: 12px;">只看作者</a>
									<a class="close-btn" style="display: none;margin-left: 10px;font-size: 12px;color: #969696;">关闭评论</a>
									<div style="float: right!important;margin-left: 10px;font-size: 12px;font-weight: 400;color: #969696;display: inline-block;">
										<a style="color: #2f2f2f;margin-left: 10px;">按时间倒序</a>
										<a style="margin-left: 10px;color: #969696;">按时间正序</a>
									</div>
								</div>
								<!-- 只看作者结束 -->
							</div>
						</div>

						<div v-for="persons in peoples" :key="persons">
							<div style="padding: 20px 0 30px;border-bottom: none;">
								<div style="box-sizing: border-box;">
									<div style="margin-bottom: 15px;">
										<div style="z-index: 0;position: relative;float: left;">
											<div style="user-select: none;">
												<a style="margin-right: 5px;width: 38px;height: 38px;vertical-align: middle;display: inline-block;">
													<img style="width: 100%;height: 100%;border: 1px solid #ddd;border-radius: 50%;" src="../../images/0d0b369c-bbe9-4d54-a031-1177fa0ea311.webp">
												</a>
											</div>
										</div>
										<div style="display: inline-block;vertical-align: middle;box-sizing: border-box;float: left;margin-left: 10px;">
											<a style="font-size: 15px;color:#333333;cursor: pointer;vertical-align: middle;">WSK_9a8c</a>
											<div style="font-size: 12px;color: #969696;box-sizing: border-box;vertical-align: middle;"><span style="margin-right: 6px;">2楼· 2019.06.14 08:41</span></div>
										</div>
									</div>
								</div>
							</div>
							<!-- 	WSK_9a8c结束 -->
							<div style="box-sizing: border-box;margin-top:25px;">
								<p style="font-size: 16px;margin: 10px 0;line-height: 1.5;word-break: break-word!important;word-break: break-all;">{{persons.name}}</p>
								<!---->
								<div class="fuqin" style="box-sizing: border-box;">
									<!-- 点赞 -->
									<a v-show="downIconsss" @click="sortsss" class="dianzan" style="margin-right: 14px;font-size: 10;cursor: pointer;box-sizing: border-box;color: #969696;display: inline-block;">
										<i class="dian el-icon-star-off" style="margin-right: 5px;font-size: 18px;vertical-align: middle;"></i>
										<span class="zan" style="vertical-align: middle;box-sizing: border-box;font-size: 14px;">赞</span>
									</a>
									<!-- 点赞1 -->
									<a v-show="!downIconsss" @click="sortsss" style="margin-right: 14px;font-size: 10;cursor: pointer;box-sizing: border-box;color: #969696;display: inline-block;">
										<i class="el-icon-star-on" style="margin-right: 5px;font-size: 18px;vertical-align: middle;color: #EA6F5A;font-size:22px; "></i>
										<span style="vertical-align: middle;box-sizing: border-box;font-size: 14px;">1人赞</span>
									</a>
									<!-- 点赞结束 -->
									<a style="margin-right: 14px;font-size: 10;color: #969696;cursor: pointer;display: inline-block;">
										<div class="huifu" v-on:click="shows()">
											<i class="el-icon-chat-square" style="margin-right: 5px;font-size: 18px;vertical-align: middle;"></i>
											<span class="huifu" style="vertical-align: middle;font-size: 14px;">回复</span>
										</div>
									</a>
									<div class="erzi" style="float: right;margin: 12px 0 0 10px;vertical-align: middle;margin-top: -4px;">
										<a style="color: #969696" @click="delPerson(persons)">删除</a>
									</div>
								</div>
							</div>
							<div style="padding-top: 20px;margin-top: 10px;" v-if="person1.shows">
								<div style="box-sizing: border-box;border-left: 2px solid #d9d9d9;">
									<div style="position: relative;margin-left:20px;">
										<textarea placeholder="写下你的评论..." style="padding: 10px 15px;width:546px;height:58px;font-size: 13px; border: 1px solid #dcdcdc;border-radius: 4px;background-color: hsla(0,0%,71%,.1);resize: none;display: inline-block;vertical-align: top;outline-style: none;"></textarea>
										<!-- 下面栏目 -->
										<div style="height: 50px;">
											<div style="position: relative;float: left;margin-top: 14px;"><i style="vertical-align: middle; font-size: 20px;color: #969696;" class="layui-icon layui-icon-face-smile-b"></i></div>
											<div style="float: left;margin: 20px 0 0 20px;font-size: 13px;color: #969696;">Ctrl+Enter 发表</div>
											<button class="layui-btn layui-btn-md layui-btn-radius layui-btn-danger" style="line-height: 0; float: right;width: 78px;margin: 10px 0;padding: 8px 18px;font-size: 16px; border: none;border-radius: 20px;color: #fff!important;background-color: #42c02e;cursor: pointer;outline: none;display: block;">
												发送
											</button>
											<a @click="shows()" style="float: right;margin: 18px 30px 0 0;font-size: 16px;color: #969696;">取消</a>
										</div>
									</div>
									<!---->
								</div>
							</div>
						</div>
					</div>
					<!-- 回复结束 -->
				</div>

			</div>
		</div>
		<!-- pc端结束 -->
		<div class="layui-hide-md">
			<div class="heard" style="height: 48px;">
				<sjdh></sjdh>
			</div>
			<!-- 手机的导航结束 -->
			<div class="content">
				<div class="content1">
					<h1 class="title layui-xs12" style=" font-size: 30px;">vue打包上线</h1>
					<a href="/sjdzz"><div class="title1" style="margin-top: 15px;">
						<img src="../../images/7e0347ed-ca19-4634-962d-4fd0f55c680b.jpg" style="width: 34px;height: 34px;border-radius: 17px;float: left;margin-right: 5px;" />
							<p style="float: left; font-size: 16px;font-weight: 700;line-height: 16px;color: #484848;padding-top: 8px;margin-right: 5px;">cs女大学生</p>
						<span style="float: left; color: #ea6f5a; width:52px;height: 21.2px;font-size: 12px; margin-top: 5px;display: block;border: 1px solid #ea6f5a;text-align: center;line-height: 21px;">简书作者</span>
					</div></a>
					<div style="margin-top:60px;vertical-align: middle;font-size: 13px;color: #b1b1b1;">
						<i style="color: #ea6f5a;margin-right: 3px;" class="layui-icon layui-icon-diamond"></i>
						<span style="margin-right: 10px;">1.753</span>
						<span style="margin-right: 10px;">2019-03-05 16:36</span>
						<i class="layui-icon layui-icon-cellphone" style="font-size: 14px;"></i>
						<span style="margin-right: 10px;">打开App</span>
					</div>
				</div>
				<div class="content2">
					<div style="font-size: 16px;font-weight: 400;line-height: 1.7;color: #2f2f2f;margin-top: 25px; margin-bottom: 100px;">
						<p style="margin: 0 0 25px;"><b>1.写好的项目 首先更改&nbsp;&nbsp;把config-index.js中的&nbsp;&nbsp;assetsPublicPath:"/",更改为&nbsp;assetsPublicPath: './',&nbsp; 为了更改路径</b></p>
						<p style="margin: 0 0 25px;"><b><i>productionSourceMap: ture,改为productionSourceMap: false, 文件打包体积减少80%.<br></i></b></p>
						<p style="margin: 0 0 45px;"><b><i>注意:</i>尽量不要把引入的css和js放入到index.html&nbsp; 容易报错,可以放在app.vue中.</b></p>
					</div>
					<!-- 内容结束 -->
				</div>
				<div class="content3">
					<div class="image-view" data-width="1207" data-height="820">
						<img data-original-width="1207" data-original-height="820" src="../../images/1.webp" style="width: 100%;overflow: hidden;">
					</div>
					<p style="margin: 25px 0 25px;font-size: 16px;font-weight: 400;line-height: 1.7;color: #2f2f2f;"><b>注意:页面不报错,但是是空白,就更改src里面<br>的router-index.js中的mode:"histohasry"<br>,修改为 mode:"hash".</b></p>
					<div class="image-view" data-width="1207" data-height="820" style="z-index: -1;">
						<img data-original-width="1207" data-original-height="820" src="../../images/2.webp" style="width: 100%;overflow: hidden;">
					</div>
					<!-- 阅读文章打开更多 -->
					<div>
						<!-- 更多内容 -->
						<div v-for="(item, key) in items" v-show="key<num" :key="item">
							<p style="margin: 25px 0 25px;margin-bottom:80px; font-size: 16px;font-weight: 400;line-height: 1.7;color: #2f2f2f;"><b>{{ item.message }}</b></p>
							<div class="image-view" data-width="1207" data-height="820">
								<img data-original-width="1207" data-original-height="820" :src="item.Src" style="width: 100%;overflow: hidden;">
							</div>
						</div>
						<!-- 按钮 -->
						<div v-show="yin" style="box-shadow: #FFFFFF;background-image:linear-gradient(0deg,#fff,hsla(0,0%,100%,0));margin-top: -27.5%; z-index: 0;position: absolute;left: 0;width: 100%;height:16%;"></div>
						<div v-show="yin" style="text-align: center;z-index: 2;">
							<button @click="showMore" style="color: #ea6f5a;width: 100%;display: block;padding-top: 20px;adding-bottom: 10px;margin-top: 5px;background: none; border: none;">
								<i class="layui-icon layui-icon-down layui-col-xs12"></i>
								<i class="layui-icon layui-icon-down layui-col-xs12" style="position: relative;top: -10px;"></i>
							</button>
							<button style="line-height: 0; margin-top: 15px;margin-bottom: 25px;background-color: #ea6f5a;color: #fff;text-align: center;width: 240px;height: 45px;padding: 10px 30px;font-size: 16px;border-radius: 23px;" class="layui-btn layui-btn-radius layui-btn-danger">{{txt}}</button>
						</div>
					</div>
					<!-- 阅读更多结束 -->
				</div>
			</div>
			<!-- 内容区域结束 -->
			<div style="width: 90%; margin: 0 auto;">
				<div style="margin: 15px 0 26px;text-align: center;">
					<div style=" position: relative;height: 31px;text-align: center;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;">
						<div style="position: absolute;width: 20%;top: 15px;height: 1px;background-color: #ddd;z-index: 0;"></div>
						<div style="font-size: 16px;font-weight: 400;line-height: 1.7;color: #2f2f2f;">
							<span style="display: inline-block;vertical-align: middle;font-size: 16px;margin-right: 5px;font-weight: 500;line-height: 22px;color: #666;">点赞赚钻</span>
							<span style="color: #ea6f5a;">最高日赚数百元</span>
						</div>
						<div style=" position: absolute;right: 0; width: 20%;top: 15px;height: 1px;background-color: #ddd;z-index: 0;"></div>
					</div>
				</div>
				<!--   点赞图标 -->
				<div v-show="downIcon">
					<div style="text-align: center; width: 60px;height: 60px;line-height: 60px;margin: 0 auto;border-radius: 50%;border:1px solid #888;" @click="open">
						<i class="layui-icon layui-icon-praise" style="color: #888888;font-size: 30px;line-height: 60px;"></i>
					</div>
					<span style="font-size: 13px;color: #888;display: block;text-align: center;margin-top: 5px;">赞 <span style="font-size: 10px;">(16)</span></span>
				</div>
				<!--点赞1图标 -->
				<div v-show="!downIcon">
					<div style="text-align: center; width: 60px;height: 60px;line-height: 60px;margin: 0 auto;border-radius: 50%;background: #ea6f5a;" @click="sort">
						<i class="layui-icon layui-icon-praise" style="color:#FFFFFF;font-size: 30px;line-height: 60px;"></i>
					</div>
					<span style="font-size: 13px;color: #ea6f5a;display: block;text-align: center;margin-top: 5px;">赞 <span style="font-size: 10px;">(17)</span></span>
				</div>
				<!--   点赞图标结束 -->
			</div>
			<!-- 点赞结束 -->
			<div class="zanshang" style="margin-top: 30px;">
				<div style="background-color: #fafafa;width: 90%;margin: 0 auto;height: 66px;">
					<div style="margin: 0 10px;padding: 15px 0 12px;height: 66px;display: -webkit-box;display: -webkit-flex;display: -ms-flexbox;display: flex;">
						<a href="/u/2f3eb9be64fb" style="width: 36px;height: 36px;margin-right: 6px;">
							<span style="width: 36px; height: 36px; border-radius: 50%;">
								<img src="../../images/7e0347ed-ca19-4634-962d-4fd0f55c680b.jpg" style="width: 100%;height: 100%;display: block;border-radius: 50%;">
							</span>
						</a>
						<div style="-webkit-box-flex: 1;-webkit-flex: 1;-ms-flex: 1;flex: 1;overflow: hidden;">
							<div style="font-size: 15px;line-height: 21px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;font-weight: 700;color: #484848;">cs大个子女生</div>
							<div style="padding-top: 2px;font-size: 12px;line-height: 17px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #999;">小礼物走一走，来简书关注我</div>
						</div>
						<button style="height: 36px;width: 78px;background-color: #ea6f5a;color: #fff;border-radius: 20px;border: none;line-height: 36px;margin-left: 5px;">赞赏</button>
					</div>
				</div>
				<!-- 赞赏结束 -->
				<div style="width: 90%; margin: 0 auto;margin-top: 20px;">
					<img src="../../images/guanggao.jpg" style="width: 100%;" />
					<button class="layui-btn layui-btn-xs" style="font-size: 8px;line-height: 10px; position: relative;float: right;top: -14px;background: #000000;height: 14px;width: 26px;">广告</button>
				</div>
				<div style="margin-top: 10px; height: 10px;background-color: #f5f5f5;width: 100%;"></div>
				<!-- 灰色边 -->
			</div>
			<!-- 广告结束 -->
			<div class="pinglun">
				<div>
					<div style="margin: 0 auto; width:90%;">
						<div class="top-title" style="font-size: 16px; border-bottom: none;padding-top: 15px;margin-left: 0;margin-right: 0;font-size: 16px;">
							<a style="font-weight: 700;color: #545454;">评论</a>
							<!-- 写评论开始 -->
							<button @click="setMaskShow()" style="background: none;border: none;float: right;color: #ea6f5a;line-height: 22px;font-size: 14px;">
								<i class="layui-icon layui-icon-edit"></i>
								写评论
							</button>
							<!-- 弹出层开始 -->
							<div v-show="maskShow" style="background-color: transparent;transition-timing-function: linear;background-color: rgba(0,0,0,.6);left: 0; margin: 0 auto; width: 100%;height: 100%;position: fixed;top: 0;z-index: 5;">
								<div style="width:100%;height: 222px;background:#FFFFFF;margin: 0 auto;">
									<textarea v-model="person1.num" id="comment" placeholder="写下你的评论..." style="display: block;"></textarea>
									<div style="width: 90%;margin: 0 auto;">
										<button @click="addPerson()" class="layui-btn" style="float: right;background-color: #42c02e;color: #fff;border-radius: 4px;margin-left: 15px;width: 80px;height: 35px;font-size: 17px;line-height: 35px;">确认</button>
										<button @click="setMaskShow()" class="layui-btn" style="float: right;margin-left: 15px;width: 80px;height: 35px;font-size: 17px;line-height: 35px;color: #999;background:none;">取消</button>
									</div>
								</div>
							</div>
							<div>
							</div>
						</div>
					</div>
					<!-- 写评论结束 -->
					<div style="margin-top: 25px;border-bottom:1px solid #f0f0f0;" v-for="person in people" :key="person">
						<div style="width: 90%;margin: 0 auto;">
							<a href="#" style="display: block; cursor: default;float: left;margin-right: 10px;">
								<img style="width: 100%;width: 35px; height: 35px;border-radius: 50%;" src="../../images/0d0b369c-bbe9-4d54-a031-1177fa0ea311.webp" />
							</a>
							<div style="overflow: hidden;">
								<div style="margin-bottom: 6px;">
									<div>
										<a href="#" style="font-size: 16px;font-weight: 700;vertical-align: middle;color: #484848;">WSK_98K666</a>
									</div>
								</div>
								<div style=" font-size: 16px;line-height: 1.7;color: #484848;width: 297px;">{{person.num}}</div>
							</div>
							<div style="font-size: 12px;height: 20px;line-height: 20px;color: #b1b1b1;margin-top: 5px;margin-bottom: 15px;">
								<span style="margin-right: 4px;padding-left: 45px;">4楼</span>
								<span>06.15 08:03</span>
								<div style="float: right;">
									<button @click="setMaskShow()" style="margin-left: 25px;color: #b1b1b1;background: none;border: none;"><i style="font-size: 19px;vertical-align: middle;" class="el-icon-chat-square"></i></button>
									<button style="margin-left: 25px;color: #b1b1b1;background: none;border: none;"><i style="font-size: 19px;vertical-align: middle;" class="el-icon-star-off"></i></button>
								</div>
							</div>
						</div>
					</div>
					<!-- 评论区域结束 -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import top from '../top.vue'
	import sjdh from '../sjdh.vue'
	export default {
		data() {
			return ({
				genghuan:true,
				wsk:false,
				downIconssss: true,
				maskShows: false,
				maskShow: false,
				yin: true,
				isShow: true,
				txt: '打开App，阅读文章',
				num: 0,
				downIcon: true,
				downIconss: true,
				downIconsss: true,
				wsk6:['2','5','10','20','50'],
				wsknum:'2',
				activeClass: 0,
				items: [{
						message: '然后执行npm run build',
						Src: require('../../images/3.webp')
					},
					{
						message: '然后你的文件里面 就会多一个 dist文件,里面是解压好的,你只需要把dist文件 放在服务器就可以了.',
						Src: require('../../images/4.webp')
					},
					{
						message: '然后你服务器前缀加上 就可以看到效果了',
						Src: require('../../images/5.webp')
					},
				],
				person1: {
					num: '',
					show: false,
					shows: false,
				},
				people: [{
					num: '666',
				}],
				person1s: {
					name: '',
					show: false,
					shows: false,
				},
				peoples: [{
					name: '888'
				}],
			})
		},
		methods: {
			genghuans(){
				this.genghuan=!this.genghuan;
			},
			changeTabs(index) {
				this.activeClass = index;
                this.wsk = true
                this.wsknum=''
                    // this.list=this.mesage,
                    // console.log(this.list[1])
                if (index===0) {
                    this.wsknum=this.wsk6[0]
                }
                if (index===1) {
                    this.wsknum=this.wsk6[1]
                }
                if (index===2) {
                    this.wsknum=this.wsk6[2]
                }
                if (index===3) {
                    this.wsknum=this.wsk6[3]
                }
                if (index===4) {
                    this.wsknum=this.wsk6[4]
                }
            },
			wsks(){
				this.wsk = !this.wsk
			},
			sortssss() {
				this.downIconssss = !this.downIconssss
			},
			addPersons() {
				this.peoples.push(this.person1s);
				this.person1s = {};
				this.maskShows = !this.maskShows;
			},
			delPerson(persons) {
				this.peoples.splice(this.peoples.indexOf(persons), 1);
			},
			addPerson() {
				this.people.push(this.person1);
				this.person1 = {};
				this.maskShow = !this.maskShow;
			},
			setMaskShow() {
				this.maskShow = !this.maskShow;
			},
			showMore() {
				this.yin = !this.yin;
				console.log('1', this.isShow);
				this.isShow = !this.isShow;
				console.log('2', this.isShow);
				this.num = this.isShow ? 0 : this.items.length;
				this.txt = this.isShow ? '打开App，阅读文章' : ''
			},
			sortsss() {
				this.downIconsss = !this.downIconsss
			},
			sortss() {
				this.downIconss = !this.downIconss
			},
			open() {
				this.$notify.success({
					message: '最帅的人给我点赞了',
					showClose: false,
					offset: 200,
				});
				this.downIcon = !this.downIcon
			},
			sort() {
				this.downIcon = !this.downIcon
			},
			shows() {
				this.person1.shows = !this.person1.shows;
			},
			showCont() {
				this.person1.show = !this.person1.show;
			}
		},
		components: {
			top,
			sjdh
		},
	}
</script>

<style scoped>
	.active{
	   color: #EA6F5A;
}
	.active i {
	   color: #EA6F5A;
}
    .active span {
       color: #EA6F5A;
}
	#comment {
		margin: 0 auto;
		padding-top: 15px;
		border: none;
		z-index: 13;
		width: 90%;
		height: 150px;
		font-size: 17px;
		line-height: 1.5;
		color: #333;
	}

	* {
		margin: 0;
		padding: 0;
	}

	/* 手机端样式开始 */
	.content {
		width: 90%;
		margin: 0 auto;
	}

	.title {
		margin: 15px 0;
		font-size: 30px;
		font-weight: 700;
		font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		line-height: 1.4;
		color: #2f2f2f;
	}

	/* 手机端样式结束 */
	.erzi {
		display: none;
	}

	.fuqin:hover .erzi {
		display: block;
	}

	.huifu:hover {
		color: #000000;
	}

	.title {
		word-break: break-word !important;
		margin: 20px 0 0;
		font-family: -apple-system, SF UI Display, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif;
		font-size: 34px;
		font-weight: 700;
		line-height: 1.3;
	}

	#yiguanzhu {
		padding: 0 7px 0 5px;
		margin-left: -1px;
		width: 64px;
		height: 18px;
		font-size: 12px;
		border: 1px solid hsla(0, 0%, 59%, .6);
		background: none;
		border-radius: 40px;
		color: #8c8c8c;
		font-weight: 400;
		line-height: normal;
	}

	#yiguanzhu:hover {
		background: #f0f0f0;
		width: 78px;
		color: #8c8c8c;
	}

	#quxiaoguanzhu {
		display: none;
	}

	#yiguanzhu:hover #quxiaoguanzhu {
		display: block;
	}

	#yiguan {
		display: block;
	}

	#yiguanzhu:hover #yiguan {
		display: none;
	}

	#guanzhu {
		float: right;
		color: #8c8c8c;
		margin-top: 4px;
		padding: 8px 0;
		width: 100px;
		font-size: 16px;
		background: #FFFFFF;
		border: 1px solid hsla(0, 0%, 59%, .6);
		height: 38.8px;
	}

	#guanzhu:hover {
		background: #f0f0f0;
		color: #8c8c8c;
	}

	#quxiao {
		display: none;
	}

	#guanzhu:hover #quxiao {
		display: block;
	}

	#yiguan1 {
		display: block;
	}

	#guanzhu:hover #yiguan1 {
		display: none;
	}

	.dianzan:hover .dian {
		color: red;
	}

	.dianzan:hover .zan {
		color: #000000;
	}
</style>
