<template>
  <div class="home">
    <swiper ref="mySwiper" :option="swiperOptions">
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper3.png" alt />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import Swiper2,{ Navigation,Pagination } from 'swiper'
Swiper2.use([Navigation, Pagination])

export default {
  components:{
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        loop:true,
        // pagination: ".swiper-pagination",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
           type: 'custom',
        },
        // Some Swiper option/callback...
      },
    };
  },

};
</script>


