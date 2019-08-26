<template>
    <div>
    <swiper :options="swiperOption"  >
           
            <swiper-slide>
                <img src="http://img3.imgtn.bdimg.com/it/u=2904962173,2227732182&fm=26&gp=0.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                 <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3441742992,2765570575&fm=26&gp=0.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                 <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3491996894,3487540981&fm=26&gp=0.jpg" alt=""></swiper-slide>  
            <div class="swiper-pagination"  slot="pagination"></div>                    
    </swiper>

      <div>
          
      </div>

    </div>
</template>
<script>
export default {
   name:"swipers",
       data(){
           return{
              swiperOption: {
                  autoplay:true,
                  pagination: {
                        el: '.swiper-pagination'
                    }
              }
           }      
   } 
}
</script>
<style scoped>
img{
    width:500px;
    height:350px;
}
</style>
