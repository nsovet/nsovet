import React from 'react';

import css from './../../css/services/serviceRowAccount.scss'

export default ({data}) => {
    return(
        <div className={css.serviceRow}>
            <span>{data.title}</span>
            <span>{data.price}</span>
            <a href=''>Открыть</a>
        </div>
    )
}