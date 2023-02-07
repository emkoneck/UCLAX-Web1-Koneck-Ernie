import styled from 'styled-components';

/* Component ---------------------------*/
import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h2>Essays</h2>
            <Essay />
            <Essay />
            <Essay />
            <Essay />
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.div`

`;