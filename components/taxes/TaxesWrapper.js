import React from 'react';
import Link from 'next/link'

import TaxesCard from './TaxesCard'
import css from './../../css/taxes/taxesWrapper.scss'

export default ({isAccount, services}) => {
   return(
        <div className={isAccount ? css.taxesWrapper : css.none}>
            <div className={css.taxesCardsWrapper}>
                {services.map(elem => <TaxesCard data={elem} key={elem.id}/>)}
            </div>
       </div>
   )
}
