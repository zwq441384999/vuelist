<template>
  <div class="box">
    <div v-for="x in sellerData">
      {{x.name}}
    </div>


  </div>

</template>

<script>
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      sellerData: Object
    }
  },
  created () {
    this.sellerData = this.seller.data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./dstyle.css"
</style>
