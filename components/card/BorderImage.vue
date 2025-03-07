<script setup>
import { computed } from 'vue'

const props = defineProps({
	src: String,
	alt: String,
	showDescription: Boolean,
})
</script>

<template>
	<div class="relative border border-gray-500 rounded-2xl overflow-hidden">
		<img :src="src" :alt="alt" class="w-full h-full object-bottom rounded-lg" />
		<div v-if="showDescription" class="absolute h-52 w-full bg-slate-900 bottom-[-45px] fade-mask-top">
			<div class="absolute top-[50%] px-12 w-full">
				<div class="text-customLight text-2xl">
					<slot name="title" />
				</div>
				<div class="text-customLight text-2xl">
					<slot name="description" />
				</div>
			</div>
		</div>
	</div>
</template>
