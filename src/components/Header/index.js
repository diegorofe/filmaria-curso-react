
import './header.css';
import { Link } from 'react-router-dom';

export default function Header (){
    return(
        <header>
            <div className='box'>
                <Link className="logo" to="/">Share Conhecimento</Link>
            </div>
            
            <Link className='favoritos' to="/favoritos">Favoritos</Link>
        </header>
    )
}