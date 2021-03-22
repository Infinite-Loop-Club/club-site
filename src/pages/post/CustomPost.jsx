import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import { format } from 'date-fns';
import axios from 'axios';

import { Container, Heading, LoaderContainer } from 'components';
import { link, logoColored } from 'images';
import Share from './Share';
import Loader from 'components/Loader';

export default function Card({ ind }) {
	const [data, setData] = useState(null);

	const history = useHistory();

	const { id } = useParams();

	const fetchData = async () => {
		try {
			const { data } = await axios.get(`/post/${id}`);
			setData(data.data);
		} catch (err) {
			history.push('/posts');
		}
	};

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return data === null ? (
		<LoaderContainer>
			<Loader />
		</LoaderContainer>
	) : (
		<ContainerCustom key={ind}>
			<img className='logo' src={logoColored} alt='logo'></img>
			<Top>
				<Left>
					<Heading gradient>{data.title}&nbsp;</Heading>
					<Details>
						<p>
							Posted on: {format(new Date(data.createdAt), 'h:m,do LLLL')} by @{data.author}
						</p>
					</Details>
				</Left>
			</Top>
			<Center>{data.content}</Center>
			<Bottom>
				{data.url && (
					<Button>
						<img src={link} alt={link}></img>
						Attachment
					</Button>
				)}
				<Share value={data} />
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
	font-family: inherit;

	img {
		display: inline-block;
		width: 2rem;
		margin-right: 1em;
	}
`;
