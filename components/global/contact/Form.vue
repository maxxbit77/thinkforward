<script setup>
import { reactive } from 'vue'

const form = reactive({
	name: '',
	email: '',
	subject: '',
})

const placeholders = {
	name: 'Name',
	email: 'Email',
	subject: 'Subject',
}

const sendEmail = () => {
	alert('Form submitted!')
}
</script>

<template>
	<div class="w-full h-full p-2 bg-white shadow-md rounded-lg">
		<h2 class="text-slate-950 text-4xl mb-8 text-center">Send us a message</h2>
		<form @submit.prevent="sendEmail">
			<div v-for="(label, key) in placeholders" :key="key" class="relative mb-6">
				<component
					:is="key === 'subject' ? 'textarea' : 'input'"
					:id="key"
					v-model="form[key]"
					:type="key === 'email' ? 'email' : 'text'"
					placeholder="."
					required
					class="peer p-2 w-full border border-gray-400 rounded-md outline-none focus:border-blue-500 text-slate-950 placeholder-transparent"
				/>
				<label
					:for="key"
					class="absolute left-3 top-1/2 -translate-y-1/2 px-1 bg-white text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:px-1 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-white peer-focus:left-3 z-10"
				>
					{{ label }}
				</label>
			</div>

			<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Send</button>
		</form>
	</div>
</template>

<style scoped>
input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
	top: 0 !important;
	font-size: 12px !important;
	color: #3b82f6 !important;
	background-color: white !important;
	padding-left: 4px !important;
	padding-right: 4px !important;
	z-index: 10;
}
</style>
