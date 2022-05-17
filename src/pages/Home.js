import React from "react";
import Carousel from '../components/Carousel/Carousel';
import Tarot from '../components/Tarot/Tarot';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Zodiacal from "../components/Zodiaco/Zodiacal";

const Home = () => {
    return(
        <>
			<Hero />
			<Features />
			<Zodiacal />
			<Tarot />
			<Carousel />
		</>
    )
};

export default Home;