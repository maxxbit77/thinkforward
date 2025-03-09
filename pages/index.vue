<script setup></script>
<template>
	<div>
		<nav id="home">
			<NavBar />
		</nav>

		<header>
			<Hero />
		</header>

		<main class="relative top-[1800px] bg-customLight dark:bg-customDark z-20">
			<div
				class="h-[400px] w-full bg-customLight dark:bg-customDark absolute top-[-300px] z-10 fade-mask-top"
			></div>
			<!-- Services -->
			<section class="pt-24" id="services">
				<SectionServices />
			</section>

			<!-- Products -->

			<Test />
			<!-- Products -->
			<section class="mt-44" id="products">
				<SectionProducts />
			</section>

			<!-- Data/charts -->
			<section class="mt-44" id="data">
				<SectionData />
			</section>

			<!-- Companies -->
			<section class="mt-44" id="partners">
				<SectionCompanies />
			</section>

			<!-- Contact -->
			<section class="mt-44" id="contact">
				<SectionContact />
			</section>

			<!-- Contact -->
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
