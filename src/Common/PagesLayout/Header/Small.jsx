import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components---------------------------*/
import SiteLogo from '../SiteLogo/SiteLogo.jsx';
import Hamburger from './Hamburger.jsx';

const Small = () => {

    const [isMenuShowing, isMenuShowingUpdate] = useState(false);

    const toggleMenu = () => {
        isMenuShowingUpdate (!isMenuShowing);
    }

    const HideMenu  = () => {
        isMenuShowingUpdate (false);
    }

    useEffect ( () => {
        if (isMenuShowing) {
            //add class modal-open
            document.body.classList.add ('modal-open');
        } else {
            //remove class modal-open
            document.body.classList.remove ('modal-open');
        }

        return () => {
            document.body.classList.remove ('modal-open');
        }
        //on dismount clean up

    }, [isMenuShowing]);


    return (
        <SmallStyled className='Small'>
            <SiteLogo/>

            <Hamburger toggleMenu={toggleMenu}  />

         {isMenuShowing && (
             <nav className="mainMenu">
                 <NavLink onClick= {HideMenu} to={'/'} end>
                     Home
                 </NavLink>
                 <NavLink to={'/albums'}>Albums</NavLink>
                            <NavLink to={'/tour'}>Tour</NavLink>
                            <NavLink to={'/merch'}>Merch</NavLink>
                            <NavLink to={'/course-work'}>Video</NavLink>
            </nav>
         )}
        </SmallStyled>
    );
}

export default Small;

const SmallStyled = styled.div`
    color: white;

    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        padding: 20px;
        max-width: 330px;

    }

    .mainMenu {
        position: fixed;

        top: 300px;
        right: 0px;
        left: 0px;
        bottom: 0px;

        a {
            display: block;

            padding: 10px;
            border-bottom: 1px solid #999999;
            color: white;
            text-decoration: none;

            background-color: #034444;

            &:hover,
            &:active,
            &focus {
                background-color: #06686a;
            }

        }

    }
`;
