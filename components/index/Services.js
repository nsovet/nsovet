import React from 'react';

import Link from 'next/link'
import css from '../../css/index/services.scss'

export default () => {
    return(
        <div className={css.servicesWrapper} >
            <div className={css.anchor} id='services'></div>
            <div className={css.services}>
                <h1>Наши услуги:</h1>
                <div className={css.servicesItems}>
                    <Link href="/taxes">
                      <div className={css.servicesItem}>
                          <img src='/static/services/individuals.png' />
                          <h2>Физические лица</h2>
                      </div>
                    </Link>
                    <Link href="/individuals">
                      <div className={css.servicesItem}>
                          <img src='/static/services/enterprenuers.png' />
                          <h2>Индивидуальные предприниматели</h2>
                      </div>
                    </Link>
                    <Link href="/organisations">
                        <div className={css.servicesItem}>
                            <img src='/static/services/organisations.png' />
                            <h2>Юридические лица</h2>
                        </div>
                    </Link>
                </div>
                <a className={css.servicesCall} href='tel:8-499-323-43-95' id='shadow'>
                    <img src='/static/phoneWhite.svg' />
                    <span>Связаться с нами</span>
                </a>
            </div>
        </div>
    )
}
