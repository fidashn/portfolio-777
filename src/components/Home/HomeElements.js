import styled from 'styled-components';


export const HomeContainer = styled.div`
  background:#F0D9FF;
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  width:100%;
  position: relative;
  z-index: 3;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  @media only screen and (min-width: 360px) and (max-width: 768px){
   display:flex;
   flex-direction:column;
  }
`;
export const HomeBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HomePic = styled.div`
transform:translate(200px,222px);

@media only screen and (min-width: 360px) and (max-width: 768px){
  // transform:translate(0px,0px);
  // height:200px;
}
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  --o-object-fit: cover;
  object-fit: cover;
`;

export const HomeContent = styled.div`
  display:flex;
  flex-direction:row;
  z-index: 10;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  align-items:flex-end;
  transform:translate(0,100px);

  @media only screen and (min-width: 360px) and (max-width: 768px){
    display:flex;
    flex-direction:column;
  }
`;

export const HomeH1 = styled.h1`
  color: var(--secondary-color);
  font-size: 48px;
  display:flex;
  text-align:middle;
  justify-content:center;
  width:1500px;
  height: 50px;
  align-self:center;
  transform:translate(480px,160px);

  @media screen and (max-width: 768px) {
    font-size: 40px;
    width:50vmin;
    transform:translate(-20px,300px);
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
    width:50vmin;
    transform:translate(-20px,300px);
  }
`;

export const HomeP = styled.p`
  color: var(--secondary-color);
  font-size: 24px;
  font-weight:700;
  text-align: left;
  width:2500px;
  transform:translate(180px,160px);
  z-index:800;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    width:50vmin;
    transform:translate(-20px,300px);
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    width:50vmin;
    transform:translate(-20px,300px);
  }
`;