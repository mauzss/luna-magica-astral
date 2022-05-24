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
	margin: 7px;
	padding: 7px;
	background-color: white;
	width: 20%;
	height: 20%;
	justify-content: center;
	box-shadow: 0 0 20px 4px #666699;
	border: none;
`;

export const LabelZodiacal = styled.label`
	color: white;
	font-size: 1.2em;
`;

export const ButtonZodiacal = styled.button`
	margin: 7px;
	padding: 7px;
	background-color: white;
	width: 25%;
	height: 20%;
	justify-content: center;
	border-color: white;
	border-radius: 20px;
	border: 1px;
	border-style: solid;
	outline: none;
	background-image: linear-gradient(to right, #29004a, #5b00a6);
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
	margin: 10px;
	padding: 10px;
	text-shadow: 3px 3px 3px #666699;
	text-transform: uppercase;
	color: ${({ inverse }) => (inverse ? '#FFFFFF' : '#000000')};
`;

export const TextZodiacal = styled.p`
	margin: 20px 10px 20px 10px;
	padding: 20px 10px 20px 10px;
	position: relative;
	margin-bottom: 4rem;
	text-align: justify;
	text-indent: 0px;
	font-size: 1.1rem;
	line-height: 1.06;
	letter-spacing: 0.1rem;
	color: ${({ inverse }) => (inverse ? '#FFFFFF' : '#000000')};
`;