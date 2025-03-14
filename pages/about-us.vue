<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
	<div class="max-w-7xl mx-auto px-6 py-16">
		<!-- Sección "Sobre Nosotros" -->
		<div class="mb-24 mt-64 grid grid-cols-12">
			<div class="col-span-6">
				<h2 class="text-4xl font-bold mb-6">Sobre Nosotros</h2>
				<h3 class="text-xl font-semibold mb-4">
					ThinkForward es una empresa innovadora especializada en soluciones logísticas para el transporte de
					líquidos por carretera en toda Europa.
				</h3>
				<p class="text-lg text-gray-700 dark:text-gray-300">
					Nuestra misión es revolucionar el sector del transporte de líquidos, brindando eficiencia,
					transparencia y sostenibilidad a nuestros clientes. Con un equipo de profesionales altamente
					capacitados y una infraestructura de vanguardia, garantizamos un servicio optimizado que cumple con
					los más altos estándares de seguridad y calidad.
				</p>
				<div class="mt-8">
					<Cta> Trabaja con nosotros </Cta>
				</div>
			</div>
			<div class="col-span-6 flex justify-end">
				<img src="/public/images/about/us.png" alt="" />
			</div>
		</div>

		<!-- Filosofía y visión -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div>
				<img src="/public/images/about/evolution.png" alt="evolution" class="" />
				<p class="text-lg">
					En ThinkForward creemos en la evolución constante de la logística. Nuestra empresa no solo gestiona
					el transporte de líquidos, sino que también desarrolla soluciones estratégicas para mejorar la
					trazabilidad, eficiencia y sostenibilidad en la cadena de suministro.
				</p>
			</div>
			<div>
				<img src="/public/images/about/innovation.png" alt="evolution" class="" />
				<p class="text-lg">
					La innovación es nuestro pilar fundamental. Buscamos integrar nuevas tecnologías en nuestros
					procesos, como el monitoreo en tiempo real mediante GPS, sensores de temperatura y presión, y
					próximamente, el uso de **blockchain** para garantizar la seguridad y transparencia en todas las
					operaciones.
				</p>
			</div>
			<div>
				<img src="/public/images/about/vision.png" alt="evolution" class="" />
				<p class="text-lg">
					Nuestra visión a futuro es clara: convertirnos en referentes del transporte logístico de líquidos en
					Europa, expandiendo nuestras operaciones y optimizando los procesos con herramientas digitales de
					última generación.
				</p>
			</div>
		</div>

		<!-- Implementación de Blockchain en la Logística -->
		<div class="mt-24">
			<div>
				<img src="/public/images/about/blockchain.png" alt="" />
			</div>
			<div class="mt-8">
				<h2 class="text-4xl font-bold mb-6">Blockchain en la logística de transporte</h2>
				<p class="text-lg mb-6">
					En ThinkForward estamos realizando un estudio exhaustivo sobre la **implementación de la tecnología
					blockchain** en la logística del transporte de líquidos. Creemos que la trazabilidad, seguridad y
					eficiencia en la gestión de datos son fundamentales para el futuro del sector.
				</p>
			</div>

			<h3 class="text-2xl font-semibold mb-4">¿Cómo puede ayudar blockchain en la logística?</h3>
			<ul class="list-disc list-inside text-lg space-y-3">
				<li>
					<strong>Transparencia y confianza:</strong> Todos los datos del transporte se almacenan en una red
					inmutable, evitando manipulaciones y fraudes.
				</li>
				<li>
					<strong>Seguimiento en tiempo real:</strong> Gracias a la descentralización de datos, todos los
					actores de la cadena de suministro pueden verificar la ubicación y estado del cargamento.
				</li>
				<li>
					<strong>Optimización de contratos inteligentes:</strong> La automatización de procesos mediante
					**smart contracts** permite realizar pagos y validar entregas de forma instantánea y segura.
				</li>
				<li>
					<strong>Reducción de costos administrativos:</strong> Elimina intermediarios y reduce la necesidad
					de documentación en papel, agilizando los trámites.
				</li>
				<li>
					<strong>Seguridad avanzada:</strong> La encriptación de datos minimiza los riesgos de ciberataques y
					filtraciones de información sensible.
				</li>
			</ul>

			<!-- Estudio en proceso -->
			<div class="mt-12">
				<h3 class="text-2xl font-semibold mb-4">Nuestro estudio en desarrollo</h3>
				<p class="text-lg">
					ThinkForward ha iniciado un proyecto piloto donde se integrará blockchain en nuestro sistema de
					gestión logística. Durante los próximos meses, analizaremos la viabilidad de implementar esta
					tecnología en todos los procesos de transporte, desde la recolección hasta la entrega del producto.
				</p>
				<p class="text-lg mt-4">
					Estamos colaborando con expertos en **tecnología blockchain y logística** para desarrollar una
					plataforma que permita a nuestros clientes rastrear sus envíos en tiempo real y automatizar
					contratos inteligentes. Nuestro objetivo es mejorar la seguridad de las transacciones y garantizar
					un control total sobre la mercancía transportada.
				</p>
				<p class="text-lg mt-4">
					La innovación y la mejora continua forman parte de nuestro ADN. Creemos que blockchain transformará
					la industria del transporte y nos permitirá ofrecer un servicio aún más eficiente, seguro y
					confiable.
				</p>
			</div>
		</div>
	</div>
</template>
