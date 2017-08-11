<template>
  <div id="app1" class="app1">
  <div>
    
    <router-view></router-view>
    <div class="foot">
      <div id="footer" class="login-area">
        <div class="login" style="width:100%;height:0.5rem;background:white">

            <span id="LoginArea" >
                    <a rel="nofollow" href=""><router-link to="/login">登入</router-link></a><span class="lg-bar">|</span><a rel="nofollow" href=""><router-link to="/register">注册</router-link></a>
            </span>

            <span class="new-fr"><a rel="nofollow" href="">反馈</a></span>
        </div>
        <div class="version">
            <a rel="nofollow" id="toClient" href="">客户端</a>
            <a rel="nofollow" class="on" href="">触屏版</a>
            <a rel="nofollow" href="">电脑版</a>
        </div>
        <div class="copyright"><a href="" title="梦芭莎移动官方网站">梦芭莎</a> © moonbasa.com </div>
        <div class="copyright">广州摩拉网络科技有限公司</div>
    </div>
    </div>
  </div>
  </div>
</template>

<script>
 
export default {
    data () {
  return {
    scroll: '',
    MyScroll:0,
  
  }
  },
   methods: {
   menu() {
    this.scroll = document.body.scrollTop;
  
   }
  },
  mounted() {
   window.addEventListener('scroll', this.menu)
   console.log()
  },
  methods:{
    
  }
}

</script>

<style>

.foot{
  height: 3.5rem;
}
 .version{
  width: 100%;font-size: 12px;

 } 
 .version a{
  line-height: 1rem;
   font-size:0.2rem;
   color: black;margin-left: 0.2rem;
 }
 .copyright{
  font-size: 12px
 }
.login-area {
    background-color: #fff;
    margin: 0 auto;
    text-align: center;
    width: 100%;
}
.login-area .login {
    border-bottom: 1px solid #e5e5e5;
    text-align: left;
    font-size:12px;
    color: black;
}
.login-area .new-fr{
  
}

.hot-active{
  color:red;
}
.app1{
  width: 100%;
  display: flex;
  flex-direction: column;
 
}
.app1 .top{
  width: 100%;height: 0.9rem; 
  background: black; 
}

.app1 .top img{
   height: 0.9rem;
  width: 5.7rem;
    float: left
}
.app1 .top p{

  font-size: 0.5rem;
  line-height: 0.9rem;
  text-align: center;
  color: white;


}
 .app1 .top1{
  width: 100%;height: 0.9rem;
} 
.app1 .top1 ul{
  display: flex;
  justify-content: space-around
}
.app1 .top1 li{
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.9rem;

}
.app1 .top1 li a{
  color: black;
}
</style>
