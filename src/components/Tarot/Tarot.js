import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureTitle,
	FeatureWrapper,
	FeatureTextWrapper,
	FeatureColumn,
	FeatureName,
	FeatureText,
	Img,
} from './TarotStyles';

import './cartaStyles.css';

import CardBack from '../../assets/reverse-card.jpg';
let card1=CardBack;
let card2=CardBack;
let card3=CardBack;

const Tarot = ({ img, alt }) => {
	const handleClick = () => {
		setTimeout(() => { obtenerLectura('pasado')}, 1000);
		setTimeout(() => { obtenerLectura('presente')}, 2000);
		setTimeout(() => { obtenerLectura('futuro')}, 3000);
	};

	const obtenerLectura = async (tiempo) => {
		const URL = '/tarot-images.json';
		const response = await fetch(URL);
		const data = await response.json();

		let cartaRandom = Math.floor(Math.random() * 78);
		let fortunaRandom = Math.floor(Math.random() * 2);
		let meaningsRandom = Math.floor(Math.random() * 5);

		let nombre = data.cards[cartaRandom]['name'];
		let number = data.cards[cartaRandom]['number'];
		let img = data.cards[cartaRandom]['img'];
		let fortune = data.cards[cartaRandom]['fortune_telling'][fortunaRandom];
		let meaningsLight = data.cards[cartaRandom]['meanings']['light'][meaningsRandom];
		let meaningsShadow = data.cards[cartaRandom]['meanings']['shadow'][meaningsRandom];

		let texto = `
		Carta: ${nombre}<br>
		Numero de la suerte: ${number}<br>
		Fortuna: ${fortune}<br>
		Cuidado con: ${meaningsShadow}<br>
		Sigue con: ${meaningsLight}`;
		document.getElementById(`${tiempo}`).innerHTML = `${texto}`
		if (tiempo === 'pasado') {
			card1=`../../assets/cards/${img}`;
		} else if (tiempo === 'presente') {
			card2=`../../assets/cards/${img}`;
		} else {
			card3=`../../assets/cards/${img}`;
		}
	};

	return (
		<Section
			smPadding="50px 10px"
			position="relative"
			inverse={false}
			id="tarot"
		>
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle inverse={true}>Tiradas de Tarot</FeatureTitle>
					<button onClick={handleClick}>Tirar las cartas</button>
				</FeatureTextWrapper>
				<FeatureWrapper>
					<FeatureColumn>
						<div className='card'>
							<div className='front'>Front</div>
							<div className='back'>Back</div>
						</div>
						<Img
							src={card1}
							alt={alt}
							whileHover={{ rotate: 2, scale: 1.02 }}
							transition={{ duration: 0.5 }}
						/>
						<FeatureName>Pasado</FeatureName>
						<FeatureText id='pasado'></FeatureText>
					</FeatureColumn>
					<FeatureColumn>
						<Img
							src={card2}
							alt={alt}
							whileHover={{ rotate: 2, scale: 1.02 }}
							transition={{ duration: 0.5 }}
						/>
						<FeatureName>Presente</FeatureName>
						<FeatureText id='presente'></FeatureText>
					</FeatureColumn>
					<FeatureColumn>
						<Img
							src={card3}
							alt={alt}
							whileHover={{ rotate: 2, scale: 1.02 }}
							transition={{ duration: 0.5 }}
						/>
						<FeatureName>Futuro</FeatureName>
						<FeatureText id='futuro'></FeatureText>
					</FeatureColumn>
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Tarot;
