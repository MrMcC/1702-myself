<template>
    <div>
        <h1>🍎</h1>
        <button @click="addOne()">AddOne 🍎</button>
        <button @click="delOne()">DelOne 🍎</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                price: 2
            }
        },
        methods:{
            addOne(){
                //调用vuex下actions的increase方法
                //dispatch (调用的方法名)
                this.$store.dispatch('increase',this.price)

            },
            delOne(){
                this.$store.dispatch('decrease',this.price)
            }
        }
    }
</script>