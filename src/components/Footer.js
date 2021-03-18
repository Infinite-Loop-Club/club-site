import styled from 'styled-components';
import { colors } from '../constants/theme';
import LogoImage from '../images/logo_white_vector.png';

export default function Footer() {
	return (
		<Div>
			<AboutClub>
				<div className='club-and-clg'>
					<img src={LogoImage} alt='logo' />
					<p>
						University College of Engg.,
						<br />
						Bharathidasan Institute of Tech.,
						<br />
						Anna University, Trichy - 620024.
					</p>
				</div>
				<div className='devs'>
					<h3>Behind this page</h3>
					<ul>
						<li>
							<a href='https://devkrish.tech' target='_blank' rel='noreferrer'>
								Krishna Moorthy A
							</a>
						</li>
						<li>
							<a href='https://realgpr.tech' target='_blank' rel='noreferrer'>
								Pranav G
							</a>
						</li>
						<li>
							<a href='https://sandev.tech' target='_blank' rel='noreferrer'>
								Santhosh K
							</a>
						</li>
						<li>
							<a href='https://github.com/DeepAnraj285' target='_blank' rel='noreferrer'>
								Deepanraj E
							</a>
						</li>
					</ul>
				</div>
			</AboutClub>
			<Copyright>
				<p>
					Copyrights &copy; {new Date().getFullYear()}, Infinite Loop Club of Anna University,
					Trichy
				</p>
			</Copyright>
		</Div>
	);
}

const Div = styled.div`
	background-color: #3f3d56;
	margin-top: 5rem;
`;

const AboutClub = styled.div`
	padding: 6rem 0;
	color: ${colors.white};
	max-width: 120rem;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
	justify-content: space-around;

	@media (max-width: 120rem) {
		max-width: 90%;
	}

	@media (max-width: 600px) {
		max-width: 95%;
	}

	.club-and-clg {
		display: flex;
		align-items: center;

		gap: 3rem;

		@media (max-width: 650px) {
			flex-direction: column;
		}

		img {
			width: 12rem;
		}
	}

	.devs {
		h3 {
			text-align: center;
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			list-style: none;
			align-items: center;
			justify-content: space-around;

			& > li {
				display: inline-block;
				transition: all 0.3s;

				&:not(:last-child) {
					margin-right: 3rem;
				}

				&:hover {
					color: ${colors.primary};
				}
			}
		}
	}
`;

const Copyright = styled.div`
	background-color: ${colors.black};
	padding: 1.8rem;
	color: ${colors.white};
	text-align: center;
	p {
		font-size: 1rem;
	}
`;
