import { Link } from 'react-router-dom';
import '../../styles/layout/_header.scss'
import { useEffect, useState } from 'react';

function Header() {
    const [isTransparent, setIsTransparent] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll value as needed
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section>
            <header className={`header ${isTransparent ? 'transparent' : ''}`}>
                <nav className={`menu ${isTransparent ? 'transparent' : ''}`}>
                    <ul className="menu__list ">
                        <li className="menu__item">
                            <Link to="/" className="menu__link"></Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/experience"
                                className="menu__link">Experience</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/projects"
                                className="menu__link"> Projects </Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/about-me"
                                className="menu__link">About Me</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/contact"
                                className="menu__link">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </section>
    );

}

export default Header;

