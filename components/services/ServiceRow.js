import React from 'react';
import css from './../../css/services/servicesRow.scss'

export default ({type, text, price, onClick}) => {
    return(
        <div className={css.servicesRow} onClick={onClick}>
            <h2>{text}</h2>
            <span className={(type==='price') ? css.servicesRowPrice : css.hide}>
                {price}
            </span>
            <span className={(type==='link') ? css.servicesRowLink : css.hide}>
                <img src='static/finger.svg' /> 
            </span>
        </div>
    )
}