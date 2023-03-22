import styled from 'styled-components';

/* Components ---------------------------*/
import FeatureList from './Features/FeatureList';

const MerchInfo = () => {
    return (
        <MerchInfoStyled className='MerchInfo'>
            <div className="price">
                <b>Price: </b>{ member.price }</div>
            <FeatureList member= { member }/>
        </MerchInfoStyled>
    );
}

export default MerchInfo;

const MerchInfoStyled = styled.div`

`;