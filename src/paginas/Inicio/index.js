import Card from "componentes/Card";
import styles from './Inicio.module.css';
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Inicio() {
    const [videos, setVideos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://monicahillman.github.io/api-cinetag/videos.json')
            .then(resp => resp.json()).then(dados => {
                setVideos(dados)
            }).catch(() => navigate('/404'))
    }, [navigate])

    return (
        <>
            <Banner imagem="home"></Banner>
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <section className={`${styles.container} conteudo`}>
                {videos.map((video) => (
                    <Card {...video} key={video.id} />
                ))}

            </section>
        </>

    );
}

export default Inicio;