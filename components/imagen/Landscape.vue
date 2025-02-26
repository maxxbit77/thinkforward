<script setup>
defineProps({
	src: String,
	alt: String,
	title: String,
})
</script>

<template>
	<div class="relative">
		<div class="h-[600px] w-full bg-center" :style="{ backgroundImage: `url(${src})` }" />
		<div class="absolute z-10 text-white top-4 left-4 flex flex-col bg-slate-900/50 p-4 rounded-lg max-w-[400px]">
			<p class="text-3xl font-bold">{{ title }}</p>
			<p class="text-md text-gray-300 font-bold">
				<slot />
			</p>
		</div>
	</div>
</template>
