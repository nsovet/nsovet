import React from 'react';
import Link from 'next/link'

import css from './../../css/services/serviceHeading.scss'

export default ({heading}) => {
    return (
      <div className={css.taxesWrapperHeader}>
          <Link href='/'>
              <a><img src='/static/chevronBack.svg'/></a>
          </Link>
          <h1>{heading}</h1>
      </div>
    )
}
