const routes= [
	{
		path: "/user/login",
		component: UserLayout
	},
	{
		path: "/user",
		component: BaseLayout,
		routes: [
			{
				path: "/user/home",
				component: HomePage
			},
			{
				path: "/user/about",
				component: AboutPage
			},
		]
	}
]

export default routes