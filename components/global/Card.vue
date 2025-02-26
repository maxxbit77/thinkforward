<script setup>
defineProps({
	title: String,
	text: String,
})
</script>
<template>
	<div class="">
		<p>
			{{ title }}
		</p>
		<p>
			{{ text }}
		</p>
	</div>
</template>
