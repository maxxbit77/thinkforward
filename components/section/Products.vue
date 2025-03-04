<script setup>
const wine = {
	title: 'Vinos y licores',
	text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
	image: '/images/wine.png',
	imageAlt: 'wine cups',
}
const juices = {
	title: 'Zumos de frutas',
	text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
	image: '/images/juice.png',
	imageAlt: 'Orange juice',
}

const oil = {
	title: 'Vegetable Oil',
	text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore beataefuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex quibusdam sint ipsamagni non.',
	image: '/images/oil.png',
	imageAlt: 'Vegetable oil',
}
</script>
<template>
	<div class="max-w-7xl mx-auto">
		<h3 class="mb-12 text-customDark dark:text-customLight text-4xl text-center">Products</h3>
		<div class="grid grid-cols-3 gap-24">
			<!-- wine -->
			<div class="flex flex-col justify-center items-center text-center space-y-4">
				<div
					class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
				>
					<img :src="wine.image" :alt="wine.imageAlt" class="rounded-full custom-blur p-4 z-20" />
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
			<div class="flex flex-col justify-center items-center text-center space-y-4">
				<div
					class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
				>
					<img :src="juices.image" :alt="juices.imageAlt" class="rounded-full custom-blur p-6 z-20" />
					<BackgroundsColorsYellow class="absolute h-44 z-10" />
				</div>
				<h3 class="text-4xl text-orange-500">
					{{ juices.title }}
				</h3>
				<p class="dark:text-customLight text-customDark">
					{{ juices.text }}
				</p>
			</div>

			<!-- oil -->
			<div class="flex flex-col justify-center items-center text-center space-y-4">
				<div
					class="relative rounded-full border-2 border-slate-400/10 dark:shadow-none shadow flex flex-col items-center justify-center h-32 w-32 overflow-hidden"
				>
					<img :src="oil.image" :alt="oil.imageAlt" class="rounded-full custom-blur p-8 z-20" />
					<BackgroundsColorsGreen class="absolute h-44 z-10" />
				</div>
				<h3 class="text-4xl text-green-500">
					{{ oil.title }}
				</h3>
				<p class="dark:text-customLight text-customDark">
					{{ oil.text }}
				</p>
			</div>
		</div>
	</div>
</template>
