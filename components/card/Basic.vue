<script setup>
const props = defineProps({
	icon: Object,
	iconClass: String,
	customClass: String,
	imageSrc: String,
	imageAlt: String,
	background: Object,
})

const defaultClass = [' custom-blur  rounded-2xl border-2 text-center overflow-hidden ']
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<div class="flex flex-col justify-center items-center h-full z-20 absolute top-0 left-0 px-8">
			<div>
				<component v-if="icon" class="size-20" :class="[iconClass]" :is="icon" />
				<img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="h-24 my-4" />
			</div>
			<p class="text-4xl font-bold text-customDark dark:text-customLight">
				<slot name="title" />
			</p>
			<h6 class="!dark:text-customDark">
				<slot name="text" />
			</h6>
		</div>
		<div class="absolute top-[-400px] left-[-300px] z-0 rotate-90">
			<component v-if="background" :is="background" class="size-[1000px]" />
		</div>
	</div>
</template>
