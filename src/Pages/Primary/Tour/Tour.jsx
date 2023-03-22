import styled from 'styled-components';

/* Components ---------------------------*/
import TourList from './TourList';
import Inset from '@/Common/PagesLayout/Inset';

const Tour = () => {
    return (
        <TourStyled className='Tour'>
            <Inset >
                <h1>TOUR</h1>
                <TourList />
            </Inset>
        </TourStyled>
    );
}

export default Tour;

const TourStyled = styled.div`
    color: #f4129d;

`;