import styled from 'styled-components';

/* Components ---------------------------*/
import AlbumInfo from './AlbumInfo';

const AlbumsItem = ({member}) => {
    return (
        <AlbumsItemStyled className='AlbumsList'>
            <img src = { member.image } alt= { member.name } />
            <h4>{ member.name }</h4>
            <AlbumInfo member= { member } />
        </AlbumsItemStyled>
    );
}

export default AlbumsItem;

const AlbumsItemStyled = styled.div`

    background-color: #f5d5e9ec;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        color: white;
        background-color: #e56515;
        margin: 0px;
        padding: 5px 10px;
    }
`;