<template>
<div>
    <top/>
  <div id="shezhi">
    <div class="shezhi-nav">
      <div class="shezhi-list">
      <div class="shezhi-1"><router-link to="/shezhi"><i class="el-icon-s-fold"></i>基础设置</router-link> </div>
      <div class="shezhi-1"><router-link to="/grzl" :class="this.$route.path === '/grzl' ? 'active' : ''"><i class="el-icon-user"></i>个人资料</router-link> </div>
      <div class="shezhi-1"><router-link to="/hmd" :class="this.$route.path === '/hmd' ? 'active' : ''"><i class="el-icon-remove-outline"></i>黑名单</router-link></div>
      <div class="shezhi-1"><router-link to="/zssz" :class="this.$route.path === '/zssz' ? 'active' : ''"><i class="el-icon-coin"></i>赞赏设置</router-link></div>
      <div class="shezhi-1"><router-link to="/zhsz" :class="this.$route.path === '/zhsz' ? 'active' : ''"><i class="el-icon-s-tools"></i>账号管理</router-link></div> 
    </div> 
    <div class="col-xs-16 col-xs-offset-8 shezhi-2">
    <div class="hmd">你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你。</div>
</div>
    </div>
    <abc></abc>
  </div>
</div>
</template>

<script>
import top from '../top3.vue'
    export default {
        components:{
            top
        }
    }
</script>

<style>
.hmd{
    font-size: 12px;
    color: #969696;
    }
</style>