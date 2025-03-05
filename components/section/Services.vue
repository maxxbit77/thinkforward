<template>
	<ClientOnly>
		<div class="bg-customLight dark:bg-customDark">
			<div class="relative max-w-7xl mx-auto">
				<h3 class="mb-12 text-customDark dark:text-customLight text-4xl text-center">
					{{ $t('services.title') }}
				</h3>
				<div class="grid-rows-3 space-y-4 relative z-10">
					<div class="grid grid-cols-2 h-[500px] gap-x-4">
						<div>
							<VideoBase
								src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602300/camion-lavado_iuqluj.mp4"
								title="Te lavamos el camioncito"
								:speed="2"
							>
								<template #title>
									{{ $t('services.services.service-1.title') }}
								</template>
								<template #description>
									{{ $t('services.services.service-1.description') }}
								</template>
							</VideoBase>
						</div>
						<div>
							<VideoBase
								src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602351/trucks-standby_hiam3k.mp4"
								title="Tenemos un huevo de camioncitos"
								:speed="2"
							>
								<template #title>
									{{ $t('services.services.service-2.title') }}
								</template>
								<template #description>
									{{ $t('services.services.service-2.description') }}
								</template>
							</VideoBase>
						</div>
					</div>

					<div class="h-[600px]">
						<VideoBase
							src="https://res.cloudinary.com/dw6ikrcqm/video/upload/v1740602415/eu-map-connections_pxgils.mp4"
							title="Conexiones en todos lados!"
						>
							<template #title>
								{{ $t('services.services.service-3.title') }}
							</template>
							<template #description>
								{{ $t('services.services.service-3.description') }}
							</template>
						</VideoBase>
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<style scoped></style>
