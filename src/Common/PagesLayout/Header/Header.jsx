import styled from 'styled-components';

/* Media Query ---------------------------*/
import { useMediaQuery } from '@/Common/useMediaQuery';

/* Images ---------------------------*/
import bgSrc from '../bg.png';

/* Components ---------------------------*/
import MediumLarge from './MediumLarge';
import Small from './Small';

const Header = () => {

    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled className="Header">
            { isMediumAndUp ?  <MediumLarge /> : <Small /> }
        </HeaderStyled>
    );
};
export default Header;

const HeaderStyled = styled.header`

    background-image: url(${bgSrc});
    background-position: center bottom;
    background-size: 75% auto;
    background-repeat: no-repeat;
    background-color: white;
`;

