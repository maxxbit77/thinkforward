<script setup>
const images = import.meta.glob('@/public/images/companies/*.png', { eager: true })
const imagePaths = Object.values(images).map((module) => module.default)

const carouselImages = [...imagePaths, ...imagePaths]
</script>

<template>
	<div class="carousel-container">
		<div class="carousel-track">
			<img v-for="(image, index) in carouselImages" :key="index" :src="image" class="carousel-item" />
		</div>
	</div>
</template>

<style scoped>
.carousel-container {
	position: relative;
	width: 100%;
	max-width: 1280px;
	overflow: hidden;
	background: rgba(107, 114, 128, 0.1);
	border-radius: 12px;
	border: 1px solid rgba(107, 114, 128, 0.3);
	margin: auto;
	height: 200px;
	display: flex;
	align-items: center;
}

.carousel-track {
	display: flex;
	align-items: center;
	gap: 2rem;
	white-space: nowrap;
	animation: scroll 15s linear infinite;
}

.carousel-item {
	height: 80px;

	object-fit: cover;
}

@keyframes scroll {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50%);
	}
}
</style>
