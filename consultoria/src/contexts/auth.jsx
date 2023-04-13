import React, {useEffect, useState, createContext} from "react";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {api, createSession} from '../services/api'


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

  const login = async(email, password)=> {
    //user != null  ----  user == null (!!user) 
    //authenticated = true ----- authenticated = false

      //conexão com o Banco de dados.  Aqui foi necessário infomar que o login é por email
    const response = await createSession.post("/login", {"login":email,password});
    console.log(response.data)
    
    const loggedUser ={
      id: "1",
      email,
    };

    // o localStorage só guarda tipos nativos como strings, int. o JSON.stringify converte para string

    localStorage.setItem('user', JSON.stringify(loggedUser));

    setUser(loggedUser)
    navigate("/")
    
   
    
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