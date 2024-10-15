import { Button } from "primereact/button";
import styled from "styled-components";



export const Main = styled.main`
  padding: 0 5rem;
`;



export const ContainerTitleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.5rem;
  height: 800px;
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
    transition: all .03s;
  }
`;
