
import React from "react";
import './LenguajesVistaPro.css';


function LenguajesVistasPro({ len }) {

    return (
        <div className="lenvista" >
            <h1> {len.nnombre} </h1>
            <h2> {len.ntitulo} </h2>
            <h3>{len.ndescripcion}</h3>
            <img src={len.imagen} alt={len.imagen + "imagen"}></img>
        </div>
    )
}


export default LenguajesVistasPro;