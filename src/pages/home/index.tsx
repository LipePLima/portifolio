import imgTecs from "../../assets/tecIconsImage.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  AboutMeButton,
  ContainerMyProjects,
  ContainerTechnologies,
  ContainerTitle,
  ContainerTitleSection,
  ImageIconsTec,
  MyName,
  SecondaryTitle,
  Title,
} from "./style";
import { getMyRepos } from "./request";

const HomePage = () => {
  const [, setRepos] = useState<unknown>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    const response = await getMyRepos();

    setRepos(response);
  };

  return (
    <>
      <main>
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
        <ContainerTechnologies></ContainerTechnologies>
        <ContainerMyProjects>
          <SecondaryTitle>Meus Projetos</SecondaryTitle>
        </ContainerMyProjects>
      </main>
    </>
  );
};

export default HomePage;
