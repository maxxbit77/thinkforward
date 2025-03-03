import type { item } from '@unovis/ts/components/bullet-legend/style'; import type { BackgroundsColorsGreen } from
'#components'; import type { item } from '@unovis/ts/components/bullet-legend/style'; import type { background } from
'@unovis/ts/components/timeline/style'; import type { BackgroundsColorsGreen } from '#components'; import type {
BackgroundsColorsYellow } from '#components';
<script setup>
import {
	BackgroundsColorsBlack,
	BackgroundsColorsYellow,
	BackgroundsColorsBlue,
	BackgroundsColorsRose,
	BackgroundsColorsGreen,
} from '#components'

const data = [
	{
		title: 'Vinos y licores',
		titleColor: 'text-rose-500',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
		image: '/images/wine.png',
		imageAlt: 'wine cups',
		bg: BackgroundsColorsRose,
		customClass: 'border-rose-500 shadow-lg shadow-rose-500',
	},
	{
		title: 'Zumos de frutas',
		titleColor: 'text-orange-500',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
		image: '/images/juice.png',
		imageAlt: 'Orange juice',
		bg: BackgroundsColorsYellow,
		customClass: 'border-orange-500 shadow-lg shadow-orange-500',
	},
	{
		title: 'Vegetable Oil',
		titleColor: 'text-green-500',
		text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
		image: '/images/oil.png',
		imageAlt: 'Vegetable oil',
		bg: BackgroundsColorsGreen,
		customClass: 'border-green-500 shadow-lg shadow-green-500',
	},
]
</script>
<template>
	<div>
		<h3 class="mb-12 text-customDark dark:text-customLight text-4xl text-center">Products</h3>
		<div class="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
			<Card
				v-for="(item, index) in data"
				:key="index"
				:imageSrc="item.image"
				:imageAlt="item.alt"
				:customClass="item.customClass"
				:background="item.bg"
			>
				<template #title>
					<span :class="item.titleColor"> {{ item.title }} </span>
				</template>
				<template #text>
					{{ item.text }}
				</template>
			</Card>
		</div>
	</div>
</template>
