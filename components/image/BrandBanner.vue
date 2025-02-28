<script setup>
const images = import.meta.glob('@/public/logos/*.svg', { eager: true })
const imagePaths = Object.values(images).map((module) => module.default)
</script>

<template>
	<div class="bg-gray-300/50 w-full h-[200px] rounded-lg">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<img v-for="(image, index) in imagePaths" :key="index" :src="image" class="size-44" />
		</div>
	</div>
</template>
