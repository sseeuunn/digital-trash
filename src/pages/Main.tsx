import { useRef, useState } from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0px 50px;

  .title {
    font-family: 'Gotham';
    font-size: 64px;
    line-height: 150px;
    letter-spacing: -0.03em;
    text-align: center;

    color: #000000;
  }

  .image {
    display: flex;
    justify-content: center;

    width: 100%;
    border: 1px solid #000000;
    padding: 100px 0px;

    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.03em;
    color: #000000;

    &__input {
        display: none;
    }
  }
`;

const Main: React.FC = () => {
  const [fileImages, setFileImages] = useState<string[]>([]);
  const fileImagesInput = useRef<HTMLInputElement | null>(null);

  const onClickImages = () => {
    fileImagesInput.current?.click();
  };

  return (
    <MainContainer>
      <h1 className="title">Do you have useless photos?</h1>
      <div
        className="image"
        onClick={() => {
          onClickImages();
        }}
      >
        이미지
      </div>
      <input
        ref={fileImagesInput}
        className="image__input"
        name="imageUpload"
        type="file"
        accept="image/*"
        multiple
      />
    </MainContainer>
  );
};

export default Main;
