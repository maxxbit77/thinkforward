<script setup></script>
<template>
	<div>
		<div class="max-w-7xl mx-auto h-[400px] relative">
			<div class="grid grid-cols-3 border border-gray-400 rounded-xl h-full p-2 overflow-hidden">
				<div class="col-span-2">
					<ContactInfo />
				</div>
				<div class="z-10">
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
</template>
