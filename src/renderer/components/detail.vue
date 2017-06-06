<template>
  <div class="detail pane">
      <div class="detail__content">
        <h1>{{item.title}}</h1>
        <div class="content" v-html="item.detail"></div>
          <router-link :to="'/car/' + cate" class="close icon icon-cancel-squared" title="close">
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    cate: {
      type: String,
      default: 'guochan'
    },
    id: String
  },
  data () {
    return {
      item: {},
      itemList: {}
    }
  },
  watch: {
    item (cate) {
      this.itemList = this.$parent.cars[this.cate]
    }
  },
  methods: {
    getItem (id) {
      var arr = this.itemList.items
      var item = {}
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].info.id === id) {
          item = arr[i]
        }
      }
      this.item = item
    }
  },
  created: function () {
    this.itemList = this.$parent.cars[this.cate]
    this.getItem(this.id)
  }
}
</script>

<style lang="css">
.detail__content{padding:20px;}
.detail__content p{line-height: 28px;font-size: 17px;}
.detail__content a.close{position: absolute;right: 20px;top: 20px;font-size: 30px;color: #000;}
</style>
