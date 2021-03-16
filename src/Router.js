import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Home, About, Register } from './pages';

export default function AppRouter() {
	return (
		<>
			<GlobalStyles />
			<Router>
				<Switch>
					<Route path='/register' exact component={Register} />
					<Route path='/about-us' exact component={About} />
					<Route path='/' exact component={Home} />
				</Switch>
			</Router>
		</>
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
  background: #7524dd;
}

::-webkit-scrollbar-thumb:hover {
  background: #bf59c0;
}

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Gothic A1', sans-serif;
    font-weight: 900;
  }

  h1 {
    font-size: 5rem;

    @media(max-width: 600px) {
      font-size: 4rem;
    }
  }

  body, p {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
