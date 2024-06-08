import React, { useContext } from 'react';
import './NavBar.css';
import navIcon from '../../assets/iocn.png';
import toggleContext from '../Context';

function NavBar() {
    const { setHomepage, setAccount } = useContext(toggleContext);

    const handleAccountClick = () => {
        setAccount(true);
        setHomepage(false);
    };

    const handleHomepage = ()=>{
        setAccount(false);
        setHomepage(true);
    }

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <figure>
                            <img src={navIcon} alt="" />
                        </figure>
                    </li>
                    <li onClick={handleHomepage} >Home</li>
                    <li>Accessories</li>
                    <li>Desktops</li>
                    <li>Laptops</li>
                    <li>Monitors</li>
                    <li onClick={handleAccountClick}>Account</li>
                    <li><input type="text" placeholder='Search' /></li>
                    <li><i className="fa-solid fa-cart-shopping"></i><sup id='item-represent'>0</sup></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;