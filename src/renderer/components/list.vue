<template>
  <div class="car-list pane">
    <div class="container center">
      <ul class="row">
        <li v-for="item in list.items" class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="car">
            <router-link :to="'/car/'+ item.info.cate + '/' + item.info.id">
              <div class="item">
                <img :src="item.logo" alt="">
                <h2>{{item.title}}</h2>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    country: {
      type: String,
      default: 'guochan'
    },
    item: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  watch: {
    item (item) {
      this.list = item
    }
  },
  data () {
    return {
      list: this.item
    }
  },
  created: function () {
    this.list = this.$parent.cars[this.country]
  }
}
</script>

<style lang="css">
*{margin:0;padding:0;}
.car-list{padding-top: 20px;}
.car-list li{text-align: center;list-style: none;
}
.car-list li div.car{
    padding: 4px;
    line-height: 1.4;
    border-radius: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    display: inline-block;
    width: 100%;
    height: 168px;
    margin-bottom: 24px;
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
  }
.car-list li div.car a{display: block;height: 168px;cursor: pointer;text-decoration: none;}
.car-list li div.car .item{height: 160px;}
</style>
