import React from 'react';

import css from '../../css/index/promises.scss'

export default () => {
    return(
        <div className={css.promisesWrapper}>
            <div className={css.anchor} id='promises'></div>
            <style JSX>
                {`
                    .promisesBG{
                        width: 100vw;
                        height: 1130px;
                        background: url('/static/promises.png') no-repeat;
                        background-size: cover;
                        background-position: center;
                        position: absolute;
                        z-index: -1;
                    }
                `}
            </style>
            <div className='promisesBG'></div>
            <div className={css.promises}>
                <h1>Что Вы получите,<br/>обратившись в нашу компанию:</h1>
                <div className={css.promisesItems}>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/case.svg'/>
                        <p>Эффективную оптимизацию налогов</p>
                    </div>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/safe.svg'/>
                        <p>Защиту счетов от блокировок и помощь в избежании ошибок и штрафов</p>
                    </div>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/diamond.svg'/>
                        <p>Качество и ответственность</p>
                    </div>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/pigy.svg'/>
                        <p>Экономию средств на содержании штатного бухгалтера</p>
                    </div>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/chat.svg'/>
                        <p>Живое общение и возможность всегда посоветоваться с нами</p>
                    </div>
                    <div className={css.promisesItem}>
                        <img src='/static/icons/agreement.svg'/>
                        <p>Финансовые гарантии по договору</p>
                    </div>
                </div>
                <a className={css.promisesCall} href=''>
                    <img src='/static/phoneWhite.svg' />
                    <span>Связаться с нами</span>
                </a>
            </div>
        </div>
    )
}