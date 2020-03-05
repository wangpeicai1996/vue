export default {
  template:`
    <div>
      <h2>{{message}}</h2>
      <button @click='btnClick'>按钮</button>
      <h2>{{name}}</h2>
    </div>
  `,
  data(){
    return {
      message:'你好',
      name:'王培材111'
    }
  },
  methods:{
    btnClick(){
      alert('按钮弹窗')
    }
  }
}