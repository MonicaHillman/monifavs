import styles from './Card.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavoritoContext } from 'contextos/Favoritos';

function Card({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const ehFavorito = favorito.some((fav) => fav.id === id);
    return (
        <div className={styles.container}>
            <img src={capa} alt="gato aleatório" className={styles.capa}></img>
            <h2>{titulo}</h2>
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