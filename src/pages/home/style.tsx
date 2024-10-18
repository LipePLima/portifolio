import { Button } from "primereact/button";
import styled from "styled-components";
import slideTechs from "../../assets/slideTechs.png";
import { Card } from "primereact/card";

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const CardProject = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 360px;
  padding: 1rem;
  background-color: #2d2d2d;
  color: #f3f4f6;

  .p-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .p-card-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  .p-card-subtitle {
    color: #f3f4f6;
    margin-top: 0.5rem;
  }

  .p-card-content {
    flex-grow: 1;
  }

  .p-card-footer {
    width: 100%;
    align-self: flex-end;
    margin-top: auto;
  }
`;

export const DateProject = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

export const CardDescription = styled.p`
  line-height: 22px;
  margin: 1rem 0;
`;
