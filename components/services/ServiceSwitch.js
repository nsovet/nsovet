import React from 'react';

import css from './../../css/services/serviceSwitch.scss'

export default ({onClick, account}) => {
    return(
        <div className={css.serviceSwitchWrapper}>
            <div onClick={onClick.bind(null, true)} 
                className={css.serviceSwitchItem}
                id={account? '' : css.active}>Бухгалтерские услуги</div>
            <div onClick={onClick.bind(null, false)}
                className={css.serviceSwitchItem}
                id={account? css.active : '' }>Юридические услуги</div>
        </div>
    )
}