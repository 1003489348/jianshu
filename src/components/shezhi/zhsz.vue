<template>
	<div>
		<top />
		<div id="shezhi">
			<div class="shezhi-nav">
				<div class="shezhi-list">
					<div class="shezhi-1">
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

					<div class="zhsz">
						<tr>
							<td>打包下载文章</td>
							<td>
								<el-button round style="text-aling">下载所有文章</el-button>
							</td>
						</tr>
					</div>
					<el-divider></el-divider>
					<div id="zhsz-1" style="cursor: pointer;">
						<a href="">删除账号<i class="el-icon-arrow-down"></i></a>
					</div>
					<div id="zhsz-content">
						<h4>永久删除账号</h4>
						<ul>
							<li>如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，你可以在<a href="">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</li>
							<li>如果你对简书上的某些内容、功能或社区规则不满意，你可以在<a href="">帮助与反馈页</a>向我们提出。</li>
							<li>删除帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。</li>
							<li>删除帐号是不可逆的操作，删除后将无法恢复。</li>
						</ul>
						<el-button round style="cursor: pointer;">保留我的账号</el-button>
						<el-button round id="sc" style="border: 1px solid #ea6f5a;color: #ea6f5a;cursor: pointer;">删除账号</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	function Show_Hidden(obj) {
		if (obj.style.display == "block") {
			obj.style.display = 'none';
		} else {
			obj.style.display = 'block';
		}
	}
	window.onload = function() {
		var olink = document.getElementById("zhsz-1");
		var odiv = document.getElementById("zhsz-content");
		olink.onclick = function() {
			Show_Hidden(odiv);
			return false;
		}
	}
	import top from '../top3.vue'
	export default {
		components: {
			top
		}
	}
</script>

<style scoped>
	.zhsz {
		font-size: 15px;
		color: #969696;
	}

	.zhsz tr td {
		color: #969696;
	}

	#zhsz-1 {
		margin-top: 20px;
		cursor: pointer;
	}

	#zhsz-1 a {
		color: #969696;
		text-decoration: none;
	}

	.zhsz button {
		border: 1px solid #42c02e;
		color: #42c02e;
		width: 200px;
		margin-left: 50px;
	}

	/* .zhsz-1{

} */
	#zhsz-content {
		display: none;
		margin-top: 20px;
	}

	#zhsz-content button {
		border: 1px solid #42c02e;
		color: #42c02e;
	}

	#zhsz-content h4 {
		color: #333333;
		font-size: 18px;
	}

	#zhsz-content ul li {
		font-size: 14px;
		color: #333333;
		margin-top: 20px;
	}

	#zhsz-content ul li a {
		text-decoration: none;
		color: #3194d0;
	}

	#zhsz-content button {
		margin-top: 30px;
	}
</style>
