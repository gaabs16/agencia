import Style from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import bandeirinha from '../img/bandeiraESCOCIA.png'

function Escocia(){
    return(
        <main className={Style.fundo}>
            <ComponenteProps 
            lugar='Escocia'
            texto='País incrivel onde é possivel encontrar mais de 300 castelos e por volta de 800 ilhas.' 
            bandeira={bandeirinha}
            />
            
        </main>
    )
}

export default Escocia;