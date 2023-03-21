import styled from 'styled-components';

const Tab = ( { tab, curTab, curTabUpdate }) => {

    const onClick = () => {
        curTabUpdate (tab);
    }
        const TheClassName = (curTab.id === tab.id) ? 'Tab selected':'Tab'

    return (
        <TabStyled className= { TheClassName } onClick={ onClick }>
            { tab.title }
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    font-family: Futura, sans-serif;
    background-color: #f16522;
    font-weight: bold;
    color: #34123d;
    text-align: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
    line-height: 40px;
    margin-right: 5px;

    display: inline-block;

    width: clamp(95px, 15%, 290px);

    &.selected {
        font-family: Futura, sans-serif;
        font-size: 18px;
        font-weight: bold;
        background-color: #be1a8c;
        color: white;
    }
`;