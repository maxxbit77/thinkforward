<script setup>
defineProps({
	title: String,
	description: String,
	background: Object,
})
</script>
<template>
	<div
		class="w-full h-full custom-blur border border-gray-500 relative rounded-lg text-center p-2 overflow-hidden flex-grow"
	>
		<div class="z-10 text-left">
			<h3 class="mb-2">
				<slot name="title" />
			</h3>
			<div class="dark:text-gray-300/80 text-customDark text-lg">
				<slot name="description" />
			</div>
		</div>

		<div class="absolute top-[-800px] -left-44 z-0">
			<component v-if="background" :is="background" class="h-[2000px]" />
		</div>
	</div>
</template>
