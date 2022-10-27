import Favoritos from "paginas/Favoritos";
import Inicio from "paginas/Inicio";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaBase from "paginas/PaginaBase";
import Player from "paginas/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="Favoritos" element={<Favoritos />} />
                    <Route path="videos/:id/*" element={<Player />} />
                    <Route path="*" element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;