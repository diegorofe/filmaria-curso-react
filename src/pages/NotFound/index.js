import { Link } from "react-router-dom"
import './notFound.css'
import error from '../../assets/error-404.svg'

export default function NotFound(){
    return(
        <div className="not-found">
         
         <img className="img-error" src={error} />

        <Link to='/'>Veja todos os filmes</Link>
        </div>
    )
}