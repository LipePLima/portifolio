import imgTecs from "../../assets/tecIconsImage.png";
import { useNavigate } from "react-router-dom";
import {
  AboutMeButton,
  ContainerTitle,
  ContainerTitleSection,
  ImageIconsTec,
  Main,
  MyName,
  Title,
} from "./style";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Main>
        <ContainerTitleSection>
          <ContainerTitle>
            <MyName>Felipe Pereira de Lima</MyName>
            <Title>
              Desenvolvedor De Software <br /> Front-End
            </Title>
            <AboutMeButton
              label="Sobre Mim"
              severity="info"
              outlined
              onClick={() => navigate("/sobreMim")}
            />
          </ContainerTitle>
          <ImageIconsTec
            src={imgTecs}
            alt="Imagem com icones 3D das minhas principais stacks"
          />
        </ContainerTitleSection>
      </Main>
    </>
  );
};

export default HomePage;
