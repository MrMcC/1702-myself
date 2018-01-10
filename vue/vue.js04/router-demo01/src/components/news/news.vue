<template>
    <div class="news">
        <router-link to="/news/Hot">热门</router-link>
        <router-link to="/news/Import">要闻</router-link>
        <div class="news-router">
            <transition name="rout">
                <router-view></router-view>
            </transition>

        </div>
    </div>
</template>
<style>
    .rout-enter-active{
        animation: lightSpeedIn 1s;
    }
    .rout-leave-active{
        animation: lightSpeedOut 1s;
    }
    .news-router>div{
        position: absolute;

    }
</style>