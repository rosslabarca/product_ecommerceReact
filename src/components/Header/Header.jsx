import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <a href="https://www.instagram.com/es_mi_lucia/" target='blanck'><img src="/images/logo.png" alt="" width="70px" height="70px"/></a>
            <nav>
                <a href="">Inicio</a>
                <a href="">Productos</a>
                <a href="">Contactos</a>
            </nav>
        </header>
    );
};

export { Header };