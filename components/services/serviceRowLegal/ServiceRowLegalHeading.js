import React from 'react'

import css from '../../../css/services/serviceRowLegalHeading.scss'

export default ({title, expand, isExpanded}) => {
  return(
    <div className={css.serviceRowHeading}
         onClick={expand}>
      <h1>{title}</h1>
      <span
      className={isExpanded ? css.rotate: ''}>
        +
      </span>
    </div>
  )
}
