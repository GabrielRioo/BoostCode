import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ButtonCustom from "../pages/component/ButtonCustom";
import TableCustom from "../pages/component/TableCustom";
import Community from "../pages/community/Community";
import LandingPage from "../pages/LandingPage";

function Index() {
  const [comp, setComp] = useState("");

  return (
    <Routes>
      <Route path="/getting-start" element={<LandingPage />} />
      <Route path="/buttons" element={<ButtonCustom {...`${comp}`} />} />
      <Route path="/tables" element={<TableCustom {...`${comp}`} />} />
      <Route path="/community" element={<Community {...`${comp}`} />} />
    </Routes>
  );
}

export default Index;
