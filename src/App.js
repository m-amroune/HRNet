import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ListEmployees from "./pages/ListEmployees";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/table" element={<ListEmployees />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
