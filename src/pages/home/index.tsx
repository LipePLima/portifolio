/* eslint-disable @typescript-eslint/no-explicit-any */
import imgTecs from "../../assets/images/tecIconsImage.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getMyRepos } from "./request";
import { ProjectDTO } from "../../utils/interfaces";
import { Button } from "primereact/button";
import formatDate from "../../utils/convertDate";
import { Loading } from "../../components";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import { useTranslation } from "react-i18next";
import { Toast } from "primereact/toast";
import cvEnglishVersion from "../../assets/pdfs/cvEnglishVersion.pdf";
import cvPortugueseVersion from "../../assets/pdfs/cvPortugueseVersion.pdf";
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
  LinkButtonContainer,
  MyName,
  PaginatorProjects,
  SecondaryTitle,
  Title,
} from "./style";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [myProjects, setMyProjects] = useState<ProjectDTO[] | null>(null);
  const [cvToDownload, setCvToDownload] = useState(cvPortugueseVersion);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, i18n } = useTranslation();
  const toast = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRepos();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, rows]);

  useEffect(() => {
    setCvToDownload(
      i18n.language === "pt-br" ? cvPortugueseVersion : cvEnglishVersion
    );
  }, [i18n.language]);

  const fetchRepos = async () => {
    const repos = await getMyRepos(
      currentPage,
      rows,
      setLoading,
      setTotalRecords,
      toast,
      t
    );

    if (repos) {
      setMyProjects(repos);
    }
  };

  const filterProjects = (project: ProjectDTO) => {
    const excludedKeywords = [
      "frontend",
      "backend",
      "admin",
      "pvd",
      "LipePLima",
    ];
    return !excludedKeywords.some((keyword) => project.name.includes(keyword));
  };

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    setCurrentPage(event.page + 1);
  };

  return (
    <>
      <main>
        <ContainerTitleSection>
          <ContainerTitle>
            <MyName>Felipe Pereira de Lima</MyName>
            <Title>
              {t("title")} <br /> Front-End
            </Title>
            <LinkButtonContainer>
              <AboutMeButton
                label={t("aboutMe")}
                severity="info"
                outlined
                onClick={() => navigate("/aboutMe")}
              />
              <a href={cvToDownload} download="CV Dev Felipe Lima.pdf">
                <Button label={t("buttonCV")} severity="info" outlined />
              </a>
            </LinkButtonContainer>
          </ContainerTitle>
          <ImageIconsTec
            src={imgTecs}
            alt="Imagem com icones 3D de algumas stacks"
          />
        </ContainerTitleSection>
        <ContainerTechnologies />
        <ContainerMyProjects>
          <SecondaryTitle>{t("myProjects")}</SecondaryTitle>
          {loading && <Loading height="100%" />}
          {!loading && (
            <>
              <ContentMyProjects>
                {myProjects &&
                  myProjects
                    .filter(filterProjects)
                    .sort((older: ProjectDTO, youngest: ProjectDTO) => {
                      return (
                        new Date(youngest.created_at).getTime() -
                        new Date(older.created_at).getTime()
                      );
                    })
                    .map((project: ProjectDTO, index: number) => {
                      return (
                        <CardProject
                          key={index}
                          title={project.name}
                          subTitle={
                            project.owner.login === "LipePLima"
                              ? t("authorship")
                              : t("participation")
                          }
                          footer={
                            <Button
                              style={{ width: "100%" }}
                              label={t("viewMore")}
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
                            {formatDate(project.created_at, i18n.language)}
                          </DateProject>
                          <CardDescription>
                            {project.description
                              ? project.description
                              : t("noDescription")}
                          </CardDescription>
                        </CardProject>
                      );
                    })}
              </ContentMyProjects>
              <PaginatorProjects
                first={first}
                rows={rows}
                totalRecords={totalRecords}
                rowsPerPageOptions={[10, 20, 30]}
                onPageChange={onPageChange}
              />
            </>
          )}
        </ContainerMyProjects>
      </main>
      <Toast ref={toast} />
    </>
  );
};

export default HomePage;
