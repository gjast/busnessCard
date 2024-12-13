import { useState, useRef } from 'react';
import './App.scss';
import Lending from './ components/lending/Lending';
import About from './ components/about/About';
import Stack from './ components/stack/Stack';
import Reviews from './ components/Reviews/Reviews';
import Footer from './ components/footer/Footer';

function App() {
    const aboutRef = useRef(null);
    const stackRef = useRef(null);
    const reviewsRef = useRef(null);

    return (
        <>
            <Lending aboutRef={aboutRef} stackRef={stackRef} reviewsRef={reviewsRef} />
            <div ref={aboutRef}><About /></div>
            <div ref={stackRef}><Stack /></div>
            <div ref={reviewsRef}><Reviews /></div>
            <Footer/>
        </>
    );
}

export default App;
