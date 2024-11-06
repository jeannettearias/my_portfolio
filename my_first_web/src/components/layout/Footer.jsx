import codeLogo from '../../images/coding_logo.png';
import '../../styles/layout/_footer.scss';


function Footer() {
    return (
        <>
            <footer className='footer'>
                <img
                    className='logoSponsor'
                    src={codeLogo}
                    alt="Jeannette's Logo"
                />
            </footer>
        </>
    );
}

export default Footer;