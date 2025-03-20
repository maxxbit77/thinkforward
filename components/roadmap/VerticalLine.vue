<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useIntersectionObserver } from '~/composables/useIntersectionObserver'

const { inView } = useIntersectionObserver(0.3)
const roadmapRef = ref(null)
const scrollProgress = ref(0)

const sections = ref([
	{ title: 'Emisión de orden' },
	{ title: 'Preparación', description: 'Lavado y Preparación del transporte para recibir el producto', image: '' },
	{ title: 'Coordinación', description: 'Comunicación con la compañía emisora del producto', image: '' },
	{ title: 'Recogida', description: 'Preparación del transporte para recibir el producto del cliente', image: '' },
	{
		title: 'Monitoreo',
		description: 'Controlamos en todo momento por donde se encuentra tu producto vía GPS',
		image: '',
	},
	{
		title: 'Entrega',
		description: 'Comunicaciones con la empresa receptora para la coordinación de descarga del producto',
		image: '',
	},
	{
		title: 'Emisión informe',
		description: 'Una vez concluida la entrega, se procede a la emisión del informe y factura',
		image: '',
	},
])

const updateScrollProgress = () => {
	if (!roadmapRef.value) return
	const rect = roadmapRef.value.getBoundingClientRect()
	const viewportHeight = window.innerHeight
	const scrollY = window.scrollY
	const startScroll = rect.top + scrollY - viewportHeight * 0.8
	const scrolled = scrollY - startScroll
	scrollProgress.value = Math.min(Math.max(scrolled / (roadmapRef.value.scrollHeight || 3000), 0), 1)
}

const isPointVisible = (index) => computed(() => scrollProgress.value * sections.value.length > index)

onMounted(() => {
	window.addEventListener('scroll', updateScrollProgress)
})

onUnmounted(() => {
	window.removeEventListener('scroll', updateScrollProgress)
})
</script>
<template>
	<div class="h-[1500px]">
		<div class="text-center text-4xl my-44">The ultimate Road Map</div>
		<div ref="roadmapRef" class="relative max-w-4xl mx-auto py-20">
			<!-- Línea con 8 curvas -->
			<svg class="roadmap-line" viewBox="0 0 400 1800" preserveAspectRatio="none">
				<path
					d="
					M 100 0 
					Q 500 150, 200 300 
					Q -100 450, 200 600 
					Q 500 750, 200 900 
					Q -100 1050, 200 1200 
					Q 500 1350, 200 1500 
					Q -100 1650, 200 1800"
					stroke="white"
					stroke-width="14"
					fill="transparent"
					stroke-dasharray="1800"
					:stroke-dashoffset="1800 - scrollProgress * 2400"
				/>
			</svg>

			<!-- Puntos y tarjetas -->
			<div
				v-for="(section, index) in sections"
				:key="index"
				class="roadmap-item"
				:style="{ top: index * 220 + 'px' }"
			>
				<!-- Tarjeta -->
				<div
					class="roadmap-card"
					:class="{
						'left-card': index % 2 === 0,
						'right-card': index % 2 !== 0,
						'opacity-100 translate-y-0': isPointVisible(index).value,
						'opacity-0 translate-y-20': !isPointVisible(index).value,
					}"
				>
					<figure>
						<img src="https://picsum.photos/id/287/250/300" alt="Mountains" />
						<div class="h-full flex justify-center items-end">
							<h4
								class="flex items-center px-4 ease-in-out transition-opacity h-24 w-full bg-slate-950/50"
							>
								{{ section.title }}
							</h4>
						</div>
						<figcaption>
							<h4>{{ section.title }}</h4>
							<p>{{ section.description }}</p>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.roadmap-line {
	position: absolute;
	left: 50%;
	top: 20;
	transform: translateX(-50%);
	width: 400px;
	height: 1500px;
}

.roadmap-point.visible {
	opacity: 1;
	scale: 1;
}

.roadmap-card {
	position: absolute;
	top: -100px;
	width: 250px;
	padding: 12px;
	color: white;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.8s ease-in-out;
}

.left-card {
	left: calc(50% - 450px);
}
.right-card {
	right: calc(50% - 450px);
}

.roadmap-item {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	height: 160px;
}

figure {
	display: grid;
	border-radius: 1rem;
	overflow: hidden;
	cursor: pointer;
}
figure > * {
	grid-area: 1/1;
	transition: 0.4s;
}
figure figcaption {
	display: grid;
	align-items: end;
	font-family: sans-serif;
	color: white;
	padding: 0.75rem;
	background: var(--c, #0009);
	clip-path: inset(0 var(--_i, 100%) 0 0);

	margin: -1px;
}
figure:hover figcaption {
	--_i: 0%;
}
figure:hover img {
	transform: scale(1.2);
}
</style>
