<script setup></script>
<template>
	<main>
		<NavBar />
		<Header />
		<!--  scroll component -->
		<ScrollImage />

		<!-- grid videos/charts -->
		<section class="relative">
			<div class="absolute top-[-1000px] bg-white dark:bg-slate-950 w-full px-2 fade-mask-top">
				<div class="relative max-w-7xl mx-auto">
					<div class="grid-rows-3 space-y-4 relative z-10 mt-[800px] mb-[1000px]">
						<div class="grid grid-cols-2 h-[500px] gap-x-4">
							<div>
								<Video2x2
									src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602300/camion-lavado_iuqluj.mp4"
									title="Te lavamos el camioncito"
									:speed="2"
								>
									Te metemos la manguera por todos los agujeros
								</Video2x2>
							</div>
							<div>
								<Video2x2
									src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602351/trucks-standby_hiam3k.mp4"
									title="Tenemos un huevo de camioncitos"
									:speed="2"
								>
									brum brum brum!
								</Video2x2>
							</div>
						</div>

						<div class="h-[600px]">
							<VideoLandscape
								src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602415/eu-map-connections_pxgils.mp4"
								title="Conexiones en todos lados!"
							>
								loremImpum loremImpum loremImpum loremImpumloremImpum loremImpum
							</VideoLandscape>
						</div>
					</div>
				</div>
			</div>

			<section class="relative top-[1200px] bg-white dark:bg-slate-950 h-[800px] items-center">
				<div class="max-w-7xl mx-auto">
					<div>
						<h3 class="my-6 text-center text-4xl dark:text-white">Los datos nos avalan</h3>
						<BackgroundsColorsBlue class="absolute -top-[50px] -left-0 h-[500px]" />
					</div>
					<div class="grid grid-cols-4 h-[500px] gap-x-4">
						<div
							class="relative bg-gray-300/20 dark:bg-slate-950/20 rounded-lg col-span-2 flex flex-col justify-center backdrop-blur-xl items-center border dark:border-white"
						>
							<p class="absolute top-0 text-2xl">Movements last months</p>
							<ChartsBar class="p-8" :colors="['orange', 'red']" />
						</div>

						<div class="col-span-2 grid grid-row-2 gap-4">
							<div class="relative grid grid-cols-2 gap-4">
								<BackgroundsColorsBlue class="absolute -top-[80px] left-0 rotate-90" />
								<div>
									<AnimationsCountUp :value="1000" :speed="200" :step="5">
										Días con nuestros clientes
									</AnimationsCountUp>
								</div>

								<AnimationsCountUp :value="1000" :speed="500" :step="5">
									Viajes realizados
								</AnimationsCountUp>
							</div>

							<AnimationsCountUp :value="200000" :speed="10000" :step="1000">
								Litros movidos
							</AnimationsCountUp>
						</div>
					</div>
				</div>
			</section>

			<!-- Companies -->
			<section class="relative z-1">
				<ClientOnly>
					<div class="w-full h-[600px] absolute top-[1200px] bg-white">
						<VideoLandscape
							src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740603437/truck-go-back_vrowz4.mp4"
						>
							<div
								class="fade-mask-top bg-gray-300/50 w-full h-[200px] rounded-lg flex items-center justify-center absolute -top-20 text-slate-950 dark:text-white text-5xl"
							>
								Las mayores compañías confían en nosotros
							</div>
						</VideoLandscape>
						<ImageBrandBanner class="absolute z-30 top-[430px] fade-mask-top" />
					</div>
				</ClientOnly>
			</section>

			<!-- Services -->

			<section class="pt-[100px] relative top-[1800px] h-[800px] text-center bg-white dark:bg-slate-950 z-1">
				<h3 class="mb-12 dark:text-white text-4xl">Nuestros Servicios</h3>
				<div class="grid grid-cols-3 gap-8 max-w-7xl mx-auto">
					<Card
						imageSrc="/images/wine.png"
						imageAlt="wine"
						customClass="border-rose-500 shadow-xl shadow-rose-500"
					>
						<template #title>
							<span class="text-rose-500"> Vinos y licores </span>
						</template>
						<template #text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
							beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex
							quibusdam sint ipsa magni non.
						</template>
					</Card>
					<Card
						imageSrc="/images/juice.png"
						imageAlt="wine"
						customClass="border-orange-500 shadow-xl shadow-orange-500"
					>
						<template #title>
							<span class="text-orange-500"> Zumos de frutas </span>
						</template>
						<template #text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
							beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex
							quibusdam sint ipsa magni non.
						</template>
					</Card>
					<Card
						imageSrc="/images/oil.png"
						imageAlt="wine"
						customClass="border-green-500 shadow-xl shadow-green-500"
					>
						<template #title>
							<span class="text-green-500"> Aceites vegetales </span>
						</template>
						<template #text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis minus labore
							beatae fuga iste sequi non laborum corporis culpa hic, tenetur minima. Nesciunt, ex
							quibusdam sint ipsa magni non.
						</template>
					</Card>
				</div>
			</section>
			<!-- Contact -->
			<section class="mb-24 relative top-[1800px] bg-white dark:bg-gray-950 z-1">
				<div class="max-w-7xl mx-auto h-[400px]">
					<div
						class="grid grid-cols-2 text-white border-2 rounded-xl h-full p-2 overflow-hidden bg-slate-900/30"
					>
						<div>
							<ContactInfo />
						</div>
						<div class="absoolute z-10">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
			<footer
				class="relative top-[1800px] z-1 bg-white dark:bg-slate-950 flex flex-col justify-center items-center space-y-4"
			>
				<div class="w-[400px] text-center">
					<LogoThinkforward class="text-slate-950 dark:text-white" />
				</div>
				<div class="h-24 flex justify-center">All rights reserved ThinkForward S.A.</div>
			</footer>
		</section>
	</main>
</template>

<style scoped>
.fade-mask-top {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 100%, transparent);
}

.fade-mask {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
}
</style>
