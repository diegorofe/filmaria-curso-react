import api from "../../services/api";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './home.css'
import loader from '../../assets/loader.gif'



function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  async function loadFilmes(){
    const response = await api.get('r-api/?api=filmes')
  //  console.log(response.data)
  setFilmes(response.data);
  setLoading(false);
  } 

  loadFilmes();

  }, [])

  if(loading){
    return (
      <div className='container'>
         <img src={loader}/>
      </div>  
      )
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt={filme.nome}/>
              <Link className="acessar" to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}

      </div>
     
    </div>
  );
}

export default Home;
