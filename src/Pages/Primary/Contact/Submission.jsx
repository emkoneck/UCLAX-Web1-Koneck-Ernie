import styled from 'styled-components';

const Submission = ({submission}) => {
    return (
        <SubmissionStyled className='Submission'>
            { submission.name } :: { submission.email } :: { submission.message }
        </SubmissionStyled>
    );
}

export default Submission;

const SubmissionStyled = styled.div`

`;