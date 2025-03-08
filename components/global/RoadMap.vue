<script setup>
const cards = [
	{
		title: 'Emisión de orden',
	},
	{ title: 'Preparación', description: 'Lavado y Preparación del transporte para recibir el producto' },
	{ title: 'Coordinación', description: 'Comunicación con la compañía emisora del producto' },
	{ title: 'Recogida', description: 'Preparación del transporte para recibir el producto' },
	{ title: 'Monitoreo', description: 'Controlamos en todo momento por donde se encuentra tu producto' },
	{
		title: 'Entrega',
		description: 'Comunicaciones con la empresa receptora para la coordinación de descarga del producto',
	},
	{
		title: 'Emisión informe',
		description: 'Una vez concluida la entrega, se procede a la emisión del informe y factura',
	},
]

const images = []

const cardRefs = ref([])

const inView = ref([])
const truckOpacity = ref(0)

const isInView = (index) => inView.value[index] === true
console.log('view', isInView)
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry, index) => {
			inView.value[index] = entry.isIntersecting
		})
	},
	{ threshold: 0.5 }
) // 50% de la tarjeta visible

console.log('observer', observer)
const handleScroll = () => {
	const scrollPosition = window.scrollY

	// 🔹 Control de la opacidad del título
	const fadeStart = 400 // A partir de qué scroll empieza a desvanecerse
	const fadeEnd = 600 // Hasta qué punto el título se vuelve completamente transparente
	truckOpacity.value = 0 + Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1)
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
	cardRefs.value.forEach((card) => {
		if (card) observer.observe(card)
	})
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div :style="{ opacity: truckOpacity }" class="relative top-[1400px] left-[200px]">
		<div class="absolute top-[-700px] left-[-100px] text-customDark text-5xl text-center">
			Controlamos todo el flujo de tu producto
		</div>

		<div class="absolute top-[-470px] left-[-70px] flex flex-col space-y-32 z-20">
			<div class="h-32 w-44 absolute top-[-40px] left-[150px]">
				<img src="public/images/hero/start.png" alt="wash-machine" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/truck-wash.png" alt="wash-machine" class="-rotate-[50deg]" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/coordination.png" alt="wash-machine" class="-rotate-[90deg]" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/industry.png" alt="industry" class="-rotate-[60deg]" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/gps.png" alt="industry" class="-rotate-[60deg]" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/industry.png" alt="industry" class="-rotate-[60deg]" />
			</div>
			<div class="size-44">
				<img src="public/images/hero/report.png" alt="industry" class="-rotate-[90deg]" />
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

		<!-- right side of the road -->
		<div class="relative top-[-500px] left-[300px] flex flex-col space-y-44">
			<div v-for="(card, index) in cards" :key="index" class="w-64 bg-slate-800 rounded-xl py-2 px-6 relative">
				<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
				<div class="">
					<div class="text-2xl">{{ card.title }}</div>
					<p class="text-gray-400">
						{{ card.description }}
					</p>
				</div>
			</div>
			<!-- card 1 -->
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

/* Imagen centrada */
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
