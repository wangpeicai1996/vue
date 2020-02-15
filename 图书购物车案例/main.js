const app = new Vue({
  el:'#app',
  data: {
    books: [
      {
        id: 1,
        name:'《算法导论》' ,
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name:'《编程艺术》' ,
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name:'《spring实战》' ,
        date: '2008-10',
        price: 105.00,
        count: 1
      },
      {
        id: 4,
        name:'《mysql数据库》' ,
        date: '2006-9',
        price: 49.00,
        count: 1
      },
      {
        id: 5,
        name:'《java编程思想》' ,
        date: '2009-9',
        price: 102.00,
        count: 1
      }
    ]
  },
  methods: {
    //价格加前缀，保留两位小数
    getFinalPrice(price) {
      return "￥" + price.toFixed(2)
    },
    decrement(index){
      this.books[index].count--
    },
    increment(index){
      this.books[index].count++
    },
    removeHandler(index){
      this.books.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      let totalPrice = 0
      for (let i = 0; i < this.books.length;i++) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
      //es6循环语法
      // for (let book of this.books) {
      // }
    }
  },
  filters: {
    //此处的参数会自动传入
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})