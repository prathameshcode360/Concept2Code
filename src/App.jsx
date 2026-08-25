import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AboutMe from "./pages/AboutMe/AboutMe";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/project/:projectId" element={<ProjectPage />} />

          <Route path="/about" element={<AboutMe />} />

          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
