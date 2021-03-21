import { Heading, Footer, Container, TeamDetails } from '../../components';

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
