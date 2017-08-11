<template>
	<div class="box">
	<div class="top" >
      <img src="http://i3.mbscss.com/img/moonbasa/2016/mobile/xy/M11_30_174758_01.jpg" >
      <p class="iconfont icon-fangdajing"></p>
    </div>
    <div class="top1" >
      <ul>
       <li><router-link to="/user">首页</router-link></li> 
       <li><router-link to="/women">女装</router-link></li> 
       <li><router-link to="/un">内衣</router-link></li> 
       <li><router-link to="/men">男装</router-link></li> 
       <li><router-link to="/usa">美国馆</router-link></li> 
       <li><router-link to="/avenuel">名品馆</router-link></li> 
      </ul>
        
    </div>
		<div class="swiper-container">
		    <div class="swiper-wrapper" >
		        <div class="swiper-slide"><img src="http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/a957fc31ee2c44b7b633505215e139a1_source.jpg"></div>
		        <div class="swiper-slide"><img src="http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/06a933d39d6546308ec609edc9c8e780_source.jpg"></div>
		        <div class="swiper-slide"><img src="http://i0.mbscss.com/img/decorate/10/15569b3d43d34ee4ae9ce6f58ec612e4/20170801/bca966d067454bd5baea1c52d1ef7f3b_source.jpg"></div>
		    </div>
		  
		</div>
		<div class="box1" >
			<div v-for="e in ll"><img :src="e.url1" style=""></div>
			<a onclick=""  style="top: 46.4900%;
                     left: 28.5400%; 
                    width: 18.0600%; 
                    height: 10.3800%;background:red;
                     display: block;
    				position: absolute;"></a>
    		<a onclick="location.href =''" tempurl="" style="top: 46.0200%;
                     left: 53.400%; 
                    width: 18.6100%; 
                    height: 10.3800%;
                  background:red;
                     display: block;
    				position: absolute;"></a>
    		<a onclick="location.href =''" tempurl="" style="top: 46.3100%;
                     left: 76.0400%; 
                    width: 16.8100%; 
                    height:10.1500%;
                    background:red;
                     display: block;
    				position: absolute;"></a>	
             <a onclick="location.href =''" tempurl="" style="top:  57.6300%;
                     left: 75.4900%; 
                    width: 19.5800%; 
                    height: 10.3400%;
                    background:red;
                     display: block;
    				position: absolute;"></a> 
              <a onclick="location.href =''" tempurl="" style="top:  57.4600%;
                     left: 28.8200%; 
                    width: 18.8900%; 
                    height: 10.5200%;
                    background:red;
                     display: block;
    				position: absolute;"></a> 
              <a onclick="location.href =''" tempurl="" style="top: 45.900%;
                     left: 5.2100%; 
                    width: 19.1700%; 
                    height: 10.6300%;
                    background:red;
                     display: block;
    				position: absolute;"></a>  
              <a onclick="location.href =''" tempurl="" style="top:  57.7600%;
                     left: 52.5700%; 
                    width: 20.2800%; 
                    height: 10.3400%;
                    background:red;
                     display: block;
    				position: absolute;"></a>      
               <a onclick="location.href =''" tempurl="" style="top: 57.6400%;
                     left: 5.4900%; 
                    width: 18.1900%; 
                    height: 10.3800%;
                    background:red;
                     display: block;
    				position: absolute;"></a>                    			
		</div>
		<div class="box2" @click="handee"><img src="http://i2.mbscss.com/img/moonbasa/2014/mobile/go_top.png" alt=""></div>
		<div class="box3">
			<div v-for="e in ll"><img :src="e.url2"></div>
			
		</div>
		<div class="box4" v-for="e in ll">
			<img :src="e.url3">
			
		</div>

		<div class="box5" v-for="(i,index) in list" :key="index">
			<img :src="i.url5"  alt="">
			<img :src="i.url6" alt="">
			<img :src="i.url7" alt="">
			<img :src="i.url8" alt="">
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
			items:"",
			list:[],
			qu:document.body.scrollTop,
			scroll:"",
			hande:"",
			ll:[]
		   }
		},
		beforeMount(){
		
	},
		mounted(){
			 var _this=this
			window.addEventListener('scroll', this.menu);
			 $.get("/api/index",function(data){
			_this.ll=data.ls;
			
			});
			var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			paginationClickable: true,
			autoplay: 3000,
			loop : true
			});
		},
		updated(){
		},
		 methods: {
		 	handee(){
		 		document.body.scrollTop=0
			},
      	menu() {
        this.scroll = document.body.scrollTop;
        
         var _this=this
			if(document.body.scrollTop>document.getElementById("app1").clientHeight-668){	
						setTimeout(function(){
							$.get("/index",function(data){
							_this.list=[..._this.list,...data.laaa]
						
						})
						},1000)
					}
		     }
	    },
	}
</script>

<style scoped>
	.swiper-slide{
		height: 3.6rem;
	}
	.swiper-slide img{
		width: 100%;height: 3.6rem;
	}
</style>