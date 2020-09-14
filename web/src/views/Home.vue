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
      <div class="nav-wrapper d-flex flex-wrap" :class="{fold:folded}">
        <div class="nav-item mb-3">
        <i class="sprite sprite-news"></i>
        <div class="py-2">爆料站</div>
        </div>
        <div class="nav-item mb-3">
        <i class="sprite sprite-story"></i>
        <div class="py-2">故事站</div>
        </div>
        <div class="nav-item mb-3">
        <i class="sprite sprite-shop"></i>
        <div class="py-2">周边商城</div>
        </div>
        <div class="nav-item mb-3">
        <i class="sprite sprite-exp"></i>
        <div class="py-2">体验服</div>
        </div>
        <div class="nav-item mb-3" v-for="n in 8" :key="n">
        <i class="sprite sprite-des"></i>
        <div class="py-2">版本介绍</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm" @click="folded=!folded">
        <i class="sprite sprite-arrow mr-1" :class="{fold:folded}"></i>
        <span>{{folded?'展开':'收起'}}</span>
      </div>
      
    </div>
    <!-- end of nav-icons -->

    

    <m-list-card icon="menu1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news,i) in category.newsList" :key="i">
              <span class="text-info">[{{news.categoryName}}]</span>
              <span class="px-2">|</span>
              <span class="flex-1 text-dark text-ellipsis pr-2">{{news.title}}</span>
              <span class="text-grey fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
      
    </m-list-card>
    <!-- end of card-news-->

    
    <m-list-card icon="card-hero" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link tag="div" :to="`/heroes/5f5c30f60817533ff085aeef`" class="p-2 text-center" style="width:20%;" v-for="(hero,i) in category.heroList" :key="i">
              <img :src="hero.avatar" alt="" class="w-100">
              <div>{{hero.name}}</div>
          </router-link>
        </div>
        
      </template>
      
    </m-list-card>

    <!-- end of card-hero -->
    <m-card icon="news" title="精彩视频"></m-card>
    <m-card icon="news" title="图文攻略"></m-card>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  filters: {
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  data() {
    return {
      folded:true,
      swiperOptions: {
          autoplay:true,
          loop : true,
          pagination: {
            el: '.pagination-home'
          }
        },
        newsCats:[],
        heroCats:[],
    }
  },
  mounted(){
    this.fetchNewsCats()
    this.fetchHeroCats()
  },
  methods: {
    async fetchNewsCats(){
      const res=await this.$http.get('news/list')
      this.newsCats=res.data
    },
    async fetchHeroCats(){
      const res=await this.$http.get('heroes/list')
      this.heroCats=res.data
    },
  }
}
</script>

<style lang="scss">
@import  '../assets/scss/variables';
.home{
  .nav-icons{
    .nav-wrapper{
      overflow: hidden;
      &.fold{
      height: 62px;
      }
    }
  }
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


}

  

  
</style>


