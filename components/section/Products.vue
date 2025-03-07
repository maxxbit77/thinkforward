<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import {
	BackgroundsColorsBlue,
	BackgroundsColorsGreen,
	BackgroundsColorsRose,
	BackgroundsColorsYellow,
	BackgroundsColorsGray,
} from '#components'

const wine = computed(() => ({
	title: t('products.product-1.title'),
	text: t('products.product-1.description'),
	image: '/images/products/wine.png',
	imageAlt: 'wine cups',
	bg: BackgroundsColorsBlue,
}))
const juice = computed(() => ({
	title: t('products.product-2.title'),
	text: t('products.product-2.description'),
	image: '/images/products/juice.png',
	imageAlt: 'Orange juice',
}))
const oil = computed(() => ({
	title: t('products.product-3.title'),
	text: t('products.product-3.description'),
	image: '/images/products/oil.png',
	imageAlt: 'Vegetable oil',
}))
const chocolate = computed(() => ({
	title: t('products.product-4.title'),
	text: t('products.product-4.description'),
	image: '/images/products/chocolate.png',
	imageAlt: 'chocolate',
}))
const glucose = computed(() => ({
	title: t('products.product-5.title'),
	text: t('products.product-5.description'),
	image: '/images/products/glucose.png',
	imageAlt: 'glucose',
}))
const lactics = computed(() => ({
	title: t('products.product-6.title'),
	text: t('products.product-6.description'),
	image: '/images/products/lactic.png',
	imageAlt: 'Lacteo',
}))
</script>

<template>
	<ClientOnly>
		<div class="max-w-7xl mx-auto">
			<div class="mb-12 text-center text-customDark dark:text-customLight">
				<h3 class="text-4xl">{{ t('products.title') }}</h3>
				<p>{{ t('products.description') }}</p>
			</div>
			<div class="grid grid-cols-3 gap-24">
				<!-- wine -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="wine.image" :alt="wine.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsRose class="absolute h-44 z-10" />
					</div>
					<h3 class="text-4xl text-rose-500">
						{{ wine.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ wine.text }}
					</p>
				</div>

				<!-- juice -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="juice.image" :alt="juice.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsYellow class="absolute h-64 z-10" />
					</div>
					<h3 class="text-4xl text-orange-500">
						{{ juice.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ juice.text }}
					</p>
				</div>

				<!-- oil -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="oil.image" :alt="oil.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsGreen class="absolute h-44 z-10" />
					</div>
					<h3 class="text-4xl text-green-500">
						{{ oil.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ oil.text }}
					</p>
				</div>

				<!-- chocolate -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="chocolate.image" :alt="chocolate.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsGreen class="absolute h-44 z-10" />
					</div>
					<h3 class="text-4xl text-amber-900">
						{{ chocolate.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ chocolate.text }}
					</p>
				</div>

				<!-- glucose -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="glucose.image" :alt="glucose.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsGray class="absolute h-44 z-10" />
					</div>
					<h3 class="text-4xl text-amber-400">
						{{ glucose.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ glucose.text }}
					</p>
				</div>

				<!-- lactics -->
				<div class="flex flex-col justify-start items-center text-center space-y-4">
					<div
						class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
					>
						<img :src="lactics.image" :alt="lactics.imageAlt" class="rounded-full custom-blur z-20" />
						<BackgroundsColorsGreen class="absolute h-44 z-10" />
					</div>
					<h3 class="text-4xl dark:text-gray-200 text-gray-400">
						{{ lactics.title }}
					</h3>
					<p class="dark:text-customLight text-customDark">
						{{ lactics.text }}
					</p>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
