import styled from 'styled-components';

/* Components ---------------------------*/
import AccoladeList from './Accolades/AccoladeList';


const AlbumsInfo = ({member}) => {
    return (
        <AlbumsInfoStyled className='AlbumsInfo'>
            <div className="year">
                <b>Year Released: </b>{ member.yearReleased }</div>
            <AccoladeList member= { member }/>
        </AlbumsInfoStyled>
    );
}

export default AlbumsInfo;

const AlbumsInfoStyled = styled.div`
    padding: 20px;
    font-size: 14px;
`;