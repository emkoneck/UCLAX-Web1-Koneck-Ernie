import styled from 'styled-components';

/* Components ---------------------------*/
import FeatureList from './Features/FeatureList';

const MerchInfo = () => {
    return (
        <MerchInfoStyled className='MerchInfo'>
            <div className="year">
                <b>Year Released: </b>{ member.yearReleased }</div>
            <FeatureList member= { member }/>
        </MerchInfoStyled>
    );
}

export default MerchInfo;

const MerchInfoStyled = styled.div`

`;