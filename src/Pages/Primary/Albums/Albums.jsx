import styled from 'styled-components';

/* Components ---------------------------*/
import AlbumsList from './AlbumsList';
import Inset from '@/Common/PagesLayout/Inset';

const Albums = () => {
    return (
        <AlbumsStyled className='Albums'>
            <Inset >
                <h1>ALBUMS</h1>
                <AlbumsList />
            </Inset>
        </AlbumsStyled>
    );
}

export default Albums;

const AlbumsStyled = styled.div`
    color: #f4129d;

`;