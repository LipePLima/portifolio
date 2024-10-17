/* eslint-disable @typescript-eslint/no-explicit-any */
import imgTecs from "../../assets/tecIconsImage.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyRepos } from "./request";
import { RepoDTO } from "../../utils/interfaces";
import { Card } from "../../components";
import {
  AboutMeButton,
  ContainerMyProjects,
  ContainerTechnologies,
  ContainerTitle,
  ContainerTitleSection,
  ContentMyProjects,
  ImageIconsTec,
  MyName,
  SecondaryTitle,
  Title,
} from "./style";

const HomePage = () => {
  const [myProjects, setMyProjects] = useState<RepoDTO[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    const response = await getMyRepos();

    setMyProjects(response);
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
              onClick={() => navigate("/aboutMe")}
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
          <ContentMyProjects>
            {myProjects &&
              myProjects.map((repo: RepoDTO, index: number) => {
                return (
                  <Card projectName={repo.name} image={repo.name} key={index}>
                    <p>Exemplo</p>
                  </Card>
                );
              })}
          </ContentMyProjects>
        </ContainerMyProjects>
      </main>
    </>
  );
};

export default HomePage;
