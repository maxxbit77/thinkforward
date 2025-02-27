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
	<div ref="counterRef" class="h-full flex flex-col justify-center text-center items-center text-white">
		<div class="text-3xl">
			<slot />
		</div>
		<p class="text-6xl font-bold">+{{ number }}</p>
	</div>
</template>
