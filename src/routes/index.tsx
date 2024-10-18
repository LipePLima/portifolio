import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import { HomePage, AboutMePage } from "../pages";
import ProjectDetails from "../pages/project";

const RoutesComponent: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
        <Route path="/projeto/:name" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
