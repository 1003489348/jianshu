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
    <div class="grzl">
        <el-form ref="form" :model="form" label-width="140px" label-position="left" class="biaodan">
          <el-form-item label="性别" label-colro=:#979797;>
              <el-radio-group v-model="form.resource">
                  <el-radio label="男" label-colro=:black;></el-radio>
                  <el-radio label="女"></el-radio>
                  <el-radio label="保密"></el-radio>
              </el-radio-group>
          </el-form-item>
          <div class="line"></div>
          <div class="jianju"></div>
          <el-form-item label="个人简介" style="font-size: 15px;color: #969696;">
            <textarea name="" id="gerenj" rows="4" placeholder="请填写你的个人简历" v-model="form.desc"></textarea>
          </el-form-item>
          <div class="line"></div>
          <div class="jianju"></div>
          <el-form-item label="个人网站" style="font-size: 15px;color: #969696;">
            <input type="text" placeholder="http://你的网站" v-model="form.name" id="wangzhan">
              <!-- <el-input v-model="form.name" placeholder="http://你的网址"></el-input> -->
              <a class="tix">填写后会在个人主页显示图标</a>
          </el-form-item>
          <div class="line"></div>
          <div class="jianju"></div>
          <el-form-item label="微信二维码" style="font-size: 15px;color: #969696;">
              <button class="gengh"  style="cursor: pointer;">更换图片</button>
              <a class="tix">上传后会在个人主页显示图标</a>
          </el-form-item>
          <div class="line"></div>
          <div class="jianju"></div>
          <el-form-item label="社交账号" style="font-size: 14px;color: #969696;" class="sjzh">
              <p class="text">你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。<br>如果帐号被占用，你可以在<a>简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p>
              <ul>
                <li class="bangding"><img src="../../assets/set-weibo.png" alt=""><a href="https://api.weibo.com/oauth2/authorize?client_id=1881139527&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fweibo%2Fcallback&response_type=code&state=%257B%2522can_transfer%2522%253A%2522true%2522%257D">绑定微博 ></a></li>
                <li><div class="line"></div></li>
                <li><div class="jiange"></div></li>
                <li class="bangding"><img src="../../assets/set-weixin.png" alt=""><a href="https://open.weixin.qq.com/connect/qrconnect?appid=wxe9199d568fe57fdd&client_id=wxe9199d568fe57fdd&redirect_uri=http%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fwechat%2Fcallback&response_type=code&scope=snsapi_login&state=%257B%2522can_transfer%2522%253A%2522true%2522%257D#wechat_redirect">绑定微信 ></a></li>
                <li><div class="line"></div></li>
                <li><div class="jiange"></div></li>
                <li class="bangding"><img src="../../assets/set-qq.png" alt=""><p class="yibangding">∨ 已绑定</p><span class="jiechubangding">解除绑定</span></li>
                <li><div class="line"></div></li>
                <li><div class="jiange"></div></li>
                <li class="bangding"><img src="../../assets/set-douban.png" alt=""><a href="https://www.douban.com/service/auth2/auth?client_id=07b4f47aa74e2448171edd6ff5ea6cd8&redirect_uri=https%3A%2F%2Fwww.jianshu.com%2Fusers%2Fauth%2Fdouban%2Fcallback&response_type=code&state=%257B%2522can_transfer%2522%253A%2522true%2522%257D">绑定豆瓣 ></a></li>
                <li><div class="line"></div></li>
                <li><div class="jiange"></div></li>
                <li class="bangding"><img src="../../assets/set-google.png" alt=""><a href="https://www.google.cn/intl/zh-CN_cn/add_url.html">绑定Google+ ></a></li>
              </ul>
          </el-form-item>
          <button class="baocun">保存</button>
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
          name: '',
          type: [],
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
<style scoped>
*{
  text-decoration: none;
}
  .line{
    width: 100%;
    height: 1px;
    background-color: #e7e7e7;
    margin-top: 2%;
  }
  .jianju{
    margin-top: 2%;
    width: 100%;
  }
  .jiange{
    width: 100%;
    margin-top: 2%;
  }
  .text{
    font-size: 12px;
    color: rgb(153, 153, 153);
  }
  .text a{
    font-size: 12px;
    color: rgb(80, 150, 255);
  }
  #gerenj{
    background-color: #f8f8f8;
    border-radius: 5px;
    font-size: 15px;
    width: 474px;
    height: 100px;
    color: #333333;
  }
  #wangzhan{
    width: 474px;;
    height: 30px;
    font-size: 15px;
    color: #333333;
    background-color: #f8f8f8;
    border-radius: 5px;
    border: 1px solid #bdbdbd;
  }
  .tix{
    font-size: 12px;
    color: rgb(153, 153, 153);
    float: right;
  }
  .gengh{
    border: 1px solid #00e41e;
    background-color: #fff;
    color: #00e41e;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 80px;
    height: 30px;
  }
  .gengh:hover{
    background-color: rgb(240, 255, 239);
  }
  .bangding img{
    width: 20px;
    height: 20px;
  }
  .bangding a{
    font-size: 14px;
    color: #3a3a3a;
    margin-left: 20px;
    cursor: pointer;
  }
  .yibangding{
    font-size: 14px;
    color: #7a7a7a;
    margin-left: 40px;
    margin-top: -45px;
  }
  .jiechubangding{
    display: block;
    font-size: 14px;
    color:white;
    margin-left: 120px;
    margin-top: -55px;
  }
  .jiechubangding:hover{
    color: #353535;
  }
  .baocun{
    border-radius: 20px;
    background-color: #00d800;
    border: none;
    width: 100px;
    height: 30px;
    color: white;
    cursor: pointer;
    }
    .baocun:hover{
        background-color: #02b302;
    }
    .sjzh{
      margin-top: -20px;
    }
    .sjzh ul{
      list-style: none;
      margin-left: -30px;
    }
</style>
