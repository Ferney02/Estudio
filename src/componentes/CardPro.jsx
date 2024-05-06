
// import Card from "../componentes/Card.css"
import "./CardPro.css"
import { Link } from "react-router-dom";


function Card({ titulo = "titulo", descripcion = "descripcion" }) {
    
    return (
        <div className="card">


            <Link to = {titulo}>
                <h2>{titulo}</h2>
            </Link>
            <p>{descripcion}</p>
        </div>
    )
}


export default Card;