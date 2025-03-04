<script setup>
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const company = {
	email: 'info@thinkforward.es',
	whatsapp: '+34673184294',
	phone: '+34935159643',
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
								<div @click="copyEmailToClipBoard">
									<ButtonIcon icon="lucide:copy" />
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>Copy Email</p>
							</TooltipContent>
						</Tooltip>
						<p class="text-md font-bold text-gray-500 dark:text-customLight">{{ company.email }}</p>
					</TooltipProvider>
				</div>

				<!-- Send Email -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<a
									:href="`mailto:${company.email}?subject=${encodeURIComponent(
										emailStructure.subject
									)}&body=${encodeURIComponent(emailStructure.body)}`"
									aria-label="Send email"
								>
									<ButtonIcon icon="lucide:mail-plus" />
								</a>
							</TooltipTrigger>
							<TooltipContent>
								<p>Send Email</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-md font-bold text-gray-500 dark:text-customLight">Send email</p>
				</div>

				<!-- WhatsApp -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<div @click="openWhatsApp">
									<ButtonIcon icon="garden:whatsapp-stroke-16" />
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>Send WhatsApp</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-md font-bold text-gray-500 dark:text-customLight">
						{{ company.whatsapp }}
					</p>
				</div>

				<!-- Copy Phone -->
				<div class="text-center flex flex-col justify-center items-center space-y-2">
					<TooltipProvider :delayDuration="50">
						<Tooltip>
							<TooltipTrigger as-child>
								<div @click="copyPhoneToClipBoard">
									<ButtonIcon icon="material-symbols:call-sharp" />
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p v-if="phoneCopied">Copied!</p>
								<p v-else>Copy Number</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
					<p class="text-md font-bold text-gray-500 dark:text-customLight">
						{{ company.phone }}
					</p>
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
