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
									loremImpum loremImpum loremImpum loremImpumloremImpum loremImpum
									loremImpumloremImpum loremImpum loremImpum loremImpum"
								</Video2x2>
							</div>
							<div>
								<Video2x2
									src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602351/trucks-standby_hiam3k.mp4"
									title="Tenemos un huevo de camioncitos"
									:speed="2"
								>
									loremImpum loremImpum loremImpum loremImpumloremImpum loremImpum
									loremImpumloremImpum loremImpum loremImpum loremImpum"
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
							<div class="bg-orange-500 rounded-lg"></div>
							<div class="bg-red-500 rounded-lg"></div>
							<div class="grid grid-row-2 gap-2">
								<div class="bg-orange-500 rounded-lg">
									<div class="bg-purple-500"></div>
								</div>
								<div class="bg-purple-500 rounded-lg">
									<div class=""></div>
								</div>
							</div>
							<div class="grid grid-row-2 gap-2">
								<div class="bg-emerald-500 rounded-lg">
									<div class="bg-purple-500"></div>
								</div>
								<div class="bg-slate-500 rounded-lg">
									<div class=""></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="relative">
				<div class="w-full fade-mask h-[600px] absolute top-[1000px]">
					<VideoLandscape
						title="Trabajamos con las mejores empresas de europa"
						src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740603437/truck-go-back_vrowz4.mp4"
					>
					</VideoLandscape>
				</div>
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
