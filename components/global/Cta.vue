<script setup></script>

<template>
	<div>
		<NuxtLink to="/?section=contact">
			<button
				class="px-4 py-2 hover:bg-customLight hover:text-customDark bg-customPrimary text-customLight text-xl rounded-xl transition-all"
			>
				<slot />
			</button>
		</NuxtLink>
	</div>
</template>

<style lang="css" scoped>
@keyframes rotate-border {
	0% {
		border-image-source: linear-gradient(0deg, #0ea5e9, #2d0b94);
	}
	25% {
		border-image-source: linear-gradient(90deg, #0ea5e9, #7f11b2);
	}
	50% {
		border-image-source: linear-gradient(180deg, #0ea5e9, #7f11b2);
	}
	75% {
		border-image-source: linear-gradient(270deg, #0ea5e9, #7f11b2);
	}
	100% {
		border-image-source: linear-gradient(0deg, #0ea5e9, #2d0b94);
	}
}

.border-animated {
	position: relative;
	display: inline-block;
	border: 3px solid transparent;
	border-radius: 12px; /* Aplica un border-radius consistente */
	border-image: linear-gradient(0deg, #090a0a, #2d0b94);
	border-image-slice: 1;
	animation: rotate-border 3s linear infinite;
	overflow: hidden;
}

.border-overlay {
	position: absolute;
	top: -3px;
	left: -3px;
	right: -3px;
	bottom: -3px;
	border-radius: 12px; /* Asegura que el fondo siga el mismo border-radius */
	background: linear-gradient(45deg, #55ffb6, #2d0b94, #55ffb6, #2d0b94);
	background-size: 300% 300%;
	animation: gradientAnimation 3s linear infinite;
	z-index: -2;
}
</style>
