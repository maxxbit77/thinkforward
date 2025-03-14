<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const logoRef = ref(null)
const changeLogoColor = ref(false)

const handleScroll = () => {
	if (!logoRef.value) return

	const scroll = logoRef.value.$el.getBoundingClientRect()
	changeLogoColor.value = scroll.top <= 25
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div class="relative">
		<div class="hidden xl:block">
			<img class="circle-background" src="public/star.png" alt="" />
		</div>

		<NuxtLink to="/?section=home">
			<LogoThinkforward
				ref="logoRef"
				class="logo-slide text-customPrimary"
				:class="{
					'text-blue-600 transition-colors': !changeLogoColor,
					'text-black transition-colors': changeLogoColor,
				}"
			/>
		</NuxtLink>
	</div>
</template>

<style scoped>
.circle-background {
	width: 400px;
	height: 400px;
	border-radius: 1000px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 50;
	margin-top: -160px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	animation: slideInDown 1500ms ease-out;
}

.logo-slide {
	position: fixed;
	width: 270px;
	top: 25px;
	left: 49%;
	transform: translateX(-50%);
	z-index: 60;
	animation: slideIn 1500ms ease-out;
}

@keyframes slideIn {
	from {
		transform: translate3d(-50%, -100%, 0);
		opacity: 0;
	}
	to {
		transform: translate3d(-50%, 0, 0);
		opacity: 1;
	}
}
@keyframes slideInDown {
	from {
		transform: translate3d(-50%, -100%, 0);
		opacity: 0;
	}
	to {
		transform: translate3d(-50%, 0, 0);
		opacity: 0.6;
	}
}
</style>
