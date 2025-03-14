<script setup>
const isDark = ref(false)

onMounted(() => {
	const savedTheme = localStorage.getItem('theme')

	if (savedTheme) {
		isDark.value = savedTheme === 'dark'
	} else {
		isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
	}

	document.documentElement.classList.toggle('dark', isDark.value)
})

const toggleDarkMode = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark', isDark.value)

	localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
</script>

<template>
	<div>
		<button
			@click="toggleDarkMode"
			class="cursor-pointer duration-500 ease-in-out inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-card/60 hover:text-accent-foreground/80 size-10 outline-none"
		>
			<SvgDarkButton v-if="!isDark" />
			<SvgLightButton v-else class="mt-1" />
		</button>
	</div>
</template>
