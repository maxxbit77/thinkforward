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
	<div class="relative h-full w-full rounded-lg overflow-hidden">
		<div class="absolute inset-0">
			<video ref="videoRef" class="w-full h-full object-cover" autoplay muted loop playsinline>
				<source :src="src" :type="type" />
				Your browser does not support this video.
			</video>
		</div>

		<!-- Contenido encima del video -->
		<div class="absolute z-10 h-full text-white top-4 left-4 flex flex-col w-2/3">
			<p class="text-3xl font-bold">{{ title }}</p>
			<p class="text-md text-gray-300 font-bold">
				<slot />
			</p>
		</div>

		<!-- Capa de oscurecimiento opcional -->
		<div class="absolute inset-0 bg-black/40 z-5"></div>
	</div>
</template>
