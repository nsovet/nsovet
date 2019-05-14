import React from 'react'

import ServiceRow from './ServiceRowLegal'
import css from '../../css/services/serviceTableExpandable.scss'

export default ({isAccount, data}) => {
  return(
    <div className={isAccount ? css.none : css.serviceTableWrapper}>
      {data.map(el => <ServiceRow data={el}/>)}
    </div>
  )
}
