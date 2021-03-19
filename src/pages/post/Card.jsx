import { useHistory } from 'react-router';
import styled from 'styled-components';

import share from '../../images/share.svg';

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
				a dicta neque. Perferendis, asperiores tempore! Ab, consequuntur. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Vitae dolores eum adipisci! Ipsa minima nostrum laudantium non
				tempore alias repellendus sed ipsum eveniet? Soluta debitis corrupti totam accusantium ea
				vero?
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
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
	cursor: pointer;
`;

const Details = styled.div`
	padding: 2em;
	display: flex;
	flex-direction: column;
	align-items: flex-end;

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
