import React from 'react';
import { Link } from 'react-scroll';
import { Button, Container, MainHeading } from '../../globalStyles';
import {
	HeroVideo,
	HeroSection,
	HeroText,
	ButtonWrapper,
} from './HeroStyles';

import VideoBackground from '../../assets/spaceWormHoleLoop.mp4';

const Hero = () => {
	return (
		<HeroSection>
			<HeroVideo src={VideoBackground} autoPlay loop muted/>
			<Container>
				<MainHeading>Tu suerte esta segura con nosotros.</MainHeading>

				<HeroText>
					Nosotros proveemos la mejor lectura de cartas en ingles.
				</HeroText>
				<ButtonWrapper>
					<Link
						to="about"
						spy={true}
						smooth={true}
						hashSpy={true}
						offset={50}
						duration={500}
						delay={5}
						isDynamic={true}
					>
						<Button>Get Started</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
