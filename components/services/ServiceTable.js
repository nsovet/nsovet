import React from 'react';
import ServiceTableRow from './ServiceTableRow'

import css from './../../css/services/serviceTable.scss'

export default ({account, data}) => {
    return(
        <div className={css.serviceTableWrapper}>
            <div className={css.serviceTableHeader}>
                <span>Услуга</span>
                <span>Стоимость</span>
                <span className={account ? '' : css.hide}>Необходимые документы</span>
            </div>
            <ServiceTableRow data={data} account={account} />
        </div>
    )
}