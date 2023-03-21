import styled from 'styled-components';

/* Components ---------------------------*/
import MerchInfo from './MerchInfo';

const MerchItems = ({ member}) => {
    return (
        <MerchItemsStyled className='MerchItems'>
            <img src = { member.image } alt= { member.name } />
            <h4>{ member.name }</h4>
            <MerchInfo member= { member } />
        </MerchItemsStyled>
    );
}

export default MerchItems;

const MerchItemsStyled = styled.div`

background-color: #f5d5e9ec;

img {
    width: 100%;
    display: block;
}

h3 {
    color: white;
    background-color: #e56515;
    margin: 0px;
    padding: 5px 10px;
}
`;