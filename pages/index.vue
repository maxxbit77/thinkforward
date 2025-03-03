<script setup></script>
<template>
	<main>
		<nav>
			<NavBar />
		</nav>

		<!--  scroll component -->
		<header>
			<Hero />
		</header>

		<!-- grid videos/charts -->
		<div class="relative bg-customLight dark:bg-customDark">
			<section class="absolute top-[-1000px] bg-customLight dark:bg-customDark w-full px-2 fade-mask-top">
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
			</section>

			<section class="relative top-[1100px] bg-customLight dark:bg-customDark h-[800px] items-center">
				<div class="max-w-7xl mx-auto">
					<div>
						<h3 class="my-6 text-center text-4xl dark:text-white">Los datos nos avalan</h3>
					</div>
					<div class="grid grid-cols-4 h-[500px] gap-x-4">
						<div
							class="relative bg-gray-500/10 dark:bg-customDark/20 rounded-lg col-span-2 flex flex-col justify-center backdrop-blur-xl items-center border-2 border-customDark dark:border-gray-500"
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
			<section class="relative w-full top-[1000px]">
				<SectionCompanies />
			</section>

			<!-- Services -->
			<section class="relative top-[1200px] h-[800px] text-center bg-customLight dark:bg-customDark">
				<SectionServices id="services" />
			</section>

			<!-- Contact -->
			<section class="relative top-[1100px] z-1 bg-customLight dark:bg-customDark h-[600px] w-full mx-auto">
				<SectionContact id="contact" />
			</section>

			<!-- Footer -->
			<footer class="absolute bottom-[-1300px] w-full z-1 bg-customLight dark:bg-slate-900/80 h-[200px]">
				<div class="flex flex-col justify-center items-center space-y-4 h-full">
					<div class="w-[400px]">
						<LogoThinkforward class="text-customDark dark:text-customLight" />
					</div>
					<div class="flex justify-center">All rights reserved ThinkForward S.L.</div>
				</div>
			</footer>
		</div>
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
