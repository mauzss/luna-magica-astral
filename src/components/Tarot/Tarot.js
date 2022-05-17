import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureTitle,
	FeatureWrapper,
	FeatureTextWrapper,
	Img
} from './TarotStyles';

import CardBack from '../../assets/reverse-card.jpg';


const Tarot = ({img,alt}) => {

	return (
		<Section smPadding="50px 10px" position="relative" inverse={false} id="tarot">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle inverse={true} >Tiradas de Tarot</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					<Img
						src={CardBack}
						alt={alt}
						whileHover={{ rotate: 2, scale: 1.02 }}
						transition={{ duration: 0.5 }}
					/>
					<Img
						src={CardBack}
						alt={alt}
						whileHover={{ rotate: 2, scale: 1.02 }}
						transition={{ duration: 0.5 }}
					/>
					<Img
						src={CardBack}
						alt={alt}
						whileHover={{ rotate: 2, scale: 1.02 }}
						transition={{ duration: 0.5 }}
					/>
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Tarot;
