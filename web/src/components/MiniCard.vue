<template>
    <div class="mini-card mb-2 pt-1">
        <h3 class="pl-4">{{title}}</h3>

        <slot></slot>
    </div>

</template>

<script>
export default {
    props:['title']
}
</script>

<style lang="scss">
h3{
    font-size: 1.2308rem;
    background: url('../assets/sprite/icon_11.png') no-repeat 0 0.02rem;
    background-size: 1rem 1rem;
}
    
</style>