<template>
      <div class="pane pane-sm sidebar">
        <nav class="nav-group" id="side">
          <router-link v-for="(nav,index) in navs" :to="'/car/' + nav.nav">
            <span class="nav-group-item" @click="navHandlerClick(nav.nav)">
              {{nav.name}}
            </span>
          </router-link>
        </nav>
      </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      navs: [
        {
          name: '中国',
          nav: 'guochan'
        },
        {
          name: '日本',
          nav: 'riben'
        },
        {
          name: '德国',
          nav: 'deguo'
        },
        {
          name: '法国',
          nav: 'faguo'
        },
        {
          name: '意大利',
          nav: 'yidali'
        },
        {
          name: '英国',
          nav: 'yingguo'
        },
        {
          name: '美国',
          nav: 'meiguo'
        },
        {
          name: '韩国',
          nav: 'hanguo'
        },
        {
          name: '其它',
          nav: 'qita'
        }
      ]
    }
  },
  methods: {
    navHandlerClick (nav) {
      this.$emit('click', nav)
    }
  }
}
</script>

<style>
#side{height: 100%;display: flex;-webkit-flex-direction: column;flex-direction:column;}
#side a{display: block;flex:1;text-decoration: none;text-align: center;outline: none;}
#side a.router-link-active{border-right: 3px solid #0b9165;font-weight: bold;}
#side a.router-link-active span.nav-group-item{color: #0b9165;}
#side a span{display: flex;align-items: center;height: 100%;font-size: 20px;}
</style>
