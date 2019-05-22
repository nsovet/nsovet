import React from 'react';

import css from '../../../css/services/serviceRowLegalContentTableRow.scss'

export default ({data}) => {
    return(
        <div className={css.tableRowWrapper}>
            <div className={css.rowTitle}>{data.serviceTitle}</div>
            <div className={css.rowPrice}>{data.price}</div>
            <div className={css.rowTax}>{data.tax}</div>
        </div>
    )
}