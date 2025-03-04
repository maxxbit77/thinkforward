<script setup>
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'

const { toast } = useToast()

const emailSuscriber = ref('')
const isLoading = ref(false)
const clearForm = () => {
	emailSuscriber.value = ''
}

const subscribe = () => {
	isLoading.value = true

	setTimeout(() => {
		isLoading.value = false
		toast({
			description: '✅ Your email has been added to our newsletter',
		})
		clearForm()
	}, 2000)
}
</script>

<template>
	<div class="h-auto">
		<div class="w-1/3 mx-auto">
			<h2 class="text-customDark text-4xl mb-4 text-center dark:text-customLight">Subscribe to our Newsletter</h2>
			<p class="text-gray-600 text-center text-sm mb-6 dark:text-gray-300">
				Stay updated with the latest news and exclusive offers.
			</p>
			<form @submit.prevent="subscribe">
				<div class="relative mb-4">
					<input
						id="emailSuscriber"
						v-model="emailSuscriber"
						type="email"
						required
						placeholder=" "
						class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
					/>
					<label for="emailSuscriber">Enter your email</label>
				</div>

				<Button
					type="submit"
					:disabled="isLoading"
					class="w-full bg-customPrimary text-customLight p-2 rounded-md hover:bg-customSecondary transition-all"
				>
					<Loader2 v-if="isLoading" class="size-6 mr-2 animate-spin text-white" />
					Subscribe
				</Button>
			</form>
		</div>
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
