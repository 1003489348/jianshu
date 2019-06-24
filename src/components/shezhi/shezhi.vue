<template>
	<div>
		<top />
		<div id="shezhi">
			<div class="shezhi-nav">
				<div class="shezhi-list">
					<div class="shezhi-1 active">
						<router-link to="/shezhi"><i class="el-icon-s-fold"></i>基础设置</router-link>
					</div>
					<div class="shezhi-1">
						<router-link to="/grzl" :class="this.$route.path === '/grzl' ? 'active' : ''"><i class="el-icon-user"></i>个人资料</router-link>
					</div>
					<div class="shezhi-1">
						<router-link to="/hmd" :class="this.$route.path === '/hmd' ? 'active' : ''"><i class="el-icon-remove-outline"></i>黑名单</router-link>
					</div>
					<div class="shezhi-1">
						<router-link to="/zssz" :class="this.$route.path === '/zssz' ? 'active' : ''"><i class="el-icon-coin"></i>赞赏设置</router-link>
					</div>
					<div class="shezhi-1">
						<router-link to="/zhsz" :class="this.$route.path === '/zhsz' ? 'active' : ''"><i class="el-icon-s-tools"></i>账号管理</router-link>
					</div>
				</div>
				<div class="col-xs-16 col-xs-offset-8 shezhi-2">
					<jcsz />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import top from '../top3.vue'
	import jcsz from './jcsz.vue'
	export default {
		name: 'shezhi',
		data() {
			return {}
		},
		components: {
			top,
			jcsz
		}
	}
</script>

<style>
	#shezhi {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 0;
		margin: 0;
		width: 960px;
		margin-right: auto;
		margin-left: auto;
		padding-left: 15px;
		padding-right: 15px;
		box-sizing: border-box;
	}

	.shezhi-nav {
		padding: 30px 0;
		margin-left: -15px;
		margin-right: -15px;
	}

	.shezhi-list {
		position: fixed;
		top: 0;
		bottom: 0;
		margin: 86px 0 0;
		padding: 0 0 30px;
		width: 280px;
		overflow: auto;
	}

	.shezhi-1 {
		line-height: 45px;
		margin: 0;
	}

	.shezhi-1 a {
		height: auto;
		padding: 10px 25px;
		line-height: 30px;
		display: block;
		text-decoration: none;
		color: #333;
		font-size: 15px;
	}

	.shezhi-1 a.active {
		background-color: #f0f0f0;
		border-radius: 4px;
	}

	.active {
		background-color: #f0f0f0;
		border-radius: 4px;
	}

	.shezhi-1 a:hover {
		background-color: #f0f0f0;
		border-radius: 4px;
	}

	.shezhi-1 a i {
		margin-right: 20px;
		font-size: 22px;
		text-align: center;
		line-height: 32px;
		margin-left: 10px;
		color: #ffffff;
		vertical-align: middle;
		font-weight: bold;
		width: 32px;
		height: 32px;
		border-radius: 5px;
		background: #a0a0a0;
	}

	.shezhi-2 {
		padding-left: 0;
		position: relative;
		top: 50px;
	}

	.col-xs-offset-8 {
		margin-left: 33.33333%;
	}

	.col-xs-16 {
		width: 66.66667%;
		float: left;
		position: relative;

	}
</style>
