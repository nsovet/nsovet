import React from 'react';

import css from '../css/header.scss'

export default () => {
    return(
        <div className={css.headerWrapper}>
            <div className={css.header}>
                <a className={css.headerLogo} href='/'><img src='/static/logo.svg' /></a>
                <div className={css.headerMenuWrapper}>
                    <div className={css.headerMenu}>
                        <a 
                            className={css.headerMenuActive}
                            href=''>О нас</a>
                        <a href=''>Приемущества</a>
                        <a href=''>Услуги</a>
                        <a href=''>Контакты</a>
                    </div>
                    <a className={css.headerCallWrapper} href='tel:8-499-323-43-95'>
                        <img src='/static/phone.svg' />
                        <span>8 (499) 323-43-95</span>
                    </a>
                </div>
            </div>
        </div>
    )
}