import styled from 'styled-components';
import { Button, NavigationBar } from '../../components';

import code from '../../images/Code Development _Isometric  1.svg';

export default function Home() {
	return (
		<Hero>
			<div className='container'>
				<NavigationBar color='transparent' />
				<div className='hero__content'>
					<div>
						<h1>Infinity Loop Club</h1>
						<span>of Anna University Trichy</span>
						<p>
							We're here to dig out your talents and find out what you're passionate about, let's
							join together and grow together.
						</p>

						<Button>Register</Button>
					</div>
					<img src={code} alt='Code development'></img>
				</div>
			</div>
		</Hero>
	);
}

const Hero = styled.div`
	position: relative;
	min-height: 100vh;
	background-image: linear-gradient(90deg, #7524dd, #bf59c0);

	.container {
		max-width: 120rem;
		height: 100%;
		margin: 0 auto;

		@media (max-width: 120rem) {
			max-width: 90%;
		}

		@media (max-width: 600px) {
			max-width: 95%;
		}
	}

	.hero__content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 5rem;
		place-items: center;
		color: white;

		@media (max-width: 750px) {
			margin-top: 6rem;
			grid-template-columns: 1fr;

			div {
				place-self: flex-end;
				grid-row: 1/2;
				margin-bottom: 6rem;
			}

			img {
				height: auto !important;
				place-self: flex-start;
				grid-row: -1/-2;
			}
		}

		& h1 {
			line-height: 1.2em;
			margin-bottom: -1rem;
		}
		& span {
			font-size: 1.3rem;
		}

		p {
			margin: 2rem 0;
		}

		& img {
			height: 70%;
			max-width: 100%;
		}
	}
`;
