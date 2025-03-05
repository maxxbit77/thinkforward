<script setup></script>
<template>
	<div>
		<nav id="home">
			<NavBar />
		</nav>

		<!--  scroll component -->
		<header>
			<Hero />
		</header>

		<main class="relative top-0 bg-customLight dark:bg-customDark">
			<div
				class="h-[400px] w-full bg-customLight dark:bg-customDark absolute top-[-300px] z-10 fade-mask-top"
			></div>
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

<style scoped>
.fade-mask-top {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 40%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent);
}

/* .fade-mask {
	-webkit-mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
	mask-image: linear-gradient(to bottom, transparent, white 20%, white 80%, transparent),
		linear-gradient(to top, transparent, white 20%, white 80%, transparent);
} */
</style>
