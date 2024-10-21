import { ProgressSpinner } from "primereact/progressspinner";
import { ContentLoading, TextLoading } from "./style";

interface Props {
  height: string
}

const LoadingComponent = ({ height }: Props) => {
  return (
    <ContentLoading style={{ height: `${height}` }}>
      <ProgressSpinner />
      <TextLoading>Carregando...</TextLoading>
    </ContentLoading>
  );
};

export default LoadingComponent;