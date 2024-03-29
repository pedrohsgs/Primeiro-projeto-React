import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";

const Router = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Home/>} />
            <Route path="/contato" element={<Contato/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;