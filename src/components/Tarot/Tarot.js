import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureTitle,
	FeatureWrapper,
	FeatureTextWrapper,
	FeatureColumn,
	FeatureName,
	FeatureText
} from './TarotStyles';

import './cartaStyles.css';

import CardBack from '../../assets/reverse-card.jpg';
let card1 = CardBack;
let card2 = CardBack;
let card3 = CardBack;

const Tarot = ({ img, alt }) => {

	const handleClick = () => {
		//PASADO
		setTimeout(() => {
			obtenerLectura('pasado');
		}, 1000);
		//const card = document.querySelector('.card__inner');
		const card1 = document.getElementById('1');
		setTimeout(() => {
			card1.classList.toggle('is-flipped');
		}, 1000);

		//PRESENTE
		setTimeout(() => {
			obtenerLectura('presente');
		}, 2000);
		const card2 = document.getElementById('2');
		setTimeout(() => {
			card2.classList.toggle('is-flipped');
		}, 2000);

		//FUTURO
		setTimeout(() => {
			obtenerLectura('futuro');
		}, 3000);
		const card3 = document.getElementById('3');
		setTimeout(() => {
			card3.classList.toggle('is-flipped');
		}, 3000);
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
		let meaningsLight =
			data.cards[cartaRandom]['meanings']['light'][meaningsRandom];
		let meaningsShadow =
			data.cards[cartaRandom]['meanings']['shadow'][meaningsRandom];

		let texto = `
		Carta: ${nombre}<br>
		Numero de la suerte: ${number}<br>
		Fortuna: ${fortune}<br>
		Cuidado con: ${meaningsShadow}<br>
		Sigue con: ${meaningsLight}`;
		document.getElementById(`${tiempo}`).innerHTML = `${texto}`;
		if (tiempo === 'pasado') {
			card1 = `assets/cards/${img}`;
			document.getElementById('imgPasado').src = card1;
		} else if (tiempo === 'presente') {
			card2 = `../../assets/cards/${img}`;
			document.getElementById('imgPresente').src = card2;
		} else {
			card3 = `../../assets/cards/${img}`;
			document.getElementById('imgFuturo').src = card3;
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
					<button onClick={handleClick}><span id='cristal-button'>Tirar las cartas</span></button>
				</FeatureTextWrapper>
				<FeatureWrapper>
					<FeatureColumn>
						<div className="card">
							<div className="card__inner" id='1'>
								<div className="card__face card__face--front">
									<img src={CardBack} alt={alt} className='imgBack' />
								</div>
								<div className="card__face card__face--back">
									<img id="imgPasado" src="" alt="" className="pp" />
								</div>
							</div>
						</div>
						<FeatureName>Pasado</FeatureName>
						<FeatureText id="pasado"></FeatureText>
					</FeatureColumn>
					<FeatureColumn>
					<div className="card">
							<div className="card__inner" id='2'>
								<div className="card__face card__face--front">
									<img src={CardBack} alt={alt} className='imgBack' />
								</div>
								<div className="card__face card__face--back">
									<img id="imgPresente" src="" alt="" className="pp" />
								</div>
							</div>
						</div>
						<FeatureName>Presente</FeatureName>
						<FeatureText id="presente"></FeatureText>
					</FeatureColumn>
					<FeatureColumn>
					<div className="card">
							<div className="card__inner" id='3'>
								<div className="card__face card__face--front">
									<img src={CardBack} alt={alt} className='imgBack' />
								</div>
								<div className="card__face card__face--back">
									<img id="imgFuturo" src="" alt="" className="pp" />
								</div>
							</div>
						</div>
						<FeatureName>Futuro</FeatureName>
						<FeatureText id="futuro"></FeatureText>
					</FeatureColumn>
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Tarot;
