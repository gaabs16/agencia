import Style from '../css/Muralhas.module.css'
import ComponenteProps from './ComponenteProps'
import bandeirinha from '../img/bandeiraCHINA.png'

function Muralhas(){
    return(
        <main className={Style.fundo}>
            <ComponenteProps 
            lugar='Muralhas'
            texto='Elas servem para isolar uma população, separar territórios ou fechar um espaço, estabelecer um limite ou uma fronteira, definir um perímetro de segurança.' 
            bandeira={bandeirinha}
            />

        </main>
    )
}

export default Muralhas;