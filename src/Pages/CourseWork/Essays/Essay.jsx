import styled from 'styled-components';

const Essay = () => {
    return (
        <EssayStyled className='Essay'>
            <h3>Question/Request</h3>
            <div className="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit modi numquam, cum maiores sunt eveniet soluta, dicta perferendis earum nobis nisi harum nesciunt quia officia. Perferendis deleniti culpa iusto!
            </div>
        </EssayStyled>
    );
}

export default Essay;

const EssayStyled = styled.div`

`;