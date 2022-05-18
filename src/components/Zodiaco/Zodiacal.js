import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureTitle,
	FeatureTextWrapper,
	SelectZodiacal,
	LabelZodiacal,
	ButtonZodiacal,
	TextZodiacal
} from './ZodiacalStyles';

import {zodiacoData} from '../../data/ZodiacoData.json';


		/*if (mesElegido === 1) {
			if (diaElegido <= 19) {
				numero = 1;
			} else {
				numero = 2;
			}
		  } else if (mesElegido === 2) {
			if (diaElegido <= 17) {
				numero = 2;
			} else {
				numero = 3;
			}
		  } else if (mesElegido === 3) {
			if (diaElegido <= 20) {
				numero = 3;
			} else {
				numero = 4;
			}
		  } else if (mesElegido === 4) {
			if (diaElegido <= 19) {
				numero = 4;
			} else {
				numero = 5;
			}
		  } else if (mesElegido === 5) {
			if (diaElegido <= 20) {
				numero = 5;
			} else {
				numero = 6;
			}
		  } else if (mesElegido === 6) {
			if (diaElegido <= 20) {
				numero = 6;
			} else {
				numero = 7;
			}
		  } else if (mesElegido === 7) {
			if (diaElegido <= 22) {
				numero = 7;
			} else {
				numero = 8;
			}
		  } else if (mesElegido === 8) {
			if (diaElegido <= 22) {
				numero = 8;
			} else {
				numero = 9;
			}
		  } else if (mesElegido === 9) {
			if (diaElegido <= 22) {
				numero = 9;
			} else {
				numero = 10;
			}
		  } else if (mesElegido === 10) {
			if (diaElegido <= 22) {
				numero = 10;
			} else {
				numero = 11;
			}
		  } else if (mesElegido === 11) {
			if (diaElegido <= 21) {
				numero = 11;
			} else {
				numero = 12;
			}
		  }
		  else if (mesElegido === 12) {
			if (diaElegido <= 21) {
				numero = 12;
			} else {
				numero = 1;
			}
		  } else {
	
		  }
	*/



const Zodiacal = () => {

	const handleClick = () => {
		prompt('harry poter');
		console.log('hello estoy en handle click');

		//let diaElegido = parseInt(document.getElementById("dia").value);
		//let mesElegido = parseInt(document.getElementById("mes").value);
		//document.getElementById("textHoroscopo").innerHTML = 'hola mundo';
	}


	let dia = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	let mes = [1,2,3,4,5,6,7,8,9,10,11,12];

	return (
		<Section smPadding="50px 10px" position="relative" inverse={true} id="horoscopo">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle inverse={true}>Horoscopo Zodiacal</FeatureTitle>
				</FeatureTextWrapper>
				<LabelZodiacal htmlFor="dia">Dia:</LabelZodiacal>
				<SelectZodiacal name="dia" id="dia">
					{dia.map((x, index1) => (
						<option value={x} key={index1}>{x}</option>
					))}
				</SelectZodiacal>
				<LabelZodiacal htmlFor="mes">Mes:</LabelZodiacal>
				<SelectZodiacal name="mes" id="mes">
					{mes.map((x, index) => (
						<option value={x} key={index} >
							{x}
						</option>
					))}
				</SelectZodiacal>
				<ButtonZodiacal onclick={handleClick} >Buscar Signo</ButtonZodiacal>
				<FeatureTextWrapper>
					<TextZodiacal id='textHoroscopo' name='textHoroscopo' ></TextZodiacal>
				</FeatureTextWrapper>
			</Container>
		</Section>
	);
};

export default Zodiacal;
