import { Heading, Footer, Container } from 'components';
import TeamDetails from './TeamDetails';

export default function About() {
	return (
		<>
			<Container>
				<Heading gradient margin='huge'>
					About Us
				</Heading>
				<TeamDetails teamName='Management Team :' />
				<TeamDetails teamName='Technical Team :' />
				<TeamDetails teamName='Staff Team :' />
				<TeamDetails teamName='External Affairs Team :' />
				<TeamDetails teamName='Teaching Team :' />
			</Container>
			<Footer />
		</>
	);
}
