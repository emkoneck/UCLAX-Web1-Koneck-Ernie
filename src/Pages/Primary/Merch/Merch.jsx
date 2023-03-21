import styled from 'styled-components';

/* Components ---------------------------*/
import  MerchList from './MerchList';
import Inset from '@/Common/PagesLayout/Inset';

const Merch = () => {
    return (
        <MerchStyled className='Merch'>
                <h1>MERCH</h1>
        </MerchStyled>
    );
}

export default Merch;

const MerchStyled = styled.div`
    color: white;

`;