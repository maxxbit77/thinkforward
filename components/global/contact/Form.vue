<script setup>
const form = ref({
	name: '',
	email: '',
	company: '',
	subject: '',
})

const clearForm = () => {
	Object.assign(form.value, {
		name: '',
		email: '',
		company: '',
		subject: '',
	})
}

const placeholders = {
	name: 'Name',
	email: 'Email',
	company: 'Company (optional)',
	subject: 'Subject',
}

const sendEmail = () => {
	clearForm()
	alert('Form submitted!')
}
</script>

<template>
	<div
		class="w-[400px] p-2 shadow-md rounded-lg border border-gray-500 h-[500px] absolute -top-[50px] backdrop-blur-2xl bg-gray-500/10 dark:bg-slate-800/10"
	>
		<h2 class="text-customDark text-4xl mb-8 text-center dark:text-customLight">Send us a message</h2>
		<form @submit.prevent="sendEmail">
			<div v-for="(label, key) in placeholders" :key="key" class="relative mb-6">
				<component
					:is="key === 'subject' ? 'textarea' : 'input'"
					:id="key"
					v-model="form[key]"
					:type="key === 'email' ? 'email' : 'text'"
					placeholder="."
					:required="key !== 'company'"
					class="peer p-2 text-sm w-full border border-gray-400 rounded-md outline-none focus:border-blue-500 text-customDark dark:bg-customDark dark:text-gray-200 placeholder-transparent"
				/>
				<label
					:for="key"
					class="absolute left-3 top-1/2 -translate-y-1/2 px-1 text-gray-500 transition-all duration-200 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:px-1 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:bg-customLight dark:peer-focus:bg-customDark peer-focus:left-3 z-10"
				>
					{{ label }}
				</label>
			</div>

			<button type="submit" class="w-full bg-blue-500 text-customLight p-2 rounded-md hover:bg-blue-600">
				Send
			</button>
		</form>
	</div>
</template>

<style scoped>
input:focus + label,
input:not(:placeholder-shown) + label,
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
	top: -10px !important;
	left: -3px !important;
	font-size: 12px !important;
	color: #3b82f6 !important;
	background-color: transparent !important;
	padding-left: 4px !important;
	padding-right: 4px !important;
	z-index: 10;
	border-radius: 10px;
}
</style>
