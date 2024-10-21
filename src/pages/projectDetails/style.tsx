import styled from "styled-components";
import notbookFrame from "../../assets/notbookFrame.png";
import iphoneFrame from "../../assets/iphoneFrame.png";

export const ProjectDetailsSection = styled.section`
  padding: 2rem 5rem;
`;

export const FramesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  height: 650px;
  margin-bottom: 2.5rem;
`;

export const NoteBookFrame = styled.div`
  display: flex;
  justify-content: center;
  width: 53%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${notbookFrame});
`;

export const NoteBookImageContainer = styled.div`
  width: 69%;
  height: 59.5%;
  overflow: auto;
  position: relative;
  top: 35px;
  right: 3px;
`;

export const ImageFrame = styled.img`
  width: 100%;
`;

export const IphoneFrame = styled.div`
  cursor: grab;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background-image: url(${iphoneFrame});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const IphoneImageContainer = styled.div`
  width: 83%;
  height: 95%;
  overflow: auto;
  top: 0px;
  position: relative;
  border-radius: 27px;
`;

export const ReadMeContainer = styled.div`
  line-height: 1.6;
  padding: 1rem;
  border-radius: 8px;
  background-color: #2d2d2d;

  /* Estilos para títulos */
  h1 {
    font-size: 26px;
    font-weight: bolder;
    margin: 1.5rem 0 1rem 0;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin: 1.5rem 0 1rem 0;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 1.5rem 0 1rem 0;
  }

  /* Estilos para parágrafos */
  p {
    margin: 0.8rem 0;
  }

  /* Estilos para links */
  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  /* Estilos para listas */
  ul {
    padding-left: 1.5rem;
  }

  ul li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }

  /* Estilos para tabelas */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 0.8rem;
    text-align: left;
  }

  /* Estilos para imagens */
  img {
    max-width: 100%;
    max-height: 700px;
  }

  /* Estilos para blocos de código */
  pre,
  code {
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-radius: 4px;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.95rem;
  }

  /* Estilos para badges (imagens com estilos como as do Shields.io) */
  img[alt^="!"] {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;
