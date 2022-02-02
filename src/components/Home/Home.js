import React from 'react';
import Img1 from '../../images/me.jpg';
import Video from '../../videos/video.mp4';
import {
  HomeContainer,
  HomeBg,
  HomePic,
  VideoBg,
  HomeContent,
  HomeH1,
  HomeP,
} from './HomeElements.js'



const Home = () => {
  return (
    <HomeContainer id='home'>
      <HomeBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HomeBg>
      <HomeContent>
        <HomeH1>Hi, I'm Fida</HomeH1>
        <HomeP>
        I'm starting my journey in fullstack developmen, looking forward to join a company that shares my values, and enables me to fulfill my potential.
        </HomeP>
        <HomePic><img src={Img1} height="300px" alt="me" style={{borderRadius:"50%",  boxShadow: "0.5rem 0.5rem 0.5rem #544a48"}}/></HomePic>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home;










