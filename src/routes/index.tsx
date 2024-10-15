import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import { HomePage, AboutMePage } from "../pages";

const RoutesComponent: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMePage />} />
      </Routes>
    </>
  );
};

export default RoutesComponent;
