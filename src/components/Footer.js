import styled from 'styled-components';

export default function Footer() {
	return (
		<Div>
			<AboutClub>
				<Logo src='logo.png' alt='logo' />
				<p>
					University College of Engg.,
					<br />
					Bharathidasan Institute of Tech.,
					<br />
					Anna University, Trichy - 620024.
				</p>
				<div>
					<h3>Behind this page</h3>
					<LinksContainer>
						<a href='https://devkrish.tech' target='_blank' rel='noreferrer'>
							Krishna Moorthy A
						</a>
						<a href='https://realgpr.tech' target='_blank' rel='noreferrer'>
							Pranav G
						</a>
						<a href='https://sandev.tech' target='_blank' rel='noreferrer'>
							Santhosh K
						</a>
						<a href='https://github.com/DeepAnraj285' target='_blank' rel='noreferrer'>
							Deepanraj E
						</a>
					</LinksContainer>
				</div>
			</AboutClub>
			<Copyright>Copyrights &#169; 2021, Infinity Loop Club of Anna University</Copyright>
		</Div>
	);
}

const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;

	& > a {
		transition: all 0.3s;

		&:hover {
			color: black;
		}
	}
`;

const Div = styled.div`
	background-color: #7524dd;
	margin-top: 5rem;
`;

const AboutClub = styled.div`
	padding: 6rem 0;
	color: #fff;
	max-width: 120rem;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
	justify-content: space-around;

	@media (max-width: 600px) {
		max-width: 90%;
	}
`;

const Copyright = styled.div`
	background-color: #3f3d56;
	padding: 1.8rem;
	color: white;
	text-align: center;
`;

const Logo = styled.img`
	width: 12rem;
	height: 12rem;
`;
