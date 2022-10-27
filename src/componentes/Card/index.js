import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png';
import iconeFavoritado from './favoritado.png';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    const icon = ehFavorito ? iconeFavoritado : iconeFavoritar
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/videos/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}></img>
                <h2>{titulo}</h2>
            </Link>

            <img
                src={icon}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={() => (
                    adicionarFavorito({ id, titulo, capa })
                )}
            />

        </div>

    )
}

export default Card;