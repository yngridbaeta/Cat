import estilos from './Conteudo.module.css';
import { Lista } from './Lista';

export function Conteudo() {
  return (
    <main className={estilos.conteiner}>
      <h2>Filmes Disponíveis</h2> {/* Título da seção em azul */}
      <div className={estilos['lista-container']}>
        <Lista />
      </div>
    </main>
  );
}
