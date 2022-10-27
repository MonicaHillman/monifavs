import Rodape from "componentes/Rodape";
import Cabecalho from "componentes/Cabecalho";
import FavoritosProvider from "contextos/Favoritos";
import { Outlet } from "react-router-dom";
import Container from "componentes/Container";


function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}

export default PaginaBase;