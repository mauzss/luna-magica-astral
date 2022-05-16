import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyle'

const Hero = () => {
  return (
    <HeroSection>
        <HeroVideo src="./assets/spaceWormHoleLup.webm" />
        <Container>
            <MainHeading>
                Tu suerte esta segura con nosotros.
            </MainHeading>

            <HeroText>
                Nosotros proveemos la mejor lectura de cartas en ingles.
            </HeroText>
            <ButtonWrapper>
                <Link to="signup">
                    <Button>Get Started</Button>
                </Link>
                <HeroButton>Find More</HeroButton>
            </ButtonWrapper>
        </Container>
    </HeroSection>
  )
}

export default Hero