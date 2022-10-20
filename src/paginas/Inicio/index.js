import Card from "componentes/Card";
import styles from './Inicio.module.css';
import videos from 'json/videos.json'

function Inicio() {
    return (
        <>
            <main className={styles.container}>
                {videos.map((video) => (
                    <Card {...video} key={video.id} />
                ))}

            </main>
        </>
    );
}

export default Inicio;