import React, {useState, useContext} from "react";
import { AuthContext } from "../../contexts/auth";
// import "./login.css";
import "./login.scss"
import { FaHome, FaUserAlt, FaEyeSlash} from "react-icons/fa"




const LoginPage = () =>{

  const {authenticated, login} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
      console.log("submit", {email, password})
      login(email, password);  //integração com o context e api de requisição com o backend (Banco de dados)
  }
  return(
    <>
    <section className="loginPage">
      
      <div id="menu">
        <div className="menuImage">
          <img src="../assets/logo_pc_consultoria.svg" alt="Logo PC Consultoria" />
        </div>         
        <div className="menuHome">
          <div id="menuIcon">        
            <FaHome className="icon" />
          </div>        
        </div>
      </div>

      <div id="menu2">
      <div className="menuImage">
          <img src="../assets/logo_pc_consultoria.svg" alt="Logo PC Consultoria" />
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
     
      
   
    
    <div id="login">

    <div>
        <img className="logo2" src="../assets/logo_pc_consultoria 2@2x.png" alt="logo PC Consultoria" />
      </div>
    
        
        {/* <p>{String(authenticated)}</p> */}
        <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="email">
                <input type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Usuário"
                  />
                <i ><FaUserAlt className="faIcon"/></i>
              </label>
            </div>
            <div className="field">
              <label htmlFor="password">
              
              <input type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Senha"
              />
              <i><FaEyeSlash className="faIcon" /></i>
              </label>
             
            </div>
            <div className="actions">
              <button id="button" type="submit">Entrar</button>
            </div>

        </form>
      </div>
      
    </section>
   
    </>
    
    
    
    )

}

export default LoginPage;