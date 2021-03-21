import { useHistory } from 'react-router';
import styled from 'styled-components';
import { format } from 'date-fns';

import Share from './Share';

export default function Card({ ind, value }) {
	const history = useHistory();

	const handleClick = () => {
		history.push({
			pathname: '/post/view',
			state: value
		});
	};

	return (
		<Container key={ind}>
			<Top onClick={handleClick}>
				<Title>{value.title}</Title>
				<Details>
					<p>Posted on: {format(new Date(value.createdAt), 'h:m,do LLLL')}</p>
					<p>by {value.author}</p>
				</Details>
			</Top>
			<Center onClick={handleClick}>{value.description}</Center>
			<Bottom>
				<Share value={value} />
			</Bottom>
		</Container>
	);
}

const Container = styled.div`
	padding: 2em;
	margin: 4em;
	box-shadow: 0px 3px 20px 4px rgba(0, 0, 0, 0.25);
	border-radius: 1em;

	@media only screen and (max-width: 700px) {
		padding: 1.5em;
		margin: 2em;
	}
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media only screen and (max-width: 500px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const Title = styled.h2`
	cursor: pointer;
`;

const Details = styled.div`
	padding: 1em;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

	@media only screen and (max-width: 500px) {
		flex-direction: row;
		gap: 1em;
		padding: 0px;
		margin-bottom: 1em;
	}

	@media only screen and (max-width: 400px) {
		flex-direction: column;
		align-items: flex-start;
	}

	p {
		font-size: 1.2rem;
	}
`;

const Center = styled.div`
	font-size: 1.5rem;
`;

const Bottom = styled.div`
	margin-top: 1.5em;
`;
