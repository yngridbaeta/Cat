import { Cabecalho } from "../Componentes/Cabecalho";
import { BarraNavegacao } from "../Componentes/BarraNavegacao";

//Outlet é um espaço que serve para renderizar o componente da rota. entao se clicar no link 'perfil'
//vai exibir o componente que corresponde ao endereço do perfil em rotas
import { Outlet } from 'react-router-dom';

//estrutura
export function Inicial(){
    return(
        <>
            <Cabecalho/>
            <BarraNavegacao/>
            <Outlet/>
        </>
    )
}