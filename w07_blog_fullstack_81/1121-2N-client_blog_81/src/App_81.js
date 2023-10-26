import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogStaticPage_81 from "./pages/BlogStaticPage_81";
import BlogNodeServer_81 from "./pages/BlogNodeServer_81";
import HomePage_81 from "./pages/HomePage_81";
import BlogSupabase_81 from "./pages/BlogSupabase_81";
const App_81 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage_81 />} />
        <Route path='/static_81' element={<BlogStaticPage_81 />} />
        <Route path='/node_81' element={<BlogNodeServer_81 />} />
        <Route path='/supa_81' element={<BlogSupabase_81 />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App_81;
