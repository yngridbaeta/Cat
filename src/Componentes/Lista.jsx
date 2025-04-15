//axios permite a comunicacao com as paginas https
import axios from "axios";
//as ferramentas iniciadas com use sao hooks de manuseio da biblioteca react
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import estilos from './Lista.module.css'

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista(){
    //crio uma variavel chamada movie e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]);
    //mostra se foi selecionado um filme para a visualização
    const [SelectedMovie, setSelectedMovie] = useState(null)
    
    //effect trabalha com uma estrutura especifica, parametros () , scripts {} e dependencias []
    useEffect(() => {
        axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
            //se deu certo a comunicação, entao grava o resultado no "response" que pode pegar o elemento atraves do data
            .then(response =>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
            //se der rum, exibe no inspecionar o erro de comunicação
            .catch(error =>{
                console.log('error', error);
            })
    }, []);

    const handleOpenModal=(movie)=>{
        setSelectedMovie(movie);
    };

    const handleCloseModal=()=>{
        setSelectedMovie(null);
    }

    return(
        <div>
            <figure style={{display:'flex', flexWrap:'wrap'}}>
                {movies.map(movie => (
                    <Card key={movie.id
                    }movie={movie}
                    onOpenModal = {handleOpenModal}/>
                ))}
            </figure>
            {setSelectedMovie && (<Modal movie={SelectedMovie} onClose={handleCloseModal}/>)}
        </div>
    );
}

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Card } from "./Card";
// import estilos from './Lista.module.css';

// const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
// const API_URL = 'https://api.themoviedb.org/3';

// export function Lista() {
//     // Renomeando 'setMovie' para 'setMovies' para tornar mais claro que é uma lista de filmes
//     const [movies, setMovies] = useState([]);
    
//     useEffect(() => {
//         axios.get(`${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`)
//             .then(response => {
//                 console.log(response.data.results);
//                 setMovies(response.data.results);  // Atualizando o estado com os filmes
//             })
//             .catch(error => {
//                 console.log('Error:', error);  // Mostra erro caso haja um problema na requisição
//             });
//     }, []);  // O efeito só será executado uma vez, após o componente ser montado

//     return (
//         <div className={estilos.container}>
//             <figure style={{ display: 'flex', flexWrap: 'wrap' }}>
//                 {movies.map(movie => (
//                     <Card key={movie.id} movie={movie} />
//                 ))}
//             </figure>
//         </div>
//     );
// }
