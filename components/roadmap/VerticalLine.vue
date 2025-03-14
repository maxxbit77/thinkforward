<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

const { setElementRef, inView } = useIntersectionObserver(0.3)

const roadmapRef = ref(null)
const lineHeight = ref(500) // Altura inicial de la línea central
const maxHeight = ref(2000) // Máxima altura de la línea

const sections = ref([
	{ title: 'Inicio', description: 'Descripción del inicio' },
	{ title: 'Fase 1', description: 'Explicación de la fase 1' },
	{ title: 'Fase 2', description: 'Detalles de la fase 2' },
	{ title: 'Fase 3', description: 'Lo que ocurre en la fase 3' },
])

const updateLineHeight = () => {
	if (!roadmapRef.value) return

	const rect = roadmapRef.value.getBoundingClientRect()
	const viewportHeight = window.innerHeight
	const scrollY = window.scrollY
	const startScroll = rect.top + scrollY - viewportHeight * 0.3 // Punto donde empieza a crecer
	const scrolled = scrollY - startScroll

	if (inView.value && scrolled > 0) {
		// Hacer crecer la línea progresivamente sin pasarse del tamaño máximo
		lineHeight.value = Math.min(scrolled, maxHeight.value)
	}
}

// Función para determinar si un punto debe mostrarse
const isPointVisible = (index) => computed(() => lineHeight.value > index * 300)

onMounted(() => {
	// Obtener altura máxima de la línea al montar el componente
	maxHeight.value = roadmapRef.value?.scrollHeight || 1200
	window.addEventListener('scroll', updateLineHeight)
})

onUnmounted(() => {
	window.removeEventListener('scroll', updateLineHeight)
})
</script>

<template>
	<div class="h-[2000px]">
		<div class="text-center text-4xl mt-24">The ultimate Road Map</div>
		<div ref="roadmapRef" class="relative max-w-4xl mx-auto py-20">
			<!-- Línea central -->
			<div
				class="absolute left-1/2 w-1 bg-gray-400 transition-all duration-300 min-h-32"
				:style="{ height: lineHeight + 'px' }"
			></div>

			<!-- Puntos y tarjetas -->
			<div v-for="(section, index) in sections" :key="index" class="relative flex items-center my-32">
				<!-- Punto -->
				<div
					class="absolute left-1/2 rounded-full transform -translate-x-1/2 transition-all duration-500 bg-slate-950 pb-1"
					:class="{
						'opacity-100 scale-100': isPointVisible(index).value,
						'opacity-0 scale-50': !isPointVisible(index).value,
					}"
					:style="{ top: index * 100 + 'px' }"
				>
					<img src="/public/TF-star.png" alt="star" class="size-8" />
				</div>

				<!-- Tarjeta -->
				<div
					class="w-64 p-4 bg-slate-800 rounded-lg shadow-lg"
					:class="[
						'opacity-0 translate-y-10 transition-all duration-700 ease-in-out',
						index % 2 === 0 ? 'ml-10' : 'mr-10',
						{ 'opacity-100 translate-y-0': isPointVisible(index).value },
					]"
				>
					<h3 class="text-lg font-bold">{{ section.title }}</h3>
					<p class="text-gray-600">{{ section.description }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
