import React from 'react';

import css from '../../css/index/map.scss'

export default () => {
    return(
        <div className={css.mapWrapper} id='map'>
            <div className={css.mapInfo}>
                <h1>Контакты</h1>
                <div className={css.mapInfoAdressSchedule}>
                    <div className={css.mapInfoAdress}>
                        115409, Москва, Каширское шоссе,<br/>дом 44, корп. 1 
                    </div>
                    <div className={css.mapInfoSchedule}>
                        <span>ПОНЕДЕЛЬНИК — четверг<br/>9:30 — 18:00</span>
                        <span>пятница<br/>9:30 — 17:00</span>
                    </div>
                </div>
                <div className={css.mapInfoPhones}>
                    <div className={css.mapInfoPhone}>
                        <img src='/static/phoneWhite.svg' />
                        <span>+7 (499) 323-43-95<br/>(многоканальный)</span>
                    </div>
                    <div className={css.mapInfoPhone}>
                        <img src='/static/phoneWhite.svg' />
                        <span>+7 (499) 782-87-18</span>
                    </div>
                    <div className={css.mapInfoPhone}>
                        <img src='/static/phoneWhite.svg' />
                        <span>+7 (495) 786-00-80</span>
                    </div>
                </div>
                <div className={css.mapInfoEmail}>
                    <img src='/static/envelope.svg' />
                    <span>info@nsovet.ru</span>
                </div>
            </div>
            <div className={css.mapWrapperColor}></div>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A532e57a170a026a205cc6ba7ef06447f3cc88cc22dbc1c56576ece9bf3ed4eca&amp;source=constructor" width="1280" height="720" frameborder="0"></iframe>
        </div>
    )
}