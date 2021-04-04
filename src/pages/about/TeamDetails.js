import styled from 'styled-components';

import { Container } from 'components';
import AboutCard from './AboutCard';

export default function TeamDetails({ title, data, handleClick, vote }) {
	return (
		<Container>
			<Teamname>{title}</Teamname>
			<TeamContainer>
				{data &&
					data.map(({ id, name, profile, designation, year, tag, socialLinks, role }) => {
						return (
							<AboutCard
								id={id}
								name={name}
								profile={profile}
								designation={designation}
								year={year}
								tag={tag}
								socialLinks={socialLinks}
								handleClick={handleClick}
								role={role}
								vote={vote}
							/>
						);
					})}
			</TeamContainer>
		</Container>
	);
}

const TeamContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0 1rem;

	@media (max-width: 1100px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 400px) {
		margin: 0;
	}
`;

const Teamname = styled.h2`
	font-size: 2.5rem;

	@media (max-width: 600px) {
		font-size: 2rem;
	}
`;
