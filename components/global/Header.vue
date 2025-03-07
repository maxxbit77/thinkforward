<script setup>
const logoRef = ref(null)
const changeLogoColor = ref(false)

const handleScroll = () => {
	const scroll = logoRef.value.getBoundingClientRect()
	if (scroll.top <= 25) {
		changeLogoColor.value = true
	} else {
		changeLogoColor.value = false
	}
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
		<header class="circle-background">
			<div ref="logoRef"></div>
		</header>
		<LogoThinkforward
			class="logo-slide dark:text-customLight text-customDark"
			:class="{
				'text-white transition-colors ': !changeLogoColor,
				'text-slate-950 transition-colors ': changeLogoColor,
			}"
		/>
	</div>
</template>

<style scoped>
.circle-background {
	background: linear-gradient(40deg, #0d0d0d, #14027c 70%);
	width: 400px;
	height: 400px;
	border-radius: 1000px;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 50;
	margin-top: -260px;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	animation: slideInDown 1500ms ease-out;
}

.logo-slide {
	position: fixed;
	width: 280px;
	top: 24px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 80;
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
		opacity: 1;
	}
}
</style>
