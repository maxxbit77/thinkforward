<script setup>
const company = {
	email: 'info@thinkforward.es',
	whatsapp: '34673184294',
	phone: '34935159643',
}

const emailStructure = {
	myEmail: company.email,
	subject: 'Want contact',
	body: 'Hello there!, I came across your portfolio and I am very interested in your work. Let’s connect!',
}
const textToCopy = ref(company.email)
const emailCopied = ref(false)

const openWhatsApp = () => {
	window.open(`https://wa.me/${company.phone}`, '_blank')
}

const copyText = () => {
	navigator.clipboard.writeText(textToCopy.value)
	emailCopied.value === false ? (emailCopied.value = true) : (emailCopied.value = false)
}
</script>

<template>
	<div class="relative backdrop-blur-2xl bg-slate-950/10">
		<div class="absolute z-1 -right-72">
			<BackgroundsColorsBlue />
		</div>
		<div class="absolute z-10 w-full flex flex-col space-y-10">
			<!-- title -->
			<div class="mt-4 text-center">
				<h4 class="text-4xl">Want to chat?</h4>
			</div>

			<!-- contact -->
			<div class="mt-4 flex justify-center items-center space-x-6">
				<div class="text-center group cursor-pointer">
					<button
						@click="copyText"
						class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
					>
						<Icon
							v-if="!emailCopied"
							name="lucide:copy"
							class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
						/>
						<Icon
							v-else
							name="lucide:copy-check"
							class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
						/>
					</button>
					<p class="mt-1 group-hover:text-white text-gray-500 text-xs transition-colors">Copy email</p>
				</div>

				<div class="text-center group cursor-pointer">
					<button
						class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
					>
						<a
							:href="`mailto:${company.email}?subject=${encodeURIComponent(
								emailStructure.subject
							)}&body=${encodeURIComponent(emailStructure.body)}`"
							aria-label="Send email"
						>
							<Icon
								name="lucide:mail-plus"
								class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
							/>
						</a>
					</button>
					<p class="mt-1 group-hover:text-white text-gray-500 text-xs transition-colors">Send email</p>
				</div>

				<div class="text-center group cursor-pointer">
					<button
						@click="openWhatsApp"
						class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
					>
						<Icon
							name="garden:whatsapp-stroke-16"
							class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
						/>
					</button>
					<p class="mt-1 group-hover:text-white text-gray-500 text-xs transition-colors">Whatsapp</p>
				</div>
				<div class="text-center group cursor-pointer">
					<button
						@click="openWhatsApp"
						class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
						@mouseenter="phoneMessage"
					>
						<Icon
							name="material-symbols:call-sharp"
							class="size-6 text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
						/>
					</button>
					<p class="mt-1 group-hover:text-white text-gray-500 text-xs transition-colors">Copy Number</p>
				</div>
			</div>
			<!-- Separator -->
			<div class="w-2/3 mx-auto my-8">
				<UiSeparator label="Or" />
			</div>
			<!-- Socials -->
			<h4 class="text-4xl text-center">Visit Us</h4>
			<div class="flex justify-center items-center space-x-4">
				<a
					href="https://www.linkedin.com/in/juan-jos%C3%A9-cas%C3%A1is-borrell-69863211a/"
					class="cursor-pointer"
					target="_blank"
				>
					<Icon name="skill-icons:linkedin" class="size-8" />
				</a>
				<a href="#" class="cursor-pointer">
					<Icon name="skill-icons:twitter" class="size-8" />
				</a>
			</div>
		</div>
	</div>
</template>
