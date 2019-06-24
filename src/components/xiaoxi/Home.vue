<template>
  <div id="app">
		  <dltop></dltop>
			<!-- <tixe></tixe> -->
			<HelloWorld></HelloWorld>
			<footers></footers>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import top from './top.vue'
import dltop from './dltop.vue'
import footers from './footer.vue'
import tixe from './tixe.vue'
export default {
  name: 'Home',
  components: {
		top:top,
		HelloWorld:HelloWorld,
		footers:footers,
		dltop,
		tixe
  }
}
</script>

<style>
#app {

}
</style>
