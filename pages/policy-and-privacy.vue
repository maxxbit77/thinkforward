<script setup>
import { ref } from 'vue'

const companyName = 'ThinkForward S.L.'
const companyAddress = 'Barcelona, España'
const contactEmail = 'info@thinkforward.es'
</script>

<template>
	<div class="privacy-policy">
		<h1 class="text-4xl">Política de Privacidad</h1>
		<p>
			En {{ companyName }}, nos preocupamos por la privacidad de nuestros usuarios y nos comprometemos a proteger
			sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su
			información conforme al Reglamento General de Protección de Datos (GDPR) y la legislación española vigente.
		</p>

		<h2>1. Responsable del Tratamiento</h2>
		<p><strong>Empresa:</strong> {{ companyName }}</p>
		<p><strong>Dirección:</strong> {{ companyAddress }}</p>
		<p><strong>Correo electrónico:</strong> {{ contactEmail }}</p>

		<h2>2. Datos que Recopilamos</h2>
		<ul>
			<li>Correo electrónico</li>
			<li>Teléfono</li>
			<li>Datos de navegación (cookies, ubicación, etc.)</li>
		</ul>

		<h2>3. Finalidad del Tratamiento</h2>
		<ul>
			<li>Proporcionar nuestros servicios y gestionar su cuenta</li>
			<li>Enviar comunicaciones comerciales (previo consentimiento)</li>
			<li>Mejorar la experiencia del usuario en nuestro sitio web</li>
			<li>Cumplir con obligaciones legales</li>
		</ul>

		<h2>4. Base Legal para el Tratamiento</h2>
		<ul>
			<li>Su consentimiento expreso</li>
			<li>La ejecución de un contrato</li>
			<li>El cumplimiento de una obligación legal</li>
			<li>Intereses legítimos de la empresa</li>
		</ul>

		<h2>5. Derechos del Usuario</h2>
		<ul>
			<li>Acceder a sus datos personales</li>
			<li>Rectificar datos incorrectos</li>
			<li>Solicitar la supresión de sus datos</li>
			<li>Oponerse al tratamiento de sus datos</li>
			<li>Solicitar la portabilidad de los datos</li>
		</ul>
		<p>Para ejercer estos derechos, puede contactarnos en {{ contactEmail }}.</p>

		<h2>6. Conservación de los Datos</h2>
		<p>
			Sus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron
			recopilados y para atender responsabilidades legales.
		</p>

		<h2>7. Seguridad de los Datos</h2>
		<p>
			Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra
			accesos no autorizados o uso indebido.
		</p>

		<h2>8. Uso de Cookies</h2>
		<p>
			Este sitio web utiliza cookies para mejorar la experiencia del usuario. Puede gestionar sus preferencias de
			cookies en la configuración del navegador.
		</p>

		<h2>9. Modificaciones de la Política de Privacidad</h2>
		<p>
			Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las modificaciones
			serán publicadas en esta página.
		</p>

		<h2>10. Contacto</h2>
		<p>Si tiene alguna pregunta sobre nuestra política de privacidad, puede contactarnos en {{ contactEmail }}.</p>
	</div>
</template>

<style scoped>
.privacy-policy {
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	font-family: Arial, sans-serif;
}
.privacy-policy h1,
.privacy-policy h2 {
	color: #333;
}
</style>
