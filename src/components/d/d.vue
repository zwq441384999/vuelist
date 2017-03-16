<template>
    <div>
      <div class="food" ref="food" v-bind:class="{ fds: showFlag }">
        {{food.name}}
        <div @click="hide">
          点击返回
        </div>
      </div>
    </div>
</template>

<script>
export default{
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.food{
  position: fixed;
  left: 100%;
  top: 0;
  bottom: 48px;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: #cccccc;
  transition: all .5s;
}
.fds{
  left:0%;
}
</style>
