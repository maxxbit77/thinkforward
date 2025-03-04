<script setup>
import { reactive } from 'vue'

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

const sendEmail = () => {
	clearForm()
	console.log('form1', form)
}
</script>

<template>
	<div
		class="w-[400px] p-12 shadow-md rounded-lg border border-gray-500 h-[500px] absolute -top-[50px] custom-blur flex flex-col justify-center"
	>
		<h2 class="text-customDark text-4xl mb-8 text-center dark:text-customLight">Send us a message</h2>
		<form @submit.prevent="sendEmail">
			<!-- Nombre -->
			<div class="relative mb-6">
				<input
					id="name"
					v-model="form.name"
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
					required
					placeholder=" "
					class="peer p-2 text-xs w-full border border-gray-400 rounded-md outline-none focus:border-customPrimary text-customDark dark:bg-customDark dark:text-gray-200"
				></textarea>
				<label for="subject">Subject</label>
			</div>

			<!-- Botón de envío -->
			<button
				type="submit"
				class="w-full bg-customPrimary text-customLight p-2 rounded-md hover:bg-customSecondary transition-all"
			>
				Send
			</button>
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
