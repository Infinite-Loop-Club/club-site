import { useHistory } from 'react-router';
import styled from 'styled-components';

import { share } from '../../images';

export default function Card({ ind }) {
	const history = useHistory();

	const handleClick = () => {
		history.push({
			pathname: '/post/view',
			state: ind + 1
		});
	};

	return (
		<Container key={ind}>
			<Top>
				<Title onClick={handleClick}>Hackathon</Title>
				<Details>
					<p>Posted on: 7:30,8th March</p>
					<p>by admin</p>
				</Details>
			</Top>
			<Center>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perferendis ipsam et
				aliquam laboriosam aut adipisci, beatae asperiores itaque repudiandae, voluptates, explicabo
				a dicta neque.
			</Center>
			<Bottom>
				<img src={share} alt={share}></img>
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
		padding: 1em;
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
	margin-top: 1em;
	img {
		display: inline-block;
		width: 3rem;
		cursor: pointer;
	}
`;
