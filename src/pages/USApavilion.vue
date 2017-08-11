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
		<div class="dybox">
	<img src="http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/e6b6f06699e246529e1bf1b571e29f30_source.jpg" class="topimg">
		<div class="swiper-container">
		    	<div class="swiper-wrapper" id="nybox">
	
		        <div class="swiper-slide">
		        <img src="http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/64f085885db2414c93e2c273e79eae90_0.jpg">
		        <img src="http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/64f085885db2414c93e2c273e79eae90_128.jpg">
		        <img src="http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/64f085885db2414c93e2c273e79eae90_256.jpg">
		        <img src="http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/64f085885db2414c93e2c273e79eae90_384.jpg">
		        <img src="http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/64f085885db2414c93e2c273e79eae90_512.jpg">
		        </div>
	
		        <div class="swiper-slide">
		        <img src="http://i0.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/6db7ab647da744c3b71879bf20f2861a_0.jpg">
		        <img src="http://i1.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/6db7ab647da744c3b71879bf20f2861a_128.jpg">
		        <img src="http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/6db7ab647da744c3b71879bf20f2861a_256.jpg">
		        <img src="http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/6db7ab647da744c3b71879bf20f2861a_384.jpg">
		        <img src="http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/6db7ab647da744c3b71879bf20f2861a_512.jpg">
		        </div>
		        <div class="swiper-slide">
		        <img src="http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/ca778b2055664422afb59ba9351d6e8c_0.jpg">
		        <img src="http://i4.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/ca778b2055664422afb59ba9351d6e8c_128.jpg">
		        <img src="http://i5.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/ca778b2055664422afb59ba9351d6e8c_256.jpg">
		        <img src="http://i6.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/ca778b2055664422afb59ba9351d6e8c_384.jpg">
		        <img src="http://i7.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/cut/ca778b2055664422afb59ba9351d6e8c_512.jpg">
		        </div>

		    </div>
		    <div class="swiper-pagination">
		    </div>
		     <img src="http://i2.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170731/c450e29795c847bfb7e01fdc4bebba33_source.jpg">
		        <img src="http://i3.mbscss.com/img/decorate/10/eaaa7f0ae80441edaecc0072fb8707a1/20170801/48cab7c4d5ad4f2c83062021b561cd9c_source.gif">
		        </div>
		</div>
		<div class="box1" >
			<div v-for="e in ll"><img :src="e.url5" style=""></div>
			             			
		</div>
		<div class="box2" @click="handee"><img src="http://i2.mbscss.com/img/moonbasa/2014/mobile/go_top.png" alt=""></div>
		<div class="box21" @click="hand" v-if="bool1"><img src="http://i2.mbscss.com/img/moonbasa/2014/mobile/topic_category.png"></div>

		<div class="box22" v-if="bool">
			<a href="#">无钢圈</a>
			<a href="#">光面无痕</a>
			<a href="#">集中聚拢</a>
			<a href="#">大罩杯文胸</a>
			<a href="#">运动文胸</a>
			<a href="#">内裤</a>
			<a href="#">打底</a>
			<a href="#">家居</a>
			<a href="#">泳衣</a>
			<a href="#">青春内衣</a>
		
		</div>
		<div class="box21" v-if="bool" @click="handle" ><img src="http://i2.mbscss.com/img/moonbasa/2015/mobile/topic_close.png" alt=""></div>
		<div class="box3">
			<div v-for="e in ll"><img :src="e.url6"></div>
			
		</div>
		<div class="box4" v-for="e in ll">
			<img :src="e.url7">
			
		</div>

		<div class="box5" v-for="i in list">
	
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
			ll:[],
			bool:false,
			bool1:true
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
		 	hand(){
				
				this.bool=!this.bool;
				this.bool1=!this.bool1
			},
			handle(){
				
				this.bool=!this.bool;
				this.bool1=!this.bool1
			},
			handee(){
				document.body.scrollTop=0
			},
      	menu() {
        this.scroll = document.body.scrollTop;
        
         var _this=this
			if(document.body.scrollTop>document.getElementById("app1").clientHeight-768){	
						$.get("/index",function(data){
							_this.list=[..._this.list,...data.laaa]
					
						})
					}
		     }
	    },
	}
</script>

<style>
.swiper-slide{
	width: 100%;height: 6.5rem;
}
.swiper-slide img{
		width: 100%;height:1.3rem;
}
.dybox img{
		display: block;width: 100%
}
.topimg{
	width: 100%
}
.box21 img{
	 width: 1.32rem;
    height: 0.96rem;
    position: fixed;
   left: 0.2rem;
    bottom: 1rem;
    opacity: 1;
    z-index: 999
}

.box22{
	width: 2.2rem;height: 4.6rem;
	position: fixed;
   left: 0.2rem;
   background: #000;
   bottom: 2rem;border-radius:10px;opacity: 0.7;z-index: 99;display: flex;
   flex-direction: column;justify-content: space-around; z-index: 999

}
.box22 a{
	font-size: 0.3rem;color: white;margin-left: 0.4rem;
}
</style>