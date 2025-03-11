<script setup>
const props = defineProps({
	icon: Object,
	iconClass: String,
	customClass: String,
	imageSrc: String,
	imageAlt: String,
	background: Object,
})

const defaultClass = [' custom-blur rounded-xl border-2 text-center overflow-hidden ']
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<div class="flex flex-col justify-center items-center px-4 space-y-4">
			<div class="mt-8">
				<component v-if="icon" class="size-20" :class="[iconClass]" :is="icon" />
				<img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="h-24 my-4" />
			</div>
			<h3 class="font-bold min-h-64">
				<slot name="title" />
			</h3>
			<h6 class="!dark:text-customDark">
				<slot name="text" />
			</h6>
		</div>
		<div class="absolute top-[-400px] left-[-300px] z-0 rotate-90">
			<component v-if="background" :is="background" class="size-[1000px]" />
		</div>
	</div>
</template>
