import React from 'react';
import styled from 'styled-components';

export default function Card({ name, position, imgSrc, isSpecial }) {
	return (
		<CardInternal isSpecial={isSpecial}>
			<img src={imgSrc} alt={name}></img>
			<h2>{name}</h2>
			<p>{position}</p>
		</CardInternal>
	);
}

const CardInternal = styled.div`
	max-width: 30rem;
	padding: 5rem;
	text-align: center;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;
	transition: all 0.3s;
	cursor: pointer;

	${({ isSpecial }) =>
		isSpecial &&
		`
      background-image: linear-gradient(to top left, #7524dd, #bf59c0);
      color: white;

      &>h2 {
        color: white !important;
      }
  `}

	${({ isSpecial }) =>
		!isSpecial &&
		`
			@media(max-width: 600px) {
				padding: 2rem;

				img {
					height: 10rem !important;
					width: 10rem !important;
				}

				h2 {
					font-size: 1.4rem;
				}

				p{
					font-size: 1rem;
				}
			}
		`}

	&:hover {
		transform: translateY(-1rem);
		box-shadow: 0 0.7rem 1.1rem rgba(0, 0, 0, 0.2);
		background-image: linear-gradient(to top left, #7524dd, #bf59c0);
		color: white;

		& > h2 {
			color: white !important;
		}
	}

	& img {
		height: 15rem;
		width: 15rem;
		object-fit: cover;
		object-position: center;
		border-radius: 50%;
	}

	& h2 {
		color: #7524dd;
	}
`;
