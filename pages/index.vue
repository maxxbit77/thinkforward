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
					</div>
					<div class="grid grid-cols-4 h-[500px] gap-x-4">
						<div
							class="relative bg-gray-500/10 dark:bg-slate-950/20 rounded-lg col-span-2 flex flex-col justify-center backdrop-blur-xl items-center border-2 border-black dark:border-gray-500"
						>
							<p class="absolute top-0 text-2xl z-10">Movements last months</p>
							<ChartsBar class="p-8" :colors="['orange', 'red']" />
						</div>

						<div class="col-span-2 grid grid-row-2 gap-4">
							<div class="relative grid grid-cols-2 gap-4">
								<AnimationsCountUp :value="1000" :speed="200" :step="5">
									Días con nuestros clientes
								</AnimationsCountUp>

								<AnimationsCountUp :value="22000" :speed="4000" :step="100">
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
			<section class="relative">
				<ClientOnly>
					<div class="w-full h-[600px] absolute top-[1200px] bg-white dark:bg-slate-950">
						<h3 class="mb-24 text-4xl text-center text-slate-950 dark:text-gray-200">
							Compañias que confian en nosotros
						</h3>
						<ImageBrandBanner />
					</div>
				</ClientOnly>
			</section>

			<!-- Services -->

			<section class="relative top-[1800px] h-[800px] text-center bg-white dark:bg-slate-950">
				<SectionServices id="services" />
			</section>
			<!-- Contact -->
			<section class="mb-24 relative top-[1800px] z-1 bg-white dark:bg-slate-950 h-[600px]">
				<SectionContact id="contact" />
			</section>
			<footer
				class="relative top-[1600px] z-1 bg-white dark:bg-slate-950 flex flex-col justify-center items-center space-y-4"
			>
				<div class="w-[400px] text-center">
					<LogoThinkforward class="text-slate-950 dark:text-white" />
				</div>
				<div class="h-24 flex justify-center">All rights reserved ThinkForward S.L.</div>
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
