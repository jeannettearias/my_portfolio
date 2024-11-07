import codeLogo from '../../images/coding_logo.png';
import '../../styles/layout/_footer.scss';


function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='copy'>
                    <span>&copy;2024 Jeannette Arias. All rights reserved.  </span>
                    <img
                        className='logoSponsor'
                        src={codeLogo}
                        alt="Jeannette's Logo"
                    />
                </div>
            </footer>
        </>
    );
}

export default Footer; 