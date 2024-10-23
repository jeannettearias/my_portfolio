import codeLogo from '../../images/coding_logo.png';


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