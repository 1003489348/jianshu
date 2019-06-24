<template>
	<div>	
	<div class="heard" style="width: 100%; height: 58px;">
				<top></top>
			</div>
    <div id="banana" style="width: 65%;margin: 0 auto;margin-top: 20px;">
		
       <!-- <router-view/>  -->
      <el-row>
        <el-col :span="15"><div class="grid-content bg-purple-light cdgs_2">
          <el-row>
            <el-col :span="3"><div class="grid-content bg-purple cdgs1"></div>
            <img alt="Vue logo" src="../assets/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg"></el-col>
            <el-col :span="13"><div class="grid-content bg-purple cdgs2">
            <a class="name" href="">茶点故事</a>
            <div class="info">
              <ul>
                  <li><a href=""><p>5</p><p style="font-size:12px;   color: #969696;">关注<i class="el-icon-arrow-right"></i></p></a></li>
                  <li><a href=""><p>189884</p><p style="font-size:12px;   color: #969696;">粉丝<i class="el-icon-arrow-right"></i></p></a></li>
                  <li><a href=""><p>145</p><p style="font-size:12px;   color: #969696;">文章<i class="el-icon-arrow-right"></i></p></a></li>
                  <li><a href=""><p>366601</p><p style="font-size:12px;   color: #969696;">字数</p></a></li>
                  <li><a href=""><p>19999</p><p style="font-size:12px;   color: #969696;">收获喜欢</p></a></li>
              </ul>
            </div>
            <div class="jsz"><p><a href=""   style="font-size:13px;   color: #1e1e1e;">979</a><a href="" style="font-size:12px;  color: #969696;">简书钻</a></p></div>
            </div>
            </el-col>
            <el-col :span="8"><div class="grid-content bg-purple  cdgs_5">
                <el-button round style=' border-color:#67c23a; color:#67c23a'>发简信</el-button>
              <el-button type="success" round>+关注</el-button>
            </div></el-col>
          </el-row>
           <el-row>
             <tab></tab>
           </el-row>
        </div></el-col>
        <el-col :span="9"><div class="grid-content bg-purple-light cdgs_3">
          <cdgs></cdgs>
        </div></el-col>
      </el-row>
    </div>
</div>
</template>

<script>
import top from '../components/top.vue'
import tab from './cdgs-tab'
import cdgs from './cdgs'
export default {
  components: {
		top:top,
    tab: tab,
    cdgs: cdgs
  }
}
</script>
<style>
*{
   margin: 0;
   padding: 0;
   font-family: '微软雅黑';
}
.banana{
  width: 100%;
  color:yellow;
  margin-top: 20px;
}
.cdgs_1{
  width: 100%;
  height: 50px;;
}

.cdgs_2{
  width: 100%;
}
.cdgs_2 img{
  width: 80px;
  height:  80px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.cdgs2 .name{
  text-decoration:none;
  color: #1e1e1e;
  display: block;
  padding:20px 0 0 20px;
  font-size: 21px;
  font-weight: 700;
  /* vertical-align: middle; */
}
.cdgs2 .info ul{
  list-style:none
}
.cdgs2 .info ul li{
  width: 19%;
  float: left;
  text-align: center;
  border-right:1px solid #cacaca;
}
.cdgs2 .info ul li a{
  text-decoration:none;
  color: #1e1e1e;
}
.cdgs2 .info p{
  color:#1e1e1e;
  margin-top: 5px;
  font-size: 15px
}
.cdgs2 .info a{
  text-decoration:none;
  color: #1e1e1e;
}
.jsz{
  margin-top: 20px;
  margin-left: 15px;
}
.jsz p{
  width: 13%;
  color: #1e1e1e;
}
.jsz a{
  color: #1e1e1e;
  font-size: 16px;
  text-decoration:none;
}
.cdgs_5{
  width: 100%;
  height: 50px;
  margin-top: 40px;
}
.cdgs_5 button{
  width: 90px;;
  float: left;
  font-size: 15px;
  text-align: center;
}
</style>
