import React, { useRef, useEffect, useState } from "react";
import logo from "/img/logo.jpg";
import "./Lending.scss";

export default function Lending({ aboutRef, stackRef, reviewsRef }) {
    const [isFixed, setIsFixed] = useState(false);
    const mainBlockRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const heightMain = mainBlockRef.current.offsetHeight;

            if (window.scrollY > heightMain) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Очистка события при размонтировании
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`Main_lending_block ${isFixed ? 'fixedMain' : ''}`}>
            <div className="lending_logo" ref={mainBlockRef}>
                <img className="logo_img" src={logo} alt="logo" />
                <h2 className="logo_name">Karim</h2>
            </div>
            <nav className={`lending_nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav_list">
                    <li onClick={() => scrollToSection(aboutRef)}>About</li>
                    <li onClick={() => scrollToSection(stackRef)}>Stack</li>
                    <li onClick={() => scrollToSection(reviewsRef)}>Reviews</li>
                </ul>
            </nav>
        </div>
    );
}
