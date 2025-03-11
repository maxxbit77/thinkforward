<script setup>
import { useIntervalFn, useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
	value: Number,
	speed: {
		type: Number,
		default: 100,
	},
	step: Number,
})

const number = ref(0)
const target = ref(props.value)
const isCounting = ref(false)

const step = props.step

const delay = computed(() => Math.max(2000 / props.speed, 10))

const { pause, resume, isActive } = useIntervalFn(() => {
	if (number.value < target.value) {
		number.value = Math.min(number.value + step, target.value)
	} else {
		pause()
		setTimeout(() => {
			number.value = 0
			resume()
		}, 3000)
	}
}, delay.value)

const counterRef = ref(null)
useIntersectionObserver(counterRef, ([{ isIntersecting }]) => {
	if (isIntersecting && !isCounting.value) {
		isCounting.value = true
		number.value = 0
		resume()
	}
})

watch(
	() => props.speed,
	() => {
		if (isActive.value) {
			pause()
			resume()
		}
	}
)
</script>

<template>
	<div class="relative overflow-hidden min-h-44">
		<div
			ref="counterRef"
			class="p-2 h-full bg-gray-500/10 backdrop-blur-xl dark:bg-slate-800/10 border-2 border-slate-900 dark:border-gray-500 rounded-2xl flex flex-col justify-center text-center items-center"
		>
			<div class="relative text-xl xl:text-3xl text-slate-900 dark:text-white z-20">
				<slot />
				<p class="text-4xl md:text-5xl xl:text-6xl font-bold">+{{ number }}</p>
			</div>
		</div>
		<div class="absolute -top-20 z-1">
			<BackgroundsColorsBlue />
		</div>
	</div>
</template>
