import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const publicUrl = process.env.PUBLIC_URL;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #000;
`;

const VideoBox = styled.video`
  max-height: 100%;
  max-width: 100%;
`;

const Video: React.FC = () => {
  const history = useHistory();

  return (
    <VideoContainer>
      <VideoBox src={`${publicUrl}/img/video.mp4`} autoPlay muted onEnded={() => history.push('/')}>
        Video
      </VideoBox>
    </VideoContainer>
  );
};

export default Video;
