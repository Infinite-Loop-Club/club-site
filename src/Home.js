import styled from 'styled-components';
import code from './svg/Code Development _Isometric  1.svg';
import { Button, NavigationBar } from './components';

export default function Home() {
	return (
		<Hero>
			<div className='container'>
				<NavigationBar />
				<div className='hero__content'>
					<div>
						<h1>Some Club</h1>
						<span>of Anna University Trichy</span>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text.
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
	height: 100vh;
	background-image: linear-gradient(90deg, #7524dd, #bf59c0);

	.container {
		max-width: 120rem;
		margin: 0 auto;
	}

	.hero__content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 5rem;
		place-items: center;
		color: white;

		& h1 {
			margin-bottom: -1.5rem;
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

	@media (max-width: 600px) {
		height: 110vh;

		.container {
			max-width: 90%;
		}

		.hero__content {
			margin-top: 6rem;
			grid-template-columns: 1fr;

			div {
				place-self: flex-end;
				grid-row: 1/2;
			}

			img {
				height: auto !important;
				place-self: flex-start;
				grid-row: -1/-2;
			}
		}
	}
`;
