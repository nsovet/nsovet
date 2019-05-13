import React from 'react';

import css from '../../css/index/recomendations.scss'

export default () => {
    return(
        <div className={css.recomendationsWrapper}>
            <div className={css.recomendations}>
                <h1>Нас рекомендуют</h1>
                <div className={css.recomendationsCarousel}>
                    <div className={css.carouselArrowLeft}> <img src='/static/carousel/left.png'/></div>
                    <img src='/static/shittyPic.png'/>
                    <div className={css.carouselArrowRight}> <img src='/static/carousel/right.png'/></div>
                </div>
                <a className={css.recomendationsCall} href='tel:8-499-323-43-95'>
                    <img src='/static/phoneWhite.svg' />
                    <span>Связаться с нами</span>
                </a>
            </div>
        </div>
    )
}