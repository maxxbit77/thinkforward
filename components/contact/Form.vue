<script setup>
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'
import { ref, reactive } from 'vue'

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

		toast({ description: '✅✅ Your message has been sent.' })
		clearForm()
	} catch (error) {
		toast({ description: '❌ Error sending message. Please try again.' })
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<div
		class="w-[400px] p-12 shadow-md rounded-lg border border-gray-500 h-[500px] absolute -top-[50px] custom-blur flex flex-col justify-center"
	>
		<h2 class="text-customDark text-4xl mb-8 text-center dark:text-customLight">Send us a message</h2>

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
				<label for="name">Name</label>
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
				<label for="email">Email</label>
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
				<label for="company">Company (optional)</label>
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
				<label for="subject">Subject</label>
			</div>

			<!-- Botón de envío -->
			<Button
				type="submit"
				:disabled="isLoading"
				class="w-full bg-customPrimary text-customLight p-2 rounded-md hover:bg-customSecondary transition-all"
			>
				<Loader2 v-if="isLoading" class="size-6 mr-2 animate-spin" />
				{{ isLoading ? 'Sending...' : 'Send Message' }}
			</Button>
		</form>
	</div>
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
