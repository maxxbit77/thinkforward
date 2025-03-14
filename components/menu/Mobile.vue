<script setup>
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useI18n } from '#imports'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const isOpen = ref(false)

const navigateToSection = (section) => {
	router.push({ path: localePath('index'), query: { section } })
	closeMenu()
}

const closeMenu = () => {
	isOpen.value = false
}
</script>

<template>
	<Sheet v-model:open="isOpen" class="flex lg:hidden">
		<SheetTrigger class="cursor-pointer">
			<Icon name="material-symbols-light:menu" class="size-10" />
		</SheetTrigger>
		<SheetContent class="z-[70] bg-customLight dark:bg-customDark">
			<SheetHeader>
				<SheetTitle>
					<div class="my-12">
						<LogoThinkforward class="text-customDark dark:text-customLight" />
					</div>
				</SheetTitle>
				<SheetDescription>
					<div class="">
						<ul class="w-full flex-col justify-start items-center space-y-8 text-start">
							<li @click="navigateToSection('home')">
								<Icon name="material-symbols:home-outline" class="size-6" />
								<h4 class="text-gray-600">{{ t('menu.home') }}</h4>
							</li>
							<li @click="navigateToSection('services')">
								<Icon name="material-symbols:delivery-truck-speed-outline-rounded" class="size-6" />
								<h4 class="text-gray-600">{{ t('menu.services') }}</h4>
							</li>
							<li @click="navigateToSection('products')">
								<Icon name="tabler:droplets-filled" class="size-6" />
								<h4 class="text-gray-600">{{ t('menu.products') }}</h4>
							</li>
							<li @click="navigateToSection('contact')">
								<Icon name="material-symbols:connect-without-contact" class="size-6" />
								<h4 class="text-gray-600">{{ t('menu.contact') }}</h4>
							</li>
							<li @click="closeMenu">
								<NuxtLink to="/about-us" class="flex space-x-4">
									<Icon name="ix:about" class="size-6" />
									<h4 class="text-gray-600">{{ t('menu.about') }}</h4>
								</NuxtLink>
							</li>
							<li class="flex justify-between items-center">
								<div class="flex space-x-4 items-center">
									<Icon name="material-symbols:toggle-off-outline" class="size-6" />
									<h4 class="text-gray-600">Color Mode</h4>
								</div>
								<div class="border rounded-lg border-gray-600">
									<ButtonToggleDarkMode />
								</div>
							</li>
							<li class="flex justify-between !border-none">
								<div class="flex space-x-4 items-center">
									<Icon name="carbon:ibm-watson-language-translator" class="size-6" />
									<h4 class="text-gray-600">Languages</h4>
								</div>
								<ButtonLang />
							</li>
						</ul>
					</div>
					<div class=""></div>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	</Sheet>
</template>

<style scoped>
li {
	cursor: pointer;
	display: flex;
	gap: 1rem;
}
</style>
