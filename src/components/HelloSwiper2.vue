<template>
    <swiper :options="swiperOption">
    <swiper-slide v-for="(banner,index) in banners" :key="index">
        <img :src="banner.url" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
   name:"swipers",
       data(){
           return{
              banners:[],
              swiperOption: {
                  autoplay:true,
                  pagination: {
                        el: '.swiper-pagination'
                    }
              }
           }      
   } ,
   created(){
       this.$axios.get("https://www.apiopen.top/meituApi?page=1")
       .then(res => {
           this.banners = res.data.url;
       })
       .catch(error => {
           console.log(error);
       })
   }
}
</script>
<style scoped>
img{
    width:500px;
    height:350px;
}
</style>
