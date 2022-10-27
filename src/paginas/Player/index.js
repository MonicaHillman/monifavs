import { useNavigate, useParams } from "react-router-dom";
import videos from "json/videos.json";
import styles from './Player.module.css';
import Titulo from "componentes/Titulo";
import Banner from "componentes/Banner";

function Player() {
    const parametros = useParams();
    const navigate = useNavigate();

    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    if (!video) {
        navigate('/404')
    }
    else return (
        <>
            <Banner imagem="player" />
            <Titulo>Player</Titulo>
            <section className={`${styles.container} conteudo`}>
                <iframe
                    className={styles.video}
                    width="100%" height="100%"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </section>

        </>

    )
}

export default Player;