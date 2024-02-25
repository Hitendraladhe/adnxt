import { FaRegMoon , FaRegBell, FaLanguage} from "react-icons/fa"
import './index.css'

const Navbar=()=>{
    return(
      <>
        <nav className="nav">
          <img src="https://cdn6.f-cdn.com/contestentries/138969/13901059/54b67fa240afc_thumb900.jpg" className="logo"/>
          <ul className="navUl">
            <li className="li"><FaRegMoon className="icon" /></li>
            <li className="li"><FaRegBell className="icon" /></li>
            <li className="li"><FaLanguage className="icon" /></li>
            <li className="li"><img src="https://i.pinimg.com/736x/f2/b2/11/f2b2112185b35b57c781c49bf6f5d252.jpg" alt="Avatar"  className="img"/></li>
          </ul>
        </nav>
      </>
    )
}


export default Navbar