// import { useState, useEffect } from "react";
// import Login from "../../componentes/login";
// import UsuarioService from "../../services/UsuarioService";
// import Home from "../../componentes/home";


// const usuarioService = new UsuarioService();

// export default function Index() {
//   const [estaAutenticado, setEstaAutenticado] = useState(null);

//   useEffect(() => {
//     setEstaAutenticado(
//       usuarioService.estaAutenticado()
//     );
//   }, []);

//   if (estaAutenticado === null) {
//     return null;
//   }

//   if (estaAutenticado) {
//     return <Home />;
//   }

//   return <Login aposAutenticacao={() => setEstaAutenticado(true)} />;
// }
import comAutorizacao from '../../hoc/comAutorizacao';

function Perfil() {
    return (
        <h1>Perfil</h1>
    );
}

export default comAutorizacao(Perfil);
