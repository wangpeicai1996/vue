//全局组件
const empty = Vue.component('empty',{
  template:'#emptyMessage'
})

const app = new Vue({
  el: '#app',
  data: {
    books:[
      {id: 1, name: 'java', price:198.0, count: 1},
      {id: 2, name: 'mysql', price:59.0, count: 1},
      {id: 3, name: 'spring', price:102.0, count: 1}
    ]
  },
  methods:{
    sub(index){
      this.books[index].count--
    },
    add(index){
      this.books[index].count++
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      for (let item of this.books) {
        totalPrice += item.price * item.count
      }
      return totalPrice
    }
  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})
