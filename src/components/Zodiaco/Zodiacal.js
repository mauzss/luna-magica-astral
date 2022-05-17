import React from 'react';
import { Container, Section } from '../../globalStyles';

import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureName,
	FeatureTextWrapper,
} from './ZodiacalStyles';


const Zodiacal = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse={true} id="horoscopo">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle inverse={true}>Horoscopo Zodiacal</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					<FeatureColumn
						initial={initial}
						animate={animate}
						transition={{ duration: 0.5 + 1 * 0.1 }}
						key="tarot"
					>
						<FeatureName>Zodiaco descripcion</FeatureName>
						<FeatureText>Lorem ipsum</FeatureText>
					</FeatureColumn>
				</FeatureWrapper>
			</Container>
		</Section>
	);
};

export default Zodiacal;
