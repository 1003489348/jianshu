<template>
	<div class="layui-row" style="width:100%;height:750px;">
		<!-- 左边内容 -->
		<div class="left layui-col-md2 layui-col-xs2">
			<div class="left1 layui-col-md12 layui-col-xs12">
				<a href="/">回首页</a>
			</div>
			<div class="left2 layui-col-md12 layui-col-xs12">
				<div @click="showCont()"><i class="layui-icon  layui-icon-add-1" style="content:\F067;"></i><span style="margin-left: 4px;">新建文集</span></div>
				<div  class="_2G97m" v-if="person1.show">
					<form class="M8J6Q _2a1Rp"><input type="text" placeholder="请输入文集名..." name="name" class="_1CtV4" id="cont">
						<button  class="layui-btn layui-btn-sm layui-btn-radius layui-btn-danger" type="submit" style="font-size:14px ; width:57.9px;height: 30px; color: #42c02e;border:1px solid #42c02e;background: #404040;"><span>提
								交</span></button>
						<button @click="showCont()" type="button" class="layui-btn" style="width: 57.9px;height: 30px;background:#404040;line-height:30px;color: #999999;"><span>取
								消</span></button></form>
				</div>
			</div>

			<div class="left3 layui-col-md12 layui-col-xs12">
				<ul>
					<a href="/wenzhang">
						<li class="left3_1">
							<div style="float: right; position: relative; right: 10%;">
								<i class="layui-icon layui-icon-set-fill"></i></div>
							<span>日记本</span>
						</li>
					</a>
					<a href="/wenzhang2">
						<li style="border-left: 3px solid #ec7259;background-color: #666;"><span>随笔</span></li>
					</a>
				</ul>
			</div>
			<div class="left4 layui-col-md2 layui-col-xs2" style="color:#999999;">
				<span><i class="layui-icon layui-icon-spread-left"></i>&nbsp;设置</span>
				<span class="layui-hide-xs" style="float:right;position: relative;right: 5%;">遇到问题&nbsp;<i class="layui-icon layui-icon-tips"></i></span>

			</div>
		</div>
		<!-- 中间内容 -->
		<div class="center layui-col-md3 layui-col-xs3" style="#ffffff">
			<div v-on:click="addPerson()" class="center1"><i class="el-icon-circle-plus"></i><span> 新建文章</span></div>
			<ul class="center2" v-for="people in people" :key="people">
				<li>
					<div class="li1"></div>
					<div>
						<span v-bind:title="person1.name" style="font-size: 18px;color:#333;display: block;height: 30px;line-height: 30px;margin-right: 40px;overflow: hidden;-o-text-overflow: ellipsis;text-overflow: ellipsis;white-space: nowrap;">{{person1.name}}</span>
					</div>
					<div @click="delPerson(person)" style="float: right;font-size: 16px;width: 40px;text-align: center;position: relative;bottom: 10px;">
						<i class="layui-icon layui-icon-set-fill"></i>
					</div>
					<div>
						<span style="font-size: 18px; color:#333;display: block;height: 30px;line-height: 30px;margin-right: 40px;overflow: hidden;-o-text-overflow: ellipsis;text-overflow: ellipsis;white-space: nowrap;"></span>
					</div>
					<span style="position: absolute;bottom: 2px;left: 5px;font-size: 9px;line-height: 16px;color: #595959;">{{people.num}}</span>
				</li>
			</ul>
			<div v-on:click="addPerson()" class="center3"><span><i class="layui-icon layui-icon-add-1"></i>&nbsp;在下方新建文章</span></div>
		</div>
		<!-- 右边内容 -->
		<div class="right layui-col-md7 layui-col-xs7" style="height: 100%;">
			<p>已保存</p>
			<div class="right1"><input style="color: #595959" v-model="person1.name"></div>
			<fuwenben />
		</div>
	</div>

</template>

<script>
	import fuwenben from './fuwenben.vue'
	export default {
		data() {
			return ({				
				person1: {
					show:false,
					name: '无标题文章',
					num: '字数0'
				},
				people: [{
					num: '字数0'
				}, ]
			})
		},
		methods: {
			showCont() {
				this.person1.show = !this.person1.show;
			},
			addPerson() {
				this.people.push(this.person1);
			},
			delPerson(person) {
				this.people.splice(this.people.indexOf(person), 1);
			},
		},
		components: {
			fuwenben: fuwenben
		}
	}
</script>


<style scoped>
	._1CtV4 {
		width: 100%;
		height: 25px;
		color: #ccc;
		background-color: #595959;
		border: 1px solid #333;
		padding: 4px 6px;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 20px;
	}
	.M8J6Q {
		overflow: hidden;
		margin: 10px 0 0;
	}
	* {
		padding: 0;
		margin: 0;
		overflow: -Scroll;
		overflow-x: hidden;
		overflow: -Scroll;
		overflow-y: hidden;
	}

	.left {
		position: relative;
		height: 100%;
		overflow-y: auto;
		background-color: #404040;
		color: #f2f2f2;
		z-index: 100;
	}

	.left1 {
		padding: 30px 18px 5px;
		text-align: center;
	}

	.left1 a {
		display: block;
		font-size: 15px;
		padding: 9px 0;
		color: #ec7259;
		border: 1px solid rgba(236, 114, 89, .8);
		border-radius: 20px;
		transition: border-color .2s ease-in;
	}

	.left2 {
		padding: 0 15px;
		margin-top: 20px;
		margin-bottom: 10px;
	}

	.left3 a {
		position: relative;
		z-index: 0;
		line-height: 40px;
		list-style: none;
		font-size: 15px;
		color: #f2f2f2;
		cursor: pointer;
		user-select: none;
	}

	.left3 ul li {
		padding-left: 12px;
	}

	.left3_1:hover {
		background-color: #666;
	}

	.left4 {
		position: fixed;
		bottom: 0;
		height: 50px;
		line-height: 50px;
		font-size: 15px;
		padding-left: 15px;
		user-select: none;
		background-color: #404040;
	}

	.center {
		overflow-y: scroll;
		height: 100%;
	}

	.center1 {
		line-height: 20px;
		font-size: 15px;
		font-weight: 400;
		padding: 20px 0 20px 25px;
		cursor: pointer;
		color: #595959;
	}

	.center2 {
		position: relative;
		color: #595959;
		margin-bottom: 0;
		padding: 15px 10px 15px 60px;
		box-shadow: 0 0 0 1px #d9d9d9;
		list-style: none;
		cursor: pointer;
		user-select: none;
		border-left: 5px solid rgb(236, 114, 89);
		background-color: #e6e6e6;

	}

	.li1 {
		position: absolute;
		top: 30px;
		left: 20px;
		width: 22px;
		height: 30px;
		background: url(../assets/sprite.9d24217.png) no-repeat 0 -25px;
		background-size: 250px;
	}

	.center3 {
		color: #666;
	}

	.center3 span {
		line-height: 30px;
		padding: 20px 0 20px 25px;
		cursor: pointer;
		color: #999;
		margin-bottom: 80px;
	}

	.center3 span:hover {
		color: rgba(0, 0, 0, .65);
	}

	.right p {
		display: block;
		margin-block-end: 1em;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		font-size: 14px;
		line-height: 1.5;
		color: rgba(0, 0, 0, .65);
		float: right;
	}

	.right1 {
		width: 100%;
		padding: 0 80px 10px 40px;
		margin-bottom: 0;
		border: none;
		font-size: 30px;
		font-weight: 400;
		line-height: 30px;
		-webkit-box-shadow: none;
		box-shadow: none;
		color: #595959;
		background-color: transparent;
		outline: none;
		border-radius: 0;
		overflow: hidden;
		-o-text-overflow: ellipsis;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.right1 input {
		border: none;
	}
</style>
