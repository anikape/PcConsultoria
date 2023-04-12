import React, {useState, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  /**Navegação */
  const navigate = useNavigate();

  const  [user, setUser] = useState(null);

  const login = (email, password)=> {
    //user != null  ----  user == null (!!user) 
    //authenticated = true ----- authenticated = false
    
    
    if(password === "123"){
      console.log("login auth", email, password);
      setUser({id:"123", email})
      navigate("/")
    }
   
    
  }

  const logout =()=>{
    console.log("logout");
    setUser(null);
    navigate("/login")
  }

  return(
  
  <AuthContext.Provider
   value={{authenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>)


}

/*autenticação */
/**Ela é usada para gerenciar os estados dos seus componentes dentro de uma aplicação web sem precisar usar algum pacote para isso.
 * área reservada do sistema disponível para gravar determinadas informações globais. Por exemplo um User
 */