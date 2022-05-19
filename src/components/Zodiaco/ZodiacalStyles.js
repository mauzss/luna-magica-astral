import styled from 'styled-components';

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color: ${({ inverse }) => (inverse ? '#FFFFFF' : '#000000')};
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const SelectZodiacal = styled.select`
	margin: 10px;
	padding: 10px;
	background-color: white;
	width: 20%;
	height: 20%;
	justify-content: center;
	box-shadow: 0 0 35px 8px #666699;
	border: none;
`;

export const LabelZodiacal = styled.label`
	color: white;
	font-size: 1.2em;
`;

export const ButtonZodiacal = styled.button`
	margin: 10px;
	padding: 10px;
	background-color: white;
	width: 10%;
	height: 20%;
	justify-content: center;
	border-color: white;
	border-radius: 10px;
	border: none;
	outline: none;
	background-image: linear-gradient(to right, #003d66, #403ae3);
	color: white;
	:hover {
		box-shadow: 0 0 35px 8px #666699;
	}
`;

export const TitleZodiacal = styled.h3`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	color: ${({ inverse }) => (inverse ? '#FFFFFF' : '#000000')};
`;

export const TextZodiacal = styled.p`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
	font-size: 1.1rem;
	line-height: 1.06;
	letter-spacing: 0.1rem;
	margin: auto;
	color: ${({ inverse }) => (inverse ? '#FFFFFF' : '#000000')};
`;