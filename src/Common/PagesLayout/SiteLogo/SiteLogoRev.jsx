import React from 'react';
import styled from 'styled-components';

/* Images ---------------------------*/
import logoUrl from './rev logo.png';

const SiteLogoRev = () => {
    return (
        <SiteLogoRevStyled className='SiteLogoRev'>
            <img src={ logoUrl } alt='Tame Impala Logo' />
        </SiteLogoRevStyled>
    );
}

export default SiteLogoRev;

const SiteLogoRevStyled = styled.div`
    width: 35%;
    height: 35%;


    img {
        width: 100%;
        height: auto;
        position: center;
    }
`;