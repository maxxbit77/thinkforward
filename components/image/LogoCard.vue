<script setup>
const images = import.meta.glob('@/public/logos/*.svg', { eager: true })
const imagePaths = Object.values(images).map((module) => module.default)
</script>

<template>
	<div class="flex justify-evenly items-center bg-gray-300/50 w-full h-[200px] rounded-lg">
		<img v-for="(image, index) in imagePaths" :key="index" :src="image" class="size-44" />
	</div>
</template>
