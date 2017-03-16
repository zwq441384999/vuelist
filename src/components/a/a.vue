<template>
  <div>
    <div v-for="(x, index) in msg">
      {{x.name}}
      <span v-on:click="dels(index)">删除</span>
    </div>
    <div v-on:click="adds">
      添加
    </div>
  </div>

</template>

<script>
let arr = [
  {name: 'aa'},
  {name: 'bb'},
  {name: 'cc'}
]

export default{
  data () {
    return {
      msg: arr,
      num: 0
    }
  },
  methods: {
    adds: function () {
      this.num++
      this.msg.push({name: 'dd' + this.num})
    },
    dels: function (index) {
      this.msg.splice(index, 1)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    background: red;
  }
</style>
