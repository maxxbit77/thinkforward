<script setup lang="ts">
defineProps({
	icon: Object,
	iconClass: String,
	customClass: String,
})

const defaultClass = [
	'h-[300px] w-[400px] bg-white p-8 text-slate-900 rounded-3xl shadow-xl shadow-white border-4 border-gray-300 text-center flex flex-col justify-center items-center',
]
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<component class="size-20" :class="[iconClass]" :is="icon" />
		<p class="text-4xl">
			<slot name="title" />
		</p>
		<p class="text-xl">
			<slot name="text" />
		</p>
	</div>
</template>
