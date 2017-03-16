<template>
  <div >
    <router-link to="/a">aa</router-link>
    <router-link to="/b">bb</router-link>
    <router-link to="/c">cc</router-link>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
// import data from '../data.json'
export default {
  data () {
    return {
      seller: {},
      param: {
        name: ''
      }
    }
  },
  name: 'app',
  created () {
    this.$http.get('/api/b', this.param).then(function (rsp) {
      this.seller = rsp.body
    })
  }
}
</script>

<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
A:link{text-decoration:none;}
A:visited{text-decoration:none;}
A:active{text-decoration:none;}
a{
  color: #888888;
  font-size: 24px;
}
a.active{
  color: red;
}
</style>
