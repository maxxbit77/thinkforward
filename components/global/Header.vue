<script setup></script>
<template>
	<div class="relative">
		<header>
			<LogoThinkforward class="w-[280px] h-auto mb-24 mx-auto" />
		</header>
		<ButtonDarkMode class="absolute top-0 right-12 z-20" />
	</div>
</template>

<style scoped>
header {
	background: linear-gradient(40deg, #0d0d0d, #14027c 70%);
	width: 400px;
	height: 400px;
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
