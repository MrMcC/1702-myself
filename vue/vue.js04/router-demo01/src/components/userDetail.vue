<template>
    <div class="userDetail">
        <!--<button @click="getParams()">获取参数</button>-->
        姓名:{{userInfo.userName}}
        id: {{userInfo.userId}}<br>
        年龄:{{userInfo.userAge}}
        <router-link to="/">返回首页</router-link>
    </div>
</template>
<script>
    export default{
        created(){
           var id = Number(this.$route.params.id);
           for(var i =0; i< this.userList.length; i++){
               if(this.userList[i].userId == id){
                   this.userInfo = this.userList[i]
               }
           }
        },
        data(){
            return{
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
            getParams(){
                //获取路径后缀那那个id就是home页的+item.userId 字符串
                console.log(this.$route.params.id)
            }
        }
    }
</script>