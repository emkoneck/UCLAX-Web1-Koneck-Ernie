import styled from 'styled-components';

/* Data ---------------------------*/
import { albumsData } from './albumsData';

/* Components ---------------------------*/
import AlbumsItem from './AlbumsItem/AlbumsItem';

const AlbumsList = () => {
    return (
        <AlbumsListStyled className='AlbumsList'>
            {
                albumsData.map((member) => {
                    return <AlbumsItem key={ member.id } member={ member } />
                })
            }
        </AlbumsListStyled>
    );
}

export default AlbumsList;

const AlbumsListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(250px, 1fr));
    gap: 1rem;
`;