import { Button } from "primereact/button";
import { CardButtons } from "./style";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";

interface Props {
  projectName: string;
  image: string;
  children: JSX.Element;
}

const CardComponent = ({ projectName, image, children }: Props) => {
  const navigate = useNavigate();

  const headerCard = <img alt="Card" src={image} />;

  const footerCard = (
    <CardButtons>
      <Button
        label="Ver Projeto"
        icon="pi pi-check"
        onClick={() =>
          navigate("/project", {
            state: {
              projectName: projectName,
            },
          })
        }
      />
    </CardButtons>
  );

  return (
    <Card
      title="Advanced Card"
      subTitle="Card subtitle"
      footer={footerCard}
      header={headerCard}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
