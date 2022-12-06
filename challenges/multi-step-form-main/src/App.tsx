import { Route, Routes } from "react-router-dom";
import { Custom404 } from "./pages/Custom404";
import Step from "./pages/Step";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Step />} />
      <Route path="/steps" element={<Step />} />
      <Route path="*" element={<Custom404 />} />
    </Routes>
  );
}
