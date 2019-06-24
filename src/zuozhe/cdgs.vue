<template>
    <div id="cont-csgs">
        <div id="cont-csgs-nav">
            <a class="ban">
                <div class="banquan">
                    <img src="../assets/tubiao1.png" alt="">
                    <a>   故事优秀作者</a>
                </div>
                <div class="banquan">
                    <img src="../assets/tubiao2.png" alt="">
                    <a>   简书版权</a>
                </div>
                <div class="banquan">
                    <img src="../assets/tubiao3.png" alt="">
                    <a>   简书签约作者</a>
                </div>
                <div class="line"></div>
            </a>
            <div class="jieshao">
                <a class="biaot">个人介绍</a>
                <p>一只有限写作的无限猴子~<br><br></p>
                <span>版权合作事宜请联系行距文化：<br>pub@hangju-pub.com</span>
                <div class="line"></div>
                <div class="xihuan"><img src="../assets/liebiao.png" style="width: 20px;height: 20px;"><a> 他关注的专题/文集/连载</a></div>
                <div class="xihuan"><img src="../assets/xin.png" style="width: 20px;height: 20px;"><a> 他喜欢的文章</a></div>
                <div class="line"></div>
            </div>
            <div class="tade">
                <a class="biaot">他的文集</a>
                <div class="wenji"><img src="../assets/wenzhang.png" alt="" style="width: 20px;height: 20px;"><a> 随笔</a></div>
                <div class="wenji"><img src="../assets/wenzhang.png" alt="" style="width: 20px;height: 20px;"><a> 圣诞快乐，船长先生！  </a><button class="lz">连载</button></div>
                <div class="wenji"><img src="../assets/wenzhang.png" alt="" style="width: 20px;height: 20px;"><a> 翠鸟镇神秘史</a></div>
                <div class="wenji"><img src="../assets/wenzhang.png" alt="" style="width: 20px;height: 20px;"><a> 感官少年的咏叹调  </a><button class="lz">连载</button></div>
            </div>
        </div>
    </div>
</template>
<style>
    #cont-csgs-nav{
        width: 97%;
        float: right;
    }
    #cont-csgs-nav .ban{
        text-decoration: none;
    }
    .banquan{
        width: 100%;
        margin-top: 5%;
    }
    .banquan img{
    width: 20px;
    height: 20px;
    }
    .banquan a{
        font-size: 14px;
        color: #000000;
        text-decoration: none;
    }
    .line{
        margin-top: 5%;
        width: 100%;
        height: 1px;
        background-color: #e2e2e2;
    }
        
    .jieshao{
        width: 100%;
        margin-top: 5%;
    }
    .biaot{
        text-decoration: none;
        font-size: 14px;
        color: #868686;
    }
    .jieshao  p{
        font-size: 14px;
        color: #131313;
        margin-top: 3%;
    }
    .jieshao span{
        font-size: 14px;
        color: #131313;
    }
    .line{
        margin-top: 6%;
        width: 100%;
        height: 1px;
        background-color: #e2e2e2;
    }
    .xihuan{
        margin-top: 6%;
    }
    .xihuan  a{
        text-decoration: none;
        font-size: 14px;
        color: #131313;
    }
    .tade{
        margin-top: 5%;
    }
    .tade a{
        text-decoration: none;
        color: #868686;
        font-size: 14px;
    }
    .wenji{
        margin-top: 3%;
    }
    .wenji a{
        text-decoration: none;
        color: #131313;
        font-size: 14px;
    }
    .lz{
        width: 30px;
        height: 18px;
        border: 1px solid #a5a5a5;
        background-color: #ffffff;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
        font-size: 12px;
        color: #868686;
    }

</style>