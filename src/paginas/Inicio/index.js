import Card from "componentes/Card";
import styles from './Inicio.module.css';
import videos from 'json/videos.json'
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";

function Inicio() {
    return (
        <>
            <Banner imagem="Home"></Banner>
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <main className={styles.container}>
                {videos.map((video) => (
                    <Card {...video} key={video.id} />
                ))}

            </main>
        </>

    );
}

export default Inicio;