import React from 'react';
import logoImg from '../assets/logo.jpg';

const Logo = ({ w, h }) => { 
    return (
        <img src={logoImg} width={w} height={h} alt="Logo"/>
    );
}

export default Logo;
