import React from 'react';
import UserLayout from './layout/UserLayout'
import BaseLayout from './layout/BaseLayout'
import Book from './pages/Book'
const HomePage = () => <div>Home页面</div>
const AboutPage = () => <div>About页面</div>


const routes= [
	{
		path: "/user/login",
		name:'login',
		component: UserLayout
	},
	{
		path: "/user",
		component: BaseLayout,
		routes: [
			{
				path: "/user/home",
				name:'home',
				component: HomePage
			},
			{
				path: "/user/about",
				name:'about',
				component: AboutPage
			},
			{
				path: "/user/book",
				name:'book',
				component: Book
			}
		]
	}
]

export default routes