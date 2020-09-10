<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper3.png" alt />
      </swiper-slide>

      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
  <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
        <i class="sprite sprite-news"></i>
        <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
      
    </div>
    <!-- end of nav-icons -->

    

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-2" v-for="(news,i) in category" :key="i">
              <span>[{{news.categoryName}}]</span><span>|</span><span>{{news.title}}</span>
              <span>{{news.date}}</span>
        </div>
      </template>
      
    </m-list-card>
    <!-- end of card-news-->
    <m-card icon="card-hero" title="英雄列表"></m-card>
    <m-card icon="news" title="精彩视频"></m-card>
    <m-card icon="news" title="图文攻略"></m-card>





  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  <p>aaaaaa</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptions: {
          pagination: {
            el: '.pagination-home'
          }
        },
        newsCats:[
          {
            name:"热门",
            newsList:new Array(5).fill({}).map(()=>({
                categoryName:'公告',
                title:'狄某有话说 | 嚣张“演员”在线强卖',
                date:'06/01'
              }))
          },
          {
            name:"新闻",
            newsList:new Array(5).fill({}).map(()=>({
                categoryName:'公告',
                title:'狄某有话说 | 嚣张“演员”在线强卖',
                date:'06/01'
              }))
          },
          {
            name:"公告",
            newsList:new Array(5).fill({}).map(()=>({
                categoryName:'公告',
                title:'狄某有话说 | 嚣张“演员”在线强卖',
                date:'06/01'
              }))
          },
          {
            name:"活动",
            newsList:new Array(5).fill({}).map(()=>({
                categoryName:'公告',
                title:'狄某有话说 | 嚣张“演员”在线强卖',
                date:'06/01'
              }))
          },
          {
            name:"赛事",
            newsList:new Array(5).fill({}).map(()=>({
                categoryName:'公告',
                title:'狄某有话说 | 嚣张“演员”在线强卖',
                date:'06/01'
              }))
          },
        ],
    }
  },
  mounted() {
    // console.log(this.newsCats)
  },
}
</script>

<style lang="scss">
@import  '../assets/scss/variables';
  .pagination-home{
    .swiper-pagination-bullet{
      opacity: 1;
      border-radius: 0.1538rem;
      background: map-get($colors, 'white' );
      &.swiper-pagination-bullet-active{
        background: map-get($colors, 'info' );
      }
    }
  }

  .nav-icons{
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item{
      width: 25%;
      border-left: 1px solid $border-color;
      &:nth-child(4n+1){
        border-left:none ;
      }
    }
  }

  
</style>


