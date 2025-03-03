<template>
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

					<AnimationsCountUp :value="22000" :speed="4000" :step="100"> Viajes realizados </AnimationsCountUp>
				</div>

				<AnimationsCountUp :value="200000" :speed="10000" :step="1000"> Litros movidos </AnimationsCountUp>
			</div>
		</div>
	</div>
</template>
