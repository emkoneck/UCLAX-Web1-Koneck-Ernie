import styled from 'styled-components';

const Feature = ({ feature }) => {
    return (
        <FeatureStyled className='Feature'>
            { feature }
        </FeatureStyled>
    );
}

export default Feature;

const FeatureStyled = styled.li`


`;