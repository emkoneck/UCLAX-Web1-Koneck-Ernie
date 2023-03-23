import styled from 'styled-components';

/* Components ---------------------------*/
import MerchInfo from './MerchInfo';

const MerchItems = ({ member}) => {
    return (
        <MerchItemsStyled className='MerchItems'>
            <img src = { member.image } alt= { member.name } />
            <h3>{ member.name }</h3>
            <MerchInfo member= { member } />
        </MerchItemsStyled>
    );
}

export default MerchItems;

const MerchItemsStyled = styled.div`

background-color: #f1f479;

img {
    width: 100%;
    display: block;
}

h3 {
    color: #931f63;
    background-color: #e56515;
    margin: 0px;
    padding: 5px 10px;
}
`;