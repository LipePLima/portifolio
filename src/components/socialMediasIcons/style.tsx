import styled from "styled-components";

interface IconButtonProps {
  color?: string;
  colorHover?: string;
}

export const ContainerSocialMedias = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40px;
  margin: 2rem 1rem;

  @media screen and (max-width: 1080px) {
    margin: 2rem 0.5rem;
  }

  @media screen and (max-width: 500px) {
    position: relative;
    width: 250px;
    flex-direction: row;
    gap: 2vw;
    margin: 1rem 0.3rem 0 0.3rem;
  }
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
    transition: 0.05s;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
