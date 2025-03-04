<script setup></script>
<template>
	<main>
		<nav>
			<NavBar />
		</nav>

		<!--  scroll component -->
		<header>
			<Hero />
		</header>

		<div class="relative top-0 bg-customLight dark:bg-customDark">
			<div
				class="h-[400px] w-full bg-customLight dark:bg-customDark absolute top-[-300px] z-10 fade-mask-top"
			></div>
			<!-- Services -->
			<section class="pt-24">
				<SectionServices id="services" />
			</section>

			<!-- Products -->
			<section class="mt-44">
				<SectionProducts id="products" />
			</section>

			<!-- Data/charts -->
			<section class="mt-44">
				<SectionData id="data" />
			</section>

			<!-- Companies -->
			<section class="mt-44">
				<SectionCompanies id="partners" />
			</section>

			<!-- Contact -->
			<section class="mt-44">
				<SectionContact id="contact" />
			</section>

			<!-- Contact -->
			<section class="mt-44">
				<SectionNewsletter id="suscribe" />
			</section>

			<!-- Footer -->
			<footer class="mt-44 pb-24">
				<SectionFooter />
			</footer>
		</div>
	</main>
</template>

<style scoped>
.fade-mask-top {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 40%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
}

.fade-mask {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
}
</style>
