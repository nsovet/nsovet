import React from 'react'

import ServiceTableRow from './ServiceRowLegalContentTableRow'
import css from '../../../css/services/serviceRowLegalContent.scss'

export default ({isExpanded, data}) => {
  return(
    <div
      className=
      {isExpanded ? css.serviceRowContent : css.none}>
      <div className={css.serviceRowDescription}>
        <img src='/static/info.svg' />
        <p>{data.description}</p>
      </div>
      <div className={css.serviceRowTable}>
        <div className={css.serviceRowTableHeading}>
            <div className={css.rowTitle}>Услуга</div>
            <div className={css.rowPrice}>Стоимость услуг</div>
            <div className={css.rowTax}>Гос. пошлина</div>
        </div>
        {data.servicesArray.map(el => <ServiceTableRow data={el} />)}
      </div>
    </div>
  )
}
