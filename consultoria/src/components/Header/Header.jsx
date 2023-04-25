import React from "react";
import { FaHome, FaUserAlt, FaEyeSlash} from "react-icons/fa"

const Header = () => {
  return (
    <>
    

      <div id="menu2">
      <div className="menuImage">
          <img src="/assets/logo_pc_consultoria.svg" alt="Logo PC Consultoria" />
        </div> 
        <div className="menuHome">
          <div id="menuIcon">        
            <FaHome className="icon" />
          </div>  
          <div className="list">
            <ul>
             <li><a href="#">Institucional</a></li>
             <li><a href="#">Atuação</a></li>
             <li><a href="#">Vantagens</a></li>
             <li><a href="#">Contato</a></li>

            </ul>
          </div>      
        </div>
       
      </div>
    
    </>
  )
}

export default Header;