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
	display: flex;
	align-items: center;

	@supports (gap: 3rem) {
		gap: 3rem;
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
		text-align: center;

		& img {
			justify-self: center !important;
		}
	}

	@media (min-width: 600px) {
		&:nth-child(even) {
			flex-direction: row-reverse;
			img {
				justify-self: flex-start;
			}

			div {
				text-align: right;
				@supports not (gap: 3rem) {
					margin-right: 3rem;
					margin-left: 0;
				}
			}
		}
	}

	& img {
		display: block;
		max-height: 25rem;
		justify-self: flex-end;
	}

	div {
		@supports not (gap: 3rem) {
			margin-left: 3rem;
		}
		& h3 {
			font-size: 2rem;
			margin-bottom: 1.2rem;
		}

		& p {
			line-height: 2;
		}
	}
`;
