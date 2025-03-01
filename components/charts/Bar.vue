<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BarChart } from '@/components/ui/chart-bar'
// <!-- const data = [
// 				{
// 					name: 'Sep',
// 					Shipments: Math.floor(Math.random() * 100) + 75, // Shipments
// 					Volume: Math.floor(Math.random() * 100) + 500, // Volume in Liters
// 				},
// 				{
// 					name: 'Oct',
// 					Shipments: Math.floor(Math.random() * 100) + 92,
// 					Volume: Math.floor(Math.random() * 100) + 620,
// 				},
// 				{
// 					name: 'Nov',
// 					Shipments: Math.floor(Math.random() * 100) + 66,
// 					Volume: Math.floor(Math.random() * 100) + 420,
// 				},
// 				{
// 					name: 'Dec',
// 					Shipments: Math.floor(Math.random() * 100) + 81,
// 					Volume: Math.floor(Math.random() * 100) + 550,
// 				},
// 				{
// 					name: 'Jan',
// 					Shipments: Math.floor(Math.random() * 100) + 101,
// 					Volume: Math.floor(Math.random() * 100) + 640,
// 				},
// 				{
// 					name: 'Feb',
// 					Shipments: Math.floor(Math.random() * 100) + 122,
// 					Volume: Math.floor(Math.random() * 100) + 750,
// 				},
// 			] -->

function generateShipmentData(): { name: string; Shipments: number; Volume: number }[] {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	const today = new Date()
	const data: { name: string; Shipments: number; Volume: number }[] = []

	for (let i = 5; i >= 0; i--) {
		const date = new Date(today)
		date.setMonth(today.getMonth() - i)

		const monthName = months[date.getMonth()]
		const shipments = Math.floor(Math.random() * (200 - 70 + 1)) + 70
		const volume = Math.floor(shipments * (Math.random() * (3 - 2) + 2)) // Volumen entre 2x y 3x los Shipments

		data.push({ name: monthName, Shipments: shipments, Volume: volume })
	}

	return data
}

const data = ref(generateShipmentData())

function updateShipmentData() {
	const today = new Date()
	if (today.getDate() === 28) {
		data.value.shift() // Elimina el mes más antiguo
		const newMonth = new Date(today)
		const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
		const monthName = months[newMonth.getMonth()]
		const shipments = Math.floor(Math.random() * (200 - 70 + 1)) + 70
		const volume = Math.floor(shipments * (Math.random() * (3 - 2) + 2))

		data.value.push({ name: monthName, Shipments: shipments, Volume: volume })
	}
}

// Ejecutar actualización diaria
onMounted(() => {
	setInterval(updateShipmentData, 24 * 60 * 60 * 1000) // Cada 24 horas
})
</script>

<template>
	<BarChart
		class="bg-gray-300/10 dark:bg-slate-800/10 h-full backdrop-blur-sm"
		:data="data"
		index="name"
		:categories="['Shipments', 'Volume']"
		:y-formatter="
			(tick) => (typeof tick === 'number' ? `${new Intl.NumberFormat('us').format(tick)} / k Liters` : '')
		"
	/>
</template>
