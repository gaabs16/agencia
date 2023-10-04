import Style from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import bandeirinha from '../img/bandeiraARUBA.png'

function Aruba(){
    return(
        <main className={Style.fundo}>
            <ComponenteProps 
            lugar='Aruba'
            texto='Aruba, pequena ilha do Caribe holandês ao largo da costa da Venezuela' 
            bandeira={bandeirinha}
            />
        </main>
    )
}

export default Aruba;