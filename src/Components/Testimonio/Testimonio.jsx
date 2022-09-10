import React from "react";
import './Testimonio.scss'

export const Testimonio = ({name,img, city, job, company, test}) => {
    
    return(
        <div className="contTestimonio">
            <img src={require(`../../img/${img}.png`)} alt={`Foto de ${img}`} />
            <div>
                <h3><span>{name}</span> en {city}</h3>
                <p className="cargoTest">{job} en <span>{company}</span></p>
                <p className="descTest">{test}</p>
            </div>
        </div>
    );
}