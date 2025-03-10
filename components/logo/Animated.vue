<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const svgRef = ref(null)

onMounted(() => {
	gsap.fromTo(svgRef.value, { x: '-100%' }, { x: '0%', duration: 1.5, ease: 'power2.out' })
})
</script>

<template>
	<svg ref="svgRef" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 47.5" role="img" class="fill-current">
		<path
			d="M54.85 10.95c0 9.93 8.05 17.97 17.98 17.98-.16-9.86-8.12-17.82-17.98-17.98ZM36.27 28.93c9.93 0 17.97-8.05 17.98-17.98-9.86.16-17.82 8.12-17.98 17.98ZM17.99 28.93h18.28V10.95c-10 0-18.12 8.02-18.28 17.98ZM72.83 10.95v17.98h18.28c-.16-9.96-8.28-17.98-18.28-17.98ZM54.85 47.5c9.86-.16 17.82-8.12 17.98-17.98-9.93 0-17.97 8.05-17.98 17.98ZM36.27 29.53H17.99c.17 9.95 8.28 17.97 18.28 17.97V29.52ZM72.83 29.52V47.5c10 0 18.12-8.02 18.28-17.98H72.83ZM36.27 29.52c.16 9.86 8.12 17.82 17.98 17.98 0-9.93-8.05-17.97-17.98-17.98ZM17.98 28.93V10.95L0 28.93h17.98zM17.98 47.5V29.53H0L17.98 47.5zM91.12 10.95v17.98h17.98L91.12 10.95zM91.12 47.5l17.98-17.98H91.12V47.5z"
		></path>
	</svg>
</template>

<style scoped>
svg {
	width: 100%;
	height: auto;
}
</style>
