import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 1rem;
`;

export const ContainerSocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContainerTranslatorButton = styled.div`
  height: 100%;
`;

export const IconButton = styled.button`
  cursor: pointer;
  font-size: 28px;
  color: #3b82f6;
  border: none;
  background: transparent;

  &:hover {
    color: #60a5fa;
    transform: scale(1.05);
  }
`;
