import axios from 'axios';
import { useEffect, useState } from 'react';

import { Container, Heading, Footer, LoaderContainer } from 'components';
import Loader from 'components/Loader';
import Card from './Card';

export default function Post() {
	const [load, setLoad] = useState(true);
	const [posts, setPosts] = useState([]);

	const getPost = async () => {
		try {
			const { data } = await axios.get('/post/all');
			setLoad(false);
			setPosts(data.data);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getPost();
	}, []);

	return (
		<>
			<Container>
				<Heading gradient>Posts</Heading>
				{load && (
					<LoaderContainer>
						<Loader />
					</LoaderContainer>
				)}
				{posts.map((val, ind) => {
					return <Card key={ind} value={val} ind={ind} />;
				})}
			</Container>
			<Footer />
		</>
	);
}
