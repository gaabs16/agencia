import Style from '../css/GrandCanyon.module.css';
import ComponenteProps from './ComponenteProps';
import bandeirinha from '../img/bandeiraEUA.png';

function GrandCanyon(){
    return(
        <main className={Style.fundo}>
            <ComponenteProps 
            lugar='Grand Canyon'
            texto='Situado no estado do Arizona, essa reserva natural tem uma visita privilegiada. 
            Esse parque nacional é uma das maravilhas do mundo!!!' 
            bandeira={bandeirinha}
            />
            

        </main>
    )
}

export default GrandCanyon;