<script setup>
import { useI18n } from 'vue-i18n'
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'
import { ref, reactive } from 'vue'

const { t } = useI18n()
const { toast } = useToast()
const isLoading = ref(false)

const form = reactive({
	name: '',
	email: '',
	company: '',
	subject: '',
})

const clearForm = () => {
	form.name = ''
	form.email = ''
	form.company = ''
	form.subject = ''
}

const handleSubmit = async () => {
	isLoading.value = true

	try {
		const formData = new FormData()
		formData.append('name', form.name)
		formData.append('email', form.email)
		formData.append('company', form.company)
		formData.append('message', form.subject)
		formData.append('_captcha', 'false') // Desactiva el captcha
		formData.append('_template', 'table') // Opcional: Formato del email

		await fetch('https://formsubmit.co/thinkforward.dev.services@gmail.com', {
			method: 'POST',
			body: formData,
		})

		toast({ description: t('toast.messageSent') })
		clearForm()
	} catch (error) {
		toast({ description: t('toast.error') })
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<ClientOnly>
		<div
			class="w-[400px] p-12 shadow-md rounded-lg border border-gray-500 h-[500px] absolute -top-[50px] custom-blur flex flex-col justify-center"
		>
			<h4 class="text-customDark text-4xl mb-8 text-center dark:text-customLight">
				{{ t('contact.message.title') }}
			</h4>

			<form @submit.prevent="handleSubmit">
				<!-- Nombre -->
				<div class="relative mb-6">
					<input
						id="name"
						v-model="form.name"
						name="name"
						type="text"
						required
						placeholder=" "
						class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
					/>
					<label for="name"
						>{{ t('contact.message.inputs.name') }}
						<span class="text-red-500">*</span>
					</label>
				</div>

				<!-- Email -->
				<div class="relative mb-6">
					<input
						id="email"
						v-model="form.email"
						name="email"
						type="email"
						required
						placeholder=" "
						class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
					/>
					<label for="email"
						>{{ t('contact.message.inputs.email') }}
						<span class="text-red-500">*</span>
					</label>
				</div>

				<!-- Empresa -->
				<div class="relative mb-6">
					<input
						id="company"
						v-model="form.company"
						name="company"
						type="text"
						placeholder=" "
						class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
					/>
					<label for="company">{{ t('contact.message.inputs.company') }}</label>
				</div>

				<!-- Asunto -->
				<div class="relative mb-6">
					<textarea
						id="subject"
						v-model="form.subject"
						name="message"
						required
						placeholder=" "
						class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
					></textarea>
					<label for="subject">
						{{ t('contact.message.inputs.subject') }}
						<span class="text-red-500">*</span>
					</label>
				</div>

				<!-- Botón de envío -->
				<Button
					type="submit"
					:disabled="isLoading"
					class="w-full bg-customPrimary text-customLight p-2 rounded-md hover:bg-customSecondary transition-all"
				>
					<Loader2 v-if="isLoading" class="size-6 mr-2 animate-spin" />
					{{ isLoading ? t('contact.message.button.loading') : t('contact.message.button.default') }}
				</Button>
			</form>
		</div>
	</ClientOnly>
</template>

<style scoped>
label {
	position: absolute;
	left: 12px;
	top: 50%;
	transform: translateY(-50%);
	transition: all 0.2s ease-in-out;
	color: gray;
	font-size: 14px;
	background-color: transparent;
	padding: 0 4px;
}

input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
	top: -8px;
	left: -2px;
	font-size: 12px;
	color: #0ea5e9;
	background-color: transparent;
	padding-left: 4px;
	padding-right: 4px;
	border-radius: 5px;
	z-index: 10;
}

input:-webkit-autofill,
textarea:-webkit-autofill {
	-webkit-text-fill-color: white !important;
	transition: background-color 5000s ease-in-out 0s !important;
	background-color: transparent !important;
	appearance: none !important;
}
</style>
