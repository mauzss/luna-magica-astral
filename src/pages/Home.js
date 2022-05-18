import React from "react";
import Tarot from '../components/Tarot/Tarot';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import Zodiacal from "../components/Zodiaco/Zodiacal";
import Footer  from '../components/Footer/Footer';

const Home = () => {
    return(
        <>
			<Hero />
			<Features />
			<Zodiacal />
			<Tarot />
			<Footer />
		</>
    )
};

export default Home;