import styled from "styled-components";

export const ContainerTranslatorButton = styled.div`
  position: fixed;
  right: 0;
  margin: 2rem 1rem;

  @media screen and (max-width: 1080px) {
    margin: 2rem 0.5rem;
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    width: 30px;
    top: 0;
    right: 30px;
    margin: 0;
    margin-top: 1rem;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  font-size: 28px;
  border: none;
  background: transparent;

  &:hover {
    transform: scale(1.05);
    transition: 0.05s;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

export const DropDownLanguages = styled.div`
  position: absolute;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #2d2d2d;
  width: 100px;
  top: 32px;
  right: 0;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 0px rgba(19, 19, 19, 0.397);
`;
