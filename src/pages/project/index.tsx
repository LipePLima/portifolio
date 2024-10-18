/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { getMyProjectByName, getRepoReadme } from "./request";
import { useLocation } from "react-router-dom";
import { marked } from "marked";
import { Loading } from "../../components";

const ProjectDetails = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [project, setProject] = useState<any>(null);
  const [readMe, setReadMe] = useState<string>("");

  const { state } = useLocation();

  useEffect(() => {
    fetchData(state.name);
  }, [state.name]);

  const fetchData = async (name: string) => {
    try {
      const [projectResponse, readmeResponse] = await Promise.all([
        getMyProjectByName(name),
        getRepoReadme(name),
      ]);

      setProject(projectResponse);
      setReadMe(readmeResponse);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      {!loading && (
        <>
          <h1>Detalhes do Projeto: {project?.name}</h1>

          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: readMe
                  ? marked(readMe)
                  : "<p>README não disponível</p>",
              }}
              style={{
                padding: "1rem",
                borderRadius: "8px",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
