import Banner from "componentes/Banner";
import Card from "componentes/Card";
import Titulo from "componentes/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";
import styles from './Favoritos.module.css'

function Favoritos() {
    const { favorito } = useFavoritoContext();

    return (
        <>
            <Banner imagem="favoritos"></Banner>
            <Titulo>Meus Favoritos</Titulo>
            <section className={`${styles.container} conteudo`}>
                {favorito.length > 0 ?
                    <div className={styles.galeria}>
                        {favorito.map((fav) => (
                            <Card {...fav} key={fav.id} />
                        ))}
                    </div>
                    :
                    <h2 className={styles.mensagemErro}>Ainda não há favoritos por aqui!</h2>
                }
            </section>
        </>
    )
}

export default Favoritos;