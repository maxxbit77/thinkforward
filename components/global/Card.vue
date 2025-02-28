<script setup>
const props = defineProps({
	icon: Object,
	background: Object,
	iconClass: String,
	customClass: String,
	imageSrc: String,
	imageAlt: String,
})

const defaultClass = [
	'  text-white bg-slate-900/50 p-8 text-slate-900 rounded-3xl  border-4 border-gray-300 text-center flex flex-col justify-center items-center',
]
</script>

<template>
	<div :class="[defaultClass, customClass]">
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
</template>
