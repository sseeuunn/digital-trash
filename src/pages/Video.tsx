import styled from 'styled-components';

const publicUrl = process.env.PUBLIC_URL;

const VideoBox = styled.video`
  height: 100%;
`;

const Video: React.FC = () => {
  return (
    <>
      <VideoBox src={`${publicUrl}/img/video.mp4`} autoPlay>
        Video
      </VideoBox>
    </>
  );
};

export default Video;
