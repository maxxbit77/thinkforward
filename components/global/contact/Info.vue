<script setup>
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const company = {
	email: 'info@thinkforward.es',
	whatsapp: '34673184294',
	phone: '34935159643',
}

const emailStructure = {
	myEmail: company.email,
	subject: 'Consulting',
	body: 'Hello there!',
}
const emailToCopy = ref(company.email)
const emailCopied = ref(false)

const phoneToCopy = ref(company.phone)
const phoneCopied = ref(false)

const openWhatsApp = () => {
	window.open(`https://wa.me/${company.phone}`, '_blank')
}

const copyEmailToClipBoard = () => {
	navigator.clipboard.writeText(emailToCopy.value)
	emailCopied.value === false ? (emailCopied.value = true) : (emailCopied.value = false)
}
const copyPhoneToClipBoard = () => {
	navigator.clipboard.writeText(phoneToCopy.value)
	phoneCopied.value === false ? (phoneCopied.value = true) : (phoneCopied.value = false)
}
</script>

<template>
	<div class="relative backdrop-blur-2xl bg-gray-500/10 dark:bg-slate-800/10">
		<div class="absolute z-1 -right-72">
			<BackgroundsColorsBlue />
		</div>
		<div class="absolute z-10 w-full flex flex-col space-y-10">
			<!-- title -->
			<div class="text-center">
				<h4 class="text-4xl">Want to chat?</h4>
			</div>

			<!-- contact -->
			<div class="flex justify-center items-center space-x-14">
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<button
									@click="copyEmailToClipBoard"
									class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
								>
									<Icon
										v-if="!emailCopied"
										name="lucide:copy"
										class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
									/>
									<Icon
										v-else
										name="material-symbols:library-add-check-rounded"
										class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
									/>
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p v-if="emailCopied">Copied!</p>
								<p v-else>Copy Email</p>
							</TooltipContent>
						</Tooltip>
						<p class="text-xs">{{ company.email }}</p>
					</TooltipProvider>
				</div>

				<!-- Send Email -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
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
											class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
										/>
									</a>
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Send Email</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-xs">Send email</p>
				</div>

				<!-- WhatsApp -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<button
									@click="openWhatsApp"
									class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
								>
									<Icon
										name="garden:whatsapp-stroke-16"
										class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
									/>
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p>Send WhatsApp</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-xs">+{{ company.whatsapp }}</p>
				</div>

				<!-- Copy Phone -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<button
									@click="copyPhoneToClipBoard"
									class="relative transition-all duration-300 ease-in border border-gray-600 group-hover:border-white group-hover:bg-slate-800 rounded-xl px-3 pt-3 pb-2"
								>
									<Icon
										v-if="!phoneCopied"
										name="material-symbols:call-sharp"
										class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
									/>
									<Icon
										v-else
										name="material-symbols:library-add-check-rounded"
										class="size-8 text-Slate-950 dark:text-white transition-colors duration-300 ease-in group-hover:text-gray-200"
									/>
								</button>
							</TooltipTrigger>
							<TooltipContent>
								<p v-if="phoneCopied">Copied!</p>
								<p v-else>Copy Number</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-xs">+{{ company.phone }}</p>
				</div>
			</div>
			<!-- Separator -->
			<div class="w-2/3 mx-auto my-8">
				<UiSeparator label="Or" />
			</div>
			<!-- Socials -->
			<h4 class="text-4xl text-center">Visit Us</h4>
			<div class="flex justify-center items-center space-x-4">
				<a href="https://www.linkedin.com/company/thinkforward.es/" class="cursor-pointer" target="_blank">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<button>
									<Icon name="skill-icons:linkedin" class="size-8" />
								</button>
							</TooltipTrigger>
							<TooltipContent> Linkedin </TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</a>
				<a href="#" class="cursor-pointer" target="_blank">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<button>
									<Icon name="skill-icons:twitter" class="size-8" />
								</button>
							</TooltipTrigger>
							<TooltipContent> X </TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</a>
			</div>
		</div>
	</div>
</template>
