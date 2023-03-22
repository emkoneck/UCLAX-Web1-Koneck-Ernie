import styled from 'styled-components';

/* Components ---------------------------*/
import TourInfo from './TourInfo';

const TourItem = ({member}) => {
    return (
        <TourItemStyled className='TourList'>
            <h4>{ member.place }</h4>
            <TourInfo member= { member } />
        </TourItemStyled>
    );
}

export default TourItem;

const TourItemStyled = styled.div`
`;
