import React from 'react';

import css from '../../css/services/serviceRowAccount.scss'

export default ({data}) => {
    return(
        <div className={css.serviceRow}>
            <span>{data.title}</span>
        </div>
    )
}
