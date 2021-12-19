import './filme.css'
import { useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom'
import api from '../../services/api';
import loader from '../../assets/loader.gif'


export default function Filme() {

    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const history = useHistory();

    useEffect( () => {

        async function loadFilme() {

            const response = await api.get(`r-api/?api=filmes/${id}`)
            
            if(response.data.length === 0){
                //Tentou acessar um ID que não exisste, navego para Home
                history.replace('/');
                return;
            }
           
            setFilme(response.data)
            setLoading(false);
        }
    
        loadFilme();

        return () => {
            console.log('Componente desmontado')
        }

    }, [history, id]);

    if(loading) {
        return (
        <div className='container'>
           <img src={loader} className='img'/>
        </div>  
        )
    }


    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>


            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className='botoes'>
                <button onClick={() => {}}>Salvar</button>
                <button>
                    <a target='_blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                    Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}