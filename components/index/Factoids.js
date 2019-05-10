import React from 'react';

import css from '../../css/index/factoids.scss';

export default () => {
    return(
        <div className={css.factoidsWrapper}>
            <div className={css.factoids}>
                <h1>О компании в цифрах:</h1>
                <div className={css.factoidsItems}>
                    <div className={css.factoidsItem}>
                        <h2>10+</h2>
                        <p>Лет работы</p>
                    </div>
                    <div className={css.factoidsItem}>
                        <h2>18</h2>
                        <p>Квалифицированных<br/>специалистов</p>
                    </div>
                    <div className={css.factoidsItem}>
                        <h2>300+</h2>
                        <p>Компаний мы<br/>обслуживаем</p>
                    </div>
                </div>
            </div>
        </div>
    )
}