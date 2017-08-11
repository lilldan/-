<template>
  <div class="det">
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img :src="lig.url1">
            </div>
           <div class="swiper-slide">
                <img :src="lig.url2">
            </div>
             <div class="swiper-slide">
                <img :src="lig.url3">
            </div>
             <div class="swiper-slide">
                <img :src="lig.url4">
            </div>
             <div class="swiper-slide">
                <img :src="lig.url5">
            </div>
             <div class="swiper-slide">
                <img :src="lig.url6">
            </div>

        </div>
       
    </div>
    <div class="detjug">
        <span>￥299.00</span>
        <div class="swiper-pagination">
        </div>
    </div>
    <div class="detjug1">
        <div class="detjugfont">梦芭莎圆领荷叶边中袖收腰A摆蕾丝连衣裙(467117203)</div>
        <div><i></i></div>
    </div>
    <div class="dj2">
        此款热促中！全场任选2件8折、3件7折，满赠新款蚕丝面膜，领券至高再减150>>>    
    </div>
    <div class="dj3">
      <b>7天无条件退换货</b>
      <b>支持货到付款</b>
      <b>由梦芭莎发货</b>
      <b>满180.0免运费</b>
    </div>
    <div class="detfoot">
      <div class="detft1">
        <span><i class="iconfont icon-zhengyan"></i>收藏</span>
        <span><i class="iconfont icon-icon"></i>购物车</span>
      </div>
      <div class="dft2" @click="jiaru">加入购物车</div>
      <div class="dft3">立即购买</div>
    </div>
    <router-link :to="{name:'Cart',query:{id:lig.id}}" ><div class="detfoot2" @click="hanhan" v-show="hh">
        确定
    </div></router-link>
    <div class="detfoot3" v-show="hh" >
        <div class="cartx3">
        
        <div class="car31"><img :src="pp.url"/></div>
        <div class="car32">
          <p>{{pp.kl}}</p><p class="cccp">{{ggh}}<h5>{{ggh1}}</h5><h6>*{{jj}}</h6></p>
        </div>
        <div class="car33">￥{{pp.dl*jj}}</div>
      </div>
      <div class="dt1">
          <div>
            <span>颜色</span>
            <ul class="li1" >
                <li v-for="(ll,index) in ps" @click="li1(index)" :key="index">{{ll}}</li>
            </ul>
          </div>
          <div>
            <span>尺码</span>
            <ul class="li2"  ><li v-for="(ll,index) in sp" @click="li2(index)" :key="index">{{ll}}</li></ul>
          </div>
      </div>
      <div class="dt2">
          <div>购买数量</div>
          <div class="gg2"><div @click="jianjian">-</div><input type="text" name="" :value="jj"><div @click="jiajia">+</div></div>
      </div>
    </div>
    <div class="ljdd" v-show="hh" @click="linj"></div>
  </div>
</template>

<script>
export default {
   data(){
      return{
        lig:{},
        pp:[],
        hh:false,
        ps:[],
        sp:[],
        ggh:"",
        ggh1:"",
        jj:"1"
      }
    },
    methods:{
        hanhan(){

          var _this=this;
          var lig=_this.lig.id
          console.log(1)
          var a=JSON.parse(localStorage.getItem("commentList"));
          if(a===null){
           var a=[];
            a.push(lig);
          }
          else{
      
          if(a.indexOf(lig)==-1){
           a.push(lig); 
          
          }
           
        }
         
         localStorage.setItem("commentList",JSON.stringify(a));
         localStorage.setItem("shuliang",(this.jj))
        },
        jiaru(){
          this.hh=true;
          $(".detfoot3").slideDown("slow")
        },
        linj(){
          this.hh=false
        },li1(index){
            localStorage.setItem("li1",($(".li1").find("li").eq(index).html()));
            this.ggh=$(".li1").find("li").eq(index).html()
        },
        li2(index){
            localStorage.setItem("li2",($(".li2").find("li").eq(index).html()));
            this.ggh1=$(".li2").find("li").eq(index).html()

        },
        jiajia(){
            this.jj++
        },
        jianjian(){
            if(this.jj>1){
               this.jj--
            }
        }

    },
    created(){
      console.log(11)
        var _this=this
              $.get('/api',function(data){
                var id=_this.$route.query.id
           
                _this.lig=data.lsl[id-1]
             
              });
              document.body.scrollTop=0
              $.get('/cart',function(data){
                var id=_this.$route.query.id
             
                _this.pp=data.list[id-1]
                _this.ps=[..._this.pp.ul]
                _this.sp=_this.pp.cm
                console.log(  _this.sp)
                console.log( _this.ps)
              });
             
    },
  mounted(){
      var mySwiper = new Swiper('.swiper-container',{
     pagination : '.swiper-pagination',
   paginationType : 'custom',
      autoplay: 3000,
      loop : true,
      uniqueNavElements :false,
     paginationCustomRender: function (swiper, current, total) {
      return '<div>'+current  +"/"+ total+'</div>'
    }

  })

 },
   
}
</script>


<style scoped>
  .ljdd{
    width: 100%;height: 100%;position: fixed;z-index:1000;background: black;top: 0;opacity: 0.3;
  }
</style>
