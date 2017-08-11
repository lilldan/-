<template>
  <div class="cart">
  <div class="cartTop">
 <router-link to="/" ><b>&lt;</b></router-link><p>购物车</p><i><p>.</p><p>.</p><p>.</p></i>
  </div>
  <div class="cartXQ">
      <div class="cartXQ1">
      <div class="cartx1">
          <i class="iconfont icon-icon-copy"></i>
          <b>梦芭莎</b>
          <p>编辑</p>
      </div>
      <div class="cartx2">
          <div>该商品由梦芭莎为您免费配送</div><p>&gt;</p>
      </div>
      <div class="cartx3" v-for="(gg,index) in lig" :key="index">
        <i class="iconfont icon-icon-copy"></i>
        <div class="car31"><img :src="gg.url"/></div>
        <div class="car32">
        <p>{{gg.kl}}</p><p class="cccp"><h5>{{li1}}</h5><h5>{{li2}}</h5><h6>*{{jj}}</h6></p>
        </div>
        <div class="car33">￥{{gg.dl*jj}}</div>
       
      </div>

       <div class="cartx4">
              <b>小计:</b>
              <b>{{hj*jj}}</b><b>元</b>
        </div>
        
      </div>
      <div class="ccf">
        <div><i class="iconfont icon-bao"></i><b>看了又买了</b></div>
      </div>
      <div class="ccf1"></div>
  </div>
  <div class="cartFoot">

  </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
        lig:[],
        jj:"",
        li2:"",
        li:"",
        hj:""
      }
    },
mounted(){
    var _this=this      
        $.get('/cart',function(data){
          var arr=[];    
          var aid=JSON.parse(localStorage.getItem("commentList"))    
        for(var i=0;i<aid.length;i++){
           for(var j=0;j<data.list.length;j++){
             if(aid[i]==data.list[j].id){
              console.log(data.list[j]);
              arr.push(data.list[j]);
             }
           }        
        }
        console.log(arr);
          _this.lig=arr;
      
         var ea=arr.forEach(function(e,index){
              console.log(index)
               e.dl
              _this.hj=e.dl
          })

    });
    document.body.scrollTop=0
    this.jj=localStorage.getItem("shuliang")
    this.li2=localStorage.getItem("li2")
    this.li1=localStorage.getItem("li1")
    console.log(this.jj)
  }
}
</script>


<style scoped>
  i{
     font-style:normal
  }
</style>
