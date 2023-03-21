import styled from 'styled-components';

import SlideList from './SlideList';

const Slideshow = () => {
    return (
        <SlideshowStyled className='Slideshow'>
            <SlideList />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
.carousel .slide .legend {
    background-color: magenta;
    color: #f9ec31;
    font-weight: bolder;
    font-size: 14px;
}
`;