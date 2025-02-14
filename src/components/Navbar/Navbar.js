import React, { useState, useRef } from 'react'
import "./Navbar.css";
import Cart from '../ShoppingCart/ShoppingCart';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../ShoppingCart/styles';
import { Link } from 'react-router-dom';

const Navbar = (onRemove, cartItems) => {
    const [isToggle, setToggle] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-navbar")
    }

    return (
        <div className="navbar-container">
            <Link to={{ pathname: "/", hash: "" }}>
                <img
                    src="/assets/img/logo-fashionista.png"
                    className="logo"
                    alt="logo fashionista"
                />
            </Link>
            <nav className="menu" ref={navRef}>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to={{ pathname: "/catalogo/Feminino", hash: "" }}>FEMININO</Link>

                    </li>
                    <li className="navbar-item">
                        <Link to={{ pathname: "/catalogo/Masculino", hash: "" }}>MASCULINO</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={{ pathname: "/catalogo/Infantil", hash: "" }}>INFANTIL</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to={{ pathname: "/catalogo/Promocoes", hash: "" }}>PROMOÇÕES</Link>
                    </li>
                </ul>

                
                <div className="container-button">
                    <button className="btn-navbar" id="btn-pesquisa">
                        <Icon icon={faMagnifyingGlass} />
                    </button>
                    <Cart className="cart-desktop"
                        isToggle={isToggle} setToggle={setToggle} onRemove={onRemove} cartItems={cartItems}
                    />
                    <button
                        className="btn-branco btn-login"
                        id="btn-login"
                    >
                        <Link to={{ pathname: "/login", hash: "" }}>LOGIN</Link>
                    </button>
                </div>
                <button className="btn-menu nav-close-btn" onClick={showNavbar}>
                    <Icon icon={faTimes} />
                </button>
            </nav>
            <button className="btn-menu" onClick={showNavbar}>
                <Icon icon={faBars} />
            </button>
        </div>
    )
}

export default Navbar