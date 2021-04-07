import { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { NavigationBar } from 'components';

import {
	Home,
	About,
	Register,
	Post,
	IndividualPost,
	CustomPost,
	Voting,
	Login,
	Success
} from 'pages';
import MembershipCard from 'pages/register/membership-card';

export default function AppRouter() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<NavigationBar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/register' exact component={Register} />
				<Route path='/about-us' exact component={About} />
				<Route path='/posts' exact component={Post} />
				<Route path='/post/view' exact component={IndividualPost} />
				<Route path='/post/:id' exact component={CustomPost} />
				<Route path='/member' component={MembershipCard} />
				<Route path='/vote' exact component={Voting} />
				<Route path='/vote/login' exact component={Login} />
				<Route path='/vote/success' exact component={Success} />
				<Redirect to='/' />
			</Switch>
		</>
	);
}
