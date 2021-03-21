import styled from 'styled-components';
import { fonts } from '../constants/theme';

export default function AboutCard({ imgSrc, name }) {
	return (
		<Container>
			<img src={imgSrc} alt={name}></img>
			<Content>
				<h2>Krishna Moorthy</h2>
				<Text>III CSE</Text>
				<Text>Tech Lead</Text>
				<Text bold>"call it as things pa"</Text>
				<Rect1 />
				<Rect2 />
				<Triangle />
			</Content>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50rem;
	height: 23rem;
	margin: 1rem;
	padding: 2rem;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: ${props => props.theme.lightGrey};
	border-radius: 2rem;
	z-index: -2;
	overflow: hidden;

	@media (max-width: 1200px) {
		width: 40rem;
		height: 19rem;
	}

	@media (max-width: 970px) {
		width: 35rem;
		height: 16.5rem;
	}

	@media (max-width: 400px) {
		width: 28rem;
		height: 14rem;
		justify-content: space-between;
	}

	@media (max-width: 315px) {
		width: 22.5rem;
		height: 11.5rem;
	}

	& img {
		object-fit: cover;
		object-position: center;
		border-radius: 10%;
		border: 0.3rem solid ${props => props.theme.primary};

		@media (max-width: 1200px) {
			width: 13rem;
			height: 15rem;
		}

		@media (max-width: 970px) {
			width: 10rem;
			height: 12rem;
		}

		@media (max-width: 970px) {
			width: 7rem;
			height: 9rem;
		}

		@media (max-width: 315px) {
			width: 5rem;
			height: 7rem;
		}
	}

	& h2 {
		font-family: ${fonts.sansSerif};
		color: ${p => p.theme.primary};

		@media (max-width: 1200px) {
			font-size: 2.2rem;
		}

		@media (max-width: 970px) {
			font-size: 2rem;
		}

		@media (max-width: 850px) {
			font-size: 1.8rem;
		}

		@media (max-width: 315px) {
			font-size: 1.5rem;
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: 0;
	background-color: ${props => `${props.theme.secondary}80`};
	width: 24rem;
	height: 4rem;
	transform: skew(0deg, -25deg);
	z-index: -1;

	@media (max-width: 1200px) {
		top: 40%;
		width: 18rem;
		height: 3.5rem;
	}

	@media (max-width: 970px) {
		top: 35%;
		width: 12rem;
		height: 3rem;
	}

	@media (max-width: 400px) {
		width: 10rem;
		height: 2.5rem;
	}

	@media (max-width: 315px) {
		width: 7.5rem;
		height: 2rem;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 35%;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}`};
	width: 18rem;
	height: 1.5rem;
	transform: skew(0deg, -25deg);
	z-index: -1;

	@media (max-width: 1200px) {
		top: 40%;
		width: 17rem;
		height: 1rem;
	}

	@media (max-width: 970px) {
		width: 16rem;
	}

	@media (max-width: 400px) {
		width: 14rem;
	}

	@media (max-width: 315px) {
		width: 11rem;
	}
`;

const Text = styled.p`
	font-size: ${props => (props.bold ? '1.3rem' : '1.2rem')};
	font-weight: ${props => (props.bold ? '700' : '400')};

	@media (max-width: 1200px) {
		font-size: ${props => (props.bold ? '1.2rem' : '1.1rem')};
	}

	@media (max-width: 315px) {
		font-size: ${props => (props.bold ? '.9rem' : '0.8rem')};
	}
`;

const Triangle = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}80`};
	clip-path: polygon(100% 0, 0 100%, 100% 100%);
	width: 25rem;
	height: 10rem;
	z-index: -1;

	@media (max-width: 1200px) {
		width: 22rem;
		height: 8rem;
	}

	@media (max-width: 970px) {
		width: 20rem;
		height: 8rem;
	}

	@media (max-width: 400px) {
		width: 10rem;
		height: 3.5rem;
	}
`;