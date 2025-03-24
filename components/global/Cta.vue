<script setup></script>

<template>
	<div>
		<NuxtLink to="/?section=contact">
			<button
				class="px-4 py-2 bg-customDark text-customLight hover:bg-customLight hover:text-customDark text-xl rounded-xl transition-all border border-gray-400"
			>
				<slot />
			</button>
		</NuxtLink>
	</div>
</template>
