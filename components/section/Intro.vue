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

// cards
const cards = computed(() => [
	{
		title: t('presentation.card-1.title'), // 🔹 Usa `t(...)` en lugar de `$t(...)`
		text: t('presentation.card-1.description'),
		customClass: 'border-sky-500  z-20 shadow-xl shadow-blue-500 size-[400px] absolute top-0 left-[20%]',
		iconClass: 'text-sky-500',
		background: BackgroundsColorsBlue,
		icon: SvgWeb,
	},
	{
		title: t('presentation.card-2.title'),
		text: t('presentation.card-2.description'),
		iconClass: 'text-green-500',
		customClass: 'border-green-500 shadow-xl shadow-green-500 size-[400px] absolute top-[410px] right-[20%]',
		background: BackgroundsColorsGreen,
		icon: SvgSolutions,
	},
	{
		title: t('presentation.card-3.title'),
		text: t('presentation.card-3.description'),
		iconClass: 'text-yellow-500',
		customClass: 'border-yellow-500 shadow-xl shadow-yellow-500 size-[400px] absolute top-[820px] left-[20%]',
		background: BackgroundsColorsYellow,
		icon: SvgProcess,
	},
	{
		title: t('presentation.card-4.title'),
		text: t('presentation.card-4.description'),
		iconClass: 'text-rose-500',
		customClass: 'border-rose-500 shadow-xl shadow-rose-500 size-[400px] absolute top-[1240px] right-[20%]',
		background: BackgroundsColorsRose,
		icon: SvgCollab,
	},
])
</script>
<template>
	<div class="">
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
				<template #text>
					{{ card.text }}
				</template>
			</CardBasic>
		</div>
	</div>
</template>
