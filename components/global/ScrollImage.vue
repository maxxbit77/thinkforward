<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { SvgWeb, SvgCollab, SvgProcess, SvgSolutions } from '#components'

const images = import.meta.glob('@/public/frames/truck-going/*.webp', { eager: true })
const imagePaths = Object.values(images).map((module) => module.default)

const currentFrame = ref(0)
const currentImage = ref(imagePaths[currentFrame.value])
const isMounted = ref(true)
const loadedImages = ref(new Set())
const titleOpacity = ref(1)

const preloadImages = () => {
	imagePaths.forEach((src) => {
		const img = new Image()
		img.src = src
		img.onload = () => loadedImages.value.add(src) // Marca la imagen como cargada
	})
}

const handleScroll = () => {
	const scrollPosition = window.scrollY
	const maxScroll = document.documentElement.scrollHeight - window.innerHeight * 2
	const scrollFraction = scrollPosition / maxScroll

	const frame = Math.floor(scrollFraction * imagePaths.length)

	// Ocultar imágenes si se llega al final del scroll
	isMounted.value = scrollPosition < maxScroll

	// Solo cambia la imagen si está precargada
	if (currentFrame.value !== frame && loadedImages.value.has(imagePaths[frame])) {
		currentImage.value = imagePaths[frame]
		currentFrame.value = frame
	}

	// 🔹 Control de la opacidad del título
	const fadeStart = 1 // A partir de qué scroll empieza a desvanecerse
	const fadeEnd = 300 // Hasta qué punto el título se vuelve completamente transparente
	titleOpacity.value = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
}

onMounted(() => {
	preloadImages() // Precargar imágenes al montar el componente
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
// commit test
</script>

<template>
	<div class="h-[300vh]">
		<img v-if="isMounted" :src="currentImage" class="fixed h-[100vh] w-screen object-cover z-0" />
		<!-- Título con opacidad dinámica -->
		<div
			:style="{ opacity: titleOpacity }"
			class="absolute top-[400px] text-gray-500 left-1/2 -translate-x-1/2 text-center transition-opacity duration-200"
		>
			<h1 class="text-6xl">Con Thinkforward olvidate...</h1>
			<p class="text-2xl">El pelado te soluciona todos tus problemas</p>
		</div>

		<div class="relative top-[1250px] w-[1200px] mx-auto">
			<div class="absolute top-0 left-[10%]">
				<Card
					:icon="SvgWeb"
					iconClass="text-sky-500"
					customClass="border-sky-500 absolute z-20 shadow-xl shadow-blue-500 w-[400px]"
				>
					<template #title> Amplia red de expertos del sector en toda Europa. </template>
					<template #text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
						beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam
						sint ipsa magni non.
					</template>
				</Card>
			</div>
			<div class="absolute top-[300px] right-[10%]">
				<Card
					:icon="SvgProcess"
					iconClass="text-green-500"
					customClass="border-green-500 shadow-xl shadow-green-500 w-[400px]"
				>
					<template #title> Procesos respetuosos con el medio ambiente.</template>
					<template #text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
						beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam
						sint ipsa magni non.
					</template>
				</Card>
			</div>
			<div class="absolute top-[600px] left-[10%]">
				<Card
					:icon="SvgSolutions"
					iconClass="text-yellow-500"
					customClass="border-yellow-500 shadow-xl shadow-yellow-500 w-[400px]"
				>
					<template #title> Soluciones rápidas y adaptadas a nuestros clientes. </template>
					<template #text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
						beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam
						sint ipsa magni non.
					</template>
				</Card>
			</div>
			<div class="absolute top-[900px] right-[10%]">
				<Card
					:icon="SvgCollab"
					iconClass="text-rose-500"
					customClass="border-rose-500 shadow-xl shadow-rose-500 w-[400px]"
				>
					<template #title> Trato personalizado con todos nuestros colaboradores. </template>
					<template #text>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
						beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam
						sint ipsa magni non.
					</template>
				</Card>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
