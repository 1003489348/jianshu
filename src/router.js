import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Tjzz from './components/Tjzz.vue'
import denglu from './components/denglu.vue'
import zhuce from './components/zhuce.vue'
import wenzhang from './components/wenzhang.vue'
import wenzhang2 from './components/wenzhang2.vue'
import shoucang from './components/shoucang.vue'
import wodezhuye from './components/wodezhuye.vue'
import xihuan from './components/xihuan.vue'
import Text from './zuozhe/Text.vue'
import pinglun from './components/xiaoxi/pingl.vue'
import tixe from './components/xiaoxi/tixe.vue'
import tougao from './components/xiaoxi/toug.vue'
import guanzhu from './components/xiaoxi/guanz.vue'
import zan from './components/xiaoxi/xih.vue'
import yigou from './components/yigou.vue'
import guanz from './components/guanzhu.vue'
import qianbao from './components/qianbao.vue'
import fankui from './components/fankui.vue'
import shezhi from './components/shezhi/shezhi.vue'
import jcsz from './components/shezhi/jcsz.vue'
import zhsz from './components/shezhi/zhsz.vue'
import zssz from './components/shezhi/zssz.vue'
import grzl from './components/shezhi/grzl.vue'
import hmd from './components/shezhi/hmd.vue'
import sheying from './components/sheying.vue'
import yuedu from './components/yuedugengduo/yuedugengduo.vue'
import shye from './components/mobileindex.vue'
import sjdzz from './components/sjdzz.vue'
import sjdsz from './components/shezhi/sjdsz.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
		{
			path:'/tjzz',
			component:Tjzz
		},
		{
			path:'/denglu',
			component:denglu
		},
		{
			path:'/zhuce',
			component:zhuce
		},
		{
			path:'/wenzhang',
			component:wenzhang
		},
		{
			path:'/wenzhang2',
			component:wenzhang2
		},
		{
			path:'/shoucang',
			component:shoucang
		},
		{
			path:'/wodezhuye',
			component:wodezhuye
		},
		{
			path:'/xihuan',
			component:xihuan
		},
		{
			path:'/Text',
			component:Text
		},
		{
			path:'/pinglun',
			component:pinglun
		},
		{
			path:'/tougao',
			component:tougao
		},
		{
			path:'/zan',
			component:zan
		},
		{
			path:'/guanzhu',
			component:guanzhu
		},
		{
			path:'/tixe',
			component:tixe
		},
		{
			path:'/yigou',
			component:yigou
		},
		{
			path:'/guanz',
			component:guanz
		},
		{
			path:'/qianbao',
			component:qianbao
		},
		{
			path:'/fankui',
			component:fankui
		},
		{
			path:'/shezhi',
			component:shezhi
		},
		{
			path:'/jcsz',
			component:jcsz
		},
		{
			path:'/zhsz',
			component:zhsz
		},
		{
			path:'/zssz',
			component:zssz
		},
		{
			path:'/grzl',
			component:grzl
		},
		{
			path:'/hmd',
			component:hmd
		},
		{
			path:'/sheying',
			component:sheying
		},
		{
			path:'/yuedugengduo',
			component:yuedu
		},
		{
			path:'/shye',
			component:shye
		},
		{
			path:'/sjdzz',
			component:sjdzz
		},
		{
			path:'/sjdsz',
			component:sjdsz
		}
  ]
})
