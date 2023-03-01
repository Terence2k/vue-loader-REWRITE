<template>
	<div>
		<!-- 123 -->
		<img class="img" v-if="isShowImg" src="https://img2.baidu.com/it/u=3202947311,1179654885&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500" alt="" />
		<img class="img" v-show="isShowImg2" src="https://img0.baidu.com/it/u=1275095085,1961143463&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800" alt="" />
		<!-- <div v-if="isShowImg">img1</div> -->
		<!-- <div v-show="isShowImg2">img2</div>
		<div v-show="isShowImg">img2 &2</div> -->
		<!-- <h1>v-if & v-show & recycles cyc</h1> -->
		<button @click="handleBtn1">img1</button>
		<button @click="handleBtn2">img2</button>
	</div>
</template>

<script>
export default {
	data: function () {
		return {
			isShowImg: true,
			isShowImg2: false,
		}
	},
	methods: {
		handleBtn1: function () {
			this.isShowImg = !this.isShowImg
		},
		handleBtn2: function () {
			this.isShowImg2 = !this.isShowImg2
		},
	},
}
</script>

<style>
.img {
	width: 300px;
}
</style>
