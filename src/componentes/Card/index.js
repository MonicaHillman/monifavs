import styles from './Card.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavoritoContext } from 'contextos/Favoritos';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    return (

        <div className={styles.container}>
            <Link to={`/videos/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa}></img>

                <h2>{titulo}</h2>
            </Link>
            {ehFavorito ?
                <FavoriteIcon onClick={() => (
                    adicionarFavorito({ id, titulo, capa })
                )} />
                :
                <FavoriteBorderIcon onClick={() => (
                    adicionarFavorito({ id, titulo, capa })
                )} />
            }
        </div>

    )
}

export default Card;