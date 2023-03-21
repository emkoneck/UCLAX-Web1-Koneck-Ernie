import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Inset from '../Inset.jsx';
import SiteLogo from '../SiteLogo/SiteLogo.jsx';

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="row">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <nav className="mainMenu">
                            <NavLink to={'/'} end>
                                Home
                            </NavLink>
                            <NavLink to={'/albums'}>Albums</NavLink>
                            <NavLink to={'/tour'}>Tour</NavLink>
                            <NavLink to={'/merch'}>Merch</NavLink>
                            <NavLink to={'/video'}>Video</NavLink>
                        </nav>
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.header`
    color: white;

    /* .row {

        display: grid;
        grid-template-columns: 25% 75%;
        .logo { }
        .menus {
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
        }
    } */

    .logo {
        .SiteLogo {
            width: 50%;
            margin: auto;
            padding: 20px 0px;
            position: center;
        }
    }

    nav.mainMenu {
        text-align: center;

        a {
            width: 80px;
            display: inline-block;
            line-height: 30px;
            margin: 0px 0px 20px 5px;
            border-bottom: solid 3px #d6de23;
            font-size: 12px;
            opacity: 0.8;
            color: black;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            background-color: #9e1f63;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: white;
                border-bottom-color: white;
            }
        }
    }
`;
