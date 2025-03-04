<script setup>
const props = defineProps({
	icon: String,
})
</script>
<template>
	<ClientOnly>
		<div>
			<button
				class="group transition-all duration-100 ease-in border border-gray-600 hover:bg-customPrimary rounded-xl px-3 pt-3 pb-2"
			>
				<div v-if="icon">
					<Icon
						:name="icon"
						class="size-8 text-Slate-950 dark:text-white transition-colors duration-100 ease-in dark:group-hover:text-customDark group-hover:text-customLight"
					/>
				</div>
			</button>
		</div>
	</ClientOnly>
</template>
