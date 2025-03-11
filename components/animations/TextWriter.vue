<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
	textsPrimary: { type: Array, required: true },
	textsSecondary: { type: Array, required: true },
	textSpeed: { type: Number, default: 100 },
	delay: { type: Number, default: 1500 },
	customClassPrimary: { type: String, default: '' },
	customClassSecondary: { type: String, default: '' },
	tagPrimary: { type: String, default: 'h1' },
	tagSecondary: { type: String, default: 'h2' },
})

const textsPrimary = computed(() => props.textsPrimary || [])
const textsSecondary = computed(() => props.textsSecondary || [])

const currentTextPrimary = ref('')
const currentTextSecondary = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)

const type = () => {
	if (!textsPrimary.value.length || !textsSecondary.value.length) return

	const fullTextPrimary = textsPrimary.value[currentIndex.value]
	const fullTextSecondary = textsSecondary.value[currentIndex.value]

	if (!isDeleting.value) {
		// Escribiendo
		currentTextPrimary.value = fullTextPrimary.substring(0, currentTextPrimary.value.length + 1)
		currentTextSecondary.value = fullTextSecondary.substring(0, currentTextSecondary.value.length + 1)

		if (currentTextPrimary.value === fullTextPrimary && currentTextSecondary.value === fullTextSecondary) {
			setTimeout(() => {
				isDeleting.value = true
				type()
			}, props.delay)
			return
		}
	} else {
		// Borrando
		currentTextPrimary.value = fullTextPrimary.substring(0, currentTextPrimary.value.length - 1)
		currentTextSecondary.value = fullTextSecondary.substring(0, currentTextSecondary.value.length - 1)

		if (currentTextPrimary.value === '' && currentTextSecondary.value === '') {
			isDeleting.value = false
			currentIndex.value = (currentIndex.value + 1) % textsPrimary.value.length
		}
	}

	setTimeout(type, isDeleting.value ? props.textSpeed / 2 : props.textSpeed)
}

onMounted(() => {
	if (textsPrimary.value.length > 0 && textsSecondary.value.length > 0) {
		type()
	}
})
</script>

<template>
	<div class="text-center">
		<component :is="tagPrimary" :class="`text-white ${customClassPrimary}`">
			{{ currentTextPrimary }}<span class="blinking">|</span>
		</component>
		<component :is="tagSecondary" :class="`text-white ${customClassSecondary}`">
			{{ currentTextSecondary }}<span class="blinking">|</span>
		</component>
	</div>
</template>

<style scoped>
.blinking {
	display: inline-block;
	width: 10px;
	animation: blink 0.8s infinite;
}
@keyframes blink {
	50% {
		opacity: 0;
	}
}
</style>
