import React, { useState } from 'react';
import burger from '@static/images/navbar/burger.svg';
import cross from '@static/images/navbar/cross.svg';
import { NavLinkWithDelay } from '../DelayedLink';

import { RouteConfig } from '@/app/routes';


import './index.scss';

class NavigationLink {
    constructor(
        public label: string,
        public url: string
    ) { }
}

export const Navbar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const navLinks = [
        new NavigationLink('About', RouteConfig.About.path),
        new NavigationLink('Projects', RouteConfig.Projects.path),
        new NavigationLink('Contact me', RouteConfig.Contact.path),
    ];

    const changeNavbarVisibility = () => {
        setIsNavbarVisible(prev => !prev);
    };

    return (
        <nav className="nav">
            <NavLinkWithDelay
                className="nav__link nav__logo"
                to={RouteConfig.Home.path}
                datatype="@Vasily_Savchenko"
                setIsNavbarVisible={setIsNavbarVisible}
            >
                @Vasily_Savchenko
            </NavLinkWithDelay>
            <ul className={`nav__list${isNavbarVisible ? '-active' : ''}`}>
                {navLinks.map((link: NavigationLink) =>
                    <li className="nav__item" key={link.label} >
                        <NavLinkWithDelay
                            to={link.url}
                            className="nav__link"
                            datatype={link.label}
                            setIsNavbarVisible={setIsNavbarVisible}
                        >
                            {link.label}
                        </NavLinkWithDelay>
                    </li>
                )}
            </ul>
            <img
                src={isNavbarVisible ? cross : burger}
                alt="navbar control"
                className="nav__control"
                onClick={changeNavbarVisibility}
            />
        </nav>
    );
};
