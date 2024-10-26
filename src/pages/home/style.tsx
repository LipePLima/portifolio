import { Button } from "primereact/button";
import styled from "styled-components";
import slideTechs from "../../assets/slideTechs.png";
import { Card } from "primereact/card";
import { Paginator } from "primereact/paginator";

export const ContainerTitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.5rem;
  height: 700px;
  padding: 0 5rem;

  @media (max-width: 1080px) {
    padding: 2rem 3rem 0 3rem;
    flex-direction: column;
    gap: 5rem;
    height: auto;
  }

  @media (max-width: 500px) {
    padding: 2rem 1rem 0 1rem;
    gap: 2rem;
  }
`;

export const ContainerTitle = styled.article`
  color: #fff;
  text-align: center;
`;

export const MyName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 0;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const Title = styled.h1`
  font-size: 72px;
  font-weight: 800;
  margin: 0;

  @media (max-width: 1460px) {
    font-size: 42px;
  }

  @media (max-width: 500px) {
    font-size: 28px;
  }
`;

export const SecondaryTitle = styled.h2`
  color: #fff;
  font-size: 34px;
  font-weight: 800;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const ImageIconsTec = styled.img`
  width: 550px;
  height: 550px;

  @media (max-width: 1460px) {
    width: 450px;
    height: 450px;
  }

  @media (max-width: 500px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 420px) {
    width: 200px;
    height: 200px;
  }
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

  @media (max-width: 500px) {
    margin-top: 1.5rem;
    font-size: 12px;
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

  @media (max-width: 500px) {
    margin: 5rem 0;
    background-size: cover;
    height: 100px;
  }

  @media (max-width: 420px) {
    margin: 3rem 0;
    height: 80px;
  }
`;

export const ContainerMyProjects = styled.section`
  margin: 5rem 0;
  padding: 0 5rem;

  @media (max-width: 500px) {
    padding: 0;
    margin: 3rem 1rem;
  }
`;

export const ContentMyProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const CardProject = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 360px;
  background-color: #2d2d2d;
  color: #f3f4f6;

  .p-card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .p-card-title {
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
  }

  .p-card-subtitle {
    color: #f3f4f6;
  }

  .p-card-content {
    padding: 0;
    flex-grow: 1;
  }

  .p-card-footer {
    width: 100%;
    align-self: flex-end;
    margin-top: auto;
  }

  @media (max-width: 500px) {
    .p-card-title {
      font-size: 16px;
    }
  }
`;

export const DateProject = styled.p`
  min-height: auto;
  margin: 0;
  font-size: 14px;
`;

export const CardDescription = styled.p`
  line-height: 22px;
  margin: 1rem 0;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const PaginatorProjects = styled(Paginator)`
  margin-top: 1rem;

  background-color: #2d2d2d;

  .p-paginator-page.p-highlight,
  .p-paginator-page.p-highlight:hover {
    background-color: #131313;
  }

  .p-paginator-icon,
  .p-dropdown-label,
  .p-dropdown-trigger-icon,
  .p-paginator-page,
  .p-paginator-prev,
  .p-paginator-next {
    color: #fff;
  }

  .p-paginator-last:hover,
  .p-paginator-next:hover,
  .p-paginator-prev:hover,
  .p-paginator-first:hover,
  .p-paginator-page:hover,
  .p-focus {
    background-color: #444444;
  }

  .p-dropdown {
    background-color: transparent;
  }
`;
