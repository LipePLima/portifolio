/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { getMyProjectByName, getRepoReadme } from "./request";
import { useLocation } from "react-router-dom";
import { marked } from "marked";
import emoji from "emoji-dictionary";
import { Loading } from "../../components";
import { ProjectsImagesArray } from "../../utils/arrayImages";
import { Button } from "primereact/button";
import deskFrame from "../../assets/images/deskFrame.png";
import phoneFrame from "../../assets/images/phoneFrame.png";
import { Toast } from "primereact/toast";
import {
  DeskContainer,
  FramesContainer,
  ImageFrame,
  PhoneImageContent,
  PhoneContainer,
  Image,
  DeskImageContent,
  ProjectDetailsSection,
  ReadMeContainer,
  LinkButtonContainer,
} from "./style";
import { useTranslation } from "react-i18next";

const ProjectDetails = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<any>(null);
  const [readMe, setReadMe] = useState<string>("");
  const [imageDeskPath, setImageDeskPath] = useState<string>("");
  const [imageMobilePath, setImageMobilePath] = useState<string>("");

  const toast: React.RefObject<Toast> = useRef(null);
  const { t } = useTranslation();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetchData(state.name);

    const images = ProjectsImagesArray.find((item) => item.name === state.name);

    if (images?.imageDeskPath) {
      setImageDeskPath(images?.imageDeskPath);
    }

    if (images?.imageMobilePath) {
      setImageMobilePath(images?.imageMobilePath);
    }
  }, [state.name]);

  const fetchData = async (name: string) => {
    try {
      const [projectResponse, readmeResponse] = await Promise.all([
        getMyProjectByName(name, toast, t),
        getRepoReadme(name, toast, t),
      ]);

      setProject(projectResponse);
      setReadMe(readmeResponse);
    } catch (error) {
      console.error(error);

      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: `${t("textErrorToast")}`,
        life: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const renderer = new marked.Renderer();

  renderer.link = function ({ href, text }) {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  };

  const replacesMarkdownEmojis = (readMe: string) => {
    const newEmojis = readMe.replace(/:\w+:/g, (name) => {
      const emojiChar = emoji.getUnicode(name.replace(/:/g, ""));

      return emojiChar ? emojiChar : name;
    });

    return newEmojis;
  };

  return (
    <>
      {loading && <Loading height="100vh" />}
      {!loading && (
        <ProjectDetailsSection>
          {(imageDeskPath || imageMobilePath) && (
            <FramesContainer>
              {imageDeskPath && (
                <>
                  <DeskContainer>
                    <ImageFrame src={deskFrame} />
                    <DeskImageContent>
                      <Image src={imageDeskPath} alt="" />
                    </DeskImageContent>
                  </DeskContainer>
                </>
              )}
              {imageMobilePath && (
                <PhoneContainer>
                  <ImageFrame src={phoneFrame} />
                  <PhoneImageContent>
                    <Image src={imageMobilePath} alt="" />
                  </PhoneImageContent>
                </PhoneContainer>
              )}
            </FramesContainer>
          )}
          <ReadMeContainer>
            <LinkButtonContainer>
              {!project.private && (
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    label={t("openRepositoryButtonLabel")}
                    severity="info"
                  />
                </a>
              )}
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    label={t("openURLButtonLabel")}
                    severity="secondary"
                  />
                </a>
              )}
            </LinkButtonContainer>
            <div
              dangerouslySetInnerHTML={{
                __html: readMe
                  ? marked(replacesMarkdownEmojis(readMe), { renderer })
                  : `<p>${t("noReadme")}</p>`,
              }}
            />
          </ReadMeContainer>
        </ProjectDetailsSection>
      )}
      <Toast ref={toast} />
    </>
  );
};

export default ProjectDetails;
