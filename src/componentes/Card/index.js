import styles from './Card.module.css'
import iconeFavoritar from 'assets/Icones/favoritar.png';
import iconeFavoritado from 'assets/Icones/favoritado.png';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/videos/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}></img>
                <h2>{titulo}</h2>
            </Link>
            {ehFavorito ?
                <img
                    src={iconeFavoritado}
                    alt="Favoritar filme"
                    className={styles.favoritar}
                    onClick={() => (
                        adicionarFavorito({ id, titulo, capa })
                    )}
                />
                :
                <img
                    src={iconeFavoritar}
                    alt="Favoritar filme"
                    className={styles.favoritar}
                    onClick={() => (
                        adicionarFavorito({ id, titulo, capa })
                    )}
                />
            }
        </div>

    )
}

export default Card;