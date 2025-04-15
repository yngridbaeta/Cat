import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

// Passando o 'onClick' para a troca de conteúdo
export function BarraNavegacao({ onSelectContent }) {
  return (
    <nav className={estilos.conteiner}>
      <ul>
        <Link to="/">
            <li>
            <span className="material-symbols-outlined">home</span>
            <span>Home</span>
            </li>
        </Link>
        
        <Link to="filmes">
            <li>
            <span className="material-symbols-outlined">movie</span>
            <span>Filmes</span>
            </li>
        </Link>
       
        <li>
          <span className="material-symbols-outlined">movie</span>
          <span>Séries</span> 
        </li>
        <Link to="perfil">
            <li>
            <span className="material-symbols-outlined">person</span>
            <span>Perfil</span>
            </li>
        </Link>
      </ul>
    </nav>
  );
}
