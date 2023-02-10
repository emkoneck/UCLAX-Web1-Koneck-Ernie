import styled from 'styled-components';

/* Media Query ---------------------------*/
import { useMediaQuery } from '@/Common/useMediaQuery';

/* Components ---------------------------*/
import MediumLarge from './MediumLarge';
import Small from './Small';

const Header = () => {
    return (
        <HeaderStyled className="Header">
            { isMediumAndUp ?  <MediumLarge /> : <Small /> }

        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header``;
