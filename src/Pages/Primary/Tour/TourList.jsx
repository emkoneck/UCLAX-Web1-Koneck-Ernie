import styled from 'styled-components';

/* Data ---------------------------*/
import { tourData } from './tourData.js';

/* Components ---------------------------*/
import TourItem from './TourItem';

const TourList = () => {
    return (
        <TourListStyled className='TourList'>
            {
                tourData.map((member) => {
                    return <TourItem key={ member.id } member={ member } />
                })
            }
        </TourListStyled>
    );
}

export default TourList;

const TourListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;