import styled from "styled-components";

interface IconButtonProps {
  color?: string;
  colorHover?: string;
}

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem;

  @media screen and (max-width: 1080px) {
    padding: 2rem .5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 2rem .3rem;
  }
`;

export const ContainerSocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerTranslatorButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
`;

export const IconButton = styled.button<IconButtonProps>`
  cursor: pointer;
  font-size: 28px;
  color: ${(props) => props.color || "#3b82f6"};
  border: none;
  background: transparent;

  &:hover {
    color: ${(props) => props.colorHover || "#60a5fa"};
    transform: scale(1.05);
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

export const DropDownLanguages = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #2D2D2D;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 0px rgba(19, 19, 19, 0.397);
`;
