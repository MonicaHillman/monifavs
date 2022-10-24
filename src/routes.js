import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import FavoritosProvider from "contextos/Favoritos";
import Favoritos from "paginas/Favoritos";
import Inicio from "paginas/Inicio";
import Video from "paginas/Video";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <FavoritosProvider>
                <Routes>
                    <Route index element={<Inicio />} />
                    <Route path="Favoritos" element={<Favoritos />} />
                    <Route path="videos/:id/*" element={<Video />} />
                </Routes>
            </FavoritosProvider>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;