<template>
  <div class="login">
  <div class="loginTop"><router-link to="/"><b>&lt;</b></router-link><p>登录</p></div>
    <div class="loginInput">
    <div>
      <i class="iconfont icon-rentou"></i>
            <input type="text" name="" placeholder="邮箱/手机号/会员编号"> 
           <p class="iconfont icon-iconccc"></p>
     </div>
      <div>
      <i class="iconfont icon-suo"></i>
      <input :type="type" name="" placeholder="请输入密码" >
       <i class="iconfont icon-xianshimima " v-if="foll" @click="foll1"></i>
       <i class="iconfont icon-zhengyan yj"  @click="foll2" v-else></i>
       <p class="iconfont icon-iconccc"></p></div>
      <div>
      <i></i><input type="text" name=""><span><img id="validateCodeImg" class="mohn" src="http://www.fengbuy.com/ucenter-client/index/validateCode/" @click="code"></span>
      </div>
    </div>
    <div class="loginFoot">登录</div>
    <div class="loginFoot1">
      <div class="loginfont"><h5 style="color:black">忘记密码？</h5><h5>无密码登录</h5><h5>注册新账号</h5>
     
      </div>
       <div class="logincp">
      
       </div>
       <p>使用合作账号登录</p>
       <div class="loginQQ">
         <img src=" http://t.moonbasa.com/img/account/sin.png">
         <img src="http://t.moonbasa.com/img/account/qq.png">
       </div>
    </div>
  </div>
</template>

<script>
export default {
   methods:{
      code(){
        //图片验证码
          $(".mohn").on("click",function(){
            var ran=Math.random() 
          $("#validateCodeImg").attr("src",'http://www.fengbuy.com/ucenter-client/index/validateCode/?'+ran);
            $("#validateCode").focus();      
         })       
      },
      foll1(){
          this.foll=!this.foll
          this.type="text";

      },
      foll2(){
          this.foll=!this.foll
           this.type="password"

      }

   },
   data(){
    return {
      foll:1,
      type:"password"
    }
   }
}
</script>

<style scoped>

</style>
