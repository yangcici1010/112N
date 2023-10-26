import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogStaticPage_81 from "./pages/BlogStaticPage_81";
import BlogNodeServer_81 from "./pages/BlogNodeServer_81";

const App_81 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_81' element={<BlogStaticPage_81 />} />
        <Route path='/node_81' element={<BlogNodeServer_81 />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App_81;
