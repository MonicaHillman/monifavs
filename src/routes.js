import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Inicio from "paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route index element={<Inicio />} />
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;