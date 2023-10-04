import Style from '../css/Home.module.css'
import Mala from '../img/bagagem.png'

function Home(){
    return(
        <article className={Style.container}>
            <div>
                <img src={Mala} alt='mala' className={Style.imagem} />
            </div>
            <section className={Style.texto}>
                <h1>Encontre aqui a viagem dos seus sonhos!!!</h1>
                <p>Promoção de viagens até 1000 Viaje por até R$ 1.000,00 em 2023! Conheça alguns dos melhores destinos do Brasil pagando pouco! Aqui você encontra pacotes de viagens baratos para conhecer lugares repletos de atrações como Florianópolis, Foz do Iguaçu, Gramado, Rio de Janeiro, Porto Seguro e Salvador. Confira nossas ofertas para viajar gastando menos de R$ 1.000,00!</p>
            </section>
        </article>
    )
}

export default Home;