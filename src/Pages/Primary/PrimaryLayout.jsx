import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const PrimaryLayout = () => {
    return (
        <PrimaryLayoutStyled className="PrimaryLayout">

                <Outlet />

        </PrimaryLayoutStyled>
    );
};

export default PrimaryLayout;

const PrimaryLayoutStyled = styled.main``;

