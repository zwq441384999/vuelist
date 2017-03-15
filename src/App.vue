<template>
  <div >
    <router-link to="/a">aa</router-link>
    <router-link to="/b">bb</router-link>
    <router-link to="/c">cc</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  list-style: none;
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
