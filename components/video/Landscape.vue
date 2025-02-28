<script setup>
const props = defineProps({
	title: String,
	src: String,
	type: { type: String, default: 'video/mp4' },
	speed: { type: Number, default: 1.0 }, // Velocidad predeterminada 1x
})

const videoRef = ref(null)

const setPlaybackRate = () => {
	if (videoRef.value) {
		videoRef.value.playbackRate = props.speed
	}
}

onMounted(setPlaybackRate)

// Observa cambios en la velocidad y actualiza el video
watch(() => props.speed, setPlaybackRate)
</script>

<template>
	<div class="relative h-full w-full rounded-lg overflow-hidden bg-white dark:bg-slate-950">
		<div class="absolute inset-0">
			<video ref="videoRef" class="w-full h-full object-cover" autoplay muted loop playsinline>
				<source :src="src" :type="type" />
				Your browser does not support this video.
			</video>
		</div>

		<!-- Contenido encima del video -->
		<div class="absolute z-10 h-full top-12 w-full text-center text-gray-200">
			<p class="text-4xl font-bold">
				<slot class="" />
			</p>
		</div>

		<!-- Capa de oscurecimiento opcional -->
		<div class="absolute inset-0 bg-black/40 z-5"></div>
	</div>
</template>
