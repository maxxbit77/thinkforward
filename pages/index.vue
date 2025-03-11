<script setup>
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()

const scrollToSection = () => {
	const section = route.query.section
	if (section) {
		document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
	}
}

onMounted(scrollToSection)
watch(() => route.query.section, scrollToSection)
</script>

<template>
	<div>
		<nav id="home">
			<NavBar />
		</nav>

		<header>
			<Hero />
		</header>

		<div class="h-[400px] w-full bg-customLight dark:bg-customDark relative top-[2100px] z-10 fade-mask-top" />

		<main class="relative top-[1800px] bg-customLight dark:bg-customDark z-20 px-4 xl:px-0">
			<!-- Intro -->
			<section class="relative top-[-2000px]">
				<SectionIntro />
			</section>
			<!-- Services -->
			<section class="pt-24" id="services">
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
			<section class="mt-44" id="suscribe">
				<SectionNewsletter />
			</section>

			<!-- Footer -->
			<footer class="mt-44">
				<SectionFooter />
			</footer>
		</main>
	</div>
</template>
