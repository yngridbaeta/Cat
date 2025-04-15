//axios permite a comunicacao com as paginas https
import axios from "axios";
//as ferramentas iniciadas com use sao hooks de manuseio da biblioteca react
import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { Modal } from "./Modal";
import estilos from './ListaTv.module.css'

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista(){
    //crio uma variavel chamada movie e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]);
    //mostra se foi selecionado um filme para a visualização
    const [SelectedMovie, setSelectedMovie] = useState(null)
    
    //effect trabalha com uma estrutura especifica, parametros () , scripts {} e dependencias []
    useEffect(() => {
        axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
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

