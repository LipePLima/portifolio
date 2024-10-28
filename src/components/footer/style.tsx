import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(
    90deg,
    rgba(36, 36, 36, 1) 0%,
    rgba(45, 45, 45, 1) 48%,
    rgba(36, 36, 36, 1) 100%
  );

  a {
    color: #fff;
    margin-left: 0.5rem;
  }
`;

export const ContainerSocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 1000;
  margin-bottom: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: row;
    gap: 2vw;
  }
`;

export const IconButton = styled.button`
  cursor: pointer;
  font-size: 28px;
  border: none;
  background: transparent;

  &:hover {
    transform: scale(1.05);
    transition: .05s;
  }

  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;
