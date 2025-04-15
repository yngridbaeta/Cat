//crio um apelido para o arquivo de css chamo no componente
import estilos from './Card.module.css'

//precisamos colocar a estrutura para fazer o componente

export function Card({ movie, onOpenModal}) {  // Desestruturando diretamente a prop 'movie'
    return (
        <div className={estilos.container}>
        <h3>{movie.title || movie.name}</h3> {/* ← Aqui está a mágica */}
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} onClick={()=>onOpenModal(movie)}/>
            <p>{movie.overview}</p>
        </div>
    );
}
