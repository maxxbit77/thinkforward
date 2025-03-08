<script setup>
const cards = [
	{ title: 'Tarjeta 1', description: 'Descripción de la tarjeta 1' },
	{ title: 'Tarjeta 2', description: 'Descripción de la tarjeta 2' },
	{ title: 'Tarjeta 3', description: 'Descripción de la tarjeta 3' },
	// Agrega más tarjetas aquí
]

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
	const fadeStart = 200 // A partir de qué scroll empieza a desvanecerse
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
	<div :style="{ opacity: truckOpacity }" class="relative">
		<div class="absolute top-[-600px] left-1/2 -translate-x-1/2 text-customDark text-5xl text-center">
			Controlamos todo el flujo de tu producto
		</div>
		<!-- left side of the road -->
		<div class="relative">
			<img
				src="public/images/hero/start.png"
				alt="wash-machine"
				class="absolute top-[-440px] left-20 z-20 h-32 w-44"
			/>
			<img
				src="public/images/hero/truck-wash.png"
				alt="wash-machine"
				class="absolute top-[-300px] -left-8 z-20 size-32 -rotate-[50deg]"
			/>
			<img
				src="public/images/hero/industry.png"
				alt="industry"
				class="absolute top-[0px] -left-24 z-20 -rotate-[60deg]"
			/>

			<img
				src="public/images/hero/gps.png"
				alt="industry"
				class="absolute top-[450px] -left-24 z-20 -rotate-[60deg] size-44"
			/>
			<img src="public/images/hero/truck.png" alt="truck" class="fixed-center" />

			<img
				src="public/images/hero/industry.png"
				alt="industry"
				class="absolute top-[900px] -left-24 z-20 -rotate-[60deg]"
			/>
			<img
				src="public/images/hero/report.png"
				alt="industry"
				class="absolute top-[1250px] -left-24 z-20 -rotate-[90deg] size-44"
			/>
		</div>

		<!-- Road -->
		<div class="road">
			<div v-for="(line, index) in 40" :key="index" class="flex flex-col justify-center items-center">
				<div class="h-8 w-1 bg-white my-4" />
			</div>
		</div>

		<!-- right side of the road -->
		<!-- card 1 -->
		<div class="relative top-[-450px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Emisión de orden</div>
				<p class="text-gray-400">Realizamos las respectivas comunicaciones con el responsable del transporte</p>
			</div>
		</div>

		<!-- card 2 -->
		<div class="relative top-[-430px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Preparación</div>
				<p class="text-gray-400">Lavado y Preparación del transporte para recibir el producto</p>
			</div>
		</div>

		<!-- card 3 -->
		<div class="relative top-[-330px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Coordinación</div>
				<p class="text-gray-400">Comunicación con la compañia emisora del producto</p>
			</div>
		</div>

		<!-- card 4 -->
		<div class="relative top-[-230px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Recogida</div>
				<p class="text-gray-400">Preparación del transporte para recibir el producto</p>
			</div>
		</div>

		<!-- card 5 -->
		<div class="relative top-0 left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Monitoreo</div>
				<p class="text-gray-400">Controlamos en todo momento por donde se encuentra tu producto</p>
			</div>
		</div>

		<!-- card 5 -->
		<div class="relative top-[340px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Entrega</div>
				<p class="text-gray-400">
					Comunicaciones con la empresa receptora para la coordinación de descarga del producto
				</p>
			</div>
		</div>

		<!-- card 5 -->
		<div class="relative top-[540px] left-[25%] w-64 bg-slate-800 rounded-xl py-2 px-6">
			<div class="size-8 bg-slate-800 rotate-45 absolute top-1/2 -translate-y-1/2 -left-4" />
			<div class="">
				<div class="text-2xl">Emision informe</div>
				<p class="text-gray-400">Una vez concluida la entrga, se procede a la emisión del informe y factura</p>
			</div>
		</div>
	</div>
</template>

<style>
.road {
	width: 100px;
	height: 2000px;
	background-color: #333;
	position: absolute;
	top: -400px;
	left: 10%;
	border-radius: 10px;
	margin: 50px auto;
	z-index: 0;
}

.road-line {
	width: 4px;
	height: 25px;
	background-color: white;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
}

.card.in-view {
	opacity: 1;
	transform: translateY(0);
}

/* Imagen centrada */
.fixed-center {
	width: 150px;
	position: fixed;
	top: 50%;
	left: 21%;
	transform: translate(-50%, -50%) rotate(-60deg);
	z-index: 20;
}

.card-conector {
	width: 30px;
	height: 2px;
	background-color: blue;
}
</style>
