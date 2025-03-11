<script setup>
const whatsApp = '+34673184294'
const handleClick = () => {
	window.open(`https://wa.me/${whatsApp}`, '_blank')
}
</script>
<template>
	<div>
		<div class="hidden lg:block fixed bottom-12 right-12 z-50">
			<div
				@click="handleClick"
				class="peer flex flex-col justify-center items-end space-y-4 cursor-pointer bg-green-500 p-4 rounded-full"
			>
				<Icon name="logos:whatsapp-icon" class="size-12 peer-hover:scale-150 transition-all" />
			</div>
		</div>
	</div>
</template>
