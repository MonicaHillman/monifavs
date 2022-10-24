import { useParams } from "react-router-dom";
import videos from "json/videos.json";
import styles from './Video.module.css';

function Video() {
    const parametros = useParams();

    const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })

    /*    if (!post) {
            return <NaoEncontrada />
        } */

    return (
        <main>
            <iframe
                className={styles.video}
                width="90%" height="90%"
                src={video.link}
                title={video.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </main>
    )
}

export default Video;