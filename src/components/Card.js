import React from 'react';
import styled from 'styled-components';
import { colors } from 'constants/theme';

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
	width: 30%;
	min-width: 20rem;
	max-width: 30rem;
	height: 40%;
	padding: 5rem;
	text-align: center;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	border-radius: 0.4rem;
	transition: all 0.3s;
	cursor: pointer;

	${({ isSpecial }) =>
		isSpecial &&
		`
      background-image: linear-gradient(to top left, ${colors.primary}, ${colors.secondary});
      color: white;

      &>h2 {
        color: white !important;
      }

			@media(max-width: 900px){
				padding: 2rem;
				min-width: auto;

				h2 {
					font-size: 1.4rem;
				}

				p{
					font-size: 1rem;
				}
			}

			@media(max-width: 500px){
				h2 {
					font-size: 1.2rem;
				}

				p{
					font-size: 0.8rem;
				}
			}
  `}

	${({ isSpecial }) =>
		!isSpecial &&
		`
			@media(max-width: 900px) {
				padding: 2rem;
				min-width: auto;

				h2 {
					font-size: 1.4rem;
				}

				p{
					font-size: 1rem;
				}
			}

			@media(max-width: 500px){
				h2 {
					font-size: 1.2rem;
				}

				p{
					font-size: 0.8rem;
				}
			}

		`}

	&:hover {
		transform: translateY(-1rem);
		box-shadow: 0 0.7rem 1.1rem rgba(0, 0, 0, 0.2);
	}

	& img {
		width: 90%;
		object-fit: cover;
		object-position: center;
		border-radius: 50%;
	}

	& h2 {
		color: ${p => p.theme.primary};
	}
`;
