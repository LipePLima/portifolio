import styled from "styled-components";

export const ProjectDetailsSection = styled.section`
  min-height: 95vh;
  padding: 2rem 1rem;

  @media (max-width: 500px) {
    padding: 2rem .5rem;
  }
`;

export const FramesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 5%;
  }

  @media (max-width: 768px) {
    padding: 0 5rem 2rem 5rem;
    flex-direction: column;
    gap: 2rem;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 2rem;
    padding-top: 0;
  }
`;

export const DeskContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DeskImageContent = styled.div`
  position: absolute;
  overflow: auto;
  top: 19px;
  width: 69%;
  height: 61%;

  @media (max-width: 1080px) {
    top: 12px;
  }

  @media (max-width: 380px) {
    top: 6px;
  }
`;

export const ImageFrame = styled.img`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const PhoneContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 15%;
  height: 100%;

  @media (max-width: 768px) {
    width: 38%;
  }
`;

export const PhoneImageContent = styled.div`
  position: absolute;
  overflow: auto;
  top: 13px;
  width: 85%;
  height: 95%;
  border-radius: 19px;

  @media (max-width: 1080px) {
    width: 86%;
    height: 95%;
    top: 8px;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    top: 6px;
    border-radius: 9px;
  }

  @media (max-width: 380px) {
    top: 5px;
    border-radius: 8px;
  }
`;

export const ReadMeContainer = styled.div`
  margin: 0 4rem;
  line-height: 1.6;
  padding: 1rem;
  border-radius: 8px;
  background-color: #2d2d2d;

  @media (max-width: 768px) {
    margin: 0 2rem;
  }

  @media (max-width: 500px) {
    margin: 0;
  }

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

  p {
    margin: 0.8rem 0;
  }

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    padding-left: 1.5rem;
  }

  ul li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }

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

  img {
    max-width: 100%;
    max-height: 700px;
  }

  pre,
  code {
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-radius: 4px;
    font-family: "Courier New", Courier, monospace;
    font-size: 0.95rem;
  }

  img[alt^="!"] {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

export const LinkButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
