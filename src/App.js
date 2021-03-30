import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { colors, fonts } from 'constants/theme';
import Routers from './Routers';

export default function AppRouter() {
	return (
		<ThemeProvider theme={colors}>
			<GlobalStyles />
			<Router>
				<Routers />
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
    text-decoration: none;
    display: inline-block;
    font-size: 1.6rem;
		padding: 1rem 2rem;
		background-color: ${colors.black};
		color: ${colors.white};
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.3);
		outline: none;
		border: none;
		text-transform: uppercase;
		border-radius: 2rem;
		cursor: pointer;
		transition: all 0.3s;


    &:hover {
        box-shadow: 0 0.4rem 1.1rem rgba(0, 0, 0, 0.5);
        transform: translateY(-0.3em);
      }

    &:active {
      box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.3);
    }

  }
`;
