<script setup>
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'
</script>

<template>
	<div>
		<header>
			<Hero />
		</header>

		<!-- <div class="h-[400px] w-full bg-customLight dark:bg-customDark relative top-[2100px] z-10 fade-mask-top" /> -->

		<main class="bg-customLight dark:bg-customDark z-20 px-4 xl:px-0">
			<!-- Intro -->
			<section class="">
				<SectionIntro />
			</section>
			<!-- Services -->
			<section class="mt-44" id="services">
				<SectionServices />
			</section>

			<!-- Products -->
			<section class="mt-44" id="products">
				<SectionProducts />
			</section>

			<!-- Data/charts -->
			<section class="mt-44" id="data">
				<SectionData />
			</section>

			<!-- Companies -->
			<section class="mt-44 mx-[-20px]" id="companies">
				<SectionCompanies />
			</section>

			<!-- Contact -->
			<section class="mt-44" id="contact">
				<SectionContact />
			</section>

			<!-- Newsletter -->
			<section class="mt-24" id="suscribe">
				<SectionNewsletter />
			</section>
		</main>
		<!-- Footer -->
		<footer class="mt-24">
			<SectionFooter />
		</footer>
	</div>
</template>
