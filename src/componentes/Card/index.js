import styles from './Card.module.css'

function Card() {
    return (
        <div className={styles.container}>
            <img src="https://thecatapi.com/api/images/get?format=src&type=gif" alt="gato aleatório" className={styles.imagem}></img>
            <h2>Gato Bonifácio</h2>
            <p>Esse é um gato topzera das galáxias</p>
        </div>
    )
}

export default Card;