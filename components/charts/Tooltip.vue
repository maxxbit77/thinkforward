<script setup>
import { Card, CardContent } from '@/components/ui/card'

defineProps({
	tooltipData: Object,
	format: Function,
})
</script>

<template>
	<div v-if="tooltipData" class="relative">
		<Card class="bg-white shadow-lg border border-gray-200">
			<CardContent class="p-2">
				<p class="text-sm text-gray-500">{{ tooltipData.label }}</p>
				<p class="text-lg font-semibold">
					{{ format ? format(tooltipData.value) : tooltipData.value }}
				</p>
			</CardContent>
		</Card>
	</div>
</template>
