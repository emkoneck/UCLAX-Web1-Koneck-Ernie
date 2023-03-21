import React from 'react';
import styled from 'styled-components';

/* Images ---------------------------*/
import logoUrl from './TI_black_logo.png';

const SiteLogo = () => {
    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src={ logoUrl } alt='Tame Impala Logo' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    width: 100%;
    height: 100%;


    img {
        width: 300%;
        height: auto;
        position: center;
    }
`;