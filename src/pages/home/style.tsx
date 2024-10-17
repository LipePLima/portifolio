import { Button } from "primereact/button";
import styled from "styled-components";
import slideTechs from "../../assets/slideTechs.png";

export const ContainerTitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.5rem;
  height: 700px;
  padding: 0 5rem;
`;

export const ContainerTitle = styled.article`
  color: #fff;
  text-align: center;
`;

export const MyName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
`;

export const SecondaryTitle = styled.h2`
  color: #fff;
  font-size: 34px;
  font-weight: 800;
`;

export const ImageIconsTec = styled.img`
  width: 550px;
  height: 550px;
`;

export const AboutMeButton = styled(Button)`
  margin-top: 1rem;
  border-color: #3b82f6;
  color: #3b82f6;

  &:hover {
    border-color: #60a5fa;
    color: #60a5fa;
    transform: scale(1.01);
    transition: all 0.03s;
  }
`;

export const ContainerTechnologies = styled.section`
  width: 100%;
  height: 150px;
  overflow: hidden;
  background-image: url(${slideTechs});
  background-repeat: repeat-x;
  background-position: 0 0;
  background-size: auto;
  animation: slide 30s linear infinite;

  @keyframes slide {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;

export const ContainerMyProjects = styled.section`
  margin: 5rem 0;
  padding: 0 5rem;
`;

export const ContentMyProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

