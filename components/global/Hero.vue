<script setup>
const isDark = ref(false)

// Detectar el modo del sistema al montar el componente
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
		img.onload = () => loadedImages.value.add(src)
	})
}

const handleScroll = () => {
	const scrollPosition = window.scrollY
	// const maxScroll = document.documentElement.scrollHeight - window.innerHeight * 2
	// const scrollFraction = scrollPosition / maxScroll

	// const frame = Math.floor(scrollFraction * imagePaths.length)

	// isMounted.value = scrollPosition < maxScroll

	// if (currentFrame.value !== frame && loadedImages.value.has(imagePaths[frame])) {
	// 	currentImage.value = imagePaths[frame]
	// 	currentFrame.value = frame
	// }

	const fadeStart = 150
	const fadeEnd = 400
	titleOpacity.value = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
}

onMounted(() => {
	// preloadImages()
	if (window) {
		window.addEventListener('scroll', handleScroll)
	}
	console.log(window.matchMedia('(prefers-color-scheme: dark)').matches)

	isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
	console.log(isDark.value)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<ClientOnly>
		<div class="h-[650px] bg-customLight dark:bg-customDark">
			<!-- <img v-if="isMounted" :src="currentImage" class="fixed h-[100vh] w-screen object-cover z-0" /> -->

			<header>
				<div :style="{ opacity: titleOpacity }" class="relative">
					<div
						class="w-full h-[1600px] absolute left-1/2 -translate-x-1/2 fade-mask-side bg-customLight dark:bg-slate-950"
					>
						<BackgroundsColorsBlueHero
							class="animate-[spin_15s_linear_infinite] h-[1500px] w-[1500px] absolute top-[-500px] left-[-150px]"
						/>
					</div>
					<div
						class="absolute top-[350px] left-1/2 -translate-x-1/2 text-center flex flex-col justify-center items-center space-y-4"
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
					<div class="hidden md:block" :class="isDark ? 'text-dark' : 'text-white'">
						<SvgStar class="size-24 absolute top-56 left-44 rotate-12" />
						<SvgStar class="size-6 absolute top-[800px] left-24 rotate-45" />
						<SvgStar class="size-8 absolute top-64 right-44" />
						<SvgStar class="size-14 absolute top-[1000px] right-24 rotate-45" />
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
