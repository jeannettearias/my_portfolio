import { useState, useEffect } from "react";
import '../../styles/layout/_header.scss';


function Header() {
    const [darkmode, setDarkmode] = useState(false); // Start with light mode

    const activeMode = () => {
        setDarkmode(!darkmode);
    };

    useEffect(() => {
        if (darkmode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');

        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }, [darkmode]);


    return (
        <div className={darkmode}>
            <header className="header">
                <ul className="header__ul js__ul">
                    <li className="header__li">Experience</li>
                    <li className="header__li">Projects</li>
                    <li className="header__li">About me</li>
                    <li className="header__li" onClick={activeMode}>Icon :3</li>
                </ul>

            </header>
        </div>

    );
}

export default Header;
