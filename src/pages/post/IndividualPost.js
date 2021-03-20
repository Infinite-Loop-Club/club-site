import { useHistory, useLocation } from 'react-router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Heading } from '../../components';

import share from '../../images/share.svg';
import link from '../../images/link.svg';
import logo from '../../images/logo_color_vector.svg';

export default function Card({ ind }) {
	const location = useLocation();
	const history = useHistory();

	useEffect(() => {
		if (location.state === undefined || location.state === null) {
			history.push('/posts');
		}
	}, [location, history]);

	return (
		<ContainerCustom key={ind}>
			<img className='logo' src={logo} alt='logo'></img>
			<Top>
				<Left>
					<Title>Hackathon &nbsp;{location?.state}</Title>
					<Details>
						<p>Posted on: 7:30,8th March by @admin</p>
					</Details>
				</Left>
				<Right>
					<img src={share} alt={share}></img>
				</Right>
			</Top>
			<Center>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ipsam et
				aliquam laboriosam aut adipisci, beatae asperiores itaque repudiandae, voluptates, explicabo
				a dicta neque. Perferendis, asperiores tempore! Ab, consequuntur. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Vitae dolores eum adipisci! Ipsa minima nostrum laudantium non
				tempore alias repellendus sed ipsum eveniet? Soluta debitis corrupti totam accusantium ea
				vero?
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ipsam et
				aliquam laboriosam aut adipisci, beatae asperiores itaque repudiandae, voluptates, explicabo
				a dicta neque. Perferendis, asperiores tempore! Ab, consequuntur. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Vitae dolores eum adipisci! Ipsa minima nostrum laudantium non
				tempore alias repellendus sed ipsum eveniet? Soluta debitis corrupti totam accusantium ea
				vero?
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ipsam et
				aliquam laboriosam aut adipisci, beatae asperiores itaque repudiandae, voluptates, explicabo
				a dicta neque. Perferendis, asperiores tempore! Ab, consequuntur. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Vitae dolores eum adipisci! Ipsa minima nostrum laudantium non
				tempore alias repellendus sed ipsum eveniet? Soluta debitis corrupti totam accusantium ea
				vero?
			</Center>
			<Bottom>
				<Button>
					<img src={link} alt={link}></img>
					Download attachment
				</Button>
				<img src={share} alt={share}></img>
			</Bottom>
		</ContainerCustom>
	);
}

const ContainerCustom = styled(Container)`
	margin-top: 10em;
	position: relative;

	.logo {
		width: 8rem;
		position: absolute;
		top: -8em;

		@media only screen and (max-width: 600px) {
			width: 7rem;
		}
	}
`;

const Top = styled.div`
	border-bottom: 2px solid #c2c2c2;
	padding-bottom: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	text-align: left;
`;

const Right = styled.div`
	img {
		display: inline-block;
		width: 2.5rem;
		cursor: pointer;
	}
`;

const Title = styled(Heading)`
	font-size: 4rem;
	padding: 0px;
	text-align: left;
`;

const Details = styled.div`
	p {
		font-size: 1.2rem;
	}
`;

const Center = styled.div`
	font-size: 1.5rem;
	padding: 2em 0;
`;
const Bottom = styled.div`
	margin-top: 1em;
	display: flex;
	gap: 2em;
	align-items: center;
	img {
		display: inline-block;
		width: 3rem;
		cursor: pointer;
	}
`;
const Button = styled.button`
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1em 2em;
	border-radius: 2em;
	cursor: pointer;
	background-color: ${p => `${p.theme.primary}20`};
	border: ${p => `2px solid ${p.theme.primary}`};
	color: ${p => p.theme.black};
	font-weight: 600;
	font-size: 1.2rem;
	margin-right: 2em;
	font-family: inherit;

	img {
		display: inline-block;
		width: 2rem;
		margin-right: 1em;
	}
`;
