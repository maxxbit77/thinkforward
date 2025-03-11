<script setup></script>
<template>
	<ClientOnly>
		<div class="max-w-7xl mx-auto xl:border border-gray-400 rounded-xl relative p-2">
			<div class="grid grid-cols-12 rounded-xl">
				<div class="col-span-12 xl:col-span-8">
					<ContactInfo />
				</div>
				<div class="col-span-12 xl:absolute lg:-top-[50px] lg:right-8 z-10 xl:mb-0 mt-8 xl:mt-0">
					<ContactForm />
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
