import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useLocation, useNavigate } from 'react-router-dom';

import {
    NavElement,
    NavContainer,
    NavLogo,
    LogoImg,
    NavBtnMobile,
    NavList,
    NavItem,
    NavLink
} from './navbarStyles';

import { data } from '../../data/navbar';

const Navbar = () => {
    const [show, setShow] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = () => {
        setShow(!show);
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth'
        });
    }

    const handleMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }

        navigate(to);
        setShow();
    }

    return (
        <IconContext.Provider value={{ color: "#fff" }}>
            <NavElement>
                <NavContainer>
                    <NavLogo to='/'>
                        <LogoImg src="./assets/logo.png" alt="logo"/>
                        Delta
                    </NavLogo>
                    <NavBtnMobile onClick={handleClick}>
                        {show ? <FaTimes/> : <CgMenuRight/>}
                    </NavBtnMobile>
                    <NavList>
                        {data.map((el, index) => (
                            <NavItem key={index}>
                                <NavLink onClick={() => handleMobileMenu(el.to, el.id)}>
                                    {el.text}
                                </NavLink>
                            </NavItem>
                        ))}
                    </NavList>
                </NavContainer>
            </NavElement>
        </IconContext.Provider>
    );
}

export default Navbar