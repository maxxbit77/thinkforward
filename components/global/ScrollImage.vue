<script setup>
const imagePaths = Array.from({ length: 100 }, (_, i) => {
	const frameNumber = String(i + 1).padStart(3, '0') // Genera "001", "002", ..., "100"
	return `/frames/truck-going/ezgif-frame-${frameNumber}.webp`
})

const currentFrame = ref(0)
const currentImage = ref(imagePaths[currentFrame.value])
const isMounted = ref(true)

const handleScroll = () => {
	const scrollPosition = window.scrollY

	const maxScroll = document.documentElement.scrollHeight - window.innerHeight * 2
	const scrollFraction = scrollPosition / maxScroll

	const frame = Math.floor(scrollFraction * imagePaths.length)

	if (scrollPosition >= maxScroll) {
		isMounted.value = false
	} else {
		isMounted.value = true
	}
	if (currentFrame.value !== frame) {
		currentImage.value = imagePaths[frame]
		currentFrame.value = frame
	}
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div class="h-[300vh]">
		<img v-if="isMounted" :src="currentImage" class="fixed h-[100vh] w-screen object-cover z-0" />
		<div class="flex flex-col space-y-4 text-black p-8 rounded-lg absolute top-[500px] left-44 max-w-[500px]">
			<h1 class="text-6xl">En Thinkforward</h1>
			<div>
				<h2 class="text-2xl">Simplificamos la gestión de transporte de tus líquidos</h2>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
