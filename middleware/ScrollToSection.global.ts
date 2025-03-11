export default defineNuxtRouteMiddleware((to, from) => {
	if (to.path !== '/' && ['services', 'products', 'contact', 'about'].includes(to.path.substring(1))) {
		return navigateTo({ path: '/', query: { section: to.path.substring(1) } })
	}
})
