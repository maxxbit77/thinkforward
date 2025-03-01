<script setup>
const images = import.meta.glob('@/public/logos/*.svg', { eager: true })
const imagePaths = Object.values(images).map((module) => module.default)
</script>

<template>
	<div
		class="relative bg-gray-500/10 dark:bg-slate-800/10 w-full h-[300px] rounded-xl border border-gray-300 max-w-7xl mx-auto overflow-hidden"
	>
		<BackgroundsColorsBlue class="absolute -top-20 left-5 z-1" />
		<BackgroundsColorsBlue class="absolute -top-32 right-0 z-1 rotate-45" />

		<div class="flex justify-center items-center h-full gap-8 backdrop-blur-2xl">
			<img v-for="(image, index) in imagePaths" :key="index" :src="image" class="size-44" />
		</div>
	</div>
</template>
