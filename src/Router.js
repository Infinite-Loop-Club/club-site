import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { NavigationBar } from './components';
import { colors, fonts } from './constants/theme';

import { Home, About } from './pages';
import Register from './pages/RegistrationForm/register';

export default function AppRouter() {
	return (
		<ThemeProvider theme={colors}>
			<GlobalStyles />
			<Router>
				<NavigationBar />
				<Switch>
					<Route path='/register' exact component={Register} />
					<Route path='/about-us' exact component={About} />
					<Route path='/' exact component={Home} />
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 65%;
    scroll-behavior: smooth;
  }

::-webkit-scrollbar {
  width: .5rem;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: ${colors.primary};
}

::-webkit-scrollbar-thumb:hover {
  background: ${colors.secondary};
}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.sansSerif};
    font-weight: 900;
  }

  h1 {
    font-size: 5rem;

    @media(max-width: 600px) {
      font-size: 4rem;
    }
  }

  body, p {
    font-family: ${fonts.monospace};
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
