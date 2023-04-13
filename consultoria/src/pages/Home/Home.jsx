import React, {useContext} from 'react'

import { AuthContext } from '../../contexts/auth';


const Home = () => {

  //recupero o logout
  const {authenticated,logout} = useContext(AuthContext);

  const handleLogout = ()=>{
    logout();
  }

  return (

   <>
    <h1> Bem Vindo</h1>
    <p>{String(authenticated)}</p>
    <button onClick={handleLogout}>Sair</button>
   </>
  )
}

export default Home;