import { ProgressSpinner } from "primereact/progressspinner";
import { ContentLoading, TextLoading } from "./style";

const LoadingComponent = () => {
  return (
    <ContentLoading>
      <ProgressSpinner />
      <TextLoading>Carregando...</TextLoading>
    </ContentLoading>
  );
};

export default LoadingComponent;