<template>
  <div id="app" class="window">
    <div class="window-content">
      <div class="pane-group">
      <navs @click="navHandlerClick"></navs>
      <router-view :item="item"></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import './assets/css/photon.min.css'
import guochan from './assets/guochan.json'
import deguo from './assets/deguo.json'
import riben from './assets/riben.json'
import meiguo from './assets/meiguo.json'
import faguo from './assets/faguo.json'
import hanguo from './assets/hanguo.json'
import yidali from './assets/yidali.json'
import yingguo from './assets/yingguo.json'
import qita from './assets/qita.json'
import './assets/index.css'
import navs from './components/sidebar'
export default {
  name: 'app',
  data () {
    return {
      item: {},
      cars: {
        guochan,
        deguo,
        riben,
        meiguo,
        faguo,
        hanguo,
        yidali,
        yingguo,
        qita
      }
    }
  },
  methods: {
    navHandlerClick (nav) {
      this.item = this.cars[nav]
    }
  },
  components: {
    navs
  }
}
</script>
