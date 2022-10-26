import imagem from '../../assets/Imagens/FotoNaoEncontrada.svg';
import styles from './NaoEncontrada.module.css';

function NaoEncontrada() {
    return (
        <>
            <section className={styles.container}>
                <div>
                    <h2>Ops!</h2>
                    <p> O conteúdo que você busca não foi encontrado. Tente novamente mais tarde. </p>
                </div>
                <img src={imagem} alt="Pessoa buscando alguma coisa em uma tela" />
            </section>
        </>
    )
}

export default NaoEncontrada;