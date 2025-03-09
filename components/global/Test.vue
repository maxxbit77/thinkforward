<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const scrollX = ref(0) // Posición del scroll
const scrollContainer = ref(null) // Referencia al contenedor de scroll
const isScrolling = ref(false) // Flag para controlar si debe empezar el scroll automático

const maxScroll = 3000 // Máximo scroll
const scrollSpeed = ref(2) // Velocidad de desplazamiento (pixeles por intervalo)
const scrollIntervalTime = ref(10) // Tiempo en milisegundos entre cada desplazamiento

// Función para manejar el evento de scroll con efecto easing
const easeInOut = (t) => {
	return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

// Función para manejar el evento de scroll
const handleScroll = () => {
	if (scrollContainer.value) {
		const scrollLeft = scrollContainer.value.scrollLeft || 0
		const normalizedScroll = scrollLeft / maxScroll // Normalizamos el scroll entre 0 y 1
		const easedScroll = easeInOut(normalizedScroll) * maxScroll // Aplicamos easing y lo reescalamos

		scrollX.value = easedScroll
		console.log('Scroll detectado:', scrollX.value)
	}
}

// Iniciar el scroll automático cuando el componente esté en el viewport
const startAutoScroll = () => {
	isScrolling.value = true
	let scrollInterval = setInterval(() => {
		if (scrollContainer.value) {
			const newScrollPosition = scrollContainer.value.scrollLeft + scrollSpeed.value
			if (newScrollPosition >= maxScroll) {
				clearInterval(scrollInterval) // Detener cuando se alcanza el máximo
			} else {
				scrollContainer.value.scrollLeft = newScrollPosition
			}
		}
	}, scrollIntervalTime.value) // Controla la velocidad aquí
}

// Usamos IntersectionObserver para detectar cuando el componente está en el viewport
onMounted(async () => {
	await nextTick() // Espera a que el DOM esté listo

	// Detectar cuando el contenedor entra en el viewport
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isScrolling.value) {
					startAutoScroll() // Iniciar el scroll automático cuando el componente entre en el viewport
				}
			})
		},
		{ threshold: 0.5 }
	) // Activar cuando el 50% del componente es visible

	if (scrollContainer.value) {
		observer.observe(scrollContainer.value)
	}
})

onUnmounted(() => {
	if (scrollContainer.value) {
		observer.disconnect() // Desconectar el observer cuando el componente se desmonte
	}
})
</script>

<template>
	<div class="mt-44 relative">
		<div ref="scrollContainer" class="overflow-x-auto whitespace-nowrap w-screen h-screen relative">
			<div class="absolute top-[200px] left-[1200px] z-10">
				<img src="/images/roadmap/industry.png" alt="" class="size-72 object-contain" />
			</div>
			<div class="w-[3000px] h-full relative">
				<div class="flex">
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
				</div>

				<!-- 🚛 Camión -->
			</div>
		</div>
		<div class="absolute top-[320px] left-[20%] z-20">
			<img src="/images/roadmap/tf-truck.png" alt="truck" class="w-[400px]" />
		</div>
	</div>
</template>
