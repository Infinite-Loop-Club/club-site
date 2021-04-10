import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaGlobe } from 'react-icons/fa';

import { fonts } from 'constants/theme';
import { benxeneWithoutName, voteLogo } from 'images';

export default function AboutCard({
	id,
	profile,
	name,
	designation,
	year,
	tag,
	socialLinks,
	handleClick,
	role,
	vote,
	fromBenxene
}) {
	return (
		<Container
			id={id}
			key={id}
			onClick={() => {
				handleClick && handleClick(role, id);
			}}
		>
			{vote && vote[role] === id && <VotedLogo src={voteLogo} alt='vote' />}
			<ProfileImg src={profile} alt={name}></ProfileImg>
			<Content>
				<h2>{name}</h2>
				<Text bold>{designation}</Text>
				{year && <Text>{year}</Text>}
				{tag && (
					<Text>
						"{tag.substring(0, 60)}
						{tag.length > 60 && `...`}"
					</Text>
				)}
				{socialLinks && (
					<IconContainer>
						{socialLinks.github && (
							<a href={socialLinks.github}>
								<FaGithub />
							</a>
						)}
						{socialLinks.linkedin && (
							<a href={socialLinks.linkedin}>
								<FaLinkedin />
							</a>
						)}
						{socialLinks.email && (
							<a href={socialLinks.email}>
								<FaEnvelope />
							</a>
						)}
						{socialLinks.twitter && (
							<a href={socialLinks.twitter}>
								<FaTwitter />
							</a>
						)}
						{socialLinks.portfolio && (
							<a href={socialLinks.portfolio}>
								<FaGlobe />
							</a>
						)}
					</IconContainer>
				)}
			</Content>
			<Rect1 />
			<Rect2 />
			<Triangle>{fromBenxene && <img src={benxeneWithoutName} alt='benxene' />}</Triangle>
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	width: 50rem;
	height: 23rem;
	padding: 2rem;
	display: flex;
	flex-direction: row;
	background-color: ${props => props.theme.lightGrey};
	border-radius: 2rem;
	overflow: hidden;
	box-shadow: ${props => `1px 1px 20px ${props.theme.black}30`};
	cursor: ${props => (props.id ? 'pointer' : 'default')};

	@media (max-width: 1200px) {
		width: 40rem;
		height: 19rem;
	}

	@media (max-width: 970px) {
		width: 35rem;
		height: 16.5rem;
	}

	@media (max-width: 400px) {
		width: 28rem;
		height: 15rem;
	}

	@media (max-width: 400px) {
		width: 22.5rem;
		height: 13rem;
		padding: 1.5rem;
	}

	& img {
		margin: auto 4rem auto 0;
		object-fit: cover;
		object-position: top center;
		border-radius: 10%;
		border: 0.3rem solid ${props => props.theme.primary};

		width: 16rem;
		height: 18rem;

		@media (max-width: 1200px) {
			margin-right: 3rem;
			width: 14rem;
			height: 16rem;
		}

		@media (max-width: 970px) {
			margin-right: 2.5rem;
			width: 12rem;
			height: 13rem;
		}

		@media (max-width: 400px) {
			margin-right: 1rem;
			width: 8rem;
			height: 11rem;
		}

		@media (max-width: 400px) {
			margin-right: 0.5rem;
			width: 6rem;
			height: 9rem;
		}
	}

	& h2 {
		font-family: ${fonts.sansSerif};
		color: ${p => p.theme.primary};

		@media (max-width: 1200px) {
			font-size: 2.2rem;
		}

		@media (max-width: 970px) {
			font-size: 2rem;
		}

		@media (max-width: 850px) {
			font-size: 1.8rem;
		}

		@media (max-width: 400px) {
			font-size: 1.2rem;
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 1;
`;

const IconContainer = styled.div`
	position: relative;
	flex: 1;
	display: flex;
	align-items: flex-end;
	z-index: 1;

	@media (max-width: 1200px) {
		margin-top: 1rem;
	}

	@media (max-width: 970px) {
		margin-top: 0rem;
	}

	& a {
		position: relative;
		font-size: 2.5rem;
		margin-right: 2rem;

		@media (max-width: 1200px) {
			font-size: 2rem;
		}

		@media (max-width: 970px) {
			margin-right: 1.5rem;
		}

		@media (max-width: 400px) {
			font-size: 1.5rem;
			margin-right: 1rem;
		}

		@media (max-width: 400px) {
			font-size: 1.3rem;
			margin-right: 1rem;
		}

		& svg {
			transition: all 0.2s;

			&:hover {
				cursor: pointer;
				fill: ${props => props.theme.primary};
			}
		}
	}
`;

const ProfileImg = styled.img`
	z-index: 1;
`;

const Rect1 = styled.div`
	position: absolute;
	top: 45%;
	left: 0;
	background-color: ${props => `${props.theme.secondary}80`};
	width: 25rem;
	height: 4rem;
	transform: skew(0deg, -25deg);

	@media (max-width: 1200px) {
		top: 40%;
		width: 18rem;
		height: 3.5rem;
	}

	@media (max-width: 970px) {
		top: 35%;
		width: 14.5rem;
		height: 3rem;
	}

	@media (max-width: 400px) {
		width: 10rem;
		height: 2.5rem;
	}

	@media (max-width: 400px) {
		width: 7.5rem;
		height: 2rem;
	}
`;

const Rect2 = styled.div`
	position: absolute;
	top: 35%;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}`};
	width: 18rem;
	height: 1.5rem;
	transform: skew(0deg, -25deg);

	@media (max-width: 1200px) {
		top: 40%;
		width: 17rem;
		height: 1rem;
	}

	@media (max-width: 970px) {
		width: 16rem;
	}

	@media (max-width: 400px) {
		width: 14rem;
	}

	@media (max-width: 400px) {
		width: 11rem;
	}
`;

const Text = styled.p`
	font-size: ${props => (props.bold ? '1.3rem' : '1.2rem')};
	font-weight: ${props => (props.bold ? '700' : '600')};
	z-index: 1;

	@media (max-width: 1200px) {
		font-size: ${props => (props.bold ? '1.2rem' : '1rem')};
	}

	@media (max-width: 970px) {
		font-size: ${props => (props.bold ? '1rem' : '.9rem')};
	}

	@media (max-width: 400px) {
		font-size: ${props => (props.bold ? '.9rem' : '0.8rem')};
	}
`;

const Triangle = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;
	background-color: ${props => `${props.theme.tertiary}80`};
	clip-path: polygon(100% 0, 0 100%, 100% 100%);
	width: 25rem;
	height: 10rem;

	@media (max-width: 1200px) {
		width: 22rem;
		height: 8rem;
	}

	@media (max-width: 970px) {
		width: 20rem;
		height: 8rem;
	}

	@media (max-width: 400px) {
		width: 10rem;
		height: 3.5rem;
	}

	img {
		height: 60%;
		width: auto;
		position: absolute;
		top: 30%;
		right: -10%;
		display: inline-block;
		border: none;

		@media (max-width: 400px) {
			right: 0%;
		}
	}
`;

const VotedLogo = styled.img`
	position: absolute;
	border: none !important;
	height: 80% !important;
	width: auto !important;
	object-fit: cover;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 30;
`;
