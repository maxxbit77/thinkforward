<template>
	<main>
		<!-- Encabezado con logo -->
		<Header />

		<!-- Componente que maneja el scroll -->
		<ScrollImage />

		<div class="relative">
			<!-- Imagen con contenido -->
			<div class="absolute top-[-1200px] bg-white w-full px-2 fade-mask-top">
				<div class="relative max-w-7xl mx-auto bg-white">
					<div class="grid-rows-3 space-y-4 relative z-10 mt-[500px] mb-[1000px]">
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
						<div class="grid grid-cols-4 h-[500px] gap-x-4">
							<div class="bg-sky-700 rounded-lg col-span-2 flex flex-col justify-center items-center">
								<p class="text-white">titulo del grafico</p>
								<ChartsBar class="p-8" :colors="['orange', 'red']" />
							</div>

							<div class="col-span-2 grid grid-row-2 gap-4">
								<div class="grid grid-cols-2 gap-4">
									<div class="bg-emerald-500 rounded-lg">
										<AnimationsCountUp :value="1000" :speed="200" :step="5">
											Días con nuestros clientes
										</AnimationsCountUp>
									</div>
									<div class="bg-slate-500 rounded-lg">
										<AnimationsCountUp :value="1000" :speed="500" :step="5">
											Viajes realizados
										</AnimationsCountUp>
									</div>
								</div>
								<div class="bg-purple-500 rounded-lg">
									<AnimationsCountUp :value="200000" :speed="10000" :step="1000">
										Litros movidos
									</AnimationsCountUp>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="relative">
				<div class="w-full fade-mask h-[600px] absolute top-[1000px]">
					<VideoLandscape
						src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740603437/truck-go-back_vrowz4.mp4"
					>
						Las compañías confian en nosotros
					</VideoLandscape>
					<ImageLogoCard class="absolute z-30 top-[400px] fade-mask-top" />
				</div>
				<div></div>
			</div>
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
