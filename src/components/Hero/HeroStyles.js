import styled from 'styled-components';

export const HeroSection = styled.section`
	height: 100vh;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)),
		
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	// box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
	object-fit: contain;
	font-family: 'Cookie', cursive;
	
`;


export const HeroVideo = styled.video`
	object-fit: cover;
	width: 99.3%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
`;


export const HeroText = styled.p`

	margin-bottom: 35px;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: white;

`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;

`;