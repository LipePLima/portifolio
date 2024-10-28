import { ProgressSpinner } from "primereact/progressspinner";
import { ContentLoading, TextLoading } from "./style";
import { useTranslation } from "react-i18next";

interface Props {
  height: string
}

const LoadingComponent = ({ height }: Props) => {
  const { t } = useTranslation();
  
  return (
    <ContentLoading style={{ height: `${height}` }}>
      <ProgressSpinner />
      <TextLoading>{t("loading")}</TextLoading>
    </ContentLoading>
  );
};

export default LoadingComponent;