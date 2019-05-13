import React from 'react';
import css from './../../css/services/serviceRowLegal.scss'

export default ({data}) => {
    return(
        <div className={css.serviceRow}>
            <span>{data.title}</span>
            <span>{data.price}</span>
        </div>
    )
}