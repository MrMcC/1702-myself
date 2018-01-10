<template>
	<div class="news">
		<h1>网易新闻主页</h1>
		<router-link to="/news/hot">头条</router-link>
		<router-link to="/news/important">要闻</router-link>
		<div class="news-router">
			<transition name="bounce">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>

	</div>
</template>
<style>
	.news{
		position: absolute;
		top:50px;
		left: 50%;
		transform: translate(-50%,0);
		text-align: center;
	}


	/*.fff-enter-active, .fff-leave-active {*/
		/*transition: opacity 1s*/
	/*}*/
	/*.fff-enter, .fff-leave-active {*/
		/*opacity: 0*/
	/*}*/


	.bounce-enter-active{
		animation: lightSpeedIn 1s;
	}
	.bounce-leave-active{
		animation: lightSpeedOut 1s
	}

	.news-router>div{
		position: absolute;
		left: 32%;
		/*transform: translate(-50%,0);*/
	}
</style>