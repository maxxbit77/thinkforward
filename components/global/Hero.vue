<script setup>
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
	const fadeStart = 150 // A partir de qué scroll empieza a desvanecerse
	const fadeEnd = 400 // Hasta qué punto el título se vuelve completamente transparente
	titleOpacity.value = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
}

onMounted(() => {
	preloadImages() // Precargar imágenes al montar el componente
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<ClientOnly>
		<div class="h-[100vh]">
			<img v-if="isMounted" :src="currentImage" class="fixed h-[100vh] w-screen object-cover z-0" />

			<header>
				<div :style="{ opacity: titleOpacity }" class="relative">
					<div
						class="w-full h-[1600px] absolute left-1/2 -translate-x-1/2 fade-mask-side bg-customLight dark:bg-slate-950"
					>
						<BackgroundsColorsBlueHero
							class="animate-[spin_15s_linear_infinite] h-[2000px] w-[2000px] absolute top-[-500px] left-[-150px]"
						/>
					</div>
					<div
						class="absolute top-[300px] left-1/2 -translate-x-1/2 text-center flex flex-col justify-center items-center space-y-4"
					>
						<AnimationsTextWriter
							:textsPrimary="['Transporte y Logística', 'Envíos a toda Europa']"
							:textsSecondary="['Nacional e Internacional', 'Rápidos y Eficientes']"
							:textSpeed="100"
							:delay="1500"
							tagPrimary="h1"
							tagSecondary="h3"
							customClassPrimary=""
							customClassSecondary=""
						/>

						<!-- <h1>{{ $t('hero.title') }}</h1>
						<h3>{{ $t('hero.subtitle') }}</h3>
						<p class="text-gray-300">{{ $t('hero.description') }}</p> -->
						<Cta />
					</div>
				</div>
			</header>
		</div>
	</ClientOnly>
</template>

<style scoped>
.fade-mask {
	-webkit-mask-image: radial-gradient(ellipse at center, white 50%, transparent 100%);
	mask-image: radial-gradient(ellipse at center, white 50%, transparent 100%);
}

.fade-mask-top {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 40%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
}

.fade-mask-sides {
	-webkit-mask-image: linear-gradient(to right, transparent, white 30%, white 70%, transparent);
	mask-image: linear-gradient(to right, transparent, white 30%, white 70%, transparent);
}
</style>
