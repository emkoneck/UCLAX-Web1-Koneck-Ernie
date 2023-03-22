import styled from 'styled-components';



const TourInfo = ({member}) => {
    return (
        <TourInfoStyled className='TourInfo'>
            <div className="date">
            <b>Date: </b>{ member.date }</div>
            <div className="place">
            <b>Location: </b>{ member.place }</div>
            <div className="date">
            <b>Venue: </b>{ member.venue }</div>
        </TourInfoStyled>
    );
}

export default TourInfo;

const TourInfoStyled = styled.div`

`;