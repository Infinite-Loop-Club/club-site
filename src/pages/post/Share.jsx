import { useState } from 'react';
import styled from 'styled-components';

import { share } from '../../images';

export default function Share({ value, style }) {
	const [showModal, setShowModal] = useState(false);

	const handleShare = value => {
		if (navigator.share) {
			navigator
				.share({
					title: value.title,
					text: value.description,
					url: window.location.href
				})
				.catch(error => {
					console.log(error);
					setShowModal(old => !old);
				});
		} else {
			setShowModal(old => !old);
		}
	};

	return (
		<Container>
			<Bottom style={style} onClick={() => handleShare(value)}>
				<img src={share} alt={share}></img>
			</Bottom>
			{showModal && (
				<Modal>
					<a href={`http://www.facebook.com/sharer.php?u=${window.origin}/post/${value._id}`}>F</a>
					<a
						href={`https://twitter.com/share?url=
						${window.origin}/post/${value._id}
						&amp;text=Check%20it%20out&amp;hashtags=infiniteloopclub`}
					>
						Tw
					</a>

					<a
						href={`mailto:?Subject=Club%20post&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20
						${window.origin}/post/${value._id}`}
					>
						M
					</a>
					<Arrow></Arrow>
				</Modal>
			)}
		</Container>
	);
}

const Container = styled.div`
	position: relative;
`;

const Bottom = styled.div`
	display: flex;
	width: 3rem;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	img {
		display: inline-block;
		width: 100%;
		cursor: pointer;
	}
`;

const Modal = styled.div`
	position: absolute;
	top: 180%;
	left: -2%;
	padding: 2em;
	box-shadow: 0px 3px 20px 4px rgba(0, 0, 0, 0.25);
	border-radius: 0.5em;
	background-color: ${p => p.theme.white};

	a {
		text-decoration: none;
		margin: 0.5em;
		border: 2px solid grey;
		padding: 1em;
		width: 2em;
		height: 2em;
		border-radius: 50%;
	}
`;

const Arrow = styled.div`
	width: 2em;
	height: 1.8em;
	background-color: ${p => p.theme.primary};
	box-shadow: 0px 3px 20px 4px rgba(0, 0, 0, 0.25);
	clip-path: polygon(50% 0, 25% 100%, 75% 100%);
	position: absolute;
	top: -30%;
`;
