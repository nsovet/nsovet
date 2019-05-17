import React from 'react';
import Link from 'next/link'
import css from './../../css/taxes/taxesCard.scss'

export default ({data}) => {
    return(
        <Link href={'/tax?id='+data.id}>
            <a className={css.taxesCard}>
                <div className={css.taxesCardTagsWrapper}>
                    <div className={css.taxesCardTag}>
                        <img src='/static/price.svg' />
                        <span>{data.price}</span>
                    </div>
                    <div className={css.taxesCardTag}>
                        <img src='/static/time.svg' />
                        <span>{data.time}</span>
                    </div>
                    <img src='/static/chevronBack.svg' className={css.taxesCardChevron} />
                </div>
                <img src={data.image} className={css.illustration}/>
                <h2>{data.name}</h2>
            </a>
        </Link>
    )
}