<script setup>
import { useI18n } from 'vue-i18n'
import { SvgCollab, SvgProcess, SvgSolutions, SvgWeb } from '#components'
import {
	BackgroundsColorsBlue,
	BackgroundsColorsGreen,
	BackgroundsColorsRose,
	BackgroundsColorsYellow,
} from '#components'
const { t } = useI18n()

const cards = computed(() => [
	{
		title: t('presentation.card-1.title'),
		text: t('presentation.card-1.description'),
		customClass: 'border-sky-500  z-20 shadow-xl shadow-blue-500  h-[400px] ',
		iconClass: 'text-sky-500',
		background: BackgroundsColorsBlue,
		icon: SvgWeb,
	},
	{
		title: t('presentation.card-2.title'),
		text: t('presentation.card-2.description'),
		iconClass: 'text-green-500',
		customClass: 'border-green-500 shadow-xl shadow-green-500  h-[400px] ',
		background: BackgroundsColorsGreen,
		icon: SvgSolutions,
	},
	{
		title: t('presentation.card-3.title'),
		text: t('presentation.card-3.description'),
		iconClass: 'text-yellow-500',
		customClass: 'border-yellow-500 shadow-xl shadow-yellow-500  h-[400px] ',
		background: BackgroundsColorsYellow,
		icon: SvgProcess,
	},
	{
		title: t('presentation.card-4.title'),
		text: t('presentation.card-4.description'),
		iconClass: 'text-rose-500',
		customClass: 'border-rose-500 shadow-xl shadow-rose-500  h-[400px] ',
		background: BackgroundsColorsRose,
		icon: SvgCollab,
	},
])

const card1 = computed(() => ({
	title: t('presentation.card-1.title'),
	text: t('presentation.card-1.description'),
	customClass: 'border-sky-500  z-20 shadow-xl shadow-blue-500  h-[400px] ',
	iconClass: 'text-sky-500',
	background: BackgroundsColorsBlue,
	icon: SvgWeb,
}))
const card2 = computed(() => ({
	title: t('presentation.card-2.title'),
	text: t('presentation.card-2.description'),
	iconClass: 'text-green-500',
	customClass: 'border-green-500 shadow-xl shadow-green-500  h-[400px] ',
	background: BackgroundsColorsGreen,
	icon: SvgSolutions,
}))
const card3 = computed(() => ({
	title: t('presentation.card-3.title'),
	text: t('presentation.card-3.description'),
	iconClass: 'text-yellow-500',
	customClass: 'border-yellow-500 shadow-xl shadow-yellow-500  h-[400px] ',
	background: BackgroundsColorsYellow,
	icon: SvgProcess,
}))
const card4 = computed(() => ({
	title: t('presentation.card-4.title'),
	text: t('presentation.card-4.description'),
	iconClass: 'text-rose-500',
	customClass: 'border-rose-500 shadow-xl shadow-rose-500  h-[400px] ',
	background: BackgroundsColorsRose,
	icon: SvgCollab,
}))
</script>
<template>
	<!-- <RoadmapVerticalTruckAnimation /> -->
	<div class="flex justify-center">
		<div class="rotate-[-25deg] w-[300px]">
			<CardBasic
				:background="card1.background"
				:icon="card1.icon"
				:iconClass="card1.iconClass"
				:customClass="card1.customClass"
			>
				<template #title>
					{{ card1.title }}
				</template>
				<template #text> </template>
			</CardBasic>
		</div>
		<div class="rotate-[-8deg] w-[300px]">
			<CardBasic
				:background="card2.background"
				:icon="card2.icon"
				:iconClass="card2.iconClass"
				:customClass="card2.customClass"
			>
				<template #title>
					{{ card2.title }}
				</template>
				<template #text> </template>
			</CardBasic>
		</div>
		<div class="rotate-[8deg] w-[300px]">
			<CardBasic
				:background="card3.background"
				:icon="card3.icon"
				:iconClass="card3.iconClass"
				:customClass="card3.customClass"
			>
				<template #title>
					{{ card3.title }}
				</template>
				<template #text> </template>
			</CardBasic>
		</div>
		<div class="rotate-[20deg] w-[300px]">
			<CardBasic
				:background="card4.background"
				:icon="card4.icon"
				:iconClass="card4.iconClass"
				:customClass="card4.customClass"
			>
				<template #title>
					{{ card4.title }}
				</template>
				<template #text> </template>
			</CardBasic>
		</div>
	</div>
</template>
<!-- <template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
		<div v-for="(card, index) in cards" :key="index">
			<CardBasic
				:background="card.background"
				:icon="card.icon"
				:iconClass="card.iconClass"
				:customClass="card.customClass"
			>
				<template #title>
					{{ card.title }}
				</template>
				<template #text> </template>
			</CardBasic>
		</div>
	</div>
</template> -->
