import { Heading, Footer, Container } from 'components';
import TeamDetails from './TeamDetails';
import details from './members';

export default function About() {
	return (
		<>
			<Container>
				<Heading gradient margin='huge'>
					About Us
				</Heading>
				{details.map(({ title, data }) => {
					return <TeamDetails title={title} data={data} />;
				})}
			</Container>
			<Footer />
		</>
	);
}
