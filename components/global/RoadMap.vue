<script setup>
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'
import { ref, onMounted, onUnmounted } from 'vue'

const { setElementRef, inView } = useIntersectionObserver(0.3)

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

const cardRefs = ref([])
const truckOpacity = ref(0)

const handleScroll = () => {
	const scrollPosition = window.scrollY

	// 🔹 Control de la opacidad del componente
	const fadeStart = 100 // A partir de qué scroll empieza a desvanecerse
	const fadeEnd = 300 // Hasta qué punto el título se vuelve completamente transparente
	truckOpacity.value = 0 + Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div :style="{ opacity: truckOpacity }" class="relative top-[1400px] left-[200px]">
		<div class="absolute top-[-700px] left-[-100px] text-customDark text-5xl text-center">
			Road Map de tu producto
		</div>

		<!-- images -->
		<div class="absolute top-[-440px] left-[-70px] flex flex-col space-y-32 z-20">
			<div class="h-32 w-44 absolute top-[-40px] left-[150px]">
				<img src="public/images/hero/start.png" alt="wash-machine" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/truck-wash.png" alt="wash-machine" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/coordination.png" alt="man-working" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/industry.png" alt="industry" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/gps.png" alt="gps" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/industry.png" alt="industry" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/report.png" alt="report" />
			</div>
		</div>

		<!-- truck -->
		<img src="public/images/hero/truck.png" alt="truck" class="fixed-center" />

		<!-- Road -->
		<div class="absolute top-[-400px] left-[120px] w-[100px] h-[2100px] bg-[#333] rounded-lg">
			<div v-for="(line, index) in 40" :key="index" class="flex flex-col justify-center items-center">
				<div class="h-8 w-1 bg-white my-4" />
			</div>
		</div>

		<!-- cards -->
		<div class="relative top-[-500px] left-[300px] flex flex-col space-y-40">
			<div
				v-for="(card, index) in cards"
				:key="index"
				:ref="(el) => setElementRef(el, index)"
				class="w-64 rounded-xl py-4 pl-8 relative transform opacity-0 transition-all duration-700 bg-zinc-900"
				:class="{
					'-translate-x-30 opacity-100': inView[index],
					'translate-x-full opacity-0': !inView[index],
				}"
			>
				<div class="size-8 bg-zinc-900 rotate-45 absolute top-1/2 -translate-y-1/2 -left-2 z-0" />
				<div class="grid grid-cols-12 gap-2">
					<div class="col-span-8">
						<div class="text-2xl">{{ card.title }}</div>
						<p class="text-gray-400 text-sm">{{ card.description }}</p>
					</div>
					<div class="col-span-4 flex justify-center items-center border-l border-dashed border-white px-2">
						<span class="border border-white rounded-full px-4 py-2">
							{{ index + 1 }}
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.road-line {
	width: 4px;
	height: 25px;
	background-color: white;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.fixed-center {
	width: 150px;
	position: fixed;
	top: 50%;
	left: 100px;
	left: 250px;
	transform: rotate(-60deg);
	z-index: 20;
}
</style>
