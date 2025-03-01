<script setup>
import { background } from '@unovis/ts/components/timeline/style'
import { resolveComponent } from 'vue'

const props = defineProps({
	icon: Object,
	background: Object,
	iconClass: String,
	customClass: String,
	imageSrc: String,
	imageAlt: String,
})

const defaultClass = [
	' relative bg-slate-800/10 backdrop-blur-xl bg-gray-500/10 dark:bg-slate-800/10 p-8  rounded-2xl  border-2  text-center  overflow-hidden',
]
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<div class="flex flex-col justify-center items-center">
			<div>
				<component v-if="icon" class="size-20" :class="[iconClass]" :is="icon" />
				<img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="h-24 my-4" />
			</div>
			<p class="text-4xl text-gray-200 font-bold">
				<slot name="title" />
			</p>
			<p class="text-xl text-gray-300">
				<slot name="text" />
			</p>
		</div>
		<div class="absolute z-0 -top-96 -left-48">
			<component v-if="background" :is="background" />
		</div>
	</div>
</template>
