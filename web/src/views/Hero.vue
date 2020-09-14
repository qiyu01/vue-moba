<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-4 d-flex ai-center">
      <router-link to="/">
        <img src="../assets/logo.png" height="30" />
      </router-link>

      <div class="px-2 flex-1 text-white">
        <span class="fs-scale-9">王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link class="text-white fs-sm" to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <!-- end of topbar -->
    <div class="top" :style="{'background-image':`url(${model.banner})`}">
      <div class="info text-white p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v => v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center fs-sm" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{model.scores.survive}}</span>
          </div>
          <router-link tag="span" class="text-grey" to="/">皮肤: 2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div class="main p-3 bg-white">
      <div class="nav jc-around border-bottom pb-2 mb-2">
        <div class="nav-item" :class="{active:active===0}" @click="$refs.tap.swiper.slideTo(0)">英雄初识</div>
        <div class="nav-item" :class="{active:active===1}" @click="$refs.tap.swiper.slideTo(1)">进阶攻略</div>
      </div>

      <swiper
        ref="tap"
        :options="{roundLengths:true}"
        @slide-change="() => active = $refs.tap.swiper.realIndex"
      >
        <swiper-slide>
          <div>
            <div class="d-flex jc-between link text-center pt-1">
              <div class="link-item py-2 d-flex ai-center jc-center">
                <img class="mr-2" src="../assets/sprite/icon_06.png" width="20" alt />
                <span>英雄视频介绍</span>
              </div>
              <div class="link-item py-2 d-flex ai-center jc-center">
                <img class="mr-2" src="../assets/sprite/icon_07.png" width="20" alt />
                <span>一图识英雄</span>
              </div>
            </div>
            <!-- end of link -->
            <div class="skills mt-3 pt-3" v-if="model.skills">
              <el-tabs type="border-card">
                <el-tab-pane v-for="(skill,i) in model.skills" :key="i">
                  <span slot="label">
                    <img :src="skill.icon" width="60" alt />
                  </span>
                  <div class="my-3">
                    <span class="fs-lg fw-bold">{{skill.name}}</span>
                    <span class="ml-3 text-dark-2">(冷却值: {{skill.delay}} 消耗值: {{skill.cost}})</span>
                  </div>
                  <div class="text-dark-1">{{skill.description}}}</div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <!-- end of skills -->
            <mini-card title="出装推荐">
              <div>
                <div class="fs-xl pb-2">顺风出装</div>
                <div class="d-flex border-bottom">
                  <div
                    class="text-center"
                    v-for="(item,i) in model.items1"
                    :key="i"
                    style="width:16.66%"
                  >
                    <img class="item-img" width="46.5" :src="item.icon" alt />
                    <span class="text-nowrap fs-sm mt-1" style="width:48px">{{item.name}}</span>
                  </div>
                </div>

                <div class="fs-xl pb-2 pt-3">逆风出装</div>
                <div class="d-flex">
                  <div
                    class="text-center"
                    v-for="(item,i) in model.items2"
                    :key="i"
                    style="width:16.66%"
                  >
                    <img class="item-img" width="46.5" :src="item.icon" alt />
                    <span class="text-nowrap fs-sm mt-1" style="width:48px">{{item.name}}</span>
                  </div>
                </div>
              </div>
            </mini-card>
            <!-- end of item -->
            <mini-card title="使用技巧">
              <div>{{model.usageTips}}</div>
            </mini-card>
            <mini-card title="团战思路">
              <div>{{model.teamTips}}</div>
            </mini-card>
            <mini-card title="英雄关系">
              <div class="border-bottom">
                <div class="fs-xl pb-3">最佳搭档</div>
                <div class="d-flex pb-3" v-for="(partner,i) in model.partners" :key="i">
                  <img class="mr-2" :src="partner.hero.avatar" width="48" alt />
                  <span class="flex-grow-1 ml-1 pt-2">{{partner.description}}</span>
                </div>
              </div>
            </mini-card>
          </div>
        </swiper-slide>
        <swiper-slide><h2>slide2</h2></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { required: true },
  },
  data() {
    return {
      model: null,
      active: 0,
    };
  },
  mounted() {
    this.fetch();
  },
  watch: {},
  methods: {
    async fetch() {
      const res = await this.$http.get(`heroes/${this.id}`);
      this.model = res.data;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/variables";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
    .info {
      background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      .scores {
        .badge {
          margin: 0 0.25rem;
          display: inline-block;
          width: 1rem;
          height: 1rem;
          line-height: 0.9rem;
          text-align: center;
          border-radius: 50%;
          font-size: 0.6rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  .main {
    .link {
      .link-item {
        width: 48%;
        background-color: #fcfcfc;
        border: 1px solid #eceef0;
      }
    }

    .skills {
      font-family: arial, "Microsoft YaHei", simsun;
      background-color: #fff;
      .el-tabs {
        border: none;
        box-shadow: none;
        .el-tabs__content {
          padding: 0;
          line-height: 1.6;
        }
        .el-tabs__header {
          border: none;
          background-color: #ffff;
          .el-tabs__nav-wrap {
            padding: 0;
            .el-tabs__nav {
              width: 100%;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-around;
              .el-tabs__item {
                border: 2px solid transparent;
                padding: 1px;
                margin: 0;
                height: auto;
                line-height: 1;
                border-radius: 50%;
                transition: none;
                &.is-active {
                  border: 2px solid map-get($colors, "primary");
                }
              }
            }
          }
        }
      }
    }

    .mini-card {
      .item-img {
        border-radius: 50%;
      }
    }
  }
}
</style>