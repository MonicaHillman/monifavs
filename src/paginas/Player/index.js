import { useParams } from "react-router-dom";
import videos from "json/videos.json";
import styles from './Player.module.css';
import Titulo from "componentes/Titulo";
import Banner from "componentes/Banner";
import NaoEncontrada from "paginas/NaoEncontrada";

function Player() {
    const parametros = useParams();

    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    return (
        <>
            {video ?
                <>
                    <Banner imagem="Player" />
                    <Titulo>Player</Titulo>
                    <main>
                        <section className={styles.player}>
                            <iframe
                                className={styles.video}
                                width="100%" height="100%"
                                src={video.link}
                                title={video.titulo}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                        </section>
                    </main>
                </>
                :
                <>
                    <main>
                        <NaoEncontrada />
                    </main>
                </>
            }
        </>
    )
}

export default Player;