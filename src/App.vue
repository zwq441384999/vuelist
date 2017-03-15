<template>
  <div >
    <v-tmp></v-tmp>
    <router-link to="/a">aa</router-link>
    <router-link to="/b">bb</router-link>
    <router-link to="/c">cc</router-link>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import d from '@/components/d/d'
// import data from '../data.json'
export default {
  data () {
    return {
      seller: {}
    }
  },
  name: 'app',
  components: {
    'v-tmp': d
  },
  created () {
    this.$http.get('/api/a').then(response => {
      this.seller = response.body
      for (var i = 0; i < this.seller.data.length; i++) {
        console.log(this.seller.data[i].name)
      }
    }, response => {
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
