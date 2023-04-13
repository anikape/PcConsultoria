import React, {useEffect, useState, createContext} from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
  /**Navegação */
  const navigate = useNavigate();

  const  [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //salvando o usuário temporariamente na maquina do usuário
  useEffect(()=>{
      //recupera o valor do usuário
      const recoveredUser = localStorage.getItem('user');

      if(recoveredUser){
          setUser(JSON.parse(recoveredUser))
               }
      setLoading(false)
  }, [])

  const login = (email, password)=> {
    //user != null  ----  user == null (!!user) 
    //authenticated = true ----- authenticated = false
    
    const loggedUser ={
      id: "1",
      email,
    };

    // o localStorage só guarda tipos nativos como strings, int. o JSON.stringify converte para string

    localStorage.setItem('user', JSON.stringify(loggedUser));
    
    if(password === "123"){
      console.log("login auth", email, password);
      setUser(loggedUser)
      navigate("/")
    } 
    
  }

  const logout =()=>{
    console.log("logout");
    localStorage.removeItem('user')
    setUser(null);
    navigate("/login")
  }

  return(
  
  <AuthContext.Provider
   value={{authenticated: !!user, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>)


}

/*autenticação */
/**Ela é usada para gerenciar os estados dos seus componentes dentro de uma aplicação web sem precisar usar algum pacote para isso.
 * área reservada do sistema disponível para gravar determinadas informações globais. Por exemplo um User
 */