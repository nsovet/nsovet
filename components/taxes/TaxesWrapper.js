import React from 'react';
import Link from 'next/link'

import TaxesCard from './TaxesCard'
import css from './../../css/taxes/taxesWrapper.scss'

export default ({services}) => {
   return(
       <div className={css.taxesWrapper}>
            <div className={css.taxesWrapperHeader}>
                <Link href='/'>
                    <a><img src='/static/chevronBack.svg'/></a>
                </Link>
                <h1>3-НДФЛ</h1>
            </div>
            <div className={css.taxesCardsWrapper}>
                {services.map(elem => <TaxesCard data={elem} key={elem.id}/>)}
            </div>
       </div>
   ) 
}