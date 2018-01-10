<template>
    <div class="userDetail">
        <h1>我是userDetail</h1>
        姓名:{{userInfo.userName}}
        年龄:{{userInfo.userAge}}
        id号:{{userInfo.userId}}
        <!--<button @click="getParams()">获取参数</button>-->
    </div>
</template>
<script>
    export default{
        //实例在创建完成后被调用???
        created(){
            //获取传过来的id
            var id = Number(this.$route.params.id)
            for (var i=0; i< this.userList.length; i++){
                if(this.userList[i].userId === id){
                    this.userInfo = this.userList[i]
                }
            }
        },
        data(){
            return {
                userInfo:{},
                userList:[
                    { userId : 1001, userName : '李达康', userAge : 18},
                    { userId : 1002, userName : '高玉良', userAge : 20},
                    { userId : 1003, userName : '祁同伟', userAge : 16},
                    { userId : 1004, userName : '侯亮平', userAge : 22},
                    { userId : 1005, userName : '白百何', userAge : 33}
                ]
            }
        },
        methods:{
            //是个字符串
            getParams(){
                console.log(this.$route.params.id)
            }
        }
    }
</script>
<style>
    .userDetail{
        position: absolute;
        top:50px;
        left: 50%;
        transform: translate(-50%,0);
    }
</style>