import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import './favoritos.css'
import loader from '../../assets/loader.gif'
import { toast } from 'react-toastify';

export default function Favoritos(){
   
   const [filmes, setFilmes] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect( () => {
       const minhaLista = localStorage.getItem('filmes');
       console.log(minhaLista)

       setFilmes(JSON.parse(minhaLista) || []);
       setLoading(false)
   },[]);

   if(loading){
       return(
           <div>
               <img src={loader}/>
           </div>
       )
   }

   function handleDelete(id) {
       let filtroFilmes = filmes.filter( (item) => {
           return (item.id !== id);
       });

       setFilmes(filtroFilmes);
       localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
       toast.success('Filme escluído com sucesso!');
   }
   
    return(
        <div id='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Você não possui filmes salvos 😌</span>}

            <ul>
                {filmes.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                        <div>
                        <Link to={`filmes/${item.id}`}>Ver detalhes</Link>
                        <button onClick={() => handleDelete(item.id)}>Excluir</button>
                        </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}