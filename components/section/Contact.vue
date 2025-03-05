<script setup></script>
<template>
	<ClientOnly>
		<div class="max-w-7xl mx-auto h-[400px] border border-gray-400 rounded-xl relative">
			<div class="grid grid-cols-3 rounded-xl h-full p-2 overflow-hidden">
				<div class="col-span-2">
					<ContactInfo />
				</div>
				<div class="z-10">
					<ContactForm />
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
