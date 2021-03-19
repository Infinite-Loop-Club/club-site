import { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { NavigationBar } from './components';

import { Home, About, Register, Post, IndividualPost } from './pages';

export default function AppRouter() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<NavigationBar />
			<NavigationBar />
			<Switch>
				<Route path='/register' exact component={Register} />
				<Route path='/about-us' exact component={About} />
				<Route path='/posts' exact component={Post} />
				<Route path='/post/view' exact component={IndividualPost} />
				<Route path='/' component={Home} />
			</Switch>
		</>
	);
}
