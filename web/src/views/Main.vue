<template>
    <div class="main">
        <div class="topbar bg-black py-2 px-4 d-flex ai-center">
            <router-link to="/">
                <img src="../assets/logo.png" height="30">
            </router-link>
            
            <div class="px-2 flex-1">
                <div class="text-white"><span class="fs-scale-9">王者荣耀</span></div>
                <div class="text-dark-2 fs-xxs"><span class="fs-scale-9">团队成就更多</span> </div>
            </div>
            <button type="button" class="btn bg-primary">立即下载</button>
        </div>

        <div class="bg-primary pt-3 pb-2">
            <div class="nav nav-inverse jc-around pb-1">
                <div class="nav-item active">
                    <router-link class="nav-link" tag="div" to='/'>首页</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to='/about'>攻略中心</router-link>
                </div>
                <div class="nav-item">
                    <router-link class="nav-link" tag="div" to='/'>赛事中心</router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.topbar{
    position: sticky;
    top: 0px;
    z-index: 999;
}
    
</style>