import Style from '../css/Rodape.module.css'

function Rodape() {
    return (
        <footer className={Style.container}>
            <h3>Siga-nos em nossas redes sociais</h3>

            <div className={Style.icones}>
                <a href="https://www.instagram.com/agencia.viagem/" target="_blank"><img src="https://img.icons8.com/color/48/000000/instagram-new.png" /></a>

                <a href="https://www.facebook.com/agencia.viagem/" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-new.png" /></a>

                <a href="https://www.tiktok.com/@agencia.viagem" target="_blank"><img src="https://img.icons8.com/color/48/000000/tiktok.png" /></a>

                <a href="https://www.whatsapp.com/?lang=pt_br" target='blank'>

                    <img width="48" height="48" src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />

                </a>
            </div>

            <h4>Telefone de contato: (11)99555-3355</h4>
        </footer>
    )
}

export default Rodape;