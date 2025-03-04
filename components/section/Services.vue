<template>
	<div class="bg-customLight dark:bg-customDark">
		<div class="relative max-w-7xl mx-auto">
			<h3 class="mb-12 text-customDark dark:text-customLight text-4xl text-center">Services</h3>
			<div class="grid-rows-3 space-y-4 relative z-10">
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
