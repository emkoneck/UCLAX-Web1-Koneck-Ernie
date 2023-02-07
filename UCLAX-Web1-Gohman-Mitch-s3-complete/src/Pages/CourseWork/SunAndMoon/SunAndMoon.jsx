import { useState } from 'react';
import styled from 'styled-components';

import sunSrc from './images/sun.png';
import moonSrc from './images/moon.png';

const SunAndMoon = () => {
    // JavaScript
    const [imgSrc, imgSrcUpdate] = useState(sunSrc);

    const changeToMoon = () => {
        // console.log('MOON');
        imgSrcUpdate(moonSrc);
    };

    const changeToSun = () => {
        // console.log('SUN');
        imgSrcUpdate(sunSrc);
    };

    // HTML: Mark Up
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <div className="sunMoonImage">
                <img
                    src={imgSrc}
                    onMouseEnter={changeToMoon}
                    onMouseLeave={changeToSun}
                />
            </div>
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

// CSS: Styles
const SunAndMoonStyled = styled.div`
    .sunMoonImage {
        text-align: center;

        img {
            border: solid 20px teal;
            margin: 30px;
            padding: 20px;
            background-color: #005252;
        }
    }
`;
