import React from 'react';

import css from './../../css/services/serviceHeading.scss'

export default ({heading}) => {
    return (
        <h1 className={css.serviceHeading}>{heading}</h1>
    )
}