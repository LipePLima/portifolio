/* eslint-disable @typescript-eslint/no-explicit-any */
import imgTecs from "../../assets/tecIconsImage.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMyRepos } from "./request";
import { ProjectDTO } from "../../utils/interfaces";
import { Button } from "primereact/button";
import formatDate from "../../utils/convertDate";
import { Loading } from "../../components";
import {
  AboutMeButton,
  CardDescription,
  CardProject,
  ContainerMyProjects,
  ContainerTechnologies,
  ContainerTitle,
  ContainerTitleSection,
  ContentMyProjects,
  DateProject,
  ImageIconsTec,
  MyName,
  SecondaryTitle,
  Title,
} from "./style";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [myProjects, setMyProjects] = useState<ProjectDTO[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRepos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRepos = async () => {
    const response = await getMyRepos(setLoading);

    setMyProjects(response);
  };

  const filterProjects = (project: ProjectDTO) => {
    const excludedKeywords = ["frontend", "backend", "admin"];
    return !excludedKeywords.some((keyword) => project.name.includes(keyword));
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
          {loading && <Loading height="100%" />}
          {!loading && (
            <ContentMyProjects>
              {myProjects &&
                myProjects
                  .filter(filterProjects)
                  .sort((a: ProjectDTO, b: ProjectDTO) => {
                    return (
                      new Date(b.created_at).getTime() -
                      new Date(a.created_at).getTime()
                    );
                  })
                  .map((project: ProjectDTO, index: number) => {
                    return (
                      <CardProject
                        key={index}
                        title={project.name}
                        subTitle={
                          project.owner.login !== "LipePLima"
                            ? "Participação"
                            : "Autoria"
                        }
                        footer={
                          <Button
                            style={{ width: "100%" }}
                            label="Ver mais"
                            icon="pi pi-info-circle"
                            onClick={() =>
                              navigate(`/projeto/${project.name}`, {
                                state: {
                                  name: project.name,
                                },
                              })
                            }
                          />
                        }
                      >
                        <DateProject>
                          {formatDate(project.created_at)}
                        </DateProject>
                        <CardDescription>
                          {project.description
                            ? project.description
                            : "Sem descrição"}
                        </CardDescription>
                      </CardProject>
                    );
                  })}
            </ContentMyProjects>
          )}
        </ContainerMyProjects>
      </main>
    </>
  );
};

export default HomePage;
