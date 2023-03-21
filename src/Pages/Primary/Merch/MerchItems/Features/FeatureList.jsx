import styled from 'styled-components';

/* Components ---------------------------*/
import Feature from './Feature';


const FeatureList = ({ member }) => {
    return (
        <FeatureListStyled className='FeatureList'>

            {
                member.features.map((feature, idx) => {
                    return <Feature key={ idx } feature={ feature }/>
                })
            }
        </FeatureListStyled>
    );
}

export default FeatureList;

const FeatureListStyled = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
    line-height: 120%

`;