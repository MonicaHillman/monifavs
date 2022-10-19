import Card from "componentes/Card";
import styles from './Inicio.module.css';

function Inicio() {
    return (
        <>
            <main className={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </>
    );
}

export default Inicio;