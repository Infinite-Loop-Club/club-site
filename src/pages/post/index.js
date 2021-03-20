import styled from 'styled-components';

import { Heading, Footer } from '../../components';
import Card from './Card';

export default function Post() {
	return (
		<>
			<section>
				<TitleContainer>
					<Heading>Posts</Heading>
				</TitleContainer>
				<ContentContainer>
					{['', ''].map((val, ind) => {
						return <Card key={ind} ind={ind} />;
					})}
				</ContentContainer>
			</section>
			<Footer />
		</>
	);
}

const TitleContainer = styled.div`
	text-align: center;
`;
const ContentContainer = styled.div``;
