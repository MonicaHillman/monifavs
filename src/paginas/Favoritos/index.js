import Card from "componentes/Card";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos() {
    const { favorito } = useFavoritoContext();
    return (
        <>
            {
                favorito.map((fav) => (
                    <Card {...fav} key={fav.id} />
                ))
            }
        </>
    )
}

export default Favoritos;