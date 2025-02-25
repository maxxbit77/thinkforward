<script setup>
import { images } from './images.js'

const main = document.querySelector('main')
const MAX_FRAMES = 151
let currentFrame = 0

function updateImage(frame = 0) {
	const src = images[frame].p
	img.src = src
}

// init with the first image
const img = document.createElement('img')
// append img to main
main.appendChild(img)
updateImage(currentFrame)

// Altura máxima del scroll
let maxScroll = document.documentElement.scrollHeight - window.innerHeight

window.addEventListener('resize', () => {
	maxScroll = document.documentElement.scrollHeight - window.innerHeight
})

let lastFrameUpdate = 0

window.addEventListener('scroll', () => {
	if (Date.now() - lastFrameUpdate < 1) return true
	// Actualizamos el contador
	lastFrameUpdate = Date.now()
	// Posición actual del scroll
	const scrollPosition = window.scrollY
	// Calcular el porcentaje del scroll
	const scrollFraction = scrollPosition / maxScroll
	// ¿Qué frame le toca?
	const frame = Math.floor(scrollFraction * MAX_FRAMES)
	// nos evitemos algo de trabajo cuando
	// al hacer scroll, el frame que le toca es el mismo
	// que ya tenía
	if (currentFrame !== frame) {
		// creamos el id del nombre del archivo
		updateImage(frame)
		currentFrame = frame
	}
})
</script>

<template>
	<div class="h-44">
		<LogoThinkforward />
	</div>
</template>

<style scoped>
*,
*::before,
*::after {
	box-sizing: border-box;
}

img {
	width: 100vw;
	height: 100dvh;
	object-fit: cover;
	position: fixed;
}

main {
	height: 300dvh;
}

header {
	background: linear-gradient(40deg, #ba3816, #a41705 40%);
	width: 300px;
	height: 300px;
	border-radius: 1000px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	margin-top: -230px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	animation: slideInDown 1500ms ease-out;

	img {
		width: 130px;
		margin: 0 auto;
		height: auto;
		margin-bottom: 30px;
	}
}

@keyframes slideInDown {
	from {
		transform: translate3d(-50%, -100%, 0);
		opacity: 0;
	}

	to {
		transform: translate3d(-50%, 0, 0);
		opacity: 1;
	}
}
</style>
