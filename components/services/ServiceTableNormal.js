import React from 'react'

import ServiceRow from './ServiceRowAccount'
import css from '../../css/services/serviceTableNormal.scss'

export default ({isAccount, data}) => {
  return(
    <div className={isAccount ? css.servicesTableWrapper : css.none}>
      {data.map(e => <ServiceRow data={e} />)}
      <a className={css.servicesCall} href='tel:8-499-323-43-95'>
          <img src='/static/phoneWhite.svg' />
          <span>Узнать стоимость</span>
      </a>
    </div>
  )
}
