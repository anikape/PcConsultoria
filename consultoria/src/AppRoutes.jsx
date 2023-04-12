import { useState, useContext, Children } from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home/Home";
import {AuthProvider, AuthContext} from "./contexts/auth"


const AppRoutes  = () =>{
  /*Regras de segurança na autenticação / Rota privada <Private>*/

    const Private =({children}) =>{
     const {authenticated} = useContext(AuthContext);

     if(!authenticated){
      return <Navigate to="/login" />; //Se não estiver autenticado, retorna para o login
     }
     return children; //estando autenticado entra na rota privada

    }

  return(
    <Router>
      <AuthProvider >
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/" element={   <Private><Home /></Private>
          } />
      </Routes>
      </AuthProvider>
    </Router>

  )
}

export default AppRoutes;