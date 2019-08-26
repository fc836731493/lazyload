<template>
  <div class="hello">
     <el-carousel  >
      <el-carousel-item v-for="(img,index) in imgs" :key="index">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      imgs:[
        "http://img3.imgtn.bdimg.com/it/u=2904962173,2227732182&fm=26&gp=0.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566798475593&di=aefb3b53652ac3b43d1fbcec58fe9dba&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201504%2F23%2F20150423H3150_zTKfk.jpeg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3441742992,2765570575&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3491996894,3487540981&fm=26&gp=0.jpg"
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-carousel_item img{
  width: 100%;

}
.el-carousel{
  width: 500px;
  height:300px;

}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
