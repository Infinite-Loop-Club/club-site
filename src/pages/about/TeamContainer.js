import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AboutCard from './AboutCard';

export default function TeamContainer({ title, data, handleClick, vote }) {
	const [list, setList] = useState(data);

	useEffect(() => {
		if (title === 'Technical Team') {
			for (let i = data.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[data[i], data[j]] = [data[j], data[i]];
			}
			setList([...data]);
		}
	}, [title, data]);

	return (
		<Container>
			{list &&
				list.map(
					(
						{ id, name, profile, designation, year, tag, socialLinks, role, fromBenxene },
						index
					) => {
						return (
							<AboutCard
								key={name}
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
								fromBenxene={fromBenxene}
							/>
						);
					}
				)}
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 2.5rem;

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
