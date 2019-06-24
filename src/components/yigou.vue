<template>
		<div id="app">
            <top/>
            <div class="layui-row" style="height: 100px;"></div>
			<div class="layui-row app">					
				<div class="layui-col-md12" style=" height: 300px;">
					<img src="../assets/paid-content-6f5f218ca8590aa726791acab7b37951.png" width="100%"/>
					<div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
                        <ul class="layui-tab-title">
                            <li class="layui-this li-2"><i style="margin-right: 10px; margin-top: 10px;"><img src="../assets/QQ截图20190613094039.png"></i><span>文章</span></li>
                            <li class="li-1"><i style="margin-right: 10px; "><img src="../assets/QQ截图20190606142353.png"></i>连载</li>
                        </ul>
                        <div class="layui-tab-content"></div>
                    </div>
				</div>
			</div>
		</div>
</template>

<script>
import top from './top3.vue'
export default {
    components:{
        top
    }
}
</script>

<style scoped>
        *{
			padding: 0;
			margin: 0;
			background: #FFFFFF;
		}
		
		.app{
			width: 40%;
			margin: 0 auto;
		}
		.li-1{
			color: #969696;
			font-weight: 600;
		}
		.li-1:hover{
			border-bottom: 2px solid #646464;
			color: #646464;
			
		}
        .li-1 img{
            width:15px;
            height:18px;
        }
		.li-2{
			color: #969696;
			font-weight: 600;	
		}
		.li-2:hover{
			color: #646464;
			
		}
</style>
