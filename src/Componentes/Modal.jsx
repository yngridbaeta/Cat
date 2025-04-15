import estilos from './Modal.module.css';

export function Modal({ movie, onClose }) {
    // Se não houver filme, não renderiza nada
    if (!movie) {
        return null;
    }

    console.log("Modal renderizada", movie);

    return (
        <div className={estilos.modalback}>
            <div className={estilos.modalConteiner}>
                <div className={estilos.modalHeader}>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>X</button>
                </div>

                <div className={estilos.imgDetails}>
                    <img
                        className={estilos.imgModal}
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt={movie.title}
                    />
                    <ul className={estilos.movieDetails}>
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de lançamento: ${movie.release_date || 'Data não disponível'}`}</li> {/* Corrigido para 'release_date' */}
                        <li>{`Quantidade de votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overview}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
