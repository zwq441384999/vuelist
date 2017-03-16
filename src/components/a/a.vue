<template>
  <div>
    <div v-for="(x, index) in seller.data">
      <span @click="selectFood(x, $event)">{{x.name}}</span>
    </div>
    <food :food="selectedFood" ref="foods"></food>
  </div>
</template>

<script type="text/ecmascript-6">
import food from '@/components/d/d'
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      selectedFood: {}
    }
  },
  created () {
    this.goods = this.seller
  },
  methods: {
    selectFood (food, event) {
      console.log(food)
      console.log(food.name)
      this.selectedFood = food
      this.$refs.foods.show()
    }
  },
  components: {
    'food': food
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div{
    background: red;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  div span{
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    background-color: #cccccc;
  }
</style>
