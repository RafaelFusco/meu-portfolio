import { styled } from "@mui/material";
import theme from "../../../../theme";
import Slider from "../../../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import SliderItem from "../../../../components/SliderItem/SliderItem";
import { useState, useEffect } from 'react';

import img1 from "../../../../assets/images/project-1.png"
import img2 from "../../../../assets/images/project-2.png"
import img3 from "../../../../assets/images/project-3.png"
import img4 from "../../../../assets/images/project-4.png"
import img5 from "../../../../assets/images/project-5.png"

import 'swiper/css'

const Projects = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  const updateSlidesPerView = () => {
    if (window.innerWidth >= 768) {
      setSlidesPerView(3);
    } else if (window.innerWidth >= 576) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(1);
    }
  };

  const settings = {
    spaceBetween: 50,
    slidesPerView: slidesPerView,
    navigation: true,
    pagination: {
      clickable: true,
    },
  }
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  const slides = [
    {
      img: img1,
      title: "Caça Palavras",
      deployLink: "https://rafaelfusco.github.io/Caca-Palavras/",
      codeLink: "https://github.com/RafaelFusco/Caca-Palavras",
      t1: "HTML, Javascript e Sass",
    },
    {
      img: img2,
      title: "Jogo de luta",
      deployLink: "https://rafaelfusco.github.io/Jogo-de-luta/",
      codeLink: "https://github.com/RafaelFusco/Jogo-de-luta",
      t1: "HTML, Javascript e Sass",
    },
    {
      img: img3,
      title: "Quadro de desenhos",
      deployLink: "https://rafaelfusco.github.io/Quadro-de-Desenhos/",
      codeLink: "https://github.com/RafaelFusco/Quadro-de-Desenhos",
      t1: "HTML, Javascript e CSS",
    },
    {
      img: img4,
      title: "Jogo da velha",
      deployLink: "https://rafaelfusco.github.io/Jogo-da-Velha/",
      codeLink: "https://github.com/RafaelFusco/Jogo-da-Velha",
      t1: "HTML, Javascript e CSS",
    },
    {
      img: img5,
      title: "Jogo da memória",
      deployLink: "https://astonishing-daifuku-a6c609.netlify.app/",
      codeLink: "https://github.com/RafaelFusco/react-jogo-da-memoria",
      t1: "HTML, Typescript, JavaScript e CSS",
    },
  ]

  const StyledProjects = styled("div")(() => ({
    backgroundColor: "transparent",
    height: "calc(100vh - 114px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  }));

  const StyledTitle = styled("div")(() => ({
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "400",
    margin: "10px 0",
    
    [theme.breakpoints.down('sm')]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.between('md', 'lg')]: {
      fontSize: "2.7rem",
    }
  }));

  return (
    <>
      <StyledProjects id="projects">
        <StyledTitle>
          Projetos
        </StyledTitle>
        <Slider settings={settings}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <SliderItem
                img={slide.img}
                title={slide.title}
                deploy={slide.deployLink}
                code={slide.codeLink}
                t1={slide.t1}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </StyledProjects>
    </>
  )
}

export default Projects