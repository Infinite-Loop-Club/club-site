import { Container, Heading, Footer } from '../../components';
import Card from './Card';

export default function Post() {
	return (
		<>
			<Container>
				<Heading gradient>Posts</Heading>
				{['', ''].map((val, ind) => {
					return <Card key={ind} ind={ind} />;
				})}
			</Container>
			<Footer />
		</>
	);
}
