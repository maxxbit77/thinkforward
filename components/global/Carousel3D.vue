<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { SvgCollab, SvgProcess, SvgSolutions, SvgWeb } from '#components'

const { t } = useI18n()
const cardsRef = ref(null)
const animationDuration = 10
let animationInterval = null

const cards = computed(() => [
	{
		title: t('presentation.card-1.title'),
		customClass: 'border-sky-500 shadow-xl shadow-blue-500',
		iconClass: 'text-sky-500',
		icon: SvgWeb,
	},
	{
		title: t('presentation.card-2.title'),
		customClass: 'border-green-500 shadow-xl shadow-green-500',
		iconClass: 'text-green-500',
		icon: SvgSolutions,
	},
	{
		title: t('presentation.card-3.title'),
		customClass: 'border-yellow-500 shadow-xl shadow-yellow-500',
		iconClass: 'text-yellow-500',
		icon: SvgCollab,
	},
	{
		title: t('presentation.card-4.title'),
		customClass: 'border-rose-500 shadow-xl shadow-rose-500',
		iconClass: 'text-rose-500',
		icon: SvgProcess,
	},
	{
		title: t('presentation.card-4.title'),
		customClass: 'border-rose-500 shadow-xl shadow-rose-500',
		iconClass: 'text-rose-500',
		icon: SvgCollab,
	},
])

onMounted(() => {
	animationInterval = setInterval(() => {
		if (cardsRef.value) {
			cardsRef.value.style.animation = `carousel ${animationDuration}s infinite cubic-bezier(1,.015,.295,1.225) forwards`
		}
	}, animationDuration * 500)
})

onUnmounted(() => {
	clearInterval(animationInterval)
})
</script>

<template>
	<div class="icon-cards">
		<div ref="cardsRef" class="icon-cards__content">
			<div v-for="(card, index) in cards" :key="index" class="icon-cards__item">
				<div class="relative z-10 flex flex-col items-center justify-center h-full p-4">
					<div class="size-12 mb-2">
						<component :is="card.icon" />
					</div>
					<h3 class="text-lg font-bold">{{ card.title }}</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.icon-cards {
	position: absolute;
	top: 60%;
	left: 50%;
	width: 180px;
	height: 160px;
	transform: translate(-50%, -50%);
	perspective: 1000px;
}

.icon-cards__content {
	position: absolute;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transform: translateZ(-145px) rotateY(0);
	animation: carousel 10s infinite cubic-bezier(1, 0.015, 0.295, 1.225) forwards;
}

.icon-cards__item {
	position: absolute;
	top: 0;
	left: 0;
	width: 200px;
	height: 280px;
	opacity: 1;
	border-radius: 6px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	background: linear-gradient(135deg, #000428, #004e92);
}

.icon-cards__item:nth-child(1) {
	transform: rotateY(72deg) translateZ(145px);
}
.icon-cards__item:nth-child(2) {
	transform: rotateY(144deg) translateZ(145px);
}
.icon-cards__item:nth-child(3) {
	transform: rotateY(216deg) translateZ(145px);
}
.icon-cards__item:nth-child(4) {
	transform: rotateY(288deg) translateZ(145px);
}

@keyframes carousel {
	0%,
	15% {
		transform: translateZ(-145px) rotateY(0);
	}
	25%,
	40% {
		transform: translateZ(-145px) rotateY(-72deg);
	}
	50%,
	65% {
		transform: translateZ(-145px) rotateY(-144deg);
	}
	75%,
	90% {
		transform: translateZ(-145px) rotateY(-216deg);
	}
}
</style>
