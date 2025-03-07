<script setup>
defineProps({
	title: String,
	description: String,
	background: Object,
})
</script>
<template>
	<div
		class="w-full h-full custom-blur border border-gray-500 relative rounded-lg text-center flex flex-col justify-center items-center space-y-4 p-4 overflow-hidden"
	>
		<div class="z-10">
			<div class="text-3xl">
				<slot name="title" />
			</div>
			<div class="text-gray-400 text-lg">
				<slot name="description" />
			</div>
		</div>

		<div class="absolute top-[-800px] -left-44 z-0">
			<component v-if="background" :is="background" class="h-[2000px]" />
		</div>
	</div>
</template>
