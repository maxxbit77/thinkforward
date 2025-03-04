<script setup>
import { background } from '@unovis/ts/components/timeline/style'

const props = defineProps({
	icon: Object,
	iconClass: String,
	customClass: String,
	imageSrc: String,
	imageAlt: String,
	background: Object,
})

const defaultClass = [' custom-blur p-8  rounded-2xl  border-2  text-center  overflow-hidden']
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<div class="flex flex-col justify-center items-center">
			<div>
				<component v-if="icon" class="size-20" :class="[iconClass]" :is="icon" />
				<img v-if="imageSrc" :src="imageSrc" :alt="imageAlt" class="h-24 my-4" />
			</div>
			<p class="text-4xl font-bold">
				<slot name="title" />
			</p>
			<p class="text-xl text-customDark dark:text-customLight">
				<slot name="text" />
			</p>
		</div>
		<div class="absolute z-0 -top-96 -left-48">
			<component v-if="background" :is="background" />
		</div>
	</div>
</template>
