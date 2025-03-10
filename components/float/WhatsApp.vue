<script setup>
const whatsApp = '+34673184294'
const handleClick = () => {
	window.open(`https://wa.me/${whatsApp}`, '_blank')
}
</script>
<template>
	<div>
		<div class="hidden lg:block fixed bottom-24 right-12 z-50">
			<div @click="handleClick" class="peer flex flex-col justify-center items-end space-y-4 cursor-pointer">
				<Icon name="logos:whatsapp-icon" class="size-12 peer-hover:scale-150 transition-all" />
				<span
					class="p-2 border border-gray-300 rounded-lg w-32 text-center font-bold bg-customLight text-customDark dark:bg-customDark dark:text-customLight"
					>¿Preguntas?</span
				>
			</div>
		</div>
	</div>
</template>
