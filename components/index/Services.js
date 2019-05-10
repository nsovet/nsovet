import React from 'react';

import css from '../../css/index/services.scss'

export default () => {
    return(
        <div className={css.servicesWrapper}>
            <div className={css.services}>
                <h1>Наши услуги:</h1>
                <div className={css.servicesItems}>
                    <div className={css.servicesItem}>
                        <img src='/static/services/individuals.png' />
                        <h2>Физические лица</h2>
                    </div>
                    <div className={css.servicesItem}>
                        <img src='/static/services/enterprenuers.png' />
                        <h2>Индивидуальные предпрениматели</h2>
                    </div>
                    <div className={css.servicesItem}>
                        <img src='/static/services/organisations.png' />
                        <h2>Юридические лица</h2>
                    </div>
                </div>
                <a className={css.servicesCall} href=''>
                    <img src='/static/phoneWhite.svg' />
                    <span>Связаться с нами</span>
                </a>
            </div>
        </div>
    )
}