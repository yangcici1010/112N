import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogStaticPage_81 from "./pages/BlogStaticPage_81";

const App_81 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/static_81' element={<BlogStaticPage_81 />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App_81;
