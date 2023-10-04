import Style from '../css/ComponenteProps.module.css';
import cartao from '../img/cartao.png';

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div>
            <section className={Style.caixa}>
                <h2>Venha explorar todas as belezas desse local que é {lugar} !!!</h2>
                <p>{texto}</p>
                <img src={bandeira} alt='bandeira' />
            </section>

            <section className={Style.formulario}>
                <form method="get" action="envio_dados.php">
                    <label for="nome">Nome:</label>
                    <input type="text" name="nome" id="nome" placeholder="Digite seu Nome aqui" />

                    <label for="email">E-mail:</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />

                    <label for="telefone">Telefone:</label>
                    <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone" />

                    <input type="submit" name="enviar" value="Enviar" />
                    <img src={cartao} alt='cartao' />
                </form>
            </section>
        </div>
    )
}

export default ComponenteProps;