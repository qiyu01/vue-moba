<template>
<div class="home">
  <swiper :options="swiperOption">
    <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper1.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper2.jpeg" alt />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/swiper/swiper3.png" alt />
      </swiper-slide>
    <!-- <swiper-slide v-for="slide in swiperSlides" :key="slide">I'm Slide {{ slide }}</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        
      }
    },
    // mounted() {
    //   setInterval(() => {
    //     console.log('simulate async data')
    //     if (this.swiperSlides.length < 10) {
    //       this.swiperSlides.push(this.swiperSlides.length + 1)
    //     }
    //   }, 3000)
    // }
  }
</script>