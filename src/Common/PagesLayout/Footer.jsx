import styled from 'styled-components';

/* Components ---------------------------*/
import Inset from './Inset.jsx';
import SiteLogo from './SiteLogo/SiteLogoRev.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <FooterStyled className='Footer'>
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <h2>
                    f r o m___o n e___c o m e___m a n y
                    <p></p>Perth, Australia
                    <p></p>2023. All rights reserved.
                </h2>
                &nbsp;
                     <div className="social">
                    <a href="https://www.instagram.com/tameimpala" target='_blank'><i class="fas fa-camera fa-3x"><FontAwesomeIcon icon={ faInstagram }/></i></a>
                   &nbsp; <a href="https://www.twitter.com/tameimpala/" target='_blank'><i class="fas fa-camera fa-3x"><FontAwesomeIcon icon={ faTwitter } /></i></a>
                </div>


            </Inset>
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.footer`
    color: white;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }

    h2 {
        color: white;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: white;
    }

    .social {
        display: block;
        justify-content: space-around;
    }


    `;