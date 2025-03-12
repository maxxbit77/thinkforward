<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollContainer = ref(null)
const scrollX = ref(0) // Guarda la posición del scroll

const cards = [
	{ title: 'Emisión de orden' },
	{ title: 'Preparación', description: 'Lavado y Preparación del transporte para recibir el producto' },
	{ title: 'Coordinación', description: 'Comunicación con la compañía emisora del producto' },
	{ title: 'Recogida', description: 'Preparación del transporte para recibir el producto del cliente' },
	{ title: 'Monitoreo', description: 'Controlamos en todo momento por donde se encuentra tu producto vía GPS' },
	{
		title: 'Entrega',
		description: 'Comunicaciones con la empresa receptora para la coordinación de descarga del producto',
	},
	{
		title: 'Emisión informe',
		description: 'Una vez concluida la entrega, se procede a la emisión del informe y factura',
	},
]

// Detectar el desplazamiento horizontal
const updateScroll = () => {
	if (scrollContainer.value) {
		scrollX.value = scrollContainer.value.scrollLeft
	}
}

onMounted(() => {
	if (scrollContainer.value) {
		scrollContainer.value.addEventListener('scroll', updateScroll)
	}
})

onUnmounted(() => {
	if (scrollContainer.value) {
		scrollContainer.value.removeEventListener('scroll', updateScroll)
	}
})
</script>

<template>
	<div class="mt-44 relative">
		<!-- Contenedor de Scroll -->
		<div ref="scrollContainer" class="overflow-x-auto whitespace-nowrap w-screen h-screen relative scroll-smooth">
			<!-- Fondo -->
			<div class="w-[3000px] h-full relative z-0">
				<div class="flex">
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
					<img src="/images/roadmap/full-bg-1.png" alt="bg" class="w-full h-[600px] block" />
				</div>
			</div>

			<div>
				<img
					src="/images/roadmap/truck-wash.png"
					alt=""
					class="size-44 object-contain absolute top-[300px] left-[1200px] z-20"
				/>
				<img
					src="/images/roadmap/industry.png"
					alt=""
					class="size-72 object-contain absolute top-[200px] left-[2000px] z-20"
				/>
				<img
					src="/images/roadmap/industry.png"
					alt=""
					class="size-72 object-contain absolute top-[200px] left-[4000px] z-20"
				/>
			</div>

			<!-- Tarjetas animadas basadas en scroll -->
			<div class="absolute top-[100px] left-[1500px] flex space-x-44 z-20 flex-nowrap">
				<div
					v-for="(card, index) in cards"
					:key="index"
					class="w-64 rounded-xl p-4 relative bg-zinc-900 transform transition-all duration-700 text-wrap"
					:class="{
						'opacity-100 translate-y-0': scrollX > (index + 1) * 400,
						'opacity-0 -translate-y-10': scrollX <= (index + 1) * 400,
					}"
				>
					<div class="text-2xl">{{ card.title }}</div>
					<p class="text-gray-400 text-sm flex-wrap">{{ card.description }}</p>
				</div>
			</div>
		</div>

		<!-- Camión -->
		<div class="absolute top-[320px] left-[20%] z-20">
			<img src="/images/roadmap/tf-truck.png" alt="truck" class="w-[400px]" />
		</div>
	</div>
</template>
