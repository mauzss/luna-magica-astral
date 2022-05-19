import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureTitle,
	FeatureTextWrapper,
	SelectZodiacal,
	LabelZodiacal,
	ButtonZodiacal,
	TextZodiacal,
	TitleZodiacal,
} from './ZodiacalStyles';

/* else {
	
		  }
	*/

const Zodiacal = (diaE, mesE) => {
	const handleClick = () => {
		let diaElegido = parseInt(document.getElementById('dia').value);
		let mesElegido = parseInt(document.getElementById('mes').value);
		obtenerSigno(diaElegido, mesElegido);
	};

	const obtenerSigno = async (diaE, mesE) => {
		const URL = '/ZodiacoData.json';
		const response = await fetch(URL);
		const data = await response.json();

		let numero = 1;
		if (mesE === 1) {
			if (diaE <= 19) {
				numero = 0;
			} else {
				numero = 1;
			}
		} else if (mesE === 2) {
			if (diaE <= 17) {
				numero = 1;
			} else {
				numero = 2;
			}
		} else if (mesE === 3) {
			if (diaE <= 20) {
				numero = 2;
			} else {
				numero = 3;
			}
		} else if (mesE === 4) {
			if (diaE <= 19) {
				numero = 3;
			} else {
				numero = 4;
			}
		} else if (mesE === 5) {
			if (diaE <= 20) {
				numero = 4;
			} else {
				numero = 5;
			}
		} else if (mesE === 6) {
			if (diaE <= 20) {
				numero = 5;
			} else {
				numero = 6;
			}
		} else if (mesE === 7) {
			if (diaE <= 22) {
				numero = 6;
			} else {
				numero = 7;
			}
		} else if (mesE === 8) {
			if (diaE <= 22) {
				numero = 7;
			} else {
				numero = 8;
			}
		} else if (mesE === 9) {
			if (diaE <= 22) {
				numero = 8;
			} else {
				numero = 9;
			}
		} else if (mesE === 10) {
			if (diaE <= 22) {
				numero = 9;
			} else {
				numero = 10;
			}
		} else if (mesE === 11) {
			if (diaE <= 21) {
				numero = 10;
			} else {
				numero = 11;
			}
		} else if (mesE === 12) {
			if (diaE <= 21) {
				numero = 11;
			} else {
				numero = 0;
			}
		}

		let titulo = `${data.horoscopo[numero]['signo']}`;
		let mensaje = `<strong>Fecha":</strong> ${data.horoscopo[numero]['fecha']}<br><br>
		<strong>Descripcion:</strong> ${data.horoscopo[numero]['descripcion']}<br><br>
		<strong>Simboliza:</strong> ${data.horoscopo[numero]['simboliza']}<br><br>
		<strong>Elemento:</strong> ${data.horoscopo[numero]['elemento']}<br><br>
		<strong>Estacion:</strong> ${data.horoscopo[numero]['estacion']}<br><br>
		<strong>Caracter:</strong> ${data.horoscopo[numero]['caracter']}<br><br>
		<strong>A favor:</strong> ${data.horoscopo[numero]['a_favor']}<br><br>
		<strong>En contra:</strong> ${data.horoscopo[numero]['en_contra']}<br><br>
		<strong>Dia de la semana:</strong> ${data.horoscopo[numero]['dia_semana']}<br><br>
		<strong>Color:</strong> ${data.horoscopo[numero]['color']}"<br><br>
		<strong>Planeta:</strong> ${data.horoscopo[numero]['planeta']}<br><br>
		<strong>Piedras:</strong> ${data.horoscopo[numero]['piedras']}<br><br>`;

		document.getElementById('titleHoroscopo').innerHTML = `${titulo}`;
		document.getElementById('textHoroscopo').innerHTML = `${mensaje}`;
	};

	let dia = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20, 21, 22,
		23, 24, 25, 26, 27, 28, 29, 30, 31,
	];
	let mes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	return (
		<Section
			smPadding="50px 10px"
			position="relative"
			inverse={true}
			id="horoscopo"
		>
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle inverse={true}>Horoscopo Zodiacal</FeatureTitle>
				</FeatureTextWrapper>
				<LabelZodiacal htmlFor="dia">Dia:</LabelZodiacal>
				<SelectZodiacal name="dia" id="dia">
					{dia.map((x, index1) => (
						<option value={x} key={index1}>
							{x}
						</option>
					))}
				</SelectZodiacal>
				<LabelZodiacal htmlFor="mes">Mes:</LabelZodiacal>
				<SelectZodiacal name="mes" id="mes">
					{mes.map((x, index) => (
						<option value={x} key={index}>
							{x}
						</option>
					))}
				</SelectZodiacal>

				<ButtonZodiacal onClick={handleClick}>Buscar Signo</ButtonZodiacal>
				<FeatureTextWrapper>
					<TitleZodiacal inverse={true} id="titleHoroscopo"></TitleZodiacal>
					<TextZodiacal inverse={true} id="textHoroscopo"></TextZodiacal>
				</FeatureTextWrapper>
			</Container>
		</Section>
	);
};

export default Zodiacal;
