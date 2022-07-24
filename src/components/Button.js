import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline']
const LINKS = ['/', '/about', '/projects', '/contact']
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize, linkTo }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    const checkLinkTo = LINKS.includes(linkTo) ? linkTo : '/';

    return (
        <Link to={`${checkLinkTo}`} className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
                {children}
            </button>
        </Link>
    );
};