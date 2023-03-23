import styled from 'styled-components';

/* Components ---------------------------*/
import FeatureList from './Features/FeatureList';

const MerchInfo = ({member}) => {
    return (
        <MerchInfoStyled className='MerchInfo'>
            <div className="price">
                <h4><b>Price: </b>{ member.price }</h4></div>
            <FeatureList member= { member }/>
        </MerchInfoStyled>
    );
}

export default MerchInfo;

const MerchInfoStyled = styled.div`
    padding: 20px;
    font-size: 14px;

`;