import styled from 'styled-components';
import YouTube from 'react-youtube';

/* Components ---------------------------*/
import Inset from '@/Common/PagesLayout/Inset';

/* HTML Links ---------------------------*/
<a href="https://www.youtube.com/watch?v=KvTz0bz-dxQ/" target="_blank">The Edge Of Reality from the "Elvis" soundtrack</a>

const Video = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
        },
    };

    return (
        <VideoStyled className='Video'>
                <Inset >
                    <h1>VIDEO</h1>
                    <div>
                        <h4>The Edge Of Reality from the "Elvis" soundtrack</h4>
                        <YouTube videoId="KvTz0bz-dxQ" opts={opts} />
                    </div>
                    <div>
                        <h4>Turn Up The Sunshine with Diana Ross <br/>from " Minions:The Life of Gru"</h4>
                        <YouTube videoId="v323ol9siTU" opts={opts} />

                    </div>
                    <div>
                        <h4>Borderline from `The Slow Rush`</h4>
                        <YouTube videoId="2g5xkLqIElU" opts={opts} />
                    </div>
                    <div>
                        <h4>Lost In Yeterday from `The Slow Rush`</h4>
                        <YouTube videoId="utCjuKDXQsE" opts={opts} />
                    </div>
                </Inset>
        </VideoStyled>
    );
}

export default Video;

const VideoStyled = styled.div`
    font-weight: bold;
    position: center;

`;