import codeLogo from '../../images/coding_logo.png';
import '../../styles/layout/_footer.scss';


function Footer() {
    return (
        <footer className='footer'>
            <div className='copy'>
                <span>© 2024 Designed by Jeannette Arias</span>
                <span>All Rights Reserved</span>
            </div>
            <div className="additional-text"></div>
            <div>
                <img
                    className='logoSponsor'
                    src={codeLogo}
                    alt="Jeannette's Logo"
                />
            </div>

        </footer>
    );
}

export default Footer; 