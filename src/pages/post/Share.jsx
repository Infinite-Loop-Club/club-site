import { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaTwitter, FaFacebookSquare, FaClipboard } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

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

	const handleCopy = () => {
		var textField = document.createElement('textarea');
		textField.innerText = `${window.origin}/post/${value._id}`;
		document.body.appendChild(textField);
		textField.select();
		document.execCommand('copy');
		textField.remove();
		setShowModal(false);
		toast.success('Link Copied to clipboard', {
			position: 'bottom-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined
		});
	};

	return (
		<Container>
			<Bottom style={style} onClick={() => handleShare(value)}>
				<img src={share} alt={share}></img>
			</Bottom>
			<ToastContainer />
			{showModal && (
				<Modal>
					<a href={`http://www.facebook.com/sharer.php?u=${window.origin}/post/${value._id}`}>
						<FaFacebookSquare></FaFacebookSquare>
					</a>
					<a
						href={`https://twitter.com/share?url=
						${window.origin}/post/${value._id}
						&amp;text=Check%20it%20out&amp;hashtags=infiniteloopclub`}
					>
						<FaTwitter />
					</a>

					<a
						href={`mailto:?Subject=Club%20post&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20
						${window.origin}/post/${value._id}`}
					>
						<FaEnvelope />
					</a>
					<Copy onClick={handleCopy}>
						<FaClipboard />
					</Copy>
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
	padding: 1em;
	box-shadow: 0px 3px 20px 4px rgba(0, 0, 0, 0.25);
	border-radius: 0.5em;
	background-color: ${p => p.theme.white};

	a {
		text-decoration: none;
		margin: 0.5em;

		& svg {
			transition: all 0.2s;
			font-size: 2rem;

			&:hover {
				cursor: pointer;
				fill: ${props => props.theme.primary};
			}
		}
	}
`;

const Copy = styled.div`
	margin: 0.5em;
	cursor: pointer;
	display: inline-block;

	& svg {
		transition: all 0.2s;
		font-size: 2rem;

		&:hover {
			cursor: pointer;
			fill: ${props => props.theme.primary};
		}
	}
`;

const Arrow = styled.div`
	width: 2em;
	height: 1.8em;
	background-color: ${p => p.theme.primary};
	box-shadow: 0px 3px 20px 4px rgba(0, 0, 0, 0.25);
	clip-path: polygon(50% 0, 25% 100%, 75% 100%);
	position: absolute;
	top: -35%;
`;
