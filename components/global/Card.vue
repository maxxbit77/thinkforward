<script setup lang="ts">
defineProps({
	icon: Object,
	background: Object,
	iconClass: String,
	customClass: String,
})

const defaultClass = [
	' w-[400px] text-white bg-slate-900/50 p-8 text-slate-900 rounded-3xl  border-4 border-gray-300 text-center flex flex-col justify-center items-center',
]
</script>

<template>
	<div :class="[defaultClass, customClass]">
		<component class="size-20" :class="[iconClass]" :is="icon" />
		<p class="text-4xl text-gray-200 font-bold">
			<slot name="title" />
		</p>
		<p class="text-xl text-gray-300">
			<slot name="text" />
		</p>
		<component
			:is="background"
			class="absolute z-10 -right-[100px] -top-[250px] h-[500px] translate-y-32 -left-32 rotate-12"
		/>
	</div>
</template>
