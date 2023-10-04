import {Link} from 'react-router-dom'
import Style from '../css/Header.module.css'
import Logo from '../img/logo.png'
import Lupa from '../img/lupa.png'

function Header(){
    return(
        <header className={Style.container}>
            <Link to=''><img src={Logo} className={Style.logo} alt="Logo" /></Link>
            <nav className={Style.menu}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/GrandCanyon'>Grand Canyon</Link></li>
                    <li><Link to='/Escocia'>Escócia</Link></li>
                    <li><Link to='/Muralhas'>Muralhas da China</Link></li>
                    <li><Link to='/Aruba'>Aruba</Link></li>
                </ul>
            </nav>
            <div>
                <input type='search' className={Style.busca} />
            </div>
            <img src={Lupa} alt="Lupa" className={Style.lupa} />
        </header>
    )
}

export default Header;