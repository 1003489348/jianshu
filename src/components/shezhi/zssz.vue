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
    <div class="zssz">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="赞赏功能">
                <el-radio-group v-model="form.resource">
                    <el-radio label="开启"></el-radio>
                    <el-radio label="关闭"></el-radio>
                    <a class="zstx">开启后赞赏按钮将出现在你的文章底部</a>
                </el-radio-group>
            </el-form-item>
            <div class="line"></div>
            <div class="jianju"></div>
            <el-form-item label="赞赏描述">
                <textarea id="zan" rows="4"></textarea>
                <!-- <el-input type="textarea" v-model="form.desc"></el-input> -->
            </el-form-item>
            <el-form-item>
                <button class="baocun">保存</button>
            </el-form-item>
        </el-form>
    </div>
    </div>
    </div>
    <abc></abc>
  </div>
    </div>
</template>
<script>
import top from '../top3.vue'
  export default {
    data() {
      return {
        form: {
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    },
    components:{
      top
    }
  }
</script>
<style>
  .zstx{
    font-size: 12px;
    color: rgb(112, 112, 112);
    display: block;
    margin-top: 20px;
  }
  .line{
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
    margin-top: 2%;
  }
  .jianju{
    height: 25px;
    width: 100%;
  }
  #zan{
    background-color: #f8f8f8;
    border-radius: 5px;
    width: 100%;
  }
  .baocun{
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #00d800;
    border: none;
    width: 100px;
    height: 30px;
    color: white;
  }
  .baocun:hover{
    background-color: #02b302;
  }
</style>
