import styled from 'styled-components';

/* Data ---------------------------*/
import { merchData } from './merchData';

/* Components ---------------------------*/
import MerchItems from './MerchItems/MerchItems';

const MerchList = () => {
    return (
        <MerchListStyled className='MerchList'>
            {
                merchData.map((member) => {
                    return <MerchItems key={ member.id } member={ member } />
                })
            }
        </MerchListStyled>
    );
}

export default MerchList;

const MerchListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;