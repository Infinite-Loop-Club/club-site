import { Heading, Footer, Container, TeamDetails } from '../components';

export default function About() {
	return (
		<>
			<Container>
				<Heading gradient margin='huge'>
					About Us
				</Heading>
				<TeamDetails teamName='Management Team' />
			</Container>
			<Footer />
		</>
	);
}
