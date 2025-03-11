<script setup lang="ts">
import { DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle } from 'radix-vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const openModal = ref<boolean>(false)

const translations = computed(() => ({
	title: t('cookies.title'),
	description: t('cookies.description'),
	policy: t('cookies.policy'),
	accept: t('cookies.button.accept'),
	cancel: t('cookies.button.cancel'),
}))

const getCookie = (name: string): string | null => {
	const value = `; ${document.cookie}`
	const parts = value.split(`; ${name}=`)
	if (parts.length === 2) return parts.pop()?.split(';').shift() || null
	return null
}

onMounted(() => {
	if (!getCookie('cookiesAccepted')) {
		openModal.value = true
	}
})

const acceptCookies = () => {
	document.cookie = 'cookiesAccepted=true; path=/; max-age=' + 60 * 60 * 24 * 365 // Expira en 1 año

	openModal.value = false
}

const cancelCookies = () => {
	openModal.value = false
}
</script>

<template>
	<ClientOnly>
		<DialogRoot v-model:open="openModal" :modal="true" :escapeKeyDown="false" :pointerDownOutside="false">
			<DialogPortal>
				<DialogOverlay
					class="bg-blackA9 fixed inset-0 z-30"
					:data-state="openModal ? 'open' : 'closed'"
					:disableOutsidePointerEvents="true"
				/>
				<DialogContent class="fixed bottom-0 w-full bg-slate-900 p-4 shadow-lg z-50 border" trapFocus>
					<div class="flex-1 justify-center md:flex md:justify-between items-center space-x-8">
						<div>
							<DialogTitle class="text-lg font-semibold text-customLight">
								{{ translations.title }}</DialogTitle
							>
							<DialogDescription class="mt-2 text-sm text-gray-600">
								{{ translations.description }}
								<a href="/policy-and-privacy" class="text-pink-500">{{ translations.policy }}</a>
							</DialogDescription>
						</div>
						<div class="mt-4 md:mt-0 flex justify-center md:justify-end space-x-3">
							<button
								@click="cancelCookies"
								class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 outline-none"
							>
								{{ translations.accept }}
							</button>
							<button
								@click="acceptCookies"
								class="px-4 py-2 bg-customPrimary text-white rounded-lg hover:bg-sky-600 outline-none"
							>
								{{ translations.cancel }}
							</button>
						</div>
					</div>
				</DialogContent>
			</DialogPortal>
		</DialogRoot>
	</ClientOnly>
</template>
