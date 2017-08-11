<template>
  <div class="Rgs">
    <div class="RgsTop">
    <router-link to="/login"><i class="iconfont icon-houtui"></i></router-link><router-link to="/"><i class="iconfont icon-fangzi4"></i></router-link>
      <router-link to="/login"><i class="iconfont icon-wode"></i></router-link><router-link to=""><i class="iconfont icon-icon"></i></router-link>
    </div>
    <div class="RgsST">
    <div class="STYZ"><input type="" name="" placeholder="请输入图片验证码"><img id="validateCodeImg" class="mohn" src="http://www.fengbuy.com/ucenter-client/index/validateCode/" @click="code"></div>
    <div class="Rgsphone"><input type="" name="" placeholder="请输入手机号"><p>获取短信验证码</p> </div>
      <input type="" name="" placeholder="请输入短信验证码" style="border-bottom: 1px solid #e2e2e2 ;">
      <div class="RgsYJ"><input type="" name="" placeholder="请设置8-20位登录密码"><i class="iconfont icon-zhengyan" @click="footer" :class="{hot:color}"></i></div>
       <div class="err-tips">注册即视为同意<a href="/account/regagreement/" style="color:#e30265">《梦芭莎用户注册协议》</a></div>
       <div class="RgsZC">注册</div>
    </div>
   
  </div>
</template>

<script>
export default {
  data(){
    return {
      color:true
    }
  },
  methods:{
    footer(){
      this.color=!this.color;
    },
    code(){
        $(".mohn").on("click",function(){
            var ran=Math.random() 
          $("#validateCodeImg").attr("src",'http://www.fengbuy.com/ucenter-client/index/validateCode/?'+ran);
            $("#validateCode").focus();      
         })    
    }
  },
}
</script>


<style scoped>
  
</style>
