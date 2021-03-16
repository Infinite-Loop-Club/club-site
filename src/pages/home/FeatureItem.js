import styled from 'styled-components';

export default function Feature(props) {
	return (
		<Container>
			<img alt='feat-img' src={props.imgSrc} />
			<div>
				<h3>{props.title}</h3>
				<p>{props.para}</p>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 4rem;
	place-items: center;

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		text-align: center;

		& img {
			justify-self: center !important;
		}
	}

	@media (min-width: 600px) {
		&:nth-child(even) {
			img {
				grid-column: -1/-2;
				justify-self: flex-start;
			}

			div {
				grid-column: 1/2;
				grid-row: 1/2;
				text-align: right;
			}
		}
	}

	& img {
		display: block;
		max-height: 25rem;
		justify-self: flex-end;
	}

	div {
		& h3 {
			font-size: 2rem;
			margin-bottom: 1.2rem;
		}

		& p {
			line-height: 2;
		}
	}
`;
