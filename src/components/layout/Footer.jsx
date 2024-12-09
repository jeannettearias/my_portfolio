import JeannetteLogo from '../../images/Jeannette_logo.svg';
import '../../styles/layout/_footer.scss';


function Footer() {
    return (
        <footer className='footer'>
            <div className='copy'>
                <span>© 2024 Designed by Jeannette Arias</span>
                <span className='additional-text'>All Rights Reserved</span>
            </div>
            <div className="additional-text"></div>
            <div>
                <img
                    className='logoSponsor'
                    src={JeannetteLogo}
                    alt="Jeannette's Logo"
                />
            </div>

        </footer>
    );
}

export default Footer; 