export function useIntersectionObserver(threshold = 0.3) {
	const elements = ref<HTMLElement[]>([])
	const inView = ref<boolean[]>([])
	let observer: IntersectionObserver | null = null

	const setElementRef = (el: HTMLElement | null, index: number) => {
		if (el) elements.value[index] = el
	}

	onMounted(async () => {
		if (!process.client) return

		await nextTick() // Esperamos a que Vue renderice

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = elements.value.indexOf(entry.target as HTMLElement)
					if (entry.isIntersecting && index !== -1) {
						inView.value[index] = true
					}
				})
			},
			{ threshold }
		)

		elements.value.forEach((el) => {
			if (el) observer?.observe(el)
		})
	})

	onUnmounted(() => {
		observer?.disconnect()
	})

	return { setElementRef, inView }
}
