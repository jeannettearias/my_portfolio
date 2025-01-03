import { Link } from 'react-router-dom';
import '../../styles/layout/_header.scss'
import JeannetteLogo from '/images/jean_logo.svg';

function Header() {

    return (

        <div className='header__section'>
            <header className='header'>
                <div className='logo__box'>
                    <img
                        className='logoSponsor'
                        src={JeannetteLogo}
                        alt="Jeannette's Logo"
                    />
                </div>
                <nav className='menu__box'>
                    <ul className="menu__list ">
                        <li className="menu__item">
                            <Link to="/" className="menu__link">Home</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/experience"
                                className="menu__link">Experience</Link>
                        </li>
                        <li className="menu__item">
                            <Link to="/projects"
                                className="menu__link"> Projects </Link>
                        </li>
                    </ul>
                </nav>
                <div className='btn__box'>
                    <Link to='/contact' className='contact__btn'>Contact</Link>
                </div>
            </header>
        </div>
    );
}

export default Header;

